"use client";

import { useMemo, useRef, useState, useEffect } from "react";

/**
 * MentorsImpactSection — refined spacing:
 * - Reduced left padding for right-side content
 * - Added space between stats (metrics) and cards
 * - Avatar still overlaps neatly
 */

const CDPL_ORANGE = "#ff8c00";
const CDPL_PEACH = "#ffd19e";
const CDPL_GLOW =
  "radial-gradient(closest-side, rgba(255,140,0,.26), rgba(255,140,0,0) 70%)";
const GRADIENT_OUTLINE = `linear-gradient(90deg, ${CDPL_ORANGE}35 0%, ${CDPL_PEACH}45 100%)`;
const NOISE =
  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" opacity=\"0.08\" width=\"80\" height=\"80\" viewBox=\"0 0 80 80\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')";

const METRIC_CARD_BACKGROUNDS = [
  {
    border: "border-orange-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(255,140,0,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 220deg at 25% 0%, rgba(255,212,170,0.65), rgba(255,166,77,0.35) 35%, rgba(255,212,170,0.65) 65%, rgba(255,166,77,0.35))",
        "radial-gradient(90% 80% at 100% 0%, rgba(255,176,102,0.45) 0%, rgba(255,176,102,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
  {
    border: "border-sky-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(2,132,199,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 210deg at 25% 0%, rgba(186,230,253,0.65), rgba(125,211,252,0.35) 35%, rgba(186,230,253,0.65) 65%, rgba(125,211,252,0.35))",
        "radial-gradient(90% 80% at 100% 0%, rgba(148,216,255,0.45) 0%, rgba(148,216,255,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
  {
    border: "border-emerald-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(16,185,129,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 225deg at 25% 0%, rgba(187,247,208,0.65), rgba(134,239,172,0.35) 35%, rgba(187,247,208,0.65) 65%, rgba(134,239,172,0.35))",
        "radial-gradient(90% 80% at 100% 0%, rgba(160,240,195,0.45) 0%, rgba(160,240,195,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
  {
    border: "border-violet-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(139,92,246,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 200deg at 25% 0%, rgba(221,214,254,0.68), rgba(196,181,253,0.38) 35%, rgba(221,214,254,0.68) 65%, rgba(196,181,253,0.38))",
        "radial-gradient(90% 80% at 100% 0%, rgba(210,200,255,0.48) 0%, rgba(210,200,255,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
];

import { MENTORS } from "@/lib/mentorShared";

type MentorCardTweak = Record<string, string>;
const IMG_TWEAKS: MentorCardTweak = {
  "Dnyaneshwar Bhabad": "object-[50%_30%] scale-[1.06]",
};

const DOMAINS = [
  "Software Testing",
  "Data Science",
  "Business Intelligence",
  "Artificial Intelligence",
  "Digital Marketing",
];

export default function MentorsImpactSection() {
  const [domain, setDomain] = useState<string>("");

  const filtered = useMemo(() => {
    const d = domain.toLowerCase();
    return MENTORS.filter((m) => !d || m.domain.toLowerCase() === d);
  }, [domain]);


  return (
    <section
      id="mentors-impact"
      aria-labelledby="mentors-impact-title"
      className="relative isolate overflow-hidden bg-white text-zinc-900"
      data-theme="light"
    >
      {/* background glows */}
      <div
        className="pointer-events-none absolute -top-28 right-[-10%] h-80 w-[48rem] rounded-full blur-[70px] opacity-22"
        style={{ background: CDPL_GLOW }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-[-10%] h-80 w-[48rem] rounded-full blur-[70px] opacity-18"
        style={{ background: CDPL_GLOW }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-4 lg:pt-16 xl:pt-0 md:pb-16">
        {/* Header */}
        <header className="mb-5 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {["Top-rated Industry Experts", "1:1 Live Mentorship", "Career-Focused Guidance"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-700 shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>

          <h2 id="mentors-impact-title" className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
            Learn Faster with{" "}
            <span className="drop-shadow-sm text-[var(--color-brand,#ff8c00)]">CDPL World-Class Mentors</span>
          </h2>

          <p className="mt-2 max-w-3xl text-[15px] sm:text-base text-zinc-800">
            Accelerate your career with <strong>outcome-driven mentorship</strong> from leaders at Google, Microsoft,
            Amazon, and high-growth startups. Master <strong>Data Science</strong>, <strong>Machine Learning</strong>,{" "}
            <strong>Software Testing</strong> and <strong>Product Management</strong> through live projects, interview
            prep, and portfolio reviews designed for <strong>job placement</strong> and <strong>promotions</strong>.
          </p>

          {/* Domain filter */}
          <div role="group" aria-label="Mentor domain filter" className="mt-4 max-w-sm">
            <label className="block rounded-xl border border-zinc-200 bg-white px-3 py-2.5 shadow-sm">
              <div className="mb-1 text-[12px] font-semibold uppercase tracking-wide text-zinc-500">
                Filter by Domain
              </div>

              <select
                id="mentor-domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="sr-only"
                aria-label="Filter mentors by domain"
              >
                <option value="">All domains</option>
                {DOMAINS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <FancySelect value={domain} onChange={setDomain} options={["All domains", ...DOMAINS]} className="w-full" />
            </label>
          </div>
        </header>

        {/* Metrics */}
        <div className="mb-6 grid gap-3 sm:grid-cols-4">
          {[
            { num: "2,400+", label: "1:1 Sessions / month" },
            { num: "96%", label: "Interview-ready in 8 weeks" },
            { num: "4.9/5", label: "Average mentor rating" },
            { num: "50+", label: "Hiring partners" },
          ].map((m, i) => {
            const bg = METRIC_CARD_BACKGROUNDS[i % METRIC_CARD_BACKGROUNDS.length];
            return (
              <div
                key={m.label}
                className={`relative overflow-hidden rounded-2xl border p-4 text-center shadow-sm ${bg.border} ${bg.ring}`}
                style={bg.style}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "conic-gradient(from 140deg at 0% 0%, rgba(255,255,255,0.6), transparent 20%, transparent 80%, rgba(255,255,255,0.35))",
                    opacity: 0.25,
                    WebkitMask: "radial-gradient(120% 80% at 0% 0%, black 45%, transparent 70%)",
                    mask: "radial-gradient(120% 80% at 0% 0%, black 45%, transparent 70%)",
                  }}
                />
                <div className="text-xl font-extrabold tracking-wide text-orange-500">{m.num}</div>
                <div className="mt-1 text-xs text-zinc-800">{m.label}</div>
              </div>
            );
          })}
        </div>

        {/* Cards — extra space above, reduced left padding for content */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, idx) => {
            const tweak = IMG_TWEAKS[m.name] || "";
            const hue = [28, 210, 162, 262, 34, 196, 142][idx % 7];

            return (
              <article
                key={m.name}
                className="relative rounded-3xl border border-zinc-200 p-5 pt-7 pr-6 pb-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label={`${m.name} — ${m.title}, ${m.company}`}
                style={{
                  backgroundImage: [
                    `linear-gradient(135deg, hsla(${hue}, 90%, 94%, .95) 0%, hsla(${hue}, 98%, 90%, .85) 55%, hsla(${hue}, 98%, 88%, .70) 100%)`,
                    NOISE,
                  ].join(","),
                  backgroundBlendMode: "soft-light, multiply",
                }}
              >
                <div aria-hidden className="pointer-events-none absolute -inset-px rounded-3xl opacity-38" style={{ backgroundImage: GRADIENT_OUTLINE }} />

                {/* Avatar overlapping */}
                <div className="absolute -top-3 -left-3">
                  <div className="h-[108px] w-[108px] rounded-2xl bg-zinc-100 shadow-lg ring-1 ring-black/5 overflow-hidden">

                    <img
                      src={m.avatar}
                      alt={`Mentor portrait — ${m.domain} ${m.company}`}
                      title={`Mentor portrait — ${m.domain} ${m.company}`}
                      width={108}
                      height={108}
                      loading="lazy"
                      className={`block h-full w-full object-cover ${tweak}`}
                    />
                  </div>
                </div>

                {/* Reduced left padding for right-side content */}
                <div className="min-w-0 pl-24 md:pl-24">
                  <h3 className="truncate text-[16px] font-extrabold leading-tight">{m.name}</h3>
                  <p className="mt-1 text-[13px] text-zinc-700 line-clamp-2">
                    {m.title} · {m.company}
                  </p>

                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-zinc-700">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: CDPL_ORANGE }} aria-hidden="true" />
                    {m.domain}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.highlights?.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200 bg-white/90 backdrop-blur px-2 py-1 text-[11px] text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Keep heights even to avoid weird holes */}
                <style jsx>{`
                  article { min-height: 220px; }
                  @media (min-width: 768px) { article { min-height: 230px; } }
                `}</style>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            "Trusted by 5,000+ learners",
            "Outcome-driven mentorship",
            "Placement support & referrals",
            "Live projects & code reviews",
            "Interview prep bootcamps",
          ].map((t) => (
            <span
              key={t}
              className="snap-start whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="sr-only">
          CDPL Mentors for Data Science, AI/ML, Full-Stack Development, Cloud & DevOps, Product Management, and UI/UX Design
        </h3>

        <p className="mt-3 text-center text-xs text-zinc-700">
          Tip: Book a free 15-minute intro to map your career goals and create a personalized learning roadmap.
        </p>
      </div>

    </section>
  );
}

/* ---------- Tiny, accessible custom select (styled options) ---------- */
function FancySelect({
  value,
  onChange,
  options,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const display = value || "All domains";
  const selectedIndex = options.findIndex((o) => o === display);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (!btnRef.current?.contains(t) && !listRef.current?.contains(t)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function choose(v: string) {
    setOpen(false);
    onChange(v === "All domains" ? "" : v);
    btnRef.current?.focus();
  }

  function onKey(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        const el = listRef.current?.querySelector<HTMLLIElement>(
          `li[data-index="${Math.max(0, selectedIndex)}"]`
        );
        el?.focus();
      });
    }
  }

  function onItemKey(e: React.KeyboardEvent<HTMLLIElement>, i: number) {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current!.focus();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(options[i]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      (e.currentTarget.nextElementSibling as HTMLLIElement | null)?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      (e.currentTarget.previousElementSibling as HTMLLIElement | null)?.focus();
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={onKey}
        className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--color-brand,#ff8c00)]/30"
      >
        <span className="truncate">{display}</span>
        <svg
          className={`ml-2 h-4 w-4 shrink-0 text-zinc-500 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.18z" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-activedescendant={`opt-${Math.max(0, selectedIndex)}`}
          className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-zinc-200 bg-white py-1 shadow-lg"
        >
          {options.map((opt, i) => {
            const active = i === selectedIndex;
            return (
              <li
                key={opt}
                id={`opt-${i}`}
                data-index={i}
                role="option"
                aria-selected={active}
                tabIndex={0}
                onKeyDown={(e) => onItemKey(e, i)}
                onClick={() => choose(opt)}
                className={`mx-1 flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-[rgba(255,140,0,.08)] ${active ? "bg-[rgba(255,140,0,.12)] font-semibold text-zinc-900" : "text-zinc-800"
                  }`}
              >
                <span className="truncate">{opt}</span>
                {active && (
                  <svg className="ml-3 h-4 w-4 text-[var(--color-brand,#ff8c00)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.415l-7.01 7.01a1 1 0 01-1.414 0L3.296 8.72a1 1 0 011.414-1.415l3.154 3.155 6.303-6.303a1 1 0 011.537.133z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
