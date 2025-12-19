"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

type Office = {
  id: "mumbai" | "pune" | "bengaluru";
  label: string;
  headOffice: string;
  studyCenter: string;
  phone: string;
  phoneDisplay: string;
  whatsapp?: string;
  email: string;
  hours: string;
  mapSrc: string;
  directions: string;
};

const OFFICES: Office[] = [
  {
    id: "mumbai",
    label: "Mumbai",
    headOffice:
      "Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107",
    studyCenter:
      "Shop No 7, Laxmi Palace, Opposite Vidhyavardhini Degree Engineering College, Gurunanak Nagar, Vasai West, Mumbai, Maharashtra - 401202",
    phone: "tel:+918488988984",
    phoneDisplay: "+91 84-889-889-84",
    whatsapp: "https://wa.me/9152929342",
    email: "mailto:contact@cinutedigital.com",
    hours: "Mon–Sat • 9:00 AM – 8:00 PM IST",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.745859738545!2d72.871122!3d19.293415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1af2b2c5fed%3A0x7104f80b9fec8b9d!2sCinute%20Digital%20Pvt.%20Ltd.%20A%20Premier%20Software%20Training%20Institute%20(CDPL)!5e0!3m2!1sen!2sin!4v1759859933212!5m2!1sen!2sin",
    directions:
      "https://www.google.com/maps/place/Cinute+Digital+Pvt.+Ltd.+A+Premier+Software+Training+Institute+(CDPL)/@19.29342,72.8685471,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1af2b2c5fed:0x7104f80b9fec8b9d!8m2!3d19.293415!4d72.871122!16s%2Fg%2F11t5q_mt87?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

export function ContactOfficeMapSection() {
  const [active] = useState<Office>(OFFICES[0]);

  return (
    <section className="relative bg-white dark:[color-scheme:light]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 0%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 90% 0%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Visit <span className="text-brand">Cinute Digital</span> — Ed-Tech Campuses in India
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Explore our modern training centers for <strong>Software Testing courses</strong>,{" "}
            <strong>Data Science &amp; AI programs</strong>, and <strong>Full-Stack Development</strong>. Get{" "}
            <strong>job-ready training</strong>, hands-on labs, and <strong>placement assistance</strong>.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-0.5 rounded-3xl bg-gradient-to-br from-sky-400/40 via-indigo-400/30 to-fuchsia-400/20 blur-[2px]"
            />
            <div className="relative rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">{active.label}</h3>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] text-slate-700">
                  Walk-in Friendly
                </span>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                {/* Address block (single parent wrapper) */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="font-bold text-lg text-brand">Address</div>

                  <div className="mt-2">
                    <div className="font-bold text-lg text-slate-900">
                      Head Office (<span className="text-brand">CDPL</span>)
                    </div>
                    <Link href="https://www.google.com/maps/place/Cinute+Digital+Pvt.+Ltd.+A+Premier+Software+Training+Institute+(CDPL)/@19.29342,72.8685471,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1af2b2c5fed:0x7104f80b9fec8b9d!8m2!3d19.293415!4d72.871122!16s%2Fg%2F11t5q_mt87?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" className="text-base text-slate-800 hover:text-brand transition">{active.headOffice}</Link>
                  </div>

                  <div className="mt-4">
                    <div className="font-bold text-lg text-slate-900 mb-1">Study Center <span className="text-red-700">MeghMehul Classes</span> (Vasai)</div>
                    <Link href="https://maps.app.goo.gl/SACPou6JCdRZh5j98" className="text-base text-slate-800 hover:text-brand transition">{active.studyCenter}</Link>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <div className="font-medium text-lg text-slate-900">Office Hours</div>
                  <div className="mt-1 text-base">{active.hours}</div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Link
                    href={active.phone}
                    className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-sm shadow-sm hover:shadow-md transition"
                    aria-label={`Call ${active.label} office`}
                  >
                    <div className="font-medium text-base text-slate-900">Admissions Helpline</div>
                    <div className="mt-1 text-[14px] text-slate-700">{active.phoneDisplay}</div>
                  </Link>

                  <Link
                    href={active.email}
                    className="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-sm shadow-sm hover:shadow-md transition"
                    aria-label={`Email ${active.label} office`}
                  >
                    <div className="font-medium text-base text-slate-900">Email</div>
                    <div className="mt-1 text-[14px] text-slate-700">
                      {active.email.replace("mailto:", "")}
                    </div>
                  </Link>

                  {active.whatsapp && (
                    <Link
                      href={active.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm shadow-sm hover:shadow-md transition"
                      aria-label={`WhatsApp ${active.label} office`}
                    >
                      <div className="font-medium text-base text-emerald-800">WhatsApp</div>
                      <div className="mt-1 text-emerald-700">Instant Responses</div>
                    </Link>
                  )}

                  <Link
                    href={active.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm shadow-sm hover:shadow-md transition"
                    aria-label={`Get directions to ${active.label}`}
                  >
                    <div className="font-medium text-base text-sky-800">Get Directions</div>
                    <div className="mt-1 text-sky-700">Open in Google Maps</div>
                  </Link>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { title: "Software Testing Training", bgColor: "bg-blue-50", textColor: "text-blue-500" },
                    { title: "Data Science & AI Courses", bgColor: "bg-red-50", textColor: "text-red-500" },
                    { title: "Full-Stack Developer Program", bgColor: "bg-green-50", textColor: "text-green-500" },
                    { title: "Placement Assistance", bgColor: "bg-purple-50", textColor: "text-purple-500" },
                    { title: "Corporate Upskilling", bgColor: "bg-indigo-50", textColor: "text-indigo-600" },
                  ].map((chip) => (
                    <span
                      key={chip.title}
                      className={`rounded-full border border-slate-200 ${chip.bgColor} px-3 py-1 text-xs font-medium ${chip.textColor}`}
                    >
                      {chip.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="relative rounded-3xl border border-slate-100 bg-white shadow-xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 z-10 p-3">
                <div className="mx-auto w-fit rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] text-slate-600 shadow-sm backdrop-blur">
                  {active.label} • Live Location
                </div>
              </div>
              <iframe
                className="w-full h-[570px]"
                src={active.mapSrc}
                title={`${active.label} — Cinute Digital`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Tip: For campus tours and lab access, book a slot with our admissions counselor.
            </p>
          </div>
        </div>
      </div>

      <Script id="org-local-seo" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cinute Digital",
          url: "https://www.cinutedigital.com",
          sameAs: [
            "https://www.facebook.com/",
            "https://www.instagram.com/",
            "https://www.linkedin.com/",
          ],
          contactPoint: OFFICES.map((o) => ({
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: o.phone.replace("tel:", ""),
            email: o.email.replace("mailto:", ""),
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          })),
          // Two addresses per office (Head Office + Study Center)
          address: OFFICES.flatMap((o) => [
            {
              "@type": "PostalAddress",
              name: `${o.label} Head Office`,
              streetAddress: o.headOffice,
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              name: `${o.label} Study Center`,
              streetAddress: o.studyCenter,
              addressCountry: "IN",
            },
          ]),
        })}
      </Script>
    </section>
  );
}
