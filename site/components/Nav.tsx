import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-medium tracking-[0.14em] text-(--text-hi)">
          GENI CLIQUE
        </Link>
        <div className="flex items-center gap-6">
          <MenuOverlay />
          <a href="#cta" className="pill-primary !px-5 !py-2 text-sm">
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
