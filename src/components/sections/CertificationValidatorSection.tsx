"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Certificate, getCertificateById } from "@/data/certificates/registry";
import { CheckCircle2, AlertCircle, Link as LinkIcon, Copy } from "lucide-react";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500 dark:text-gray-500">{label}</p>
    </div>
  );
}

/* Dynamic import of the named export */
const CertificationPreviewSection = dynamic(
  () => import("./CertificationPreviewSection").then((m) => m.CertificationPreviewSection),
  { ssr: false, loading: () => <SectionLoader label="Loading preview..." /> }
);

// ============================================================================
// INNER COMPONENT - Uses useSearchParams
// ============================================================================
function CertificationValidatorContent() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Accept generic alphanumeric IDs with dashes/underscores
  const pattern = useMemo(() => /^[A-Z0-9-_]+$/i, []);

  const setUrlId = (id?: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (!id) params.delete("id");
    else params.set("id", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const validateAndShow = (raw: string) => {
    const id = raw.trim().toUpperCase();
    setError("");
    setResult(null);
    setCopied(false);

    if (!pattern.test(id)) {
      setError(
        "Invalid format. Please enter a valid Certificate ID (A–Z, 0–9)."
      );
      setUrlId(undefined);
      return;
    }
    const hit = getCertificateById(id);
    if (!hit) {
      setError("No certificate found for this ID.");
      setUrlId(undefined);
      return;
    }
    setResult(hit);
    setUrlId(hit.id); // show in URL for sharing
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateAndShow(query);
  };

  // Auto-load from ?id=...
  useEffect(() => {
    const id = searchParams?.get("id");
    if (id) {
      setQuery(id);
      validateAndShow(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- Lightbox State ---------- */
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isLightboxOpen]);

  // Hydration-safe links
  const absoluteShareUrl =
    result
      ? `https://www.cinutedigital.com${pathname}?id=${encodeURIComponent(result.id)}`
      : null;

  const relativeShareUrl =
    result
      ? `${pathname}?id=${encodeURIComponent(result.id)}`
      : "#";

  const copyShare = async () => {
    if (!absoluteShareUrl) return;
    try {
      await navigator.clipboard.writeText(absoluteShareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };



  return (
    <section id="validator-section" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Lightbox Overlay */}
        {isLightboxOpen && result && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-h-full max-w-5xl rounded-lg bg-white p-1">
              <button
                type="button"
                className="absolute -right-3 -top-3 rounded-full bg-white p-1 shadow-md hover:bg-slate-100"
                onClick={() => setIsLightboxOpen(false)}
              >
                <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
              <div
                className="overflow-auto"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
              >
                <CertificationPreviewSection cert={result} />
              </div>
            </div>
          </div>
        )}

        {/* ===== Result Section (Separate Block) ===== */}
        {result && (
          <div className="relative mb-8 overflow-hidden rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            {/* success blend */}
            <span
              aria-hidden
              className="absolute inset-0 opacity-90 [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
              style={{
                backgroundImage:
                  "radial-gradient(80% 60% at 100% 0%, rgba(16,185,129,.12), transparent 55%), repeating-linear-gradient(90deg, rgba(255,140,0,.10) 0 1px, transparent 1px 5px)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5"
            />

            <div className="relative z-10 grid gap-8 sm:grid-cols-5">
              {/* Info Column (Left - sm:col-span-3) */}
              <div className="order-2 sm:order-1 sm:col-span-3">
                <div className="flex items-center gap-2">
                  <h3 className="relative z-10 text-lg font-extrabold text-slate-900">
                    Course Completion Certificate
                  </h3>
                  {result.status?.toLowerCase() === "verified" || result.status?.toLowerCase() === "valid" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  ) : null}
                </div>

                <dl className="mt-4 grid grid-cols-1 gap-4 text-sm text-slate-900 sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-500">Certificate ID</dt>
                    <dd className="break-all font-mono font-medium">{result.id}</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-slate-500">Holder</dt>
                    <dd className="font-medium">{result.holder}</dd>
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <dt className="font-semibold text-slate-500">Shareable link</dt>
                    <div className="flex items-center gap-2">
                      <Link
                        href={relativeShareUrl}
                        className="truncate inline-flex items-center gap-1 text-indigo-600 hover:underline underline-offset-4 font-medium"
                      >
                        <LinkIcon className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="truncate">{absoluteShareUrl}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={copyShare}
                        className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-1"
                        aria-label="Copy shareable link"
                        title="Copy"
                      >
                        <Copy className="h-3 w-3" />
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>
                </dl>

                <p className="mt-6 text-xs text-slate-400">
                  This verification is provided by CDPL (Cinute Digital Pvt. Ltd.). If you suspect misuse,{" "}
                  <Link href="/contact-us" className="underline underline-offset-2 hover:text-slate-600">
                    contact CDPL support
                  </Link>
                  .
                </p>
              </div>

              {/* Image Column (Right - sm:col-span-2) */}
              <div className="order-1 sm:order-2 sm:col-span-2">
                <div className="overflow-hidden rounded-xl shadow-sm border border-slate-100">
                  <CertificationPreviewSection
                    cert={result}
                    onClick={() => setIsLightboxOpen(true)}
                  />
                </div>
                <p className="mt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Click image to enlarge
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ===== Form Container ===== */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* blend layers */}
          <span
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(255,140,0,0.05)" }}
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-3xl opacity-90 [mask-image:radial-gradient(140%_120%_at_0%_0%,#000_40%,transparent_70%)]"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg at 100% 0%, rgba(14,165,233,.12), transparent 40%), radial-gradient(80% 60% at 100% 0%, rgba(157,123,255,.12), transparent 55%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5"
          />

          <div className="relative z-10 flex flex-col gap-6">

            {/* Error Message */}
            {error && (
              <div className="relative overflow-hidden rounded-xl border border-red-200 bg-white px-4 py-3 text-sm text-red-700">
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-xl opacity-90 [mask-image:radial-gradient(120%_100%_at_0%_0%,#000_35%,transparent_70%)]"
                  style={{
                    backgroundImage:
                      "radial-gradient(80% 60% at 100% 0%, rgba(248,113,113,.12), transparent 55%), repeating-linear-gradient(45deg, rgba(248,113,113,.10) 0 2px, transparent 2px 6px)",
                  }}
                />
                <div className="relative flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-4 w-4" />
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* ===== Form ===== */}
            <form onSubmit={onSubmit} className="relative z-10 grid gap-3 sm:grid-cols-[1fr_auto]">
              <label htmlFor="certId" className="sr-only">
                Certificate ID
              </label>

              <div className="relative">
                {/* input icon */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="1.6" />
                </svg>

                <input
                  id="certId"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try: CDPLXYXDVE"
                  style={{ color: "black", opacity: 1, colorScheme: "light" }}
                  className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-10 py-2.5 text-sm font-medium !text-black opacity-100 outline-none ring-0 placeholder:text-slate-400 focus:border-orange-300"
                  aria-describedby="certHelp"
                />

                {/* clear button (appears when typing) */}
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                    aria-label="Clear"
                  >
                    Clear
                  </button>
                ) : null}
              </div>

              <button
                type="submit"
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 flex items-center gap-2"
              >
                <span>Validate</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </button>

              {/* helper + quick examples */}
              <p id="certHelp" className="col-span-full text-xs text-slate-600">
                Enter the exact Certificate ID (e.g. CDPLXYXDVE).
              </p>
              <div className="col-span-full flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setQuery("CDPLXYXDVE")}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
                  aria-label="Use example CDPLXYXDVE"
                >
                  CDPLXYXDVE
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="sr-only">Validate CDPL AAA and ACTD certificates using their unique IDs.</p>
      </div>
    </section>
  );
}

// ============================================================================
// OUTER COMPONENT - Wraps with Suspense
// ============================================================================
export default function CertificationValidatorSection() {
  return (
    <Suspense fallback={<SectionLoader label="Loading validator..." />}>
      <CertificationValidatorContent />
    </Suspense>
  );
}
