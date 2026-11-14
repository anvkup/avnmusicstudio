import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { demoOrders } from '@/lib/beat-data';

export const metadata = {
  title: 'Beat Order Status | BeatsbyAVN',
  description: 'Preview order status page for BeatsbyAVN beat orders.',
};

export default function BeatOrderStatusPage({ params }) {
  const order = demoOrders.find((item) => item.id === params.orderId) ?? demoOrders[0];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link href="/beats" className="inline-flex items-center gap-2 text-sm font-medium text-red-300">
          <ArrowLeft className="h-4 w-4" /> Back to beats
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-red-400">Order reference</p>
          <h1 className="mt-3 text-4xl font-black text-white">{order.id}</h1>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-zinc-400">Current status</p>
              <p className="mt-2 text-2xl font-bold text-white">{order.status}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-zinc-400">License</p>
              <p className="mt-2 text-2xl font-bold text-white">{order.license}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-amber-100">
            Manual UPI verification is required before delivery. Admin staff can change this status from Awaiting Payment to Ready for Delivery and then Delivered after confirmation.
          </div>
        </div>
      </div>
    </main>
  );
}
