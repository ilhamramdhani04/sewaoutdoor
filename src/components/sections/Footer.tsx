import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <Container className="grid gap-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-heading text-xl uppercase tracking-[0.18em]">SewaOutdoor</p>
          <p className="text-sm text-mute">
            Premium outdoor rental platform untuk petualangan yang lebih mudah.
          </p>
        </div>
        <div className="text-sm text-mute">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ink">Kontak</p>
          <p>hello@sewaoutdoor.id</p>
          <p>+62 812-0000-0000</p>
        </div>
        <div className="text-sm text-mute">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ink">Lokasi</p>
          <p>Bandung</p>
          <p>Jakarta</p>
          <p>Yogyakarta</p>
        </div>
      </Container>
    </footer>
  );
}
