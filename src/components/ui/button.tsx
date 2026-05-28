import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function getButtonClasses(variant: ButtonVariant = "primary", className?: string) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition";
  const styles = {
    primary: "bg-ink text-canvas hover:bg-charcoal",
    ghost: "bg-transparent text-ink hover:bg-soft-cloud",
    outline: "border border-hairline text-ink hover:border-ink"
  };

  return cn(base, styles[variant], className);
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={getButtonClasses(variant, className)} {...props} />;
}
