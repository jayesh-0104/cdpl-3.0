"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AAAVerificationChoiceModal } from "../ui/AAAVerificationChoiceModal";

export default function AAACertificationOutcomesCtaSection() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleOfficial = () => {
    window.open("https://aaa-accreditation.org/adcp/", "_blank");
    setShowModal(false);
  };

  const handleCdpl = () => {
    router.push("/cdpl-certificate-validation");
    setShowModal(false);
  };

  return (
    <section className="bg-white">
      <AAAVerificationChoiceModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onOfficialVerify={handleOfficial}
        onCdplVerify={handleCdpl}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ===== Card 1 — Program outcomes (UNCHANGED) ===== */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <span aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(255,140,0,0.08)" }} />
            <span
              aria-hidden
              className="absolute inset-0 opacity-90 rounded-3xl [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
              style={{
                backgroundImage:
                  "radial-gradient(80% 60% at 100% 0%, rgba(157,123,255,.16), transparent 55%), repeating-linear-gradient(90deg, rgba(157,123,255,.10) 0 1px, transparent 1px 5px)",
              }}
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            <h3 className="relative text-xl font-extrabold text-slate-900">Program outcomes</h3>
            <ul className="relative mt-3 space-y-2 text-sm text-slate-800">
              <li>• AAA exam success path + mock test analytics</li>
              <li>• Portfolio-ready artifacts &amp; capstone</li>
              <li>• Interview readiness &amp; resume alignment</li>
              <li>• Access to CDPL partner opportunities</li>
            </ul>
          </div>

          {/* ===== Card 2 — Next cohort (UNCHANGED from your last good state) ===== */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <span aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(14,165,233,0.10)" }} />
            <span
              aria-hidden
              className="absolute inset-0 opacity-90 rounded-3xl [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
              style={{
                backgroundImage:
                  "radial-gradient(80% 60% at 100% 0%, rgba(16,185,129,.16), transparent 55%), repeating-linear-gradient(90deg, rgba(16,185,129,.12) 0 1px, transparent 1px 5px)",
              }}
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            <h3 className="relative text-xl font-extrabold text-slate-900">Next cohort</h3>
            <p className="relative mt-2 text-sm text-slate-800">
              Limited seats with mentor bandwidth. Early applicants receive capstone prep material.
            </p>
            <div className="relative mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Talk to admissions
              </Link>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Validate a certificate
              </button>
            </div>
          </div>
        </div>

        {/* ===== FAQ — premium, glassy, single-open accordion ===== */}
        <div className="mt-10 relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {/* subtle warm base + thin top highlight */}
          <span aria-hidden className="absolute inset-0" style={{ backgroundColor: "rgba(255,140,0,0.04)" }} />
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.0))",
            }}
          />
          {/* very soft vignette */}
          <span
            aria-hidden
            className="absolute inset-0 opacity-90 rounded-2xl [mask-image:radial-gradient(120%_100%_at_0%_0%,#000_45%,transparent_80%)]"
            style={{ backgroundImage: "radial-gradient(100% 80% at 0% 0%, rgba(255,140,0,.08), transparent 60%)" }}
          />
          {/* glass ring */}
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />

          {/* narrow moving sheen (subtle) */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[-20%] w-[35%] z-[1] opacity-50"
            style={{
              background:
                "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.55) 50%, transparent 65%)",
              transform: "skewX(-10deg)",
              animation: "cdpl-faq-sheen 6s linear infinite",
              mixBlendMode: "overlay",
            }}
          />

          <div className="relative z-10">
            <FAQ
              items={[
                {
                  q: "Is the AAA certificate verifiable?",
                  a: "Yes. Graduates receive a digital certificate with a unique ID verifiable on the CDPL Certificate Validation page.",
                },
                {
                  q: "Do I need prior experience?",
                  a: "Basics help, but we start with foundations and provide bridging resources.",
                },
                {
                  q: "How are assessments conducted?",
                  a: "Time-bounded, proctored assessments with scenario tasks and rubric-based grading.",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Keyframes (sheen) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes cdpl-faq-sheen {
  0%   { transform: translateX(0)    skewX(-10deg); }
  100% { transform: translateX(220%) skewX(-10deg); }
}
        `,
        }}
      />
    </section>
  );
}

/* ---------- FAQ (single-open accordion, smooth motion) ---------- */

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  // Only one row open at a time; first is open by default
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="relative divide-y divide-slate-200">
      {items.map((it, idx) => (
        <FaqRow
          key={it.q}
          q={it.q}
          a={it.a}
          open={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          id={`faq-${idx}`}
        />
      ))}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FaqRow({
  q,
  a,
  open,
  onToggle,
  id,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState(0);

  // measure content height
  useEffect(() => {
    if (bodyRef.current) setMaxH(bodyRef.current.scrollHeight);
  }, [a]);

  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 justify-between px-4 py-4 text-left"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="flex-1 text-sm font-semibold text-slate-900">{q}</span>
        <span className="text-slate-500 group-hover:text-slate-700">
          <Chevron open={open} />
        </span>
      </button>

      <div
        id={id}
        className="relative overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? maxH : 0, opacity: open ? 1 : 0.98 }}
      >
        <div ref={bodyRef} className="px-4 pb-4 text-sm text-slate-700">
          {a}
        </div>
      </div>

      {/* row hover/active background (very subtle) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))" }}
      />
    </div>
  );
}
