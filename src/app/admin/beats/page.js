import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdminBeatsPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to admin
        </Link>
        <h1 className="mt-6 text-3xl font-black text-white">Admin beat management</h1>
        <p className="mt-4 text-zinc-300">This screen is a placeholder for the future beat management dashboard. Add secure authentication before exposing it publicly.</p>
      </div>
    </main>
  );
}
