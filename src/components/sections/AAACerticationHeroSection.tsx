"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";


import { useState } from "react";
import { AAAVerificationChoiceModal } from "../ui/AAAVerificationChoiceModal";
import { useRouter } from "next/navigation";

export default function AAACerticationHeroSection() {
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
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      <AAAVerificationChoiceModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onOfficialVerify={handleOfficial}
        onCdplVerify={handleCdpl}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-indigo-700">Home</Link>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            <li className="font-medium text-slate-700">AAA Certification</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#ff8c00" }} />
              Official AAA-aligned • Proctored exam
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span style={{ color: "#0069A8" }}>AAA Certification </span>
              <span style={{ color: "rgb(255, 140, 0)" }}>by CDPL</span>
            </h1>

            <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-slate-600 lg:mx-0">
              Hands-on labs, mentor guidance, and a verifiable digital certificate designed for hiring outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#aaa-curriculum"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                View curriculum
              </Link>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Validate a certificate
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Image
              // /certifications_images/aaa_certifications/aaa_certificate_cinute
              src="/certifications_images/aaa_certifications/aaa_certificate_cinute.jpg"
              alt="AAA certification illustration"
              title="AAA certification illustration"
              width={1280}
              height={960}
              className="h-auto w-full max-w-[36rem] rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
      <p className="sr-only">
        CDPL AAA certification course with labs, mentor support, and proctored assessment.
      </p>
    </section>
  );
}
