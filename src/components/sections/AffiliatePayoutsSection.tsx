// src/components/sections/AffiliatePayoutsSection.tsx
"use client";

import { motion } from "framer-motion";
import type React from "react";
import { CalendarClock, Banknote, FileText } from "lucide-react";

/** Card theme */
type Card = {
  title: string;
  sub: string;
  // Accept full SVG props so we can style icons safely
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rim: string;      // thin gradient rim around the card
  glow: string;     // soft glow behind the card
  dot: string;      // accent for icon/title/pattern
  surface: string;  // visible card bg
  dotFade?: number; // pattern opacity multiplier
};

const cards: Card[] = [
  {
    title: "Monthly payouts",
    sub: "Paid on net-30 via bank transfer or PayPal with detailed statements.",
    Icon: CalendarClock,
    rim: "conic-gradient(from 120deg, rgba(14,165,233,.35), rgba(59,130,246,.35), rgba(34,197,94,.35), rgba(14,165,233,.35))",
    glow:
      "radial-gradient(520px 220px at 80% 10%, rgba(14,165,233,.12), transparent 60%), radial-gradient(420px 200px at 0% 100%, rgba(34,197,94,.10), transparent 60%)",
    dot: "#0ea5e9",
    surface: "rgba(14,165,233,0.10)", // light blue tint
  },
  {
    title: "Fair attribution",
    sub: "60-day cookie window. Last click, anti-fraud filters, and multi-channel UTMs.",
    Icon: Banknote,
    rim: "conic-gradient(from 160deg, rgba(16,185,129,.35), rgba(245,158,11,.30), rgba(99,102,241,.30), rgba(16,185,129,.35))",
    glow:
      "radial-gradient(500px 220px at 10% 0%, rgba(16,185,129,.12), transparent 60%), radial-gradient(420px 200px at 100% 80%, rgba(99,102,241,.10), transparent 60%)",
    dot: "#10b981",
    surface: "rgba(16,185,129,0.10)", // light emerald tint
  },
  {
    title: "Invoices & taxes",
    sub: "Automatic statements and downloadable invoices for bookkeeping.",
    Icon: FileText,
    rim: "conic-gradient(from 200deg, rgba(99,102,241,.35), rgba(14,165,233,.30), rgba(236,72,153,.30), rgba(99,102,241,.35))",
    glow:
      "radial-gradient(520px 220px at 90% 40%, rgba(99,102,241,.12), transparent 60%), radial-gradient(420px 200px at 0% 100%, rgba(236,72,153,.10), transparent 60%)",
    dot: "#6366f1",
    surface: "rgba(99,102,241,0.10)", // light indigo tint
  },
];

/** helpers */
const enc = (s: string) => s.replace(/#/g, "%23").replace(/\s/g, "%20");

const dots = (hex: string, o = 0.35) =>
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22'><circle cx='3' cy='3' r='1.6' fill='${enc(
    hex
  )}' opacity='${o}'/></svg>")`;

const plus = (hex: string, o = 0.28) =>
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'><g opacity='${o}' fill='${enc(
    hex
  )}'><rect x='13' y='4' width='2' height='10' rx='1'/><rect x='9' y='10' width='10' height='2' rx='1'/></g></svg>")`;

const waves = (hex: string, o = 0.30) =>
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='52' height='20' viewBox='0 0 52 20' fill='none'><path d='M0 10 C6 4 12 4 18 10 C24 16 30 16 36 10 C42 4 48 4 54 10' stroke='${enc(
    hex
  )}' stroke-width='1' opacity='${o}'/></svg>")`;

const grid = (hex: string) =>
  `linear-gradient(90deg, ${hex}22 1px, transparent 1px), linear-gradient(0deg, ${hex}22 1px, transparent 1px)`;

// Subtle paper noise (monochrome, very light). Keeps background lively without “ugly gradients”.
const noise = () =>
  `url("data:image/svg+xml;utf8,` +
  enc(
    `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
        <feComponentTransfer>
          <feFuncA type='linear' slope='0.035'/>
        </feComponentTransfer>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)' opacity='0.8'/>
    </svg>`
  ) +
  `")`;

function patternFor(i: number, color: string, fade = 1): React.CSSProperties {
  if (i === 0) {
    return {
      backgroundImage: `${dots(color, 0.34 * fade)}, ${grid(color)}, ${noise()}`,
      backgroundSize: "22px 22px, 26px 26px, 60px 60px",
      backgroundBlendMode: "multiply, normal, soft-light",
      opacity: 1,
    };
  }
  if (i === 1) {
    return {
      backgroundImage: `${plus(color, 0.26 * fade)}, ${grid(color)}, ${noise()}`,
      backgroundSize: "28px 28px, 28px 28px, 60px 60px",
      backgroundBlendMode: "multiply, normal, soft-light",
      opacity: 1,
    };
  }
  return {
    backgroundImage: `${waves(color, 0.28 * fade)}, ${grid(color)}, ${noise()}`,
    backgroundSize: "52px 20px, 28px 28px, 60px 60px",
    backgroundBlendMode: "multiply, normal, soft-light",
    opacity: 1,
  };
}

export default function AffiliatePayoutsSection() {
  return (
    <section
      id="payouts"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      aria-labelledby="payouts-heading"
    >
      <h2 className="text-3xl font-bold tracking-tight">Payouts &amp; tracking</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        We keep payouts predictable and tracking transparent so you always know where you stand.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cards.map(({ title, sub, Icon, rim, glow, dot, surface, dotFade = 1 }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative rounded-3xl p-[1.1px]"
            style={{ background: rim }}
          >
            {/* glow behind */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 blur-3xl opacity-90"
              style={{ background: glow }}
            />

            {/* CARD */}
            <div className="relative overflow-hidden rounded-3xl p-6 shadow-[0_16px_48px_-24px_rgba(2,6,23,.25)]">
              {/* base tint */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: `linear-gradient(0deg, ${surface}, ${surface})` }}
              />

              {/* pattern layer */}
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                style={patternFor(i, dot, dotFade)}
              />

              {/* gentle top sheen */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,0) 38%)",
                }}
              />

              {/* inner border for crispness */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-3xl"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35), inset 0 0 0 0.5px rgba(2,6,23,0.04)",
                  mixBlendMode: "normal",
                }}
              />

              {/* content */}
              <div className="relative">
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 10px 22px -18px rgba(2,6,23,.35)",
                    backdropFilter: "saturate(120%) blur(2px)",
                  }}
                >
                  <Icon className="h-5 w-5" color={dot} />
                </div>

                <h3 className="text-base font-semibold" style={{ color: dot }}>
                  {title}
                </h3>
                <p className="mt-1 text-sm text-slate-800/90">{sub}</p>
              </div>

              {/* hover depth */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[1px]"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.28), 0 28px 60px -36px rgba(2,6,23,.28)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
