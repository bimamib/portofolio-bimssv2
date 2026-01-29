export default async function handler(req, res) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return res.status(500).json({ error: "Missing env vars" });
  }

  const rangeDays = Number(req.query.days ?? 365);

  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - rangeDays);

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
      variables: {
        login: username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });

  const json = await ghRes.json();

  const weeks =
    json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ??
    [];

  const daysWithContributions = new Set(
    weeks
      .flatMap((w) => w.contributionDays)
      .filter((d) => d.contributionCount > 0)
      .map((d) => d.date),
  ).size;

  return res.status(200).json({ daysWithContributions });
}
