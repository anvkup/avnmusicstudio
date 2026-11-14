import Link from 'next/link';
import { ArrowRight, Mic2, Music4, SlidersHorizontal, AudioLines } from 'lucide-react';

const studioServices = [
  { title: 'Music Production', description: 'Original production, arrangement, design, and artist-led creative direction.', icon: Music4 },
  { title: 'Mixing & Mastering', description: 'Polish, clarity, and power to bring every release closer to commercial-ready sound.', icon: SlidersHorizontal },
  { title: 'Recording & Dubbing', description: 'Clean capture for vocals, instruments, and voice work across multiple formats.', icon: Mic2 },
  { title: 'Commercial Audio', description: 'Brand sound design, jingles, and ad-ready production for campaigns and digital media.', icon: AudioLines },
];

export const metadata = {
  title: 'AVN Music Studio | Production, Mixing, and Recording',
  description: 'Explore AVN Music Studio for music production, recording, mixing, mastering, and commercial audio services in Ranchi.',
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),transparent_35%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">AVN Music Studio</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">Build your sound with a production partner that understands the details.</h1>
            <p className="mt-6 text-lg text-zinc-300">
              From original compositions to finished commercial audio, AVN Music Studio helps artists and businesses turn ideas into polished, release-ready tracks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
                Enquire now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400 hover:text-red-200">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">Capabilities</p>
          <h2 className="mt-3 text-3xl font-black text-white">Services built for artists, creators, and brands.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {studioServices.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <div className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-500/10 p-3 text-red-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">Why AVN</p>
              <h2 className="mt-3 text-3xl font-black text-white">A premium audio partner, not just a booking desk.</h2>
              <ul className="mt-6 space-y-4 text-zinc-300">
                <li>• Artist-first communication and production direction</li>
                <li>• Commercial-grade sound with a focus on clarity, emotion, and release quality</li>
                <li>• Support for local brands, independent artists, and growing creative teams</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Quick inquiry</p>
              <h3 className="mt-4 text-2xl font-bold text-white">Need a quote or a production plan?</h3>
              <p className="mt-4 text-zinc-300">Tell us about your project and we’ll help shape the right audio workflow.</p>
              <Link href="/studio/contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-200">
                Contact studio team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
