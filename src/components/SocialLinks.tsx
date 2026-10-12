import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  itemClassName?: string;
}

export function SocialLinks({ links, className, itemClassName }: SocialLinksProps) {
  const getIcon = (platform: SocialLink["platform"]) => {
    switch (platform) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedinIn className="w-4 h-4" />;
      case "facebook":
        return <FaFacebookF className="w-4 h-4" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className={cn(
            "p-2.5 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent/40 transition-all duration-200 shadow-sm",
            itemClassName
          )}
        >
          {getIcon(link.platform)}
          <span className="sr-only">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
