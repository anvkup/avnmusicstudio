import Link from 'next/link';

export const metadata = {
  title: 'BeatsbyAVN | Demo Beats and Licensing',
  description: 'Browse demo beats, license options, and storefront previews for BeatsbyAVN.',
};

const navItems = [
  { href: '/beats', label: 'Store' },
  { href: '/beats/browse', label: 'Browse Beats' },
  { href: '/beats/licenses', label: 'Licensing' },
  { href: '/beats/about', label: 'About' },
  { href: '/beats/contact', label: 'Support' },
];

export default function BeatsLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-red-500/20 bg-[#050505] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/beats" className="text-lg font-black tracking-[0.18em] text-white">BEATSBYAVN</Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-red-200">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
            AVN Ecosystem
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-red-500/20 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-white">BeatsbyAVN</p>
              <p className="mt-2 text-sm text-zinc-400">Original instrumentals, licensing previews, and demo storefront flows.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
              <Link href="/studio" className="hover:text-red-200">Studio</Link>
              <Link href="/beats" className="hover:text-red-200">Beat Store</Link>
              <Link href="/portfolio" className="hover:text-red-200">Portfolio</Link>
              <Link href="/" className="hover:text-red-200">Main landing</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
