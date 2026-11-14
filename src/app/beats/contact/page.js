import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Beat Store Support | BeatsbyAVN',
  description: 'Support and contact information for the BeatsbyAVN beat storefront.',
};

export default function BeatsContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white lg:px-8">
      <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to store
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">Support and contact</h1>
      <p className="mt-5 text-zinc-300">Use the main contact flow for beat enquiries and manual order coordination. This preview page is for support and navigation clarity.</p>
    </main>
  );
}
