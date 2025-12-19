"use client";

import {
    CheckCircle2,
    ChevronRight,
    Star,
    ShieldCheck,
    Sparkles,
    Home,
    ArrowRight,
    CloudDownload,
    ArrowDownNarrowWide,
} from "lucide-react";

import React, { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import BrochureDownloadForm from "@/components/BrochureDownloadForm";
import LeadForm from '../forms/ManualCourseLeadForm';
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";
import EnrollModal from "@/components/EnrollModal";


/* ----------------------- NEW: Count-up + Stats ----------------------- */
type StatItem = {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    emphasize?: boolean;
};

const PDF_STATS: StatItem[] = [
    { label: "Training Hours", value: 50, suffix: " hrs", emphasize: true },
    { label: "Job Vacancies (India)", value: 101000, suffix: "+", emphasize: true },
    { label: "Market Growth (2020–2030)", value: 25, suffix: "%" },
    { label: "Job Satisfaction", value: 75, suffix: "%" },
    { label: "India’s Global Share", value: 32, suffix: "%" },
    { label: "Fresher Avg. Salary", value: 4, suffix: " LPA" },
    { label: "Job Assistance", value: 100, suffix: "%" },
    { label: "Years of Expertise", value: 14, suffix: "+" },
];

/* --- after PDF_STATS --- */
type StatColor = {
    bg: string;       // background for primary card
    border: string;   // border color for primary/secondary
    text: string;     // value color
    chip: string;     // small heading color in primary card
};

/** 8 unique color schemes — no repeats */
const STAT_COLORS: StatColor[] = [
    { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-800", chip: "text-indigo-700/80" },
    { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", chip: "text-emerald-700/80" },
    { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", chip: "text-amber-700/80" },
    { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-800", chip: "text-sky-700/80" },
    { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-800", chip: "text-rose-700/80" },
    { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-800", chip: "text-violet-700/80" },
    { bg: "bg-lime-50", border: "border-lime-200", text: "text-lime-800", chip: "text-lime-700/80" },
    { bg: "bg-fuchsia-50", border: "border-fuchsia-200", text: "text-fuchsia-800", chip: "text-fuchsia-700/80" },
];

/** Attach a unique color to each stat (index-aligned) */
type ColoredStat = StatItem & { color: StatColor };
const COLORED_STATS: ColoredStat[] = PDF_STATS.map((s, i) => ({
    ...s,
    color: STAT_COLORS[i], // Assumes same length; we have 8 & 8
}));

type RefLike<T extends Element> = { current: T | null };

function useInView<T extends Element>(ref: RefLike<T>, rootMargin = "0px") {
    const [inView, setInView] = React.useState(false);

    React.useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const obs = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                        break;
                    }
                }
            },
            { root: null, rootMargin, threshold: 0.25 }
        );

        obs.observe(node);
        return () => obs.disconnect();
    }, [ref, rootMargin]);

    return inView;
}

const CountUp: React.FC<{ value: number; duration?: number; formatter?: (n: number) => string }> = ({
    value,
    duration = 1400,
    formatter,
}) => {
    const [val, setVal] = useState(0);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        let raf = 0;
        const step = (ts: number) => {
            if (startRef.current === null) startRef.current = ts;
            const p = Math.min((ts - startRef.current) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(value * eased));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [value, duration]);

    const display = formatter ? formatter(val) : val.toLocaleString();
    return <span>{display}</span>;
};

const StatsBar: React.FC = () => {
    const wrapRef = React.useRef<HTMLDivElement>(null);
    const visible = useInView(wrapRef, "80px");

    // Use the colored stats
    const primary = useMemo(() => COLORED_STATS.filter((s) => s.emphasize), []);
    const secondary = useMemo(() => COLORED_STATS.filter((s) => !s.emphasize), []);

    return (
        <div ref={wrapRef} className="mt-8">
            {/* Primary big cards */}
            <div className="grid grid-cols-2 gap-3">
                {primary.map((s) => (
                    <div
                        key={s.label}
                        className={`rounded-2xl border ${s.color.border} ${s.color.bg} p-3 md:p-4 shadow-sm hover:shadow-md transition`}
                    >
                        <div className={`text-[10px] md:text-xs font-semibold uppercase tracking-wide ${s.color.chip}`}>{s.label}</div>
                        <div className={`mt-1 text-xl md:text-3xl font-extrabold ${s.color.text}`}>
                            {s.prefix ?? ""}
                            {visible ? <CountUp value={s.value} /> : 0}
                            {s.suffix ?? ""}
                        </div>
                    </div>
                ))}
            </div>

            {/* Secondary compact pills */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {secondary.map((s) => (
                    <div
                        key={s.label}
                        className={`flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl border ${s.color.border} bg-white p-3 md:px-4 md:py-3 shadow-sm`}
                        title={s.label}
                    >
                        <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</span>
                        <span className={`text-base md:text-lg font-bold ${s.color.text}`}>
                            {s.prefix ?? ""}
                            {visible ? <CountUp value={s.value} /> : 0}
                            {s.suffix ?? ""}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};



/* ------------------------------------------------------------------- */

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Manual Testing" },
];

export default function HeroManualTesting() {
    const [isDownloadOpen, setIsDownloadOpen] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    return (
        <section className="relative py-10 md:py-12 bg-white" aria-labelledby="manual-testing-hero">
            {/* Background (no color gradients) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_1px)] [background-size:26px_26px]" />
                <div className="absolute top-10 left-4 h-24 w-24 rounded-2xl bg-sky-50 border border-sky-100 shadow-sm" />
                <div className="absolute bottom-12 right-6 h-28 w-28 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm" />
            </div>

            <div className="relative overflow-hidden mx-auto max-w-full xl:max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs for SEO & UX */}
                <nav aria-label="Breadcrumb" className="mb-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <ol className="flex items-center gap-2 text-sm text-slate-600 whitespace-nowrap">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                            aria-current={isLast ? "page" : undefined}
                                            title={c.label}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                                            aria-current={isLast ? "page" : undefined}
                                            title={c.label}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="grid items-start gap-10 lg:gap-16 lg:grid-cols-12 grid-cols-1">
                    {/* LEFT */}
                    <div className="lg:col-span-8">
                        <div className="hidden md:inline-flex mb-4 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-0.5 md:py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                            <Sparkles className="h-4 w-4 text-amber-500" />
                            <span>ISTQB Foundation Aligned • Job-Oriented</span>
                        </div>

                        <h1
                            id="manual-testing-hero"
                            className="mt-3 md:mt-0 text-2xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Best <span className='text-ST'>Manual Testing Course</span>{" "}
                            with 100% Placement <br className="md:hidden" /> Support
                        </h1>

                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Upgrade your QA career with hands-on <strong>Software Testing Training</strong>, <strong>ISTQB Prep</strong>, and real-world{" "}
                            <strong>Manual Testing</strong> projects. Live classes, mentor support, interview preparation, and a curated job pipeline.
                        </p>

                        {/* Lead Form For Mobile Screens and Tab Screens */}
                        {/* Lead Form For Mobile Screens */}
                        <LeadForm variant="elevated" className="lg:hidden mt-8" />

                        {/* Trust Bar */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                            <div className="flex items-center gap-1 text-slate-800">
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                <span className="ml-2 font-semibold">4.9/5</span>
                                <span className="ml-1 text-slate-500">from 1,200+ reviews</span>
                            </div>
                            <span className="hidden h-3 w-px bg-slate-300 md:inline-block" />
                            <div className="flex items-center gap-2 text-slate-800">
                                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                                <span>Trusted by 5000+ learners</span>
                            </div>
                        </div>

                        {/* CTAs */}
                        {/* <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="group inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-4 text-base font-bold text-white shadow-md transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                aria-label="Enroll in Manual Testing Course"
                            >
                                Enroll Now
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </button>

                            <button
                                onClick={() => setIsDownloadOpen(true)}
                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-2 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:shadow-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                aria-label="Download Manual Testing syllabus"
                            >
                                <Download className="mr-2 h-5 w-5 text-slate-700" />
                                Download Syllabus (PDF)
                            </button>

                            <button
                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-sky-700 px-3 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:ml-1"
                                aria-label="Book a free demo class"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Free Demo Class
                            </button>
                        </div> */}

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in Manual Testing program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Download Manual Testing Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <Link
                                href="#curriculum"
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="View full Manual testing curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </Link>

                        </div>

                        {/* Feature bullets */}
                        <ul className="mt-8 grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                            {[
                                { color: "text-emerald-600", text: "12-Week Live Program" },
                                { color: "text-indigo-700", text: "ISTQB Foundation Preparation" },
                                { color: "text-sky-700", text: "Manual + Agile + SDLC/STLC" },
                                { color: "text-rose-700", text: "Resume, Mock Interviews & Referrals" },
                            ].map((item, i) => (
                                <li className="flex items-center gap-2" key={i}>
                                    <CheckCircle2 className={`h-5 w-5 ${item.color}`} />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Company logos + Stats */}
                        <div className="mt-10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Alumni work at</p>
                            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 items-center gap-x-8 gap-y-3 opacity-90">
                                <Image src="/company_images/Testriq-Logo-Black.webp" alt="Testriq" title="Testriq" width={150} height={24} />
                                <Image src="/company_images/axiom.webp" alt="Pixelwave" title="Pixelwave" width={150} height={24} />
                                <Image src="/company_images/credility.webp" alt="Groundwork Systems" title="Groundwork Systems" width={150} height={24} />
                                <Image src="/company_images/marqetrix.webp" alt="Nitrosoft" title="Nitrosoft" width={150} height={24} />
                            </div>

                            {/* NEW: PDF Stats with animated counters */}
                            <StatsBar />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative lg:col-span-4">

                        <LeadForm variant="elevated" className="hidden lg:block" />


                    </div>
                </div>

                {/* Enroll Modal */}
                <EnrollModal
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    courseName="Manual Testing"
                />

                <Modal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} title="Download Manual Testing Syllabus">
                    <BrochureDownloadForm onClose={() => setIsDownloadOpen(false)} />
                </Modal>

                {/* Syllabus Download Modal */}
                <SyllabusDownloadModal
                    isOpen={isSyllabusModalOpen}
                    onClose={() => setIsSyllabusModalOpen(false)}
                    courseName="Manual Testing"
                    source="Manual Testing Course - Hero Section - Download Button"
                />

                {/* SEO helper text */}
                <div className="mx-auto mt-10 max-w-4xl text-center">
                    <p className="text-sm leading-relaxed text-slate-600">
                        Join India’s leading <strong>Manual Testing Course</strong> for freshers and working professionals. Master{" "}
                        <strong>software testing fundamentals, test cases, bug reporting</strong>, <strong>Agile &amp; Scrum</strong>, and interview skills.
                        Available in <strong>online</strong> and <strong>classroom</strong> modes with <strong>placement assistance</strong> across Mumbai • Pune • Bengaluru.
                    </p>
                </div>
            </div>


        </section>
    );
}
