type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.4em] text-mute">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl text-ink">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-mute">{description}</p>
      ) : null}
    </div>
  );
}
