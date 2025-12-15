'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RegistrationForm from '@/components/istqb-registration/RegistrationForm';
import BookingOption from '@/components/istqb-registration/BookingOption';
import ExamSelection from '@/components/istqb-registration/ExamSelection';
import SuccessState from '@/components/istqb-registration/SuccessState';
import { CheckCircle2, Home, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import WhyIstqbSection from '@/components/istqb-registration/WhyIstqbSection';
import IstqbOverview from '@/components/istqb-registration/IstqbOverview';

export default function IstqbRegistrationPage() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [choice, setChoice] = useState<'none' | 'booking' | 'exam'>('none');
    const [isBookingComplete, setIsBookingComplete] = useState(false);
    const [userData, setUserData] = useState<any>(null);

    // Handlers
    const handleStep1Success = (data: any) => {
        setUserData(data);
        setStep(2);
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBookingSuccess = () => {
        setIsBookingComplete(true);
        setChoice('none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFinalSuccess = () => {
        setStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-slate-50 relative font-sans">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-200/20 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-blue-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                        </li>
                        <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
                        <li>
                            <span className="font-semibold text-slate-900">ISTQB Registration</span>
                        </li>
                    </ol>
                </nav>

                {/* Header Section Removed */}

                {/* Content Area */}

                {/* Step 1: Registration Form */}
                {step === 1 && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Right: Form */}
                        <div className="lg:col-span-6 h-full order-1 lg:order-2">
                            <RegistrationForm onSuccess={handleStep1Success} />
                        </div>

                        {/* Left: Benefits / Trust Signals */}
                        <div className="lg:col-span-6 space-y-8 lg:sticky lg:top-24 h-full order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="h-full"
                            >
                                <IstqbOverview />
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Step 2: Selection (Book Meeting or Exam) */}
                {step === 2 && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Left: Overview Sidebar */}
                        <div className="lg:col-span-6 order-2 lg:order-1 h-full">
                            <IstqbOverview />
                        </div>

                        {/* Right: Forms/Choice */}
                        <div className="lg:col-span-6 order-1 lg:order-2 h-full">
                            {choice === 'none' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-full"
                                >
                                    <div className="p-8 md:p-10 text-center md:text-left h-full relative">

                                        {/* Back to Form Button (Inside Card) */}
                                        <button
                                            onClick={() => setStep(1)}
                                            className="absolute top-6 left-6 flex items-center gap-2 text-slate-400 hover:text-orange-600 font-medium transition-colors text-sm"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Back
                                        </button>

                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto md:mx-0 mt-8">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>

                                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                            Thank you for your interest in ISTQB certification!
                                        </h2>
                                        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                                            To ensure you have all the details you need, we’d love to connect with you.
                                        </p>

                                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-8 border border-slate-200">
                                            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 mb-4">
                                                📌 Book a seat for a meeting with our expert to:
                                            </h3>
                                            <ul className="space-y-3 mb-6">
                                                {[
                                                    "Understand the ISTQB certification process & exam options",
                                                    "Get guidance on choosing the right certification level",
                                                    "Learn about exam booking, preparation, and benefits",
                                                    "Have all your questions answered before you register"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex items-center gap-2 text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg inline-block font-medium">
                                                <span>🕒 Meeting Time:</span>
                                                <span>
                                                    {new Date() < new Date(new Date().setHours(15, 30, 0, 0))
                                                        ? `Today at 3:30 PM`
                                                        : `Tomorrow at 3:30 PM`}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                                            {!isBookingComplete ? (
                                                <button
                                                    onClick={() => setChoice('booking')}
                                                    className="w-full sm:flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                                                >
                                                    Book a Meeting
                                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            ) : (
                                                <div className="w-full sm:flex-1 bg-green-50 text-green-700 font-bold py-4 px-6 rounded-xl border border-green-200 flex items-center justify-center gap-2">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                    Meeting Booked Successfully
                                                </div>
                                            )}

                                            <button
                                                onClick={() => setChoice('exam')}
                                                className={`w-full sm:flex-1 ${!isBookingComplete ? 'bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl'} font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2`}
                                            >
                                                Skip & Book Exam
                                                {isBookingComplete && <ChevronRight className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {choice === 'booking' && (
                                <BookingOption
                                    userData={userData}
                                    onSuccess={handleBookingSuccess}
                                    onBack={() => setChoice('none')}
                                />
                            )}

                            {choice === 'exam' && (
                                <ExamSelection
                                    userData={userData}
                                    onSuccess={handleFinalSuccess}
                                    onBack={() => setChoice('none')}
                                />
                            )}
                        </div>
                    </div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                    <div className="py-12">
                        <SuccessState />
                    </div>
                )}

                {/* Why ISTQB Section - Show on Step 1 & 2 */}
                {step !== 3 && (
                    <div className="mt-10">
                        <WhyIstqbSection />
                    </div>
                )}
            </div>
        </main >
    );
}
