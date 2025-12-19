"use client";

import { MapPin, Calendar } from "lucide-react";
import type { Job } from "@/lib/jobsData";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export function JobsLiveJobsJobsTickerSection({ jobs }: { jobs: Job[] }) {
  return (
    <div className="w-full border-y border-slate-100 bg-white/70 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden py-3 text-sm text-slate-700" /* 14px = 0.875rem */
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,165,233,.0), rgba(14,165,233,.35), rgba(14,165,233,.0))",
            }}
          />
          <div className="animate-[marquee_3s_linear_infinite] sm:animate-[marquee_22s_linear_infinite] whitespace-nowrap">
            {[...jobs, ...jobs].map((j, idx) => (
              <span key={j.id + idx} className="mx-4 inline-flex items-center gap-2">
                <span className="rounded-md bg-amber-100 px-2 py-0.5 font-semibold text-amber-800">
                  {j.type}
                </span>
                <span className="font-semibold">{j.title}</span>
                <span className="text-slate-500">· {j.company}</span>
                <span className="inline-flex items-center text-slate-500">
                  <MapPin className="ml-2 mr-1 h-3.5 w-3.5" />
                  {j.location}
                </span>
                <span className="inline-flex items-center text-slate-500">
                  <Calendar className="ml-2 mr-1 h-3.5 w-3.5" />
                  {j.eventDate ? formatDate(j.eventDate) : formatDate(j.postedOn)}
                </span>
              </span>
            ))}
          </div>
          <style>{`@keyframes marquee{0%{transform:translateX(0%)}100%{transform:translateX(-50%)}}`}</style>
        </div>
      </div>
    </div>
  );
}
