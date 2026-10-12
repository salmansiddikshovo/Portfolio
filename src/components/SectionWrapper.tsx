import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  className,
  containerClassName,
  children
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20", className)}
    >
      <div className={cn("max-w-6xl mx-auto px-4 w-full", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
