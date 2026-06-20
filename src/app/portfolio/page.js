import PortfolioGrid from "./PortfolioGrid";

export const metadata = {
  title: "Portfolio | AVN Music Studio",
  description:
    "Selected music production, mixing, vocal processing, composition, and vocal production work from AVN Music Studio.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-screen-xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-600">
              Selected Work
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Music production and audio engineering portfolio
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              A focused collection of released projects featuring production,
              mixing, vocal processing, composition, and vocal production work.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:py-14">
        <PortfolioGrid />
      </div>
    </main>
  );
}
