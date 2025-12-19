// src/components/sections/AffiliateHeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Home,
  ChevronRight,
  BadgeCheck,
  Link2,
  WalletMinimal,
  Megaphone,
  BarChart3,
  Crown,
} from "lucide-react";
import { useState } from "react";
import WorkshopRequestModal from "../WorkshopRequestModal";

const ease = [0.22, 1, 0.36, 1] as const;
const BRAND_COLOR = "var(--color-brand, #ff8c00)";

// Tiny floating icon chip (background layer)
function FloatingIcon({
  children,
  className,
  x,
  y,
  size = 26,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute select-none ${className || ""}`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 6, rotate: -2 }}
      animate={{ opacity: 1, y: [0, -8, 0, 6, 0], rotate: [-2, 2, -1, 2, -2] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease,
      }}
    >
      <div
        className="rounded-xl border backdrop-blur-md bg-white/70 border-white/50 shadow-sm"
        style={{ width: size + 12, height: size + 12 }}
      >
        <div className="grid h-full place-items-center">{children}</div>
      </div>
    </motion.div>
  );
}

export default function AffiliateHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="
        relative isolate overflow-hidden bg-white text-slate-900
        pt-[96px] md:pt-[104px] lg:pt-[112px]
        -mt-[96px] md:-mt-[104px] lg:-mt-[112px]
      "
      aria-label="CDPL Affiliate Program hero section"
      data-scroll-target="affiliate-hero"
    >
      {/* Background wash (full-bleed) */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[34rem] w-[70rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.sky.200)_0,transparent_60%)]" />
      </div>

      {/* Ambient sweeping lines (deeper than icons) */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <svg className="absolute left-0 top-0 h-full w-full">
          <defs>
            <linearGradient id="cdpl-line-aff" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(14,165,233,0)" />
              <stop offset="50%" stopColor="rgba(14,165,233,0.22)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0)" />
            </linearGradient>
          </defs>
          {[0, 110, 220, 330].map((y, i) => (
            <g key={i} transform={`translate(0, ${y})`}>
              <rect x="-45%" y="0" width="90%" height="1.5" fill="url(#cdpl-line-aff)">
                <animate attributeName="x" values="-45%;65%;-45%" dur={`${14 + i * 2}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
        </svg>
      </div>

      {/* Floating vector icons (background layer above lines, away from content/breadcrumb) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Hide on small screens to avoid clutter */}
        <FloatingIcon x="6%" y="22%" className="hidden min-[1040px]:grid">
          <Link2 className="h-5 w-5 text-sky-500" />
        </FloatingIcon>
        <FloatingIcon x="88%" y="18%" className="hidden min-[1040px]:grid" delay={0.6}>
          <WalletMinimal className="h-5 w-5 text-emerald-500" />
        </FloatingIcon>
        <FloatingIcon x="78%" y="34%" className="hidden min-[1040px]:grid" delay={0.2}>
          <Megaphone className="h-5 w-5 text-indigo-500" />
        </FloatingIcon>
        <FloatingIcon x="10%" y="68%" className="hidden min-[1040px]:grid" delay={0.4}>
          <BarChart3 className="h-5 w-5 text-purple-500" />
        </FloatingIcon>
        <FloatingIcon x="92%" y="70%" className="hidden min-[1040px]:grid" delay={0.8}>
          <Crown className="h-5 w-5 text-amber-500" />
        </FloatingIcon>
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-0 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1 text-sm text-slate-500">
            <li className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-indigo-700">Home</Link>
            </li>
            <li aria-hidden className="mx-1 text-slate-400">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link href="/cdpl-affiliate-program" className="font-semibold text-slate-900 hover:text-indigo-700">
                Affiliate Program
              </Link>
            </li>
          </ol>
        </nav>

        {/* Layout: text left, image right; on small screens, image goes below */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14">
          {/* LEFT — text */}
          <div className="order-1 md:order-1 max-w-2xl md:flex-1 md:basis-[58%] lg:basis-[60%]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 px-3 py-1 text-sm bg-white/85 backdrop-blur-md text-gray-800"
            >
              <Sparkles className="h-4 w-4 text-sky-500" />
              <span>CDPL Partner Ecosystem</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            >
              <span style={{ color: "#0069A8" }}>CDPL Affiliate</span>{" "}
              <span style={{ color: BRAND_COLOR }}>Program</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease }}
              className="mt-4 mx-auto max-w-3xl text-base text-slate-700 sm:text-lg lg:mx-0"
            >
              Earn commissions by promoting CDPL’s training, developer events, and
              engineering services. Transparent tracking, fast payouts, and content
              built for conversions.
            </motion.p>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease }}
              className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 ring-1 ring-emerald-200">
                <BadgeCheck className="h-4 w-4 text-emerald-700" />
                <span className="text-sm text-emerald-700">Verified tracking</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 ring-1 ring-sky-200">
                <ShieldCheck className="h-4 w-4 text-sky-700" />
                <span className="text-sm text-sky-700">Enterprise trusted</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 ring-1 ring-indigo-200">
                <TrendingUp className="h-4 w-4 text-indigo-700" />
                <span className="text-sm text-indigo-700">High-intent funnels</span>
              </div>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-black/5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 active:translate-y-[1px] cursor-pointer sm:w-auto sm:justify-start"
                style={{ backgroundColor: BRAND_COLOR }}
              >
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <Link
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50 cursor-pointer sm:w-auto"
              >
                How it works
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — image (big, blended, no card look) */}
          <div className="order-2 md:order-2 relative self-start mt-2 md:mt-0 md:basis-[42%] lg:basis-[40%]">
            <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 opacity-70 blur-3xl bg-[radial-gradient(620px_260px_at_70%_30%,rgba(14,165,233,0.12),transparent_60%)]" />
            <div className="relative ml-0 mr-0 w-full md:ml-auto max-w-[28rem] sm:max-w-[32rem] md:w-[420px] lg:w-[520px] xl:w-[560px] 2xl:w-[600px]">
              <Image
                src="/affiliate_images/affiliate_hero.png"
                alt="CDPL Affiliate Program — partner growth illustration"
                title="CDPL Affiliate Program — partner growth illustration"
                width={1600}
                height={1200}
                priority
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 600px"
                className="h-auto w-full select-none"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(130% 130% at 60% 40%, black 72%, transparent 100%)",
                  maskImage:
                    "radial-gradient(130% 130% at 60% 40%, black 72%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <WorkshopRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant="affiliate"
        title="Apply for Affiliate Program"
        subtitle="Join our partner ecosystem today"
        source="Website - Affiliate Hero"
      />
    </section >
  );
}
