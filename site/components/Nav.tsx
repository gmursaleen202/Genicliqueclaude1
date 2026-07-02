export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="container-site flex h-16 items-center justify-between">
        <a href="#main" className="text-sm font-medium tracking-[0.14em] text-(--text-hi)">
          GENI CLIQUE
        </a>
        <div className="flex items-center gap-6">
          <a href="#services" className="text-sm text-(--text-mid) transition-colors hover:text-(--text-hi)">
            Menu
          </a>
          <a href="#cta" className="pill-primary !px-5 !py-2 text-sm">
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
