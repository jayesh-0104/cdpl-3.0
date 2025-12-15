"use client";

import { ShieldCheck, Zap, Globe } from "lucide-react";

const features = [
    {
        name: "Instant Verification",
        description: "Real-time validation against our secure registry. Zero wait time.",
        icon: Zap,
        gradient: "from-amber-50 to-orange-50",
    },
    {
        name: "Tamper-Proof Security",
        description: "Immutable digital IDs ensuring qualifications cannot be forged.",
        icon: ShieldCheck,
        gradient: "from-emerald-50 to-teal-50",
    },
    {
        name: "Globally Recognized",
        description: "Trusted credentials that serve as your digital passport worldwide.",
        icon: Globe,
        gradient: "from-blue-50 to-indigo-50",
    },
];

export default function CertificationFeaturesSection() {
    return (
        <section className="bg-slate-50/50 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Why Verify with CDPL?
                    </h2>
                    <div className="mt-4 flex justify-center">
                        <div className="h-1.5 w-24 rounded-full bg-[#3CB371]" />
                    </div>
                </div>

                {/* Fancy Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.name}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-200 hover:ring-[#3CB371]/50"
                        >
                            {/* Hover Gradient Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                            />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3CB371]/10 transition-colors duration-300 group-hover:bg-[#3CB371]">
                                    <feature.icon className="h-7 w-7 text-[#3CB371] transition-colors duration-300 group-hover:text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {feature.name}
                                </h3>

                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative Number */}
                            <div className="pointer-events-none absolute -bottom-6 -right-6 text-9xl font-black text-slate-100 opacity-50 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-110 group-hover:text-[#3CB371]/10">
                                0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
