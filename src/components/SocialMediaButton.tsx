import { Button } from "~/components/ui/button";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialMediaButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialMediaButton({ href, icon: Icon, label }: SocialMediaButtonProps) {
  return (
    <Button
      size="sm"
      className="w-full"
      asChild
    >
      <Link href={href} target="_blank" className="flex items-center justify-start">
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Link>
    </Button>
  );
}