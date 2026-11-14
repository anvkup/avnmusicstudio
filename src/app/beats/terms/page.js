import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Beat Terms | BeatsbyAVN',
  description: 'Preview licensing terms for BeatsbyAVN beat purchases and storefront workflow.',
};

export default function BeatTermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to beats
        </Link>

        <h1 className="mt-8 text-4xl font-black text-white">License terms preview</h1>
        <p className="mt-4 text-zinc-300">
          This page is a placeholder for the final BeatsbyAVN terms. It documents that the current storefront is a demo environment and that all pricing and terms are subject to a future approved commercial agreement.
        </p>

        <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-zinc-900 p-6 text-sm text-zinc-300">
          <p>• Demo pricing is informational only and not intended as legal or approved commercial terms.</p>
          <p>• Commercial delivery and order verification require manual internal confirmation before file access is granted.</p>
          <p>• Public storefront data must remain separate from private order data and delivery records.</p>
          <p>• Payment verification and file authorization are not automated in this preview mode.</p>
        </div>
      </div>
    </main>
  );
}
