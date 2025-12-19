"use client";

import Link from "next/link";
import { useState } from "react";
import AdvisorModal from "@/components/ui/AdvisorModal";
import { ArrowRight, Shield, Sparkle } from "lucide-react";

const BRAND = "#ff8c00";

/**
 * MentorHelpCTASection — CDPL Creative CTA (Light-surface in all modes)
 */
export default function MentorHelpCTASection({
  title = "CDPL Mentorship: Learn from people who’ve shipped it",
  subtitle = "1:1 guidance for AI/ML, Data Science, Full-Stack, and DevOps, resume reviews, project feedback, and interview prep to accelerate outcomes.",
  ctaText = "Get matched with a CDPL mentor",
  bgImageSrc = "/images/cta-helping-hands.png",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  href?: string;
  bgImageSrc?: string;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const target = (e.currentTarget.getAttribute("href") || "").trim();
    if (target.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", target);
      }
    }
  };

  return (
    <section
      className={`relative isolate bg-white text-neutral-900 ${className}`}
      aria-label="CDPL Mentorship call to action"
    >
      {/* Ambient brand waves (purely decorative) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-16 top-6 h-[420px] w-[820px] opacity-[0.28]"
          viewBox="0 0 800 400"
          fill="none"
        >
          <path
            d="M-50 350 C 120 180, 300 160, 500 260 S 880 410, 980 180"
            stroke="url(#grad1)"
            strokeWidth="42"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M-60 290 C 130 150, 330 140, 560 220 S 900 350, 980 120"
            stroke="url(#grad2)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff8c00" />
              <stop offset="1" stopColor="#ffb84d" />
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7ee7ff" />
              <stop offset="1" stopColor="#9d7bff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating micro-dots */}
        <div className="absolute right-6 top-8 grid gap-2 opacity-70">
          <DotRow />
        </div>
        <div className="absolute right-10 top-32 grid gap-2 opacity-70">
          <DotRow />
        </div>
      </div>

      {/* CONTENT CONTAINER ONLY */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Frame with background illustration and glow */}
        <div
          className="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.45)]"
          style={{
            backgroundImage: `
              radial-gradient(1200px 520px at 18% 30%, rgba(255,140,0,0.18) 0%, rgba(255,184,77,0.10) 35%, rgba(255,255,255,0) 70%),
              linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.94)),
              url(${bgImageSrc})
            `,
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundPosition: "center, center, right center",
            backgroundSize: "auto, cover, contain",
          }}
        >
          {/* Inner ring */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />

          {/* Top ribbon headline */}
          <div className="relative px-6 pt-8 sm:px-10 md:px-12 lg:px-16">
            <Ribbon>
              <span className="inline-flex items-center gap-2">
                <Sparkle className="h-4 w-4" />
                CDPL Career Mentorship
              </span>
            </Ribbon>
          </div>

          {/* Main content */}
          <div className="relative px-6 pb-10 pt-6 sm:px-10 md:px-12 lg:px-16">
            <h2 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-[34px]">
              <BrandHighlighted text={title} />
            </h2>

            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-neutral-700">
              {subtitle}
            </p>

            {/* CTA rail */}
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full text-white transition-transform active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500
                           whitespace-nowrap overflow-hidden text-ellipsis
                           text-[13px] leading-none px-4 py-2 min-h-[40px]
                           sm:text-sm sm:leading-normal sm:px-5 sm:py-2 cursor-pointer"
                style={{
                  fontSize: ".74rem",
                  background:
                    "linear-gradient(90deg, #ff8c00 0%, #ffae3a 50%, #ffb84d 100%)",
                  boxShadow: "0 16px 46px -18px rgba(255,140,0,0.6)",
                }}
                aria-label="Get matched with a CDPL mentor"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <Link
                href="#mentors-impact"
                onClick={handleAnchorClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-300"
                aria-label="Browse CDPL mentor directory"
              >
                Browse mentors
              </Link>
            </div>

            {/* Chips */}
            <ul className="mt-6 flex flex-wrap items-center gap-2 text-[12px] font-medium text-neutral-800">
              <Chip>AI/ML</Chip>
              <Chip>Data Science</Chip>
              <Chip>Full-Stack</Chip>
              <Chip>Cloud & DevOps</Chip>
              <Chip>Resume & Portfolio</Chip>
              <Chip>Mock Interviews</Chip>
            </ul>
          </div>

          {/* Bottom ticker */}
          <div className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            <Ticker />
          </div>

          {/* Footer slim proof line */}
          <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 px-6 pb-6 pt-3 text-xs text-neutral-600 sm:px-10 md:px-12 lg:px-16">
            <div className="inline-flex items-center gap-2">
              <Shield className="h-3.5 w-3.5" />
              <span>Real projects • Code reviews • Placement support</span>
            </div>
            <DotDivider />
            <div>CDPL Mentorship: built in India, outcomes focused</div>
          </div>

          {/* Decorative bottom glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,140,0,0.28), rgba(255,184,77,0.14) 45%, rgba(255,140,0,0) 70%)",
            }}
          />
        </div>
      </div>

      <AdvisorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Mentors Page - Help CTA Section"
      />
    </section>
  );
}

/* -------------------- Helpers -------------------- */

function BrandHighlighted({ text }: { text: string }) {
  const target = "CDPL Mentorship";
  const i = text.indexOf(target);
  if (i === -1) return <>{text}</>;
  const before = text.slice(0, i);
  const after = text.slice(i + target.length);
  return (
    <>
      {before}
      <span style={{ color: BRAND }}>{target}</span>
      {after}
    </>
  );
}

/* -------------------- Decorative bits (no external deps) -------------------- */

function Ribbon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex select-none items-center rounded-full border border-neutral-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ff8c00] shadow-sm"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))",
      }}
    >
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1">
      {children}
    </li>
  );
}

function DotRow() {
  return (
    <div className="grid grid-flow-col gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-400/80" />
      <span className="h-1.5 w-1.5 rounded-full bg-orange-300/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-orange-200/60" />
      <span className="h-1.5 w-1.5 rounded-full bg-orange-300/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-orange-400/80" />
    </div>
  );
}

function DotDivider() {
  return <span aria-hidden className="mx-1 text-neutral-300">•</span>;
}

function Ticker() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="animate-[marquee_2s_linear_infinite] sm:animate-[marquee_20s_linear_infinite] whitespace-nowrap py-2 text-[12px] text-neutral-700"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <span className="mx-3">AI/ML Mentors</span>
        <span className="mx-3">Data Science Mentors</span>
        <span className="mx-3">Full-Stack Mentors</span>
        <span className="mx-3">DevOps Mentors</span>
        <span className="mx-3">Resume Reviews</span>
        <span className="mx-3">Portfolio Feedback</span>
        <span className="mx-3">Mock Interviews</span>
        <span className="mx-3">Placement Support</span>
        <span className="mx-3">CDPL Mentorship</span>
        {/* duplicate for seamless loop */}
        <span className="mx-3">AI/ML Mentors</span>
        <span className="mx-3">Data Science Mentors</span>
        <span className="mx-3">Full-Stack Mentors</span>
        <span className="mx-3">DevOps Mentors</span>
        <span className="mx-3">Resume Reviews</span>
        <span className="mx-3">Portfolio Feedback</span>
        <span className="mx-3">Mock Interviews</span>
        <span className="mx-3">Placement Support</span>
        <span className="mx-3">CDPL Mentorship</span>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `,
        }}
      />
    </div>
  );
}
