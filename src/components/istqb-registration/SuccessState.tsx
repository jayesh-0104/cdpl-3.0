'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function SuccessState() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl border border-green-100 p-10 text-center relative overflow-hidden"
        >
            {/* Confetti/Bg effect */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-green-50 to-transparent -z-10" />

            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Registration Successful!</h2>
            <p className="text-lg text-slate-600 mb-8">
                Thank you for registering. We have sent a confirmation email to your inbox. Our team will contact you shortly regarding your certification path.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto"
                >
                    <Home className="w-4 h-4" />
                    Back to Home
                </Link>
                <Link
                    href="/courses"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors w-full sm:w-auto"
                >
                    Browse Courses
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
