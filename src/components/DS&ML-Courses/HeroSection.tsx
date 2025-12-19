'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    Play,
    Download,
    Sparkles,
    Award,
    Users,
    Star,
    Cpu,
    BarChart3,
    PieChart,
    CheckCircle2,
    Home,
    ChevronRight
} from 'lucide-react';

// Local components
import { EnrollPopup } from '@/components/EnrollForms';
import BrochureDownloadModal from '@/components/home/BrochureDownloadModal';
import YouTubeVideoModal from '@/components/home/YouTubeVideoModal';
import LeadForm from './LeadForm';
import Link from 'next/link';

const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] as const }
};

/**
 * Redesigned desktop left content: sleek layered cards, micro-illustration,
 * testimonial, feature chips, and refined CTA layout. Preserves the handlers.
 *
 * Content updated for Data Science Courses (SEO-optimized). Everything
 * else in the component is intentionally left unchanged.
 */
const DesktopHeroContent: React.FC<{ onOpenBrochure: () => void; onOpenVideo: () => void; onOpenEnroll: () => void }> = ({ onOpenBrochure, onOpenVideo }) => {

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Data Science' },
    ];

    return (
        <div className="relative">

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    {breadcrumbs.map((c, i) => {
                        const isLast = i === breadcrumbs.length - 1;
                        return (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                {c.href ? (
                                    <Link
                                        href={c.href}
                                        className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                    >
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span
                                        className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                    >
                                        {c.label}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>

            {/* Decorative soft gradient blob */}
            <div aria-hidden className="absolute -left-24 -top-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-orange-200 to-yellow-100 pointer-events-none" />

            {/* Small badge */}
            <motion.div {...fadeUp} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>India's #1 Data Science Training Institute</span>
            </motion.div>

            {/* Headline + micro graphic */}
            <div className="mt-6 flex gap-8 items-start">
                <div className="max-w-5xl">
                    <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                        Master <span className="text-orange-500">Data Science</span> & Machine Learning - Turn data into decisions
                    </motion.h1>

                    <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="mt-4 text-base text-slate-600">
                        Industry-focused training in Data Science and Machine Learning with hands-on projects using Python, Pandas, NumPy, scikit-learn, TensorFlow, and PyTorch. Learn SQL, data visualization with Tableau and Power BI, model evaluation, model deployment, and MLOps practices. Build a portfolio of real data projects and get placement support for Data Scientist, ML Engineer, and Data Analyst roles.
                    </motion.p>

                    {/* Feature chips (clean minimal icons) */}
                    <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.18 }} className="mt-6 flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 shadow-sm">
                            <BarChart3 className="w-4 h-4 text-indigo-500" />
                            <span className="font-medium">Hands-on Data Projects</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 shadow-sm">
                            <Cpu className="w-4 h-4 text-amber-500" />
                            <span className="font-medium">Python, Pandas & Machine Learning</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 shadow-sm">
                            <PieChart className="w-4 h-4 text-emerald-500" />
                            <span className="font-medium">Machine Learning & Model Deployment</span>
                        </div>
                    </motion.div>

                    {/* CTA row — keeps original handlers intact */}
                    <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.24 }} className="mt-6 flex items-center gap-3">
                        <button
                            onClick={onOpenBrochure}
                            className="inline-flex items-center gap-2 px-5 py-4 bg-orange-600 text-white rounded-lg text-md font-semibold shadow hover:translate-y-[-1px] transition-transform"
                        >
                            <Download className="h-4 w-4" />
                            Download Brochure
                        </button>

                        <button
                            onClick={onOpenVideo}
                            className="inline-flex items-center gap-2 px-5 py-4 bg-white border border-slate-300 text-slate-800 rounded-lg text-md font-semibold shadow-sm hover:bg-slate-50 transition"
                        >
                            <Play className="h-4 w-4" />
                            Watch CDPL
                        </button>
                    </motion.div>

                    {/* Trust Indicators - 3 Cards */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.18 }}
                        className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        {/* Card 1 - Students Placed */}
                        <div className="flex flex-col lg:flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                <Users className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-slate-900">5,000+</div>
                                <div className="text-xs text-slate-600">Students Placed</div>
                            </div>
                        </div>

                        {/* Card 2 - Rating */}
                        <div className="flex flex-col lg:flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <Star className="h-5 w-5 text-white fill-white" />
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-slate-900">4.9/5</div>
                                <div className="text-xs text-slate-600">Student Rating</div>
                            </div>
                        </div>

                        {/* Card 3 - Experience */}
                        <div className="flex flex-col lg:flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Award className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-slate-900">15+ Years</div>
                                <div className="text-xs text-slate-600">Industry Experience</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* microcopy for SEO and trust */}
                    <p className="mt-3 text-sm text-slate-600 max-w-2xl">
                        CDPL’s Data Science program covers Data Wrangling (Pandas, NumPy), Exploratory Data Analysis, Statistical Modeling, Supervised & Unsupervised Learning, Deep Learning (TensorFlow/PyTorch), NLP, Time Series, Model Deployment, MLOps, and SQL for data querying. The curriculum is designed for beginners and working professionals aiming for Data Scientist, ML Engineer, and Data Analyst roles.
                    </p>
                </div>
            </div>
        </div>
    );
};

const MobileFeatureList: React.FC<{ onOpenBrochure: () => void; onOpenVideo: () => void }> = ({ onOpenBrochure, onOpenVideo }) => {

    return (
        <div className="mt-6 space-y-4">

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">5,000+ Students Placed</span>
                </div>
                <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span className="font-semibold">4.9/5 Student Rating</span>
                </div>
                <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                    <span className="font-semibold">15+ Years Industry Experience</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">100% Live Interactive Classes</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">90+ Real-World Data Projects</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">Industry Certifications (e.g., Coursera, ISTQB for QA-adjacent)</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">100% Job Support</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">Flexible Batches</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">Lifetime Access</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    onClick={onOpenBrochure}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white text-sm font-semibold rounded-lg w-full"
                >
                    <Download className="h-4 w-4" />
                    Download Brochure
                </button>

                <button
                    onClick={onOpenVideo}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-800 rounded-lg w-full"
                >
                    <Play className="h-4 w-4" />
                    Watch CDPL
                </button>
            </div>
        </div>
    )
};

export default function HeroSection(): React.JSX.Element {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const videoUrl = 'https://www.youtube.com/watch?v=8kB2wESj1n8';

    const openBrochure = useCallback(() => setIsBrochureOpen(true), []);
    const openVideo = useCallback(() => setIsVideoOpen(true), []);
    const openEnrollPopup = useCallback(() => setIsEnrollOpen(true), []);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Data Science' },
    ];

    return (
        <section className="relative bg-white py-10 overflow-hidden">
            <EnrollPopup isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} onSubmit={() => { }} />
            <BrochureDownloadModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} />
            <YouTubeVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={videoUrl} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Mobile */}

                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8 md:hidden">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="md:hidden">
                    <motion.div {...fadeUp} className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-3 py-1 text-sm font-medium text-slate-700 shadow-sm mb-4">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span>India's #1 Data Science Training Institute</span>
                    </motion.div>

                    <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }} className="text-3xl font-extrabold text-slate-900 leading-tight">
                        Master <span className="text-orange-500">Data Science</span> & Machine Learning
                    </motion.h1>

                    <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="mt-3 text-base text-slate-600">
                        Become a certified Data Scientist. Learn Python, Machine Learning (scikit-learn), Deep Learning, NLP, SQL, data visualization, and model deployment — build a portfolio of real data projects with placement-ready skills.
                    </motion.p>

                    {/* Form below heading on mobile */}
                    <div className="my-8">
                        <div className="bg-white p-5 rounded-xl shadow-lg border border-slate-100">
                            <LeadForm
                                title="Start Your Free Demo"
                                subtitle="Chat with an expert advisor"
                                showCourse={false}
                                source="Data Science - Hero Section - Mobile Form"
                            />
                        </div>
                    </div>

                    <MobileFeatureList onOpenBrochure={openBrochure} onOpenVideo={openVideo} />
                </div>

                {/* Desktop */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
                        {/* Left content - 7 columns */}
                        <div className="md:col-span-7 lg:col-span-8 relative">
                            <div className="relative z-10">
                                <DesktopHeroContent onOpenBrochure={openBrochure} onOpenVideo={openVideo} onOpenEnroll={openEnrollPopup} />
                            </div>
                        </div>

                        {/* Right form - 5 columns */}
                        <div className="md:col-span-5 lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sticky top-24"
                            >
                                <div className="mt-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                                    <LeadForm
                                        title="Start Your Free Demo"
                                        subtitle="Chat with an expert advisor & unlock a personalised learning plan"
                                        showCourse={false}
                                        source="Data Science - Hero Section - Right Form"
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
