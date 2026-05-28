import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-hairline bg-canvas px-3 py-1 text-xs font-semibold text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
