import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { demoPortfolioProjects } from '@/lib/beat-data';

export async function generateStaticParams() {
  return demoPortfolioProjects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default function PortfolioDetailPage({ params }) {
  const project = demoPortfolioProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">{project.type}</p>
          <h1 className="mt-3 text-4xl font-black text-white">{project.title}</h1>
          <p className="mt-3 text-zinc-300">{project.year} • {project.role}</p>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">{project.description}</p>
        </div>
      </div>
    </main>
  );
}
