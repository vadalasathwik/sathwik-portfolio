export type Repo = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
};

type ApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
};

/** Optional live data. Returns [] on any failure so the page never breaks. */
export async function getRepos(username: string): Promise<Repo[]> {
  if (!username) return [];
  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12&type=owner`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as ApiRepo[];
    return data
      .filter((r) => !r.fork)
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
      }));
  } catch {
    return [];
  }
}
