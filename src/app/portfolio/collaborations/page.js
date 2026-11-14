import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const collaborations = [
  { title: 'Independent Artists', detail: 'Production and vocal shaping for demos, singles, and artist development.' },
  { title: 'Brand Campaigns', detail: 'Custom audio direction and acoustic polish for ad and media requirements.' },
  { title: 'Creative Teams', detail: 'Support for collaborative track building across mixed media projects.' },
];

export const metadata = {
  title: 'Portfolio Collaborations | AVN Music',
  description: 'Preview collaborations page for the AVN Music producer portfolio.',
};

export default function PortfolioCollaborationsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <h1 className="mt-8 text-4xl font-black text-white">Collaborations</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          The collaborations section is intentionally structured as a future-ready placeholder for verified creative partnerships and client work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {collaborations.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
