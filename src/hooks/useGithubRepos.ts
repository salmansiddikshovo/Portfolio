import { useQuery } from "@tanstack/react-query";
import { githubApi } from "@/lib/axios";
import { GithubRepo } from "@/types";

export const GITHUB_REPOS_QUERY_KEY = (username: string) => ["github-repos", username];

export function useGithubRepos(username: string) {
  return useQuery<GithubRepo[], Error>({
    queryKey: GITHUB_REPOS_QUERY_KEY(username),
    queryFn: async () => {
      const response = await githubApi.get<GithubRepo[]>(`/users/${username}/repos?per_page=100&sort=updated`);
      
      // Filter out forks and sort by stars (highest first), fallback to recent update
      const filtered = response.data
        .filter((repo) => !repo.fork)
        .sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        })
        .slice(0, 6);

      return filtered;
    },
    enabled: Boolean(username)
  });
}
