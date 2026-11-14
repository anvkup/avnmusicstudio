import Link from 'next/link';
import PortfolioGrid from './PortfolioGrid';

export const metadata = {
  title: 'Portfolio | AVN Music',
  description:
    'Producer portfolio featuring selected work, credits, collaborations, and creative projects across AVN Music.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),transparent_35%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Producer Portfolio
            </p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              A portfolio shaped by production, collaboration, and creative detail.
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Selected projects, collaborator work, and production highlights from the AVN Music portfolio. Demo placeholders are clearly labeled where live commercial details are still pending.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/portfolio/credits" className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500">Credits</Link>
              <Link href="/portfolio/collaborations" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-red-400 hover:text-red-200">Collaborations</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
        <PortfolioGrid />
      </div>
    </main>
  );
}
