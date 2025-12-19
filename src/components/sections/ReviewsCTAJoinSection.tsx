"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Star, Sparkles, ArrowRight, Users, Target, Clock, Award } from "lucide-react";

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const }
};

export default function CTAJoinSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="cta-join"
      aria-label="Join CDPL programs"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={prefersReduced ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={prefersReduced ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Content Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 lg:p-14 shadow-2xl">
            {/* Decorative corner gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-full" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
              {/* Left Content */}
              <div className="lg:col-span-7">
                {/* Badge */}
                <motion.div {...fadeUp}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 px-4 py-2 mb-6">
                    <Sparkles className="h-4 w-4 text-orange-400" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-orange-300">
                      Limited Seats Available
                    </span>
                  </div>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white"
                >
                  Ready to Turn Practice into{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Offers
                  </span>
                  ?
                </motion.h2>

                {/* Description */}
                <motion.p
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
                >
                  Join our hands-on programs in{" "}
                  <span className="font-semibold text-white">Testing</span>,{" "}
                  <span className="font-semibold text-white">Data Science</span>, and{" "}
                  <span className="font-semibold text-white">Marketing</span>.
                  Build portfolio projects, get real feedback, and ship with confidence.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center justify-center gap-2 rounded-full px-4 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Start Succeeding</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="#all-reviews"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    Read Student Stories
                  </Link>
                </motion.div>

                {/* Trust Indicator */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 flex items-center gap-4"
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">
                    <span className="font-semibold text-white">4.9/5</span> average rating · Alumni at leading companies
                  </span>
                </motion.div>
              </div>

              {/* Right Stats Grid */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <StatCard
                    icon={Users}
                    kpi="500+"
                    label="Alumni Placed"
                    gradient="from-orange-500 to-amber-500"
                  />
                  <StatCard
                    icon={Target}
                    kpi="94%"
                    label="Job-Ready Projects"
                    gradient="from-blue-500 to-cyan-500"
                  />
                  <StatCard
                    icon={Clock}
                    kpi="6-12w"
                    label="To First Offer"
                    gradient="from-emerald-500 to-teal-500"
                  />
                  <StatCard
                    icon={Award}
                    kpi="1:1"
                    label="Mentor Reviews"
                    gradient="from-violet-500 to-purple-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat Card Component ---------- */
import type { LucideIcon } from "lucide-react";

function StatCard({
  icon: Icon,
  kpi,
  label,
  gradient,
}: {
  icon: LucideIcon;
  kpi: string;
  label: string;
  gradient: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 text-center group hover:bg-white/10 transition-all duration-300"
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} mb-3`}>
        <Icon className="h-5 w-5 text-white" />
      </div>

      {/* KPI */}
      <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
        {kpi}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm font-medium text-slate-400">
        {label}
      </div>
    </motion.div>
  );
}
