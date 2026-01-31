export default async function handler(req, res) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return res.status(500).json({ error: "Missing env vars" });
  }

  const fromParam = String(req.query.from ?? "2022-01-01");
  const start = new Date(fromParam);
  const end = new Date();

  if (Number.isNaN(start.getTime())) {
    return res
      .status(400)
      .json({ error: "Invalid from date (use YYYY-MM-DD)" });
  }

  // helper: fetch 1-year window
  const fetchWindow = async (fromISO, toISO) => {
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

    const ghRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { login: username, from: fromISO, to: toISO },
      }),
    });

    const json = await ghRes.json();
    if (json?.errors?.length) {
      throw new Error(json.errors[0]?.message ?? "GitHub GraphQL error");
    }

    const weeks =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ??
      [];

    return weeks
      .flatMap((w) => w.contributionDays)
      .filter((d) => d.contributionCount > 0)
      .map((d) => d.date);
  };

  // loop yearly windows, union unique dates
  const uniqueDates = new Set();

  let cursor = new Date(start);
  while (cursor < end) {
    const windowFrom = new Date(cursor);

    const windowTo = new Date(cursor);
    windowTo.setFullYear(windowTo.getFullYear() + 1);

    if (windowTo > end) windowTo.setTime(end.getTime());

    // penting: toISOString
    const dates = await fetchWindow(
      windowFrom.toISOString(),
      windowTo.toISOString(),
    );
    dates.forEach((d) => uniqueDates.add(d));

    cursor = windowTo; // maju ke window berikutnya
  }

  return res.status(200).json({
    mode: "since",
    from: fromParam,
    to: end.toISOString().slice(0, 10),
    daysWithContributions: uniqueDates.size,
  });
}
