import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'About the Producer | AVN Music',
  description: 'About the producer portfolio and creative identity behind AVN Music.',
};

export default function PortfolioAboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white lg:px-8">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">About the producer</h1>
      <p className="mt-5 text-lg text-zinc-300">This portfolio page is structured to highlight personal music production work, creative identity, and selected collaborations.</p>
    </main>
  );
}
