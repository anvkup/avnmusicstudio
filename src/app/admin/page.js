import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-zinc-900 p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-red-400">Admin preview</p>
        <h1 className="mt-3 text-4xl font-black text-white">Setup required</h1>
        <p className="mt-4 text-zinc-300">
          This admin area is intentionally blocked from public production use. Authentication, authorization, and secure server-side checks are required before any beat, order, or portfolio data can be managed here.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link href="/admin/beats" className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white hover:border-red-400">Manage beats</Link>
          <Link href="/admin/orders" className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white hover:border-red-400">Manage orders</Link>
          <Link href="/admin/portfolio" className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-medium text-white hover:border-red-400">Manage portfolio</Link>
        </div>
      </div>
    </main>
  );
}
