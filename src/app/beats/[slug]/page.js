import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';
import { demoBeats, licenseOptions } from '@/lib/beat-data';

export async function generateStaticParams() {
  return demoBeats.filter((beat) => beat.published).map((beat) => ({ slug: beat.slug }));
}

export const dynamicParams = false;

export default function BeatDetailPage({ params }) {
  const beat = demoBeats.find((item) => item.slug === params.slug);

  if (!beat) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to beats
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            <div className="h-72 bg-[linear-gradient(135deg,#1f1f1f,#7f1d1d,#111827)] p-6">
              <div className="flex h-full items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{beat.genre}</p>
                  <h1 className="mt-3 text-4xl font-black">{beat.title}</h1>
                </div>
                <div className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-zinc-200">
                  {beat.bpm} BPM
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{beat.musicalKey}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{beat.mood}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Demo catalog</span>
              </div>

              <p className="text-zinc-300">
                This page serves as the demo beat detail route for the BeatsbyAVN storefront. Replace the mock metadata with the live beat asset and pricing model when production deployment is ready.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-red-400">Beat details</p>
              <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                <li>• Genre: {beat.genre}</li>
                <li>• Key: {beat.musicalKey}</li>
                <li>• Mood: {beat.mood}</li>
                <li>• Tags: {beat.tags.join(', ')}</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-red-400">License options</p>
              <div className="mt-5 space-y-4">
                {licenseOptions.slice(0, 3).map((license) => (
                  <div key={license.id} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-white">{license.label}</span>
                      <span className="text-red-300">{license.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/beats/licenses" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500">
                Compare licenses
              </Link>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-emerald-200">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <ShieldCheck className="h-4 w-4" /> Demo status
              </div>
              This order flow is in preview mode and is not a live production checkout.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
