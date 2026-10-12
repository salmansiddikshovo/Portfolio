"use client";

import { Star, ExternalLink, RefreshCw, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import { profileData } from "@/data/profile";

export function Projects() {
  const {
    data: repos,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching
  } = useGithubRepos(profileData.githubUsername);

  return (
    <SectionWrapper id="projects" className="bg-muted/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Real repositories pulled live from GitHub (@{profileData.githubUsername}), showcasing code quality and modern frontend architecture.
          </p>
        </div>

        {/* State 1: Loading (3 Skeleton Cards as mandated by PRD) */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="border-border/60 bg-card/60 flex flex-col justify-between h-64">
                <CardHeader className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-4 w-12 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </CardHeader>
                <CardFooter className="flex justify-between pt-4 border-t border-border/40">
                  <Skeleton className="h-4 w-16" />
                  <div className="flex gap-2">
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* State 2: Error (Error message + "Try again" button as mandated by PRD) */}
        {isError && !isLoading && (
          <Card className="border-destructive/40 bg-destructive/5 text-center p-8 max-w-xl mx-auto shadow-sm">
            <CardContent className="space-y-4 pt-4">
              <div className="inline-flex p-3 rounded-full bg-destructive/10 text-destructive mb-2">
                <FolderGit2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Unable to Load GitHub Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                {error?.message || "There was an issue fetching repositories from the GitHub API."}
              </p>
              <Button
                variant="outline"
                onClick={() => refetch()}
                disabled={isRefetching}
                className="gap-2 rounded-full border-border/80"
              >
                <RefreshCw className={`w-4 h-4 ${isRefetching ? "animate-spin" : ""}`} />
                Try again
              </Button>
            </CardContent>
          </Card>
        )}

        {/* State 3: Empty State (Friendly empty state as mandated by PRD) */}
        {!isLoading && !isError && (!repos || repos.length === 0) && (
          <Card className="border-border/60 bg-card/60 text-center p-12 max-w-lg mx-auto">
            <CardContent className="space-y-3">
              <div className="inline-flex p-3 rounded-full bg-muted text-muted-foreground">
                <FolderGit2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">No Projects Found</h3>
              <p className="text-sm text-muted-foreground">
                There are no public repositories currently available for this profile.
              </p>
            </CardContent>
          </Card>
        )}

        {/* State 4: Success (Up to 6 repo cards as mandated by PRD) */}
        {!isLoading && !isError && repos && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                className="border-border/60 bg-card/60 backdrop-blur-xs flex flex-col justify-between hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <CardHeader className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-bold text-foreground truncate hover:text-primary transition-colors">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {repo.name}
                      </a>
                    </CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>

                  <CardDescription className="text-sm text-muted-foreground line-clamp-3 min-h-[4rem]">
                    {repo.description || "Personal frontend engineering repository showcasing modern web development techniques."}
                  </CardDescription>

                  {repo.language && (
                    <div className="pt-1">
                      <Badge variant="secondary" className="text-xs font-mono font-medium">
                        {repo.language}
                      </Badge>
                    </div>
                  )}
                </CardHeader>

                <CardFooter className="pt-4 border-t border-border/40 flex items-center justify-between gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} source code on GitHub`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-1.5 text-xs rounded-md"
                    )}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    Code
                  </a>

                  {repo.homepage ? (
                    <a
                      href={repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${repo.name}`}
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "gap-1.5 text-xs rounded-md"
                      )}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View repository details for ${repo.name}`}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "gap-1.5 text-xs rounded-md"
                      )}
                    >
                      Details
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
