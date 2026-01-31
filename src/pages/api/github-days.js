export default async function handler(req, res) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return res.status(500).json({ error: "Missing env vars" });
  }

  // Helper: call GitHub GraphQL
  const gh = async (query, variables) => {
    const r = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const json = await r.json();
    if (json?.errors?.length)
      return { error: "GitHub GraphQL returned errors", errors: json.errors };
    return { data: json.data };
  };

  // Helper: fetch contribution dates in a <=1 year window
  const fetchWindowDates = async (fromISO, toISO) => {
    const query = `
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const res1 = await gh(query, {
      login: username,
      from: fromISO,
      to: toISO,
    });

    if (res1.error) return res1;

    const weeks =
      res1.data?.user?.contributionsCollection?.contributionCalendar?.weeks ??
      [];

    const dates = weeks
      .flatMap((w) => w.contributionDays)
      .filter((d) => d.contributionCount > 0)
      .map((d) => d.date);

    return { dates };
  };

  // Helper: get account createdAt
  const getCreatedAt = async () => {
    const query = `
      query($login: String!) {
        user(login: $login) {
          createdAt
        }
      }
    `;
    const r = await gh(query, { login: username });
    if (r.error) return r;
    const createdAt = r.data?.user?.createdAt;
    if (!createdAt) return { error: "Could not read user.createdAt" };
    return { createdAt };
  };

  // MODE A: rolling last N days (<=365) -> ?days=365
  const daysParam = Number(req.query.days ?? 0);
  if (daysParam > 0) {
    const end = new Date();
    const start = new Date();
    const safeDays = Math.min(daysParam, 365);
    start.setDate(end.getDate() - safeDays);

    const r = await fetchWindowDates(start.toISOString(), end.toISOString());
    if (r.error) return res.status(502).json(r);

    const unique = new Set(r.dates);
    return res.status(200).json({
      mode: "range",
      rangeDays: safeDays,
      from: start.toISOString().slice(0, 10),
      to: end.toISOString().slice(0, 10),
      daysWithContributions: unique.size,
    });
  }

  // MODE B/C: lifetime tanpa manual date
  // ?start=createdAt  (default)
  // ?start=firstContribution
  const startMode = String(req.query.start ?? "createdAt"); // default createdAt
  const end = new Date();

  // Determine start date
  let startDate;

  if (startMode === "createdAt") {
    const r = await getCreatedAt();
    if (r.error) return res.status(502).json(r);
    startDate = new Date(r.createdAt);
  } else if (startMode === "firstContribution") {
    // Cari tahun pertama yang punya kontribusi, lalu ambil tanggal pertama dalam tahun itu.
    // Strategi:
    // 1) mulai dari tahun akun dibuat
    // 2) cek window 1 tahun per tahun sampai ketemu ada dates
    // 3) ambil min date dari window pertama yang non-empty
    const r = await getCreatedAt();
    if (r.error) return res.status(502).json(r);

    const created = new Date(r.createdAt);
    let cursor = new Date(created);

    let foundFirst = null;

    while (cursor < end) {
      const windowFrom = new Date(cursor);
      const windowTo = new Date(cursor);
      windowTo.setFullYear(windowTo.getFullYear() + 1);
      if (windowTo > end) windowTo.setTime(end.getTime());

      const w = await fetchWindowDates(
        windowFrom.toISOString(),
        windowTo.toISOString(),
      );
      if (w.error) return res.status(502).json(w);

      if (w.dates.length > 0) {
        // dates sudah ISO YYYY-MM-DD, ambil paling kecil
        foundFirst = w.dates.slice().sort()[0];
        break;
      }

      cursor = windowTo;
    }

    // kalau benar-benar tidak ada kontribusi sama sekali
    if (!foundFirst) {
      return res.status(200).json({
        mode: "since-firstContribution",
        from: null,
        to: end.toISOString().slice(0, 10),
        daysWithContributions: 0,
      });
    }

    startDate = new Date(foundFirst);
  } else {
    return res.status(400).json({
      error:
        "Invalid start mode. Use start=createdAt or start=firstContribution",
    });
  }

  // Now: loop yearly windows from startDate -> today, union unique dates
  const uniqueDates = new Set();
  let cursor = new Date(startDate);

  while (cursor < end) {
    const windowFrom = new Date(cursor);
    const windowTo = new Date(cursor);
    windowTo.setFullYear(windowTo.getFullYear() + 1);
    if (windowTo > end) windowTo.setTime(end.getTime());

    const r = await fetchWindowDates(
      windowFrom.toISOString(),
      windowTo.toISOString(),
    );
    if (r.error) return res.status(502).json(r);

    r.dates.forEach((d) => uniqueDates.add(d));
    cursor = windowTo;
  }

  return res.status(200).json({
    mode:
      startMode === "createdAt" ? "since-createdAt" : "since-firstContribution",
    from: startDate.toISOString().slice(0, 10),
    to: end.toISOString().slice(0, 10),
    daysWithContributions: uniqueDates.size,
  });
}
