import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function PrimaryButton({
  children,
  type = "button",
  disabled = false,
  className = "",
  onClick,
  href,
}: PrimaryButtonProps) {
  const buttonContent = (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      size="sm"
      className={`w-32 flex-shrink-0 bg-primary/90 text-primary-foreground hover:bg-primary/70 focus:border-2 focus:border-primary/50 ${className}`}
    >
      <span className="text-sm">{children}</span>
    </Button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}