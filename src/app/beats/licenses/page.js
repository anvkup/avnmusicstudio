import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { licenseOptions } from '@/lib/beat-data';

export const metadata = {
  title: 'Beat Licensing | BeatsbyAVN',
  description: 'Preview the demo license structure for BeatsbyAVN beats and storefront pricing.',
};

export default function BeatLicensesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to beats
        </Link>

        <h1 className="mt-8 text-4xl font-black text-white">License comparison</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          This is a demo license page for the BeatsbyAVN storefront. Prices and rights are placeholders until approved commercial terms are added.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {licenseOptions.map((license) => (
            <article key={license.id} className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-red-400">{license.label}</p>
              <p className="mt-4 text-4xl font-black text-white">{license.price}</p>
              <p className="mt-4 text-sm text-zinc-300">{license.description}</p>
              <div className="mt-6 space-y-3 text-sm text-zinc-200">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-red-300" /> Usage-ready preview</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-red-300" /> Demo commercial setup</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-red-300" /> Manual verification flow</div>
              </div>
              <p className="mt-5 text-[11px] text-zinc-500">{license.note}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
