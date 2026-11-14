import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Studio About | AVN Music Studio',
  description: 'About AVN Music Studio and its production-led creative approach.',
};

export default function StudioAboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white lg:px-8">
      <Link href="/studio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to Studio
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">About the studio</h1>
      <p className="mt-5 text-lg text-zinc-300">
        AVN Music Studio focuses on premium production, mixing, recording, and client-first creative support for artists and commercial projects.
      </p>
    </main>
  );
}
