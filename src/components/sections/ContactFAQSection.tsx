"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";

type FAQ = { q: string; a: string; cat: "Admissions" | "Learning" | "Financing" | "Placement" | "Corporate" };

const ALL_FAQS: FAQ[] = [
  // — Admissions
  {
    cat: "Admissions",
    q: "How do I apply for a course at Cinute Digital?",
    a: "Submit the contact form or book a free 1:1 counseling call. Our admissions team will guide you through eligibility, batch start dates, and required documents.",
  },
  {
    cat: "Admissions",
    q: "What are the eligibility criteria?",
    a: "Open to graduates, final-year students, and working professionals. For advanced tracks in Data Science & AI or Full-Stack, basic programming familiarity is recommended.",
  },
  {
    cat: "Admissions",
    q: "Do you share a detailed syllabus before enrollment?",
    a: "Yes. We provide curriculum PDFs covering modules, projects, tools, and assessments for Software Testing, Data Science & AI, and Full-Stack Development.",
  },

  // — Learning
  {
    cat: "Learning",
    q: "Are classes live or self-paced?",
    a: "Live mentor-led classes with recordings, hands-on labs, capstone projects, and weekly doubt-solving support.",
  },
  {
    cat: "Learning",
    q: "Which tools and technologies will I learn?",
    a: "Programs include Git & GitHub, SQL, Python, Power BI, Tableau, React, Node.js, Selenium, Postman, and more—aligned with current industry hiring.",
  },
  {
    cat: "Learning",
    q: "Do you provide certificates?",
    a: "Yes. On successful completion you receive an industry-recognized certificate from Cinute Digital along with project portfolios.",
  },

  // — Financing
  {
    cat: "Financing",
    q: "Do you have EMI or flexible payment options?",
    a: "Yes. We offer convenient EMI plans via finance partners and occasional scholarships on eligible programs.",
  },
  {
    cat: "Financing",
    q: "Are there any scholarships or discounts?",
    a: "Merit-based and need-based scholarships are available on select batches. Speak to admissions for current offers and criteria.",
  },

  // — Placement
  {
    cat: "Placement",
    q: "Do you offer placement assistance?",
    a: "Yes—resume reviews, mock interviews, LinkedIn optimization, career counseling, and hiring drives with partner companies.",
  },
  {
    cat: "Placement",
    q: "What is the average placement support timeline?",
    a: "Most learners start interview pipelines within 4–8 weeks of completing capstone projects and meeting placement-readiness criteria.",
  },

  // — Corporate
  {
    cat: "Corporate",
    q: "Can you customize corporate training for teams?",
    a: "Absolutely. We tailor content, labs, assessments, and delivery (online or on-site) to your team’s skill gaps, tools, and timelines.",
  },
  {
    cat: "Corporate",
    q: "Do you conduct upskilling bootcamps for companies?",
    a: "Yes. We run outcome-driven bootcamps in Software Testing, Data Analytics, AI, and Full-Stack with real datasets and internal use-cases.",
  },

  // quick response
  {
    cat: "Admissions",
    q: "How soon will I get a response after contacting you?",
    a: "Within one business day. For urgent queries, use WhatsApp for the fastest response during working hours.",
  },
];

const CATEGORIES: Array<FAQ["cat"]> = ["Admissions", "Learning", "Financing", "Placement", "Corporate"];

export function ContactFAQSection() {
  const [query] = useState("");
  const [activeCat, setActiveCat] = useState<FAQ["cat"] | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_FAQS.filter((f) => (activeCat === "All" ? true : f.cat === activeCat) && (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)));
  }, [query, activeCat]);

  const faqJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filtered.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }), [filtered]);

  return (
    <section className="relative bg-white dark:[color-scheme:light]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 12% 0%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 88% 0%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6 md:py-12">
        <div className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-xl p-6 sm:p-8">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900">Frequently <span className="text-brand">Asked</span> Questions</h2>
            <p className="mt-5 text-lg text-slate-600">
              Everything you need to know about <strong>admissions</strong>, <strong>live mentor-led learning</strong>,{" "}
              <strong>EMI & scholarships</strong>, and <strong>placement assistance</strong> at Cinute Digital.
            </p>
          </div>

          {/* Category pills */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {["All", ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c as FAQ["cat"] | "All")}
                  className={[
                    "rounded-full border px-3 py-1.5 text-sm transition",
                    activeCat === c
                      ? "border-indigo-300 bg-indigo-50 text-indigo-800"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {filtered.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 open:bg-white open:shadow-md transition"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[12px] font-medium text-slate-600">
                      {item.cat}
                    </span>
                    <h3 className="mt-2 text-lg text-slate-900 font-semibold">{item.q}</h3>
                  </div>
                  <span
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition group-open:rotate-45"
                    aria-hidden
                    title="Toggle"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 text-slate-700 leading-7">{item.a}</div>
              </details>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-800">
              No results. Try searching for <em>EMI</em>, <em>placements</em>, or <em>syllabus</em>.
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-indigo-50 p-5 sm:p-6 text-center">
            <p className="text-slate-700">
              Still have questions? Our advisors can help with <strong>course selection</strong>,{" "}
              <strong>career pathways</strong>, and <strong>financing options</strong>.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://wa.me/9152929342"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2.5 text-white text-sm font-medium shadow-md transition hover:bg-sky-700"
              >
                WhatsApp Us
              </Link>
              <Link
                href="tel:+91 788-83-83-788"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sky-700 text-sm font-medium shadow-sm transition hover:bg-slate-50"
              >
                Call Admissions
              </Link>
              <Link
                href="mailto:contact@cinutedigital.com"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-white text-sm font-medium shadow-md transition hover:bg-indigo-700"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </section>
  );
}