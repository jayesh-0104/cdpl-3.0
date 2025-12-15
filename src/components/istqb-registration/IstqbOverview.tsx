'use client';

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function IstqbOverview() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-sm sticky top-24 h-full"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                    ISTQB Certification <br /> Course Overview
                </h3>
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                    Software Testing plays a critical role in ensuring the quality and reliability of a product before its release. It involves applying systematic techniques to identify errors, analyze functionalities, and evaluate whether the actual outcomes align with expected results. With the rapid advancement of IT systems, the demand for skilled software testers has grown significantly.
                </p>

                <div>
                    <p className="font-semibold text-slate-900 mb-3">
                        At CDPL, we offer comprehensive ISTQB certification training at multiple levels:
                    </p>
                    <ul className="space-y-3">
                        {[
                            { title: "ISTQB Foundation Level", desc: "Ideal for beginners to understand core testing principles." },
                            { title: "ISTQB Advanced Level", desc: "Designed for experienced testers looking to deepen their expertise." },
                            { title: "ISTQB Agile Foundation Extension", desc: "Focused on Agile testing methodologies." }
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-slate-800">{item.title}</span> – <span className="text-slate-600">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <p>
                    We take pride in delivering top-notch learning experiences through interactive and research-driven course content. Our industry-aligned training programs empower professionals to excel in software testing, equipping them with the skills to manage large-scale enterprise projects. Many of our trained professionals go on to secure high-paying roles in the industry.
                </p>
            </div>
        </motion.div>
    );
}
