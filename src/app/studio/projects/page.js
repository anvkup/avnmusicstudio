import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Studio Projects | AVN Music Studio',
  description: 'Preview of selected studio work and production projects.',
};

export default function StudioProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white lg:px-8">
      <Link href="/studio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to Studio
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">Selected studio work</h1>
      <p className="mt-5 text-zinc-300">This is a preview page for client projects, production highlights, and studio case studies.</p>
    </main>
  );
}
