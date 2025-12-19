"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

// ---- Utils ----
const formatCompact = (n: number) =>
    new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 }).format(n);

// Parse a friendly suffix strategy, e.g. 10k+, 120+, 100%
type Suffix = "" | "+" | "%" | "k+" | "M+" | "k";
const applySuffix = (n: number, suffix: Suffix) => {
    switch (suffix) {
        case "%":
            return `${Math.round(n)}%`;
        case "+":
            return `${Math.round(n)}+`;
        case "k":
        case "k+":
        case "M+":
            // Use compact for k/M; preserve +
            return `${formatCompact(n)}${suffix.endsWith("+") ? "+" : ""}`;
        default:
            return `${Math.round(n)}`;
    }
};

// Eases-out smoothly
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// CountUp hook with rAF + IntersectionObserver
function useCountUp(shouldStart: boolean, end: number, durationMs = 1600, reducedMotion = false) {
    const [val, setVal] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!shouldStart || started.current) return;
        started.current = true;

        if (reducedMotion) {
            setVal(end);
            return;
        }

        let raf = 0;
        const start = performance.now();
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            setVal(end * easeOutCubic(t));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [shouldStart, end, durationMs, reducedMotion]);

    return val;
}

type Stat = {
    label: string;
    target: number;
    suffix: Suffix;
    desc: string;
    color: string; // Property for stat color
    bgColor: string;
};

function StatItem({ stat, shouldStart, reducedMotion }: { stat: Stat; shouldStart: boolean; reducedMotion: boolean }) {
    const animated = useCountUp(shouldStart, stat.target, 1400, reducedMotion);
    return (
        <div className={`text-center mt-5 p-5 rounded-2xl border-2 hover:translate-y-1.5 transition-all bg-${stat.bgColor}`} style={{ borderColor: stat.color }}>
            <div className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: stat.color }}>
                {/* Animated number */}
                <span aria-hidden="true">
                    {applySuffix(animated, stat.suffix)}
                </span>
                {/* Accessible, non-animated fallback for screen readers */}
                <span className="sr-only">{applySuffix(stat.target, stat.suffix)}</span>
            </div>
            <div className="mt-1 text-md font-medium text-slate-800">{stat.label}</div>
            <div className="mt-2.5 text-sm leading-5 text-slate-600">
                {stat.desc}
            </div>
        </div>
    );
}

export default function AboutStatsSection() {
    // Define stats with numeric targets, display suffixes, and unique colors
    const stats = useMemo(
        () =>
            [
                {
                    label: "Learners Trained",
                    target: 5000,
                    suffix: "k+" as Suffix,
                    desc: "Upskilled in software testing, data science & AI/ML",
                    color: "#DB2777", // pink-600
                    bgColor: "pink-50"
                },
                {
                    label: "Hiring Partners",
                    target: 50,
                    suffix: "+" as Suffix,
                    desc: "Product companies, startups & global tech leaders",
                    color: "#228B22", // amber-500
                    bgColor: "green-50"
                },
                {
                    label: "Mentors & SMEs",
                    target: 60,
                    suffix: "+" as Suffix,
                    desc: "Industry experts, QA leads & data scientists",
                    color: "#6D28D9", // violet-700
                    bgColor: "violet-50"
                },
                {
                    label: "Placement Support",
                    target: 100,
                    suffix: "%" as Suffix,
                    desc: "Career guidance, mock interviews & referrals",
                    color: "#EA580C", // orange-600
                    bgColor: "orange-50"
                },
            ] as const,
        []
    );

    // IntersectionObserver to trigger once when the grid is visible
    const rootRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!rootRef.current) return;
        const el = rootRef.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.disconnect();
                }
            },
            { rootMargin: "0px 0px -15% 0px", threshold: 0.25 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // Respect prefers-reduced-motion
    const [reducedMotion, setReducedMotion] = useState(false);
    useEffect(() => {
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handler = () => setReducedMotion(m.matches);
        handler();
        m.addEventListener?.("change", handler);
        return () => m.removeEventListener?.("change", handler);
    }, []);

    return (
        <section
            ref={rootRef}
            aria-labelledby="about-stats-heading"
            className="mx-auto max-w-7xl px-4 py-4 md:py-12 sm:px-6 lg:px-8"
        >
            {/* Header */}
            <div className="mb-6 text-center">
                <p className="text-xs w-fit font-medium tracking-wider border border-slate-200 text-slate-700 rounded-full p-2 shadow-sm mx-auto">
                    Outcomes that matter
                </p>
                <h2
                    id="about-stats-heading"
                    className="mt-2 text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-600 to-green-500"
                >
                    Career-focused results with{" "}
                    <span className="text-brand">Cinute Digital</span>
                </h2>
                <p className="mt-6 mx-auto max-w-5xl md:text-lg leading-6 text-slate-600 sm:text-base">
                    Real <strong>EdTech</strong> impact: <strong>industry-ready skills</strong>,{" "}
                    <strong>mentor-led learning</strong>, and <strong>placement assistance</strong> designed
                    for <strong>software testing</strong>, <strong>automation</strong>,{" "}
                    <strong>data science</strong>, and <strong>AI/ML</strong> careers.
                </p>
            </div>

            {/* Stats Card */}
            <div
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/92 p-6 shadow-md hover:shadow-2xl transition-all ring-1 ring-transparent
                   sm:p-8 dark:bg-white/92"
            >
                {/* Subtle futuristic glow contained inside the card */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                        maskImage:
                            "radial-gradient(40% 60% at 80% 0%, black 0%, transparent 60%), radial-gradient(35% 55% at 0% 100%, black 0%, transparent 60%)",
                        WebkitMaskImage:
                            "radial-gradient(40% 60% at 80% 0%, black 0%, transparent 60%), radial-gradient(35% 55% at 0% 100%, black 0%, transparent 60%)",
                        background:
                            "radial-gradient(600px 200px at 80% -10%, rgba(37,99,235,0.10), transparent), radial-gradient(500px 180px at -10% 110%, rgba(34,197,94,0.10), transparent)",
                    }}
                />

                {/* Top badges */}
                <div className="my-5 flex flex-wrap items-center justify-center gap-5">
                    <span className="rounded-full border border-red-500 bg-red-50 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                        Job-Oriented Curriculum
                    </span>
                    <span className="rounded-full border border-blue-500 bg-blue-50 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                        Live Projects & Capstones
                    </span>
                    <span className="rounded-full border border-yellow-500 bg-yellow-50 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                        Mentor-Led Learning
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {stats.map((s, index) => (
                        <StatItem
                            key={`${s.label}-${index}`}
                            stat={s}
                            shouldStart={inView}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </div>

                {/* Bottom CTA line (SEO-friendly anchor) */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
                    <Link
                        href="/jobs/placements"
                        className="inline-flex items-center justify-center rounded-xl ring-1 ring-brand bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
                    >
                        Explore Placements
                    </Link>
                    <Link
                        href="/reviews"
                        className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                    >
                        Read Learner Reviews
                    </Link>
                </div>
            </div>

            {/* Subtext for extra SEO relevance (concise) */}
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-5 text-slate-500">
                Build <strong>job-ready skills</strong> with an <strong>industry-aligned edtech program</strong> in{" "}
                <strong>software testing</strong>, <strong>automation</strong>,{" "}
                <strong>data science</strong>, and <strong>AI/ML</strong>—with{" "}
                <strong>mentorship</strong>, <strong>portfolio projects</strong>, and{" "}
                <strong>placement assistance</strong>.
            </p>
        </section>
    );
}