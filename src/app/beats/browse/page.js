import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Browse Beats | BeatsbyAVN',
  description: 'Browse beat catalog previews for the BeatsbyAVN storefront.',
};

export default function BeatsBrowsePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white lg:px-8">
      <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to store
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">Browse beats</h1>
      <p className="mt-5 text-zinc-300">This demo browse page is designed for BPM, key, genre, and mood-based filtering in the future storefront flow.</p>
    </main>
  );
}
