"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

const BRAND_ORANGE = "rgb(255, 140, 0)";
const BRAND_BLUE = "#0069A8";

export default function ACTDCertificationHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-indigo-700">Home</Link>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            <li className="font-medium text-slate-700">ACTD Certification</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700"
              style={{ border: `1px solid ${BRAND_ORANGE}` }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND_ORANGE }}
              />
              ACTD-aligned • Portfolio-first
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span style={{ color: BRAND_BLUE }}>ACTD Certification</span>
              <span style={{ color: BRAND_ORANGE }}> by CDPL</span>
            </h1>

            <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-slate-600 lg:mx-0">
              Learn through sprints, labs, mentor reviews, and a capstone that proves your skills to recruiters.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#actd-tracks"
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: BRAND_ORANGE, boxShadow: "0 6px 16px rgba(255,140,0,0.25)" }}
              >
                Explore tracks
              </Link>
              <Link
                href="https://www.actd.us/verify-certificate/"
                target="_blank"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                style={{ border: "1px solid #e2e8f0" }}
              >
                Validate a certificate
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/certifications_images/actd_certifications/actd_certificate_cinute.jpg"
              alt="ACTD training illustration"
              title="ACTD training illustration"
              width={1280}
              height={960}
              className="h-auto w-full max-w-[36rem] rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
