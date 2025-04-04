import { Button } from "~/components/ui/button";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialMediaButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  description?: string;
}

export function SocialMediaButton({ href, icon: Icon, label, description }: SocialMediaButtonProps) {
  return (
    <div className="flex items-center gap-4">
      <Button
        size="sm"
        className="w-32 flex-shrink-0 bg-primary/90 text-primary-foreground hover:bg-primary/70 focus:border-2 focus:border-primary/50"
        asChild
      >
        <Link href={href} target="_blank" className="flex items-center justify-start gap-2">
          <Icon className="h-4 w-4" />
          <span className="text-sm">{label}</span>
        </Link>
      </Button>
      {description && (
        <span className="text-sm text-muted-foreground">{description}</span>
      )}
    </div>
  );
}
