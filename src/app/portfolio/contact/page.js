import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Portfolio Contact | AVN Music',
  description: 'Contact page for the producer portfolio and collaboration enquiries.',
};

export default function PortfolioContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white lg:px-8">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>
      <h1 className="mt-8 text-4xl font-black text-white">Contact the producer</h1>
      <p className="mt-5 text-zinc-300">Use the main AVN contact flow for project and collaboration enquiries. This page acts as a dedicated portfolio contact entry point.</p>
    </main>
  );
}
