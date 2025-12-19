// /src/components/sections/ReviewsHeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useSpring, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, Quote, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { getAllReviews } from "@/data/reviews/reviewsData";
import SafeAvatar from "@/components/sections/SafeAvatar";

export default function ReviewsHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Follow Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Smooth mouse background
  const bgX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const bgY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gradientBackground = useMotionTemplate`radial-gradient(600px circle at ${bgX}px ${bgY}px, rgba(59, 130, 246, 0.08), transparent 80%)`;

  const allReviews = getAllReviews();

  // State for Card Stack Rotation
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allReviews.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [allReviews.length, isPaused]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-slate-50 min-h-[90vh] flex items-center py-10 lg:py-0"
    >
      {/* ... (Background elements kept the same) ... */}
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: gradientBackground }}
      />

      {/* Large Soft Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- LEFT: Content --- */}
          {/* ... (Left content kept the same) ... */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            {/* Breadcrumb / Tag */}
            <div className="flex items-center gap-3">
              <nav className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-500">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-blue-600">Testimonials</span>
              </nav>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100/50 text-green-700 text-xs font-bold border border-green-200">
                <Sparkles className="w-3 h-3" />
                Top Rated 2024
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Stories that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500">
                  Inspire Action.
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Join thousands of professionals who accelerated their careers. Real feedback from real students, verified by top platforms.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Course Rating", val: "4.9/5", icon: Star, bg: "bg-amber-100 text-amber-600" },
                { label: "Active Learners", val: "12k+", icon: TrendingUp, bg: "bg-blue-100 text-blue-600" },
                { label: "Completion Rate", val: "94%", icon: CheckCircle2, bg: "bg-green-100 text-green-600" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 pr-6 py-2 border-r last:border-0 border-slate-200">
                  <div className={`p-2 rounded-lg ${stat.bg}`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg leading-none">{stat.val}</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA & Trust */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                href="#all-reviews"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("all-reviews");
                  if (el) {
                    const headerOffset = 80; // Adjust for sticky header
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20"
              >
                Read All Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Verified on</span>
                <div className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                  <Image src="/slider_logos/google.svg" width={60} height={20} alt="Google" className="h-4 w-auto object-contain" />
                  <Image src="/slider_logos/sulekha-logo.webp" width={60} height={20} alt="Sulekha" className="h-4 w-auto object-contain" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: Levitating Stack & HUD Interface --- */}
          <div
            className="relative h-[600px] w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* 1. Futuristic Backdrop Grid */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>

              {/* Pulse Ring */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-200 rounded-full"
              />
            </div>

            {/* 2. Floating Badges (Independent Motion) */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 z-10 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-2xl shadow-lg flex items-center gap-2"
            >
              <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</div>
                <div className="text-xs font-bold text-slate-800">Verified Alumni</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute hidden md:block bottom-32 left-0 lg:-left-12 z-10 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-2xl shadow-lg flex items-center gap-2"
            >
              <div className="bg-blue-100 p-1.5 rounded-full text-blue-600">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Impact</div>
                <div className="text-xs font-bold text-slate-800">Top 1% Career Growth</div>
              </div>
            </motion.div>

            {/* 3. The Card Stack */}
            <div className="relative z-20 w-[90%] max-w-[420px] perspective-[1000px]">
              <AnimatePresence mode="popLayout">
                {/* We map 2 cards: Current and Next to create depth */}
                {[activeIndex].map((index) => {
                  const review = allReviews[index];
                  return (
                    <motion.div
                      key={review.id}
                      layout
                      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: -20 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, scale: 1.05, filter: "blur(4px)" }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 24,
                        mass: 1
                      }}
                      className="relative bg-white rounded-3xl p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100"
                    >

                      {/* Scanning Light Effect */}
                      <motion.div
                        initial={{ top: "0%", opacity: 0 }}
                        animate={{ top: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent z-30 pointer-events-none blur-[2px]"
                      />

                      {/* Decorative Top Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-t-3xl opacity-80"></div>

                      <div className="relative z-10 space-y-6">
                        {/* User Header */}
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <SafeAvatar name={review.name} sizes="56px" className="w-14 h-14 rounded-full border-4 border-white shadow-md" />
                              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
                                <Quote className="w-3 h-3 fill-current" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">{review.name}</h3>
                              <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                                </div>
                                <span className="text-xs font-medium text-slate-400">5.0</span>
                              </div>
                            </div>
                          </div>
                          {/* Platform Logo */}
                          <div className="grayscale opacity-50">
                            <Image src="/slider_logos/google.svg" width={24} height={24} alt="Platform" />
                          </div>
                        </div>

                        {/* Review Text */}
                        <div className="relative">
                          <p className="text-lg text-slate-700 leading-relaxed font-medium">
                            "{review.quote}"
                          </p>
                        </div>

                        {/* Tech/Course Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {["Data Science", "Placement"].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-semibold border border-slate-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Background Decor */}
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -z-0"></div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Back Stack Visuals (Static Layers behind to give depth) */}
              <div className="absolute top-4 left-4 right-4 h-full bg-white/40 rounded-3xl border border-slate-100 shadow-sm -z-10 scale-[0.95] translate-y-2"></div>
              <div className="absolute top-8 left-8 right-8 h-full bg-white/20 rounded-3xl border border-slate-100/50 shadow-sm -z-20 scale-[0.9] translate-y-4"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}