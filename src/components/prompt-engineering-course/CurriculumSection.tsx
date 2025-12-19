// components/sections/CurriculumSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Unique accent colors per module (no repeats). Explicit top-bar classes (kept by Tailwind).
"use client";

import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: { bg: string; text: string; border: string; ring: string; bar: string };
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Introduction to AI",
    outcome:
      "What is AI, its evolution, and importance • Real-world applications • AI vs. Machine Learning vs. Deep Learning • Limitations and ethical considerations.",
    accent: { bg: "bg-green-50", text: "text-green-900", border: "border-green-200", ring: "focus:ring-green-300", bar: "bg-green-600" },
  },
  {
    num: "02",
    title: "AI Ecosystem & ML Foundations",
    outcome:
      "Subfields of AI (NLP, Computer Vision, Robotics, ML) • Intro to Machine Learning • Learning types (Supervised, Unsupervised) • Basics of Neural Networks • Everyday AI-powered tech.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300", bar: "bg-sky-600" },
  },
  {
    num: "03",
    title: "Introduction to Generative AI",
    outcome:
      "What Generative AI is and how it creates new content • How it differs from traditional AI • Cross-domain use cases (marketing, healthcare, finance, gaming, etc.).",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300", bar: "bg-amber-600" },
  },
  {
    num: "04",
    title: "Generative Learning & Technical Concepts",
    outcome:
      "Foundational model families (LLMs, LIMs, LAMs) • Fine-tuning and transfer learning • Transformer architecture fundamentals.",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300", bar: "bg-violet-600" },
  },
  {
    num: "05",
    title: "Evolution & Power of Large Language Models",
    outcome:
      "LLM basics (NLP, prompting, zero-shot & few-shot) • Evolution of LLMs (GPT, Claude, Llama, Gemini/Bard, Pi) • Tokenization, embeddings, context windows • Real-world use cases (chat & voice assistants).",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300", bar: "bg-emerald-600" },
  },
  {
    num: "06",
    title: "Computer Vision & LIMs — Teaching AI to See",
    outcome:
      "Intro to Computer Vision • Image processing and feature extraction • Large Image Models (Stable Diffusion, Leonardo.ai, DALL-E) • LIM applications.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300", bar: "bg-rose-600" },
  },
  {
    num: "07",
    title: "Video, Speech & Generative AI Tools",
    outcome:
      "Video & speech AI tooling (e.g., VEED, PlayHT, Suno.ai) • Text-to-Speech & Speech-to-Text applications • AI-powered video & audio generation.",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300", bar: "bg-indigo-600" },
  },
  {
    num: "08",
    title: "Prompt Engineering & Practical Applications",
    outcome:
      "Prompting foundations • Zero-shot, one-shot, few-shot techniques • Case studies (e.g., brand campaigns) • Hands-on: designing prompts across different AI models.",
    accent: { bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", ring: "focus:ring-teal-300", bar: "bg-teal-600" },
  },
  {
    num: "09",
    title: "Responsible AI & Governance",
    outcome:
      "Ethics and bias in AI models • Governance for responsible deployment • Regulations & compliance • Best practices: Human-in-the-loop, monitoring, AI collaboration.",
    accent: { bg: "bg-fuchsia-50", text: "text-fuchsia-900", border: "border-fuchsia-200", ring: "focus:ring-fuchsia-300", bar: "bg-fuchsia-600" },
  },
  {
    num: "10",
    title: "Capstone Project & Certification",
    outcome:
      "Real-world AI implementation project • Assessment and certification pathway.",
    accent: { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200", ring: "focus:ring-cyan-300", bar: "bg-cyan-600" },
  },
];

export default function CurriculumSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Prompt Engineering Course";
  const source = "Prompt Engineering Course Page - Curriculum Section";

  const subtitle =
    "A 10-module, industry-aligned pathway from AI/ML foundations to Generative AI, LLMs, Vision & Speech, Prompt Engineering, Responsible AI, and a hands-on capstone.";
  const keywords =
    "prompt engineering syllabus, generative ai course curriculum, LLM evolution, transformer architecture, embeddings and context window, computer vision LIMs, TTS STT tools, responsible AI governance, capstone certification";


  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative overflow-hidden py-4 md:py-6 bg-white">
      {/* Subtle futuristic backdrop (thin grid + soft mask; minimal, non-distracting) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            10-Module <span className="text-DS">Curriculum</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>
          {/* Hidden SEO keywords */}
          <p className="sr-only">{keywords}</p>

          {/* Micro badges (distinct accents, no repeats) */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-700 sm:grid-cols-4">
            <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-green-900">AI & ML Core</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">LLMs & Transformers</span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-900">Vision, Video & Speech</span>
            <span className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-fuchsia-900">Prompting & Responsible AI</span>
          </div>
        </header>

        {/* Modules grid */}
        <ol className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2" aria-label="Program modules">
          {MODULES.map((m) => (
            <li key={m.num} className="relative">
              <article
                tabIndex={0}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-5 md:p-6 shadow-sm backdrop-blur transition-all duration-200 h-full flex flex-col",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  m.accent.bg,
                  m.accent.border,
                  m.accent.ring,
                ].join(" ")}
                aria-label={`${m.num} — ${m.title}`}
                title={m.title}
              >
                {/* Top accent bar (explicit class so Tailwind keeps it) */}
                <div className={["absolute left-0 top-0 h-1.5 w-full", m.accent.bar].join(" ")} aria-hidden />

                <div className="flex items-start gap-3">
                  {/* Number badge */}
                  <div
                    className={[
                      "grid h-10 w-10 place-items-center rounded-xl border text-sm font-extrabold shadow-sm bg-white ring-1 ring-black/5",
                      m.accent.text,
                      m.accent.border,
                    ].join(" ")}
                    aria-label={`Module ${m.num}`}
                  >
                    {m.num}
                  </div>

                  {/* Text block */}
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">{m.outcome}</p>
                  </div>
                </div>

                {/* Footer chips */}
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5">
                    Hands-On Lab
                  </span>
                  <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-black/5">
                    Best Practices
                  </span>
                  <span className={["rounded-md px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-black/5", m.accent.bar].join(" ")}>
                    Mentor Tips
                  </span>
                </div>

                {/* Bottom progress hint (fills on hover) */}
                <div className="mt-4 h-1 w-full rounded-full bg-white/80" aria-hidden>
                  <div
                    className={[
                      "h-1 w-0 rounded-full transition-[width] duration-500 ease-out group-hover:w-4/5",
                      m.accent.bar,
                    ].join(" ")}
                  />
                </div>
              </article>
            </li>
          ))}
        </ol>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download the detailed Generative AI syllabus"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-green-200"
            aria-label="Apply for the Generative AI program"
          >
            Apply Now
          </button>
        </div>

        {/* Footnote */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
          *Module order may vary based on cohort needs and instructor discretion.
        </p>

        <EnrollModal
          isOpen={isEnrollOpen}
          onClose={() => setIsEnrollOpen(false)}
          source={`${source} - Apply Now`}
          courseName={courseName}
        />

        <SyllabusDownloadModal
          isOpen={isSyllabusOpen}
          onClose={() => setIsSyllabusOpen(false)}
          source={`${source} - Syllabus Download`}
          courseName={courseName}
        />
      </div>

    </section>
  );
}
