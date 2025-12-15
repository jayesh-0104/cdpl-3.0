"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Trophy, Sparkles, BookOpen, Clock, Target, Home, RotateCcw } from "lucide-react";
import Link from "next/link";
import { MockCourse } from "@/data/mockTestData";

interface ResultViewProps {
    score: number;
    totalQuestions: number;
    relatedCourses: MockCourse[];
}

const ResultView = ({ score, totalQuestions, relatedCourses }: ResultViewProps) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 75;
    const [animatedScore, setAnimatedScore] = useState(0);

    // Circle config
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

    useEffect(() => {
        // Animate score from 0 to actual percentage
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setAnimatedScore(Math.min(percentage * ease, percentage));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [percentage]);

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">

            <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">

                {/* ---------------------------------------------------------------------------
                    MAIN RESULT CARD
                   --------------------------------------------------------------------------- */}
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">

                    {/* Background decorations */}
                    <div className={`absolute top-0 w-full h-2 ${passed ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-red-700'}`} />
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row">

                        {/* LEFT: Score Visualization */}
                        <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/30">

                            {/* Circular Progress */}
                            <div className="relative w-64 h-64 flex items-center justify-center mb-8">
                                {/* Outer Glow */}
                                <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 ${passed ? 'bg-emerald-500' : 'bg-red-500'}`} />

                                <svg className="w-full h-full transform -rotate-90">
                                    {/* Track */}
                                    <circle
                                        cx="128"
                                        cy="128"
                                        r={radius}
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        fill="transparent"
                                        className="text-gray-200"
                                    />
                                    {/* Indicator */}
                                    <circle
                                        cx="128"
                                        cy="128"
                                        r={radius}
                                        stroke="currentColor"
                                        strokeWidth="12"
                                        fill="transparent"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        strokeLinecap="round"
                                        className={`transition-all duration-300 ${passed ? 'text-emerald-500' : 'text-red-500'}`}
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className={`text-5xl font-extrabold tracking-tighter ${passed ? 'text-gray-900' : 'text-gray-900'}`}>
                                        {Math.round(animatedScore)}%
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-2">Score</span>
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg mb-6 ${passed ? 'bg-emerald-100 text-emerald-700 shadow-emerald-200' : 'bg-red-100 text-red-700 shadow-red-200'}`}>
                                {passed ? <Trophy className="w-4 h-4" /> : <Target className="w-4 h-4" />}
                                {passed ? "PASSED" : "FAILED"}
                            </div>

                            <p className="text-gray-500 text-center text-sm font-medium">
                                You answered <b className="text-gray-900">{score}</b> out of <b className="text-gray-900">{totalQuestions}</b> questions correctly.
                            </p>
                        </div>

                        {/* RIGHT: Detailed Breakdown */}
                        <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">

                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                                {passed
                                    ? <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">Unstoppable! <br />Excellent Job.</span>
                                    : <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">Don't Give Up! <br />Keep Learning.</span>
                                }
                            </h2>

                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                {passed
                                    ? "You've demonstrated a solid grasp of the core concepts. You're ready to tackle more advanced challenges."
                                    : "You missed the passing mark this time, but that's part of the learning process. Review the material and try again!"
                                }
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Avg. Time</p>
                                        <p className="text-xl font-bold text-gray-900">~45s</p>
                                    </div>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-start gap-4 hover:shadow-md transition-shadow">
                                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Accuracy</p>
                                        <p className="text-xl font-bold text-gray-900">{percentage}%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/mock-test"
                                    className="flex-1 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black hover:-translate-y-1 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group"
                                >
                                    <RotateCcw className="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" />
                                    Retake Test
                                </Link>
                                <Link
                                    href="/"
                                    className="flex-1 px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-xl hover:border-brand hover:text-brand hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                >
                                    <Home className="w-5 h-5" />
                                    Go Home
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------------
                    RECOMMENDATIONS SECTION
                   --------------------------------------------------------------------------- */}
                {relatedCourses.length > 0 && (
                    <div className="animate-in slide-in-from-bottom-8 duration-700 delay-200">
                        <div className="flex items-center justify-between mb-8 px-2">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-brand" /> Recommended Next Steps
                                </h3>
                                <p className="text-gray-500 mt-1">Courses curated based on your performance</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedCourses.slice(0, 4).map((course) => (
                                <Link
                                    key={course.id}
                                    href={`/${course.slug}`}
                                    className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />

                                    <div className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-brand mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                                        <BookOpen className="w-6 h-6" />
                                    </div>

                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors line-clamp-2">
                                        {course.name}
                                    </h4>

                                    <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-1">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-brand transition-colors mt-auto">
                                        View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ResultView;
