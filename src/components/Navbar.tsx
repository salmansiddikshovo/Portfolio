"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowUpRight, Code2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Salman Siddiq Shovo Portfolio Home"
        >
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-heading">
            Salman<span className="text-primary font-mono">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: ThemeToggle + Hire Me */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full px-4 gap-1.5 shadow-sm")}
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9"
                  aria-label="Open mobile navigation menu"
                />
              }
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span>Salman.dev</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-border">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className={cn(buttonVariants(), "w-full rounded-full gap-1.5 justify-center")}
                  >
                    Hire Me
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
