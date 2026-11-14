import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const services = [
  { title: 'Full Music Production', description: 'End-to-end production for original tracks, demos, and commercial music work.' },
  { title: 'Mixing & Mastering', description: 'Balance, polish, and final delivery for release-ready audio quality.' },
  { title: 'Recording & Dubbing', description: 'Vocal recording, instrument capture, and voice-over support for diverse projects.' },
  { title: 'Jingles & Brand Audio', description: 'Custom sound identity for campaigns, promos, and advertising needs.' },
];

export const metadata = {
  title: 'Studio Services | AVN Music',
  description: 'Overview of the studio services available through AVN Music Studio.',
};

export default function StudioServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <Link href="/studio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to Studio
        </Link>

        <h1 className="mt-8 text-4xl font-black text-white">Studio services overview</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          This page keeps the original service structure available while giving the Studio brand its own clear section entry point.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
