import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="hairline-t">
      <div className="container-site flex flex-wrap items-center justify-between gap-4 py-8">
        <Link href="/" className="text-sm font-medium tracking-[0.14em] text-(--text-hi)">
          GENI CLIQUE
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/services" className="mono-label transition-colors hover:text-(--text-mid)">
            Services
          </Link>
          <Link href="/work" className="mono-label transition-colors hover:text-(--text-mid)">
            Work
          </Link>
          <Link href="/studio" className="mono-label transition-colors hover:text-(--text-mid)">
            Studio
          </Link>
          <Link href="/contact" className="mono-label transition-colors hover:text-(--text-mid)">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
