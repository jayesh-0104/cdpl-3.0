// components/sections/HeroSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Assumes you have a client LeadForm at "../CourseLeadForm" (same API-testing style).

"use client";

import Link from "next/link";
import ApiCourseLeadForm from "../forms/ApiCourseLeadForm";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import CareerSessionModal from "../CareerSessionModal";
import { ChevronRight, Home, ArrowRight, CloudDownload, ArrowDownNarrowWide } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Advanced DS & ML Masterclass", href: "/data-science-course" },
  ];

  const courseName = "Advanced Data Science and Machine Learning Masterclass";

  const handleScrollToCurriculum = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('curriculum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" aria-labelledby="dsml-hero" className="relative overflow-hidden">
      {/* Subtle futuristic frame (thin grid + soft radial glow; minimal gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:radial-gradient(800px_240px_at_18%_0%,rgba(124,58,237,0.10),transparent_60%),radial-gradient(900px_260px_at_92%_0%,rgba(37,99,235,0.10),transparent_60%),linear-gradient(180deg,#fafafa,white)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-12%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-12 md:pb-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 overflow-x-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600 min-w-max">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Link
                  href={c.href}
                  className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* Left column: Copy */}
          <div className="md:col-span-7 lg:col-span-8">
            {/* Micro-badges (distinct colors, no repeats) */}
            <div className="mb-4 hidden lg:flex w-fit items-center gap-2 text-[11px] font-semibold text-slate-700">
              <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-indigo-700 border border-indigo-200">Live Online + Classroom</span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-800 border border-emerald-200">200 Hours</span>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-900 border border-amber-200">Project-based</span>
              <span className="rounded-full bg-rose-50 px-2 py-0.5 text-rose-800 border border-rose-200">Placement Support</span>
            </div>

            <h1
              id="dsml-hero"
              className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
            >
              Master Program in{" "}
              <span className="text-DS">Advanced Data Science</span> &{" "}
              <span className="text-DS">Machine Learning</span>
            </h1>

            {/* Mobile form directly under headline (FORM 1) */}
            <div className="mt-5 block md:hidden">
              <ApiCourseLeadForm source="Data Science Course Page - Hero Section" courseName={courseName} />
            </div>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Become industry-ready with <strong>Statistics</strong>, <strong>Supervised & Unsupervised ML</strong>,{" "}
              <strong>Feature Engineering</strong>, <strong>Model Evaluation</strong>, and <strong>Deployments</strong>.
              Build portfolio projects and earn a <strong>QR-verified certificate</strong>.
            </p>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Curriculum includes Python (Pandas/NumPy), EDA & Data Visualization, Scikit-learn, XGBoost, basic Deep Learning,
              ML pipelines, <abbr title="Machine Learning Operations">MLOps</abbr> fundamentals, and CI/CD best practices.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                aria-label="Enroll now in Advanced Data Science & Machine Learning course"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setIsSyllabusOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                aria-label="Download Data Science Syllabus"
              >
                Download Syllabus
                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </button>

              <a
                href="#curriculum"
                onClick={handleScrollToCurriculum}
                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                aria-label="View full Data Science & Machine Learning curriculum"
              >
                View Curriculum
                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </a>
            </div>

            {/* Quick highlights (distinct accent bullets; no repeats) */}
            <ul className="mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                80% practical labs with mentor feedback
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                End-to-end ML projects & reproducible pipelines
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-rose-600" />
                Model evaluation, tracking, and reporting
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-600" />
                CI/CD for ML: basics of containers & deployment
              </li>
            </ul>

            {/* Trust strip */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
              <span className="text-yellow-600">★★★★★</span>
              <span>#1 Mumbai’s Premium Training Institute</span>
            </div>
          </div>

          {/* Right column: Desktop form & visual (FORM 2) */}
          <aside className="md:col-span-5 lg:col-span-4 hidden md:block">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="p-4 sm:p-5">
                <ApiCourseLeadForm source="Data Science Course Page - Hero Section" courseName={courseName} />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Science Course Page - Enroll Now - Hero Section"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Science Course Page - Hero Section - Syllabus Download"
        courseName={courseName}
      />
      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Data Science Course Page - Hero Section - Free Demo"
        courseName={courseName}
      />
    </section>
  );
}
