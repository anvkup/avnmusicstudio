import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Studio Contact | AVN Music',
  description: 'Contact AVN Music Studio for production, mixing, and recording enquiries.',
};

export default function StudioContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Link href="/studio" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to Studio
        </Link>

        <h1 className="mt-8 text-4xl font-black text-white">Studio enquiry</h1>
        <p className="mt-4 text-zinc-300">
          Use the existing contact form or visit the main enquiry page to start a production conversation.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">Booking</p>
          <p className="mt-3 text-xl font-semibold text-white">Ready to discuss your project?</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500">Open contact form</Link>
            <a href="tel:+919060793927" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-red-400 hover:text-red-200">Call now</a>
          </div>
        </div>
      </div>
    </main>
  );
}
