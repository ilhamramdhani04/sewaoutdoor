import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-none border border-hairline bg-canvas", className)}>
      {children}
    </div>
  );
}
