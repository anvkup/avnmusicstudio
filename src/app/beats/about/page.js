import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'About BeatsbyAVN',
  description: 'About the BeatsbyAVN storefront and its beat licensing workflow.',
};

export default function BeatsAboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white lg:px-8">
      <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to BeatsbyAVN
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">About BeatsbyAVN</h1>
      <p className="mt-5 text-lg text-zinc-300">This storefront preview presents a distinct beat-centered brand experience with demo catalog data and licensing options.</p>
    </main>
  );
}
