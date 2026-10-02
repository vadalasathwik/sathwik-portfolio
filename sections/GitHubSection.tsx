import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getSocial, siteConfig } from "@/lib/config";
import { featuredRepos } from "@/lib/data";
import { getRepos } from "@/lib/github";

export async function GitHubSection() {
  const live = await getRepos(siteConfig.githubUsername);
  const github = getSocial("github");

  return (
    <Section
      id="github"
      title="Open Source & Repositories."
      intro="Key codebase repositories and open source engineering work."
    >
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRepos.map((repo, i) => (
            <div
              key={`${repo.name}-${i}`}
              className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface/80 hover:shadow-lg hover:shadow-accent/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-raised px-2.5 py-1 text-xs font-mono text-accent">
                    {repo.language}
                  </span>
                  <FiGithub className="h-4 w-4 text-muted" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-fg">
                  {repo.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-line/40">
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                >
                  View Code on GitHub
                  <FiExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {live.length > 0 ? (
          <div className="mt-12">
            <h3 className="font-display text-lg font-bold text-fg">Recent Public GitHub Activity</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {live.map((r) => (
                <div key={r.url} className="rounded-xl border border-line bg-surface/40 p-4 transition-colors hover:border-accent/30">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-fg hover:text-accent inline-flex items-center gap-2"
                  >
                    {r.name}
                    <FiExternalLink className="h-3.5 w-3.5 text-muted" />
                  </a>
                  {r.description ? (
                    <p className="mt-1.5 text-xs text-muted">{r.description}</p>
                  ) : null}
                  {r.language ? <p className="mt-2 text-xs font-mono text-accent">{r.language}</p> : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <ButtonLink href={github.href} variant="secondary" external>
            <FiGithub aria-hidden className="h-4 w-4" />
            Explore Full GitHub Profile (@vadalasathwik)
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
