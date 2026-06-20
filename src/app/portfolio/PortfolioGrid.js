"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Play, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const roleFilters = [
  "All",
  "Music Production",
  "Mixing",
  "Vocal Processing",
  "Composition",
];

const roleStyles = {
  "Music Production": "bg-blue-50 text-blue-700 ring-blue-200",
  Mixing: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Vocal Processing": "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
  Composition: "bg-amber-50 text-amber-800 ring-amber-200",
  "Vocal Production": "bg-rose-50 text-rose-700 ring-rose-200",
};

const projects = [
  {
    videoId: "fIVOAa-qWl8",
    title: "Avesh Khan - Mera Dil",
    channel: "Avesh Khan Music",
    roles: ["Music Production"],
  },
  {
    videoId: "Zfb3ePxuP0s",
    title: "Chahat - Avesh Khan",
    channel: "Avesh Khan Music",
    roles: ["Vocal Processing"],
  },
  {
    videoId: "WPAKZ-CO3Oo",
    title: "Kyun Sochein - Akansh Deep",
    channel: "Akansh Deep",
    roles: ["Music Production", "Mixing"],
  },
  {
    videoId: "ivqWEjFTBII",
    title: "Khudko Chahun - Akansh Deep",
    channel: "Akansh Deep",
    roles: ["Mixing"],
  },
  {
    videoId: "TeLTD6jknvw",
    title: "Kanha Kanha Mera Dil Bulata Hai",
    channel: "Manisha Music Lover",
    roles: ["Music Production", "Mixing"],
  },
  {
    videoId: "FursC-auQrk",
    title: "O Sajna",
    channel: "Release - Topic",
    roles: ["Music Production", "Composition", "Vocal Production", "Mixing"],
  },
  {
    videoId: "dA6mjgzNc0U",
    title: "Ishq - Jaffar Abbas",
    channel: "Jaffar Abbas - Topic",
    roles: ["Music Production", "Mixing"],
  },
  {
    videoId: "CAJPB3LJ-Bo",
    title: "Tanhai - Jaffar Abbas",
    channel: "Jaffar Abbas",
    roles: ["Music Production", "Mixing"],
  },
  {
    videoId: "Ga8w83_txJ4",
    title: "Nishant - Le Chalun ft. Abhinav",
    channel: "NISHANT",
    roles: ["Music Production", "Mixing"],
  },
];

function getYoutubeUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function getThumbnailUrl(videoId) {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.roles.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <SlidersHorizontal className="h-4 w-4 text-blue-600" />
          Filter by role
        </div>

        <div className="flex flex-wrap gap-2">
          {roleFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-md border px-3 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700"
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.videoId}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
          >
            <a
              href={getYoutubeUrl(project.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${project.title} on YouTube`}
              className="relative block aspect-video overflow-hidden bg-gray-100"
            >
              <Image
                src={getThumbnailUrl(project.videoId)}
                alt={`${project.title} YouTube thumbnail`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-blue-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </div>
            </a>

            <div className="flex flex-1 flex-col gap-5 p-5">
              <div className="space-y-2">
                <h2 className="text-lg font-bold leading-snug text-gray-900">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-gray-500">
                  {project.channel}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.roles.map((role) => (
                  <span
                    key={role}
                    className={cn(
                      "rounded-md px-2.5 py-1 text-xs font-bold ring-1",
                      roleStyles[role]
                    )}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <Button
                asChild
                className="mt-auto w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
              >
                <a
                  href={getYoutubeUrl(project.videoId)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
