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
      <p className="text-xs uppercase tracking-[0.35em] text-mute md:tracking-[0.4em]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-2xl text-ink sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm text-mute sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
