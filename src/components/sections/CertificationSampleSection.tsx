"use client";

import { CheckCircle2 } from "lucide-react";



export default function CertificationSampleSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#3CB371]/20 blur-3xl mix-blend-multiply filter" />
                <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl mix-blend-multiply filter" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-5 relative z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#3CB371]/30 bg-[#3CB371]/10 px-3 py-1 text-sm font-medium text-[#3CB371]">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Gold Standard Verification</span>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Authenticity You Can Trust
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            Our certificates are more than just images. They are digital assets backed by a secure, real-time registry.
                            Recruiters can verify credentials instantly, ensuring that every CDPL scholar gets the recognition they deserve.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => {
                                    const el = document.getElementById("validator-section");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:scale-105 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                            >
                                <span>Validate Now</span>
                                <CheckCircle2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* 3D Visual */}
                    <div className="lg:col-span-7 mt-12 lg:mt-0 relative perspective-1000">
                        {/* The "Card" Container - Straight layout now */}
                        <div className="relative transform transition-all duration-700 hover:scale-[1.02] lg:ml-10">

                            {/* Decoration behind */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#3CB371] to-indigo-600 opacity-20 blur-lg" />

                            {/* The Cert Card */}
                            <div className="relative rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                                <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                                    {/* Using valid Image component with next/image */}
                                    <img
                                        src="/certifications_images/cdpl_certifications_validation/cdpl_certificate_validation.jpg"
                                        alt="Sample Certificate"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -right-6 hidden sm:flex h-20 w-20 items-center justify-center rounded-full bg-white p-1 shadow-xl ring-1 ring-slate-900/5">
                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#3CB371]/10">
                                        <CheckCircle2 className="h-8 w-8 text-[#3CB371]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
        /* 3D styles removed for straight layout */
      `}</style>
        </section>
    );
}
