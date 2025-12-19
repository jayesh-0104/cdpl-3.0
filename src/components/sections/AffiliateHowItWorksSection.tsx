"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import {
    UserPlus,
    Link2 as LinkIcon,
    MousePointerClick,
    Receipt,
    WalletMinimal,
    CheckCircle2,
} from "lucide-react";
import { useCallback } from "react";

type Step = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
};

const steps: Step[] = [
    { icon: UserPlus, title: "Apply & Get Approved", sub: "Tell us about your audience niche. Most decisions within 2–3 business days." },
    { icon: LinkIcon, title: "Grab Your Link", sub: "Get unique referral links for training, events, and CDPL services." },
    { icon: MousePointerClick, title: "Share Across Channels", sub: "Blog posts, emails, socials, or communities — your call." },
    { icon: Receipt, title: "Leads & Conversions", sub: "We nurture leads with high-performing, SEO-backed content." },
    { icon: WalletMinimal, title: "Earn Recurring Commission", sub: "Get paid monthly. Hit milestones to unlock higher tiers." },
    { icon: CheckCircle2, title: "Grow Together", sub: "Co-branded webinars, case studies, and premium content drops." },
];

// Solid tints (no gradients) + soft glow
const palette = [
    { dot: "#f43f5e", tint: "rgba(244,63,94,0.12)", glow: "rgba(244,63,94,0.25)" },   // rose-500
    { dot: "#f59e0b", tint: "rgba(245,158,11,0.12)", glow: "rgba(245,158,11,0.25)" }, // amber-500
    { dot: "#84cc16", tint: "rgba(132,204,22,0.12)", glow: "rgba(132,204,22,0.25)" }, // lime-500
    { dot: "#0ea5e9", tint: "rgba(14,165,233,0.12)", glow: "rgba(14,165,233,0.25)" }, // sky-500
    { dot: "#6d28d9", tint: "rgba(109,40,217,0.12)", glow: "rgba(109,40,217,0.25)" }, // violet-600
    { dot: "#ec4899", tint: "rgba(236,72,153,0.12)", glow: "rgba(236,72,153,0.25)" }, // pink-500
    { dot: "#4f46e5", tint: "rgba(79,70,229,0.12)", glow: "rgba(79,70,229,0.25)" },   // indigo-600
];

export default function AffiliateHowItWorksSection({
    imageSrc = "/affiliate_images/affiliate_steps.png",
    imageAlt = "Affiliate program illustration",
    imagetitle = "Affiliate program illustration",
}: {
    imageSrc?: string;
    imageAlt?: string;
    imagetitle?: string;
}) {
    // Subtle parallax tilt for the illustration (blended, no card)
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const rotX = useTransform(ry, [-40, 40], [4, -4]);
    const rotY = useTransform(rx, [-40, 40], [-6, 6]);

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        rx.set(e.clientX - left - width / 2);
        ry.set(e.clientY - top - height / 2);
    }, [rx, ry]);

    const onMouseLeave = useCallback(() => { rx.set(0); ry.set(0); }, [rx, ry]);

    return (
        <section
            id="how-it-works"
            aria-labelledby="how-heading"
            className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 overflow-hidden"
            data-scroll-target="how-it-works"
        >
            <div className="mb-8">
                <h2 id="how-heading" className="text-3xl font-bold tracking-tight text-gray-900">
                    How it works
                </h2>
                <p className="mt-2 max-w-2xl text-slate-600">
                    A simple, transparent flow designed to respect your audience and reward consistency.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[420px_1fr]">
                {/* LEFT — illustration (blended; no borders/shadows) */}
                <aside className="relative">
                    <div className="lg:sticky lg:top-28">
                        <motion.div
                            className="relative"
                            style={{ rotateX: rotX, rotateY: rotY }}
                            onMouseMove={onMouseMove}
                            onMouseLeave={onMouseLeave}
                            whileHover={{ scale: 1.015 }}
                            transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        >
                            <div
                                aria-hidden
                                className="absolute -inset-x-12 -top-10 bottom-0 -z-10 blur-3xl"
                                style={{
                                    background:
                                        "radial-gradient(420px 220px at 60% 35%, rgba(14,165,233,0.14), transparent 60%), radial-gradient(500px 260px at 30% 75%, rgba(99,102,241,0.10), transparent 65%)",
                                    opacity: 0.9,
                                }}
                            />
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                title={imagetitle}
                                width={820}
                                height={820}
                                priority
                                sizes="(max-width: 1024px) 90vw, 420px"
                                className="h-auto w-full select-none"
                                style={{
                                    WebkitMaskImage:
                                        "radial-gradient(130% 120% at 60% 40%, black 70%, transparent 100%)",
                                    maskImage:
                                        "radial-gradient(130% 120% at 60% 40%, black 70%, transparent 100%)",
                                }}
                            />
                        </motion.div>
                    </div>
                </aside>

                {/* RIGHT — timeline (no borders, centered numbers, flat tints) */}
                <div className="relative">
                    {/* Spine */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-400 via-cyan-400 to-emerald-400 opacity-80 sm:left-6"
                    />

                    <ol className="space-y-7">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            const num = i + 1;
                            // 'dot' isn't used in the UI; keep palette intact but avoid lint error
                            const { tint, glow } = palette[i % palette.length];

                            return (
                                <motion.li
                                    key={s.title}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.45, delay: i * 0.04 }}
                                    className="relative"
                                >
                                    {/* Number centered on the spine */}
                                    <motion.div
                                        whileHover={{ scale: 1.06 }}
                                        className="absolute left-4 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:left-6"
                                        aria-hidden="true"
                                    >
                                        <div
                                            className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-900"
                                            style={{ boxShadow: `0 0 0 6px ${tint}` }}
                                        >
                                            <span className="text-sm font-bold leading-none">{num}</span>
                                        </div>
                                    </motion.div>

                                    {/* Connector (neutral, no gradient) */}
                                    <span
                                        className="absolute left-5 top-1/2 -translate-y-1/2 w-[2.25rem] sm:left-7 sm:w-[3.25rem]"
                                        aria-hidden="true"
                                        style={{ display: "block", height: 1, backgroundColor: "rgba(148,163,184,0.45)" }}
                                    />

                                    {/* Step pill — flat tint, no border */}
                                    <motion.div
                                        whileHover={{ y: -2, scale: 1.01, boxShadow: `0 26px 60px -32px ${glow}` }}
                                        whileTap={{ scale: 0.995 }}
                                        transition={{ type: "spring", stiffness: 140, damping: 16 }}
                                        className="ml-14 sm:ml-20 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-[0_18px_40px_-24px_rgba(2,6,23,0.25)]"
                                        style={{ backgroundColor: tint }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-xl bg-white/85 shadow-[0_10px_22px_-18px_rgba(2,6,23,0.35)]">
                                                <Icon className="h-4 w-4 text-slate-900" />
                                            </div>
                                            <div>
                                                <h3 className="text-[15px] font-semibold text-gray-900">{s.title}</h3>
                                                <p className="mt-0.5 text-sm text-slate-700">{s.sub}</p>

                                                {i === 0 && (
                                                    <div className="mt-2">
                                                        <Link
                                                            href="#apply"
                                                            className="inline-flex items-center rounded-lg bg-white/95 px-3 py-1.5 text-sm text-slate-700 hover:bg-white cursor-pointer"
                                                            style={{ boxShadow: "0 10px 24px -18px rgba(2,6,23,0.30)" }}
                                                        >
                                                            Start application
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
