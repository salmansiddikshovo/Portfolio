"use client";

import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SocialLinks } from "@/components/SocialLinks";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <SectionWrapper id="hero" className="pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary border-primary/20 flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>{profileData.badge}</span>
          </Badge>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-heading">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-purple-500">
                {profileData.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
              {profileData.role}
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {profileData.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 gap-2 shadow-md")}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profileData.resumeUrl}
              download="Salman_Siddiq_Shovo_CV.pdf"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6 gap-2 border-border/80 hover:bg-accent/60"
              )}
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Connect With Me
            </p>
            <SocialLinks links={profileData.socialLinks} />
          </div>
        </div>

        {/* Right Column: Profile Avatar + Developer Code Snippet */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-6 relative">
          {/* Avatar Card */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative p-2 rounded-3xl bg-card border border-border/60 shadow-xl flex items-center justify-center">
              <Avatar className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden ring-2 ring-primary/20">
                <AvatarImage
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-muted text-primary rounded-2xl">
                  {profileData.initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Code Showcase Terminal Card */}
          <div className="w-full max-w-md rounded-xl border border-border/60 bg-card/90 backdrop-blur-md p-4 shadow-lg text-xs font-mono">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/40">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span className="font-semibold text-foreground">developer.ts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            <div className="space-y-1 text-muted-foreground">
              <p>
                <span className="text-purple-500 dark:text-purple-400">const</span>{" "}
                <span className="text-blue-500 dark:text-blue-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-500 dark:text-emerald-400">&quot;{profileData.name}&quot;</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-emerald-500 dark:text-emerald-400">&quot;{profileData.role}&quot;</span>,
              </p>
              <p className="pl-4">
                skills: [
                <span className="text-amber-500 dark:text-amber-400">&quot;React&quot;</span>,{" "}
                <span className="text-amber-500 dark:text-amber-400">&quot;Next.js&quot;</span>,{" "}
                <span className="text-amber-500 dark:text-amber-400">&quot;TypeScript&quot;</span>
                ],
              </p>
              <p className="pl-4">
                education: <span className="text-emerald-500 dark:text-emerald-400">&quot;Daffodil International Univ.&quot;</span>,
              </p>
              <p className="pl-4">
                availableForHire: <span className="text-purple-500 dark:text-purple-400">true</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
