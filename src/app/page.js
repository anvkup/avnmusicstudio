import Link from 'next/link';
import { ArrowRight, Disc3, Mic2, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AVN Music Ecosystem',
  description: 'Choose your destination within the AVN Music ecosystem: the studio, the beat store, or the producer portfolio.',
};

const destinations = [
  {
    title: 'AVN Music Studio',
    description: 'Music production, recording, mixing, mastering, and professional audio services.',
    href: '/studio',
    cta: 'EXPLORE STUDIO',
    accent: 'from-red-600/30 via-red-500/10 to-zinc-900',
    icon: Mic2,
  },
  {
    title: 'BeatsbyAVN',
    description: 'Original beats, instrumentals, licensing, and sounds made for artists.',
    href: '/beats',
    cta: 'ENTER BEAT STORE',
    accent: 'from-zinc-800 via-zinc-900 to-red-950/30',
    icon: Disc3,
  },
  {
    title: 'Producer Portfolio',
    description: 'Selected productions, music credits, collaborations, and creative work.',
    href: '/portfolio',
    cta: 'EXPLORE PORTFOLIO',
    accent: 'from-zinc-800 via-zinc-900 to-slate-900',
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-red-400">AVN MUSIC ECOSYSTEM</p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Where would you like to go?
            </h1>
            <p className="mt-5 text-base text-zinc-300 sm:text-lg">
              Three worlds. One creative vision. Choose your destination.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {destinations.map(({ title, description, href, cta, accent, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br p-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-red-500/40"
              >
                <div className={`relative flex min-h-[380px] flex-col justify-between rounded-[1.9rem] bg-gradient-to-br ${accent} p-6 sm:p-8`}>
                  <div className="flex items-center justify-between">
                    <div className="rounded-full border border-white/10 bg-black/10 p-3 text-red-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-200">
                      AVN
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-white sm:text-3xl">{title}</h2>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-200 sm:text-base">
                      {description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-red-200">{cta}</span>
                    <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}