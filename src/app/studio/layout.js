import Link from 'next/link';

const navItems = [
  { href: '/studio', label: 'Home' },
  { href: '/studio/services', label: 'Services' },
  { href: '/studio/about', label: 'About' },
  { href: '/studio/projects', label: 'Projects' },
  { href: '/studio/contact', label: 'Contact' },
];

export default function StudioLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/studio" className="text-lg font-black tracking-[0.2em] text-white">AVN STUDIO</Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
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

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-white">AVN Music Studio</p>
              <p className="mt-2 text-sm text-zinc-400">Production, recording, mixing, mastering, and creative audio services.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
              <Link href="/studio" className="hover:text-white">Studio</Link>
              <Link href="/beats" className="hover:text-white">Beat Store</Link>
              <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
              <Link href="/" className="hover:text-white">Main landing</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
