'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, Search, SlidersHorizontal, PlayCircle, Send } from 'lucide-react';
import { demoBeats, licenseOptions } from '@/lib/beat-data';

export default function BeatsPage() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedMood, setSelectedMood] = useState('All');
  const [selectedBeat, setSelectedBeat] = useState(demoBeats[0].slug);
  const [selectedLicense, setSelectedLicense] = useState(licenseOptions[1].id);
  const [customer, setCustomer] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const genres = ['All', ...new Set(demoBeats.map((beat) => beat.genre))];
  const moods = ['All', ...new Set(demoBeats.map((beat) => beat.mood))];

  const filteredBeats = useMemo(() => {
    return demoBeats.filter((beat) => {
      const matchesQuery =
        !query ||
        beat.title.toLowerCase().includes(query.toLowerCase()) ||
        beat.genre.toLowerCase().includes(query.toLowerCase()) ||
        beat.mood.toLowerCase().includes(query.toLowerCase()) ||
        beat.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesGenre = selectedGenre === 'All' || beat.genre === selectedGenre;
      const matchesMood = selectedMood === 'All' || beat.mood === selectedMood;

      return matchesQuery && matchesGenre && matchesMood;
    });
  }, [query, selectedGenre, selectedMood]);

  const selectedBeatData = demoBeats.find((beat) => beat.slug === selectedBeat) ?? demoBeats[0];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        beat: selectedBeatData.title,
        license: licenseOptions.find((item) => item.id === selectedLicense)?.label || 'WAV Lease',
        customer,
        email,
      }),
    });

    const data = await response.json();
    setStatus(data.message || 'Request sent.');
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.2),transparent_35%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">BeatsbyAVN</p>
            <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Original instrumentals for your next release.</h1>
            <p className="mt-6 text-lg text-zinc-300">
              Demo beats, storefront previews, and licensing information for producers and artists exploring a premium beat catalog.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/beats/licenses" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
                View licenses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/beats/terms" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-400 hover:text-red-200">
                Terms preview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/10 bg-zinc-900 px-4 py-3 text-zinc-300">
            <Search className="h-4 w-4 text-red-300" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search beats, moods, or tags"
              className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
            <SlidersHorizontal className="h-4 w-4 text-red-300" />
            Live filters
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Genre</span>
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => setSelectedGenre(genre)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  selectedGenre === genre
                    ? 'border-red-500/50 bg-red-500/15 text-red-100'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:border-red-400/50'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Mood</span>
            {moods.map((mood) => (
              <button
                key={mood}
                type="button"
                onClick={() => setSelectedMood(mood)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  selectedMood === mood
                    ? 'border-red-500/50 bg-red-500/15 text-red-100'
                    : 'border-white/10 bg-white/5 text-zinc-300 hover:border-red-400/50'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBeats.map((beat) => (
            <article key={beat.slug} className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
              <div className="relative h-52 bg-[linear-gradient(135deg,#1f1f1f,#7f1d1d,#111827)] p-5">
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
                  {beat.genre}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-300">{beat.bpm} BPM</p>
                    <p className="mt-2 text-2xl font-black text-white">{beat.title}</p>
                  </div>
                  <button type="button" className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20">
                    <PlayCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{beat.musicalKey}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">{beat.mood}</span>
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {beat.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-red-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link href={`/beats/${beat.slug}`} className="flex-1 rounded-full bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500">
                    View beat
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBeat(beat.slug);
                      setSelectedLicense(beat.availableLicenses[0] || licenseOptions[1].id);
                    }}
                    className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-red-400 hover:text-red-200"
                  >
                    License
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBeats.length === 0 && (
          <div className="mt-6 rounded-3xl border border-dashed border-white/15 bg-zinc-900 p-8 text-center text-zinc-300">
            No beats match those filters yet. Try a different mood, genre, or keyword.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400">Quick request</p>
            <h2 className="mt-3 text-3xl font-black text-white">Request a beat license</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">Name</span>
                  <input
                    value={customer}
                    onChange={(event) => setCustomer(event.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-red-400/60 focus:outline-none"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-red-400/60 focus:outline-none"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">Beat</span>
                  <select
                    value={selectedBeat}
                    onChange={(event) => setSelectedBeat(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white focus:border-red-400/60 focus:outline-none"
                  >
                    {demoBeats.map((beat) => (
                      <option key={beat.slug} value={beat.slug}>
                        {beat.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">License</span>
                  <select
                    value={selectedLicense}
                    onChange={(event) => setSelectedLicense(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white focus:border-red-400/60 focus:outline-none"
                  >
                    {licenseOptions.map((license) => (
                      <option key={license.id} value={license.id}>
                        {license.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
                <Send className="h-4 w-4" /> Send request
              </button>

              {status && (
                <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{status}</p>
              )}
            </form>
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">Selected beat</p>
            <h3 className="mt-3 text-3xl font-black text-white">{selectedBeatData.title}</h3>
            <div className="mt-5 space-y-3 text-sm text-zinc-200">
              <p>Genre: {selectedBeatData.genre}</p>
              <p>Key: {selectedBeatData.musicalKey}</p>
              <p>Mood: {selectedBeatData.mood}</p>
              <p>BPM: {selectedBeatData.bpm}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedBeatData.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-red-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Recommended license</p>
              <p className="mt-2 text-2xl font-black text-white">
                {licenseOptions.find((license) => license.id === selectedLicense)?.price || '$149'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Licensing</p>
            <h2 className="mt-3 text-3xl font-black text-white">Demo pricing and rights structure.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {licenseOptions.map((license) => (
              <article key={license.id} className="rounded-3xl border border-white/10 bg-zinc-950 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-red-400">{license.label}</p>
                <p className="mt-4 text-3xl font-black text-white">{license.price}</p>
                <p className="mt-3 text-sm text-zinc-300">{license.description}</p>
                <p className="mt-4 text-xs text-zinc-500">{license.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
