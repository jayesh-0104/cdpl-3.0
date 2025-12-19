"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import WorkshopRequestModal from "@/components/WorkshopRequestModal";

export default function EventsPastEventsHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const featured = document.getElementById("featured-events");
    const all = document.getElementById("all-past-events");
    (featured ?? all)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleEnquireClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* subtle geometric bg (full-bleed) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* container (relative) so floating lanterns respect max width */}
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* decorative floating lanterns (bounded by max-w-7xl) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
          aria-hidden="true"
        >
          {/* left edge */}
          <div className="absolute top-10 left-0 md:left-2 lg:left-4 animate-float">
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={64}
              height={64}
              className="w-8 md:w-10 lg:w-12 h-auto opacity-90"
            />
          </div>

          {/* right edge */}
          <div
            className="absolute top-6 right-0 md:right-3 lg:right-6 animate-float-slow"
            style={{ animationDelay: "0.8s" }}
          >
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={64}
              height={64}
              className="w-7 md:w-9 lg:w-11 h-auto opacity-90"
            />
          </div>

          {/* upper center */}
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 animate-float-slower"
            style={{ animationDelay: "1.6s" }}
          >
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={56}
              height={56}
              className="w-7 md:w-8 lg:w-10 h-auto opacity-80"
            />
          </div>

          {/* low right, below CTA */}
          <div
            className="absolute bottom-4 right-2 md:bottom-8 md:right-8 animate-float"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/events/fire_lantern.png"
              alt=""
              width={52}
              height={52}
              className="w-6 md:w-7 lg:w-9 h-auto opacity-75"
            />
          </div>
        </div>

        {/* ✅ Breadcrumb (Matched to About Us) */}
        <nav aria-label="Breadcrumb" className="mb-6 relative z-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-indigo-700">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span>Events</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <Link href="/events/past-events" className="font-semibold text-slate-900">Past Events</Link>
            </li>
          </ol>
        </nav>

        {/* split */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2">
          {/* LEFT — content */}
          <div className="order-1 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-200/60 dark:bg-white/85 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Our Training Portfolio
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#0069A8]">Corporate Training</span>{" "}
              <span className="text-slate-900">&amp;</span>{" "}
              <span className="text-[#FF8C00]">Workshops</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg">
              Explore our portfolio of successfully conducted <strong>Corporate Training Programs</strong>, <strong>Technical Workshops</strong>, and <strong>Industry Seminars</strong>. From <strong>Software Testing</strong> and <strong>Data Science</strong> to <strong>AI/ML</strong>, we empower organizations and professionals with job-ready skills and hands-on expertise.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                onClick={handleEnquireClick}
                className="cursor-pointer inline-flex w-full items-center justify-center rounded-2xl bg-[#FF8C00] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:w-auto"
              >
                Enquire for Training <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </button>

              <button
                onClick={handleScrollDown}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 dark:border-slate-200/70 dark:bg-white/90 sm:w-auto"
              >
                Browse Past Events
              </button>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="order-2 lg:order-2 mt-4 lg:mt-0">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-white/92 ring-1 ring-slate-200 shadow-[0_20px_45px_-20px_rgba(2,6,23,0.25)] backdrop-blur sm:h-72 md:h-80 lg:h-[26rem] dark:bg-white/92">
              <Image
                src="/events/past-events-hero-illustration.png"
                alt="Corporate training workshop illustration showing professionals learning software testing and data science"
                title="CDPL Corporate Training Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* float animations */}
      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: floatY 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatY 7.5s ease-in-out infinite; }
        .animate-float-slower { animation: floatY 9s ease-in-out infinite; }
      `}</style>

      <WorkshopRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Events Past Events Hero Section"
        title="Corporate Training Enquiry"
        subtitle="Enquire about our corporate training programs and workshops."
        interest="Corporate Training"
        variant="workshop"
      />
    </section>
  );
}
