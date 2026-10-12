"use client";

import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/SocialLinks";
import { profileData } from "@/data/profile";
import { Code2, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-border/40 bg-card/20 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="p-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-heading">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {profileData.role} • {profileData.location}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <SocialLinks links={profileData.socialLinks} />
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
