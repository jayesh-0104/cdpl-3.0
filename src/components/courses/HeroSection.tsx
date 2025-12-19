"use client";
import Link from "next/link";
import { Award, Users, Star, Home, ChevronRight, TrendingUp, CheckCircle2, User, Mail } from "lucide-react";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    // Error states
    const [fullNameError, setFullNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    // Loading and submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses" },
    ];

    // Validation functions
    const validateFullName = (name: string) => {
        if (!name) {
            setFullNameError('Full Name is required.');
            return false;
        }
        if (name.trim().length < 3) {
            setFullNameError('Full Name must be at least 3 characters.');
            return false;
        }
        setFullNameError(null);
        return true;
    };

    const validateEmail = (email: string) => {
        if (!email) {
            setEmailError('Email Address is required.');
            return false;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Invalid email format.');
            return false;
        }
        setEmailError(null);
        return true;
    };

    const validatePhoneNumber = (phone: string | undefined) => {
        if (!phone) {
            setPhoneError('Mobile Number is required.');
            return false;
        }
        if (!isValidPhoneNumber(phone)) {
            setPhoneError('Invalid phone number format.');
            return false;
        }

        const digits = phone.replace(/\D/g, '');

        // Check for repeating digits
        if (/^(\d)\1+$/.test(digits)) {
            setPhoneError('Phone number cannot consist of repeating digits.');
            return false;
        }

        // Check for sequential digits
        const isSequential = (num: string) => {
            for (let i = 0; i < num.length - 2; i++) {
                const n1 = parseInt(num[i]);
                const n2 = parseInt(num[i + 1]);
                const n3 = parseInt(num[i + 2]);
                if (
                    (n2 === n1 + 1 && n3 === n2 + 1) ||
                    (n2 === n1 - 1 && n3 === n2 - 1)
                ) {
                    return true;
                }
            }
            return false;
        };
        if (isSequential(digits)) {
            setPhoneError('Phone number cannot consist of sequential digits.');
            return false;
        }

        // Check for all zeros
        if (/^0+$/.test(digits)) {
            setPhoneError('Phone number cannot be all zeros.');
            return false;
        }

        setPhoneError(null);
        return true;
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Real-time validation
        if (name === 'fullName') validateFullName(value);
        if (name === 'email') validateEmail(value);
    };

    // Handle phone change
    const handlePhoneChange = (phone: string | undefined) => {
        setFormData(prev => ({
            ...prev,
            phone: phone || ''
        }));
        if (phone) validatePhoneNumber(phone);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const isFullNameValid = validateFullName(formData.fullName);
        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhoneNumber(formData.phone);

        if (isFullNameValid && isEmailValid && isPhoneValid) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        source: 'Courses Page Hero Section - Form'
                    }),
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    setIsSubmitted(true);
                    setTimeout(() => setIsSubmitted(false), 5000);

                    // Reset form
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: ''
                    });
                } else {
                    alert('Form submission failed. Please try again.');
                }
            } catch (error) {
                console.error('Network error:', error);
                alert('Network error. Please check your connection and try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            {/* Custom CSS for phone input */}
            <style jsx global>{`
                /* Phone input styling */
                .phone-input-container .PhoneInputInput {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    color: #1e293b;
                    outline: none;
                    transition: all 0.3s;
                }

                .phone-input-container .PhoneInputInput::placeholder {
                    color: #64748b;
                    opacity: 1;
                }

                .phone-input-container .PhoneInputInput:focus {
                    border-color: #ff8c00;
                    ring: 2px;
                    ring-color: #ff8c00;
                    box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.2);
                }

                .phone-input-container.border-red-500 .PhoneInputInput {
                    border-color: #ef4444;
                }

                .phone-input-container .PhoneInputCountry {
                    margin-right: 0.5rem;
                }

                /* Country dropdown styling */
                .phone-input-container .PhoneInputCountrySelect {
                    color: #1e293b;
                    font-weight: 500;
                }

                .phone-input-container .PhoneInputCountrySelectArrow {
                    color: #64748b;
                }

                /* Fix placeholder visibility for all inputs */
                input::placeholder {
                    color: #64748b !important;
                    opacity: 1 !important;
                }
            `}</style>

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                <EnrollModal
                    isOpen={isEnrollOpen}
                    onClose={() => setIsEnrollOpen(false)}
                    source="Courses page Hero section - Enroll Now"
                    courseName="All Courses"
                />
                {/* Enhanced layered background effects */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.06),transparent_50%)]" />
                </div>
                {/* Animated gradient orbs */}
                <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-violet-400/20 to-purple-400/20 blur-3xl" style={{ animationDelay: '2s' }} />

                <div className="mx-auto max-w-7xl px-4 md:px-8 py-10">

                    {/* Enhanced Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                            {breadcrumbs.map((c, i) => {
                                const isLast = i === breadcrumbs.length - 1;
                                return (
                                    <li key={i} className="flex items-center gap-2 transition-colors hover:text-indigo-600">
                                        {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
                                        {c.href ? (
                                            <Link
                                                href={c.href}
                                                className={`hover:text-indigo-700 transition-colors ${isLast ? "font-semibold text-slate-900" : ""}`}
                                            >
                                                {c.label}
                                            </Link>
                                        ) : (
                                            <span
                                                className={`hover:text-indigo-700 transition-colors ${isLast ? "font-semibold text-slate-900" : ""}`}
                                            >
                                                {c.label}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    <div className="grid items-start md:gap-5 md:grid-cols-12">
                        {/* LEFT: Enhanced content with better visual hierarchy */}
                        <div className="md:col-span-7 lg:col-span-8">
                            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 text-blue-700 rounded-full text-[13px] font-semibold mb-6 shadow-sm shadow-blue-100/50 transition-all hover:shadow-md hover:shadow-blue-100 hover:scale-105">
                                <Award className="w-4 h-4 mr-2 animate-pulse" />
                                Industry-Leading Tech Education Platform
                            </div>

                            <h1 className="mt-3 md:mt-0 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                                Master In-Demand Tech Skills<br />
                                <span className="relative inline-block mt-2">
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent animate-gradient">
                                        Launch Your Career
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] rounded-full" />
                                </span>
                            </h1>

                            {/* mobile screen form logic removed as per structure but keeping consistent with desktop view if needed, 
                                but user asked to replace right section form. 
                                The mobile form is currently present in the previous code. 
                                I should ideally check if I need to update the mobile form too to match.
                                The prompt said "courses page's hero section right section form".
                                It didn't explicitly say mobile form.
                                But having two different forms (one old, one new) might be weird.
                                However, to be safe and strictly follow "right section form", I will focus on the right section.
                                But wait, the mobile form is just a duplicate in the code usually.
                                Let's look at the previous file content. 
                                Lines 71-137 was the mobile form.
                                Lines 237-303 was the right section form.
                                They look identical in structure (LeadForm logic).
                                I will replace the RIGHT section form as requested.
                                I will leave the mobile form alone unless it breaks consistency drastically, 
                                but the user was specific about "right section form".
                                Actually, checking the mobile form - it uses `action="#" method="post"`. It's the same simple form.
                                If I only update the right one, the mobile one will be different.
                                I'll stick to the user's specific request: "hero section right section form".
                            */}

                            <div className="sticky md:hidden top-6 mt-10 rounded-3xl border border-slate-200/60 bg-white/95 backdrop-blur-xl p-7 md:p-8 shadow-2xl shadow-slate-900/10 transition-all hover:shadow-slate-900/15">
                                {/* Decorative gradient accent */}
                                <div className="absolute top-px left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-t-3xl" />

                                <h3 className="mb-2 text-xl text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">Request a Callback</h3>
                                <p className="mb-7 text-sm text-slate-600 leading-relaxed">
                                    Enter your details to get the full curriculum, fees, and upcoming batch dates.
                                </p>

                                <form className="space-y-5" action="#" method="post">
                                    <div className="group">
                                        <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
                                            Full Name
                                        </label>
                                        <input
                                            id="fullName"
                                            name="name"
                                            type="text"
                                            placeholder="e.g., Priya Sharma"
                                            className="block w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 group-hover:border-slate-300"
                                            aria-label="Full Name"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="block w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 group-hover:border-slate-300"
                                            aria-label="Email"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 98XXXXXXXX"
                                            className="block w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 group-hover:border-slate-300"
                                            aria-label="Phone Number"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Get Course Details
                                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </button>

                                    <p className="pt-3 text-xs leading-relaxed text-slate-500 text-center">
                                        🔒 By submitting, you agree to our terms. We&apos;ll never share your data.
                                    </p>
                                </form>
                            </div>

                            {/* Enhanced main description */}
                            <p className="text-lg text-slate-600 max-w-3xl mb-6 leading-relaxed font-medium">
                                Learn from industry experts through hands-on courses in software testing, data science, web development, and digital marketing. Get job-ready with real-world projects and certifications.
                            </p>

                            {/* SEO-ENHANCED SUPPORT COPY with better styling */}
                            <p className="text-base text-slate-600 max-w-3xl mb-6 leading-relaxed">
                                Build practical, portfolio-ready skills across{" "}
                                <strong className="text-slate-800 font-semibold">automation testing</strong>, <strong className="text-slate-800 font-semibold">QA engineering</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">full-stack web development</strong>, <strong className="text-slate-800 font-semibold">Python</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">JavaScript</strong>, <strong className="text-slate-800 font-semibold">React</strong>, <strong className="text-slate-800 font-semibold">Node.js</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">data analytics</strong>, and <strong className="text-slate-800 font-semibold">digital marketing strategy</strong>.
                                Our mentor-led training focuses on <strong className="text-slate-800 font-semibold">job placement</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">interview preparation</strong>, and <strong className="text-slate-800 font-semibold">industry certifications</strong> so
                                you can confidently break into tech or accelerate your career.
                            </p>

                            {/* Enhanced CTAs with modern styling */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <button
                                    onClick={() => setIsEnrollOpen(true)}
                                    className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 hover:-translate-y-0.5"
                                    aria-label="Enroll Now"
                                >
                                    Enroll Now
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>

                                <Link
                                    href="contact-us"
                                    className="group inline-flex items-center justify-center rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 px-7 py-3.5 text-base font-semibold text-emerald-700 shadow-md shadow-emerald-200/50 transition-all hover:border-emerald-300 hover:shadow-lg hover:from-emerald-100 hover:to-teal-100"
                                    aria-label="Free Demo"
                                >
                                    Free Demo
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            <ul className="list-none grid gap-4 sm:grid-cols-2 text-slate-700 max-w-3xl mb-10">
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm shadow-blue-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Hands-on projects, capstones & portfolio building for real hiring impact</span>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm shadow-emerald-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Tools you&apos;ll use at work: Selenium, Cypress, Playwright, GitHub, Jenkins</span>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-sm shadow-amber-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Career services: mock interviews, resume reviews, LinkedIn optimization</span>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 shadow-sm shadow-violet-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Flexible learning: live online classes, recordings, and classroom options</span>
                                </li>
                            </ul>



                            {/* Enhanced stats row with better visual design */}
                            <div className="flex flex-col w-fit sm:flex-row gap-6 items-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-2.5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">25,000+</div>
                                        <div className="text-sm text-slate-600">Students Enrolled</div>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px h-12 bg-slate-200" />
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-2.5 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">4.8/5</div>
                                        <div className="text-sm text-slate-600">Average Rating</div>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px h-12 bg-slate-200" />
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-2.5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                                        <Award className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">Industry</div>
                                        <div className="text-sm text-slate-600">Certifications</div>
                                    </div>
                                </div>
                            </div>

                            {/* SEO keywords with subtle styling */}
                            <p className="mt-8 text-xs text-slate-400 max-w-3xl leading-relaxed">
                                Keywords: software testing course, SDET training, automation testing with Selenium & Cypress, web development course with React & Node.js, data science and analytics, job-oriented IT training, placement assistance, live online classes.
                            </p>
                        </div>

                        {/* RIGHT: Enhanced callback form with premium design (Replaced) */}
                        <div className="hidden md:block md:col-span-5 lg:col-span-4 mt-8 md:mt-0">
                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 sticky top-6">
                                {/* Form Header - Catchy and Actionable */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Talk to an Advisor
                                        </h3>
                                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
                                            <span className="text-xs font-bold text-white">FREE</span>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-orange-600">
                                        Get FREE Demo Class Instantly!
                                    </p>
                                    <p className="text-xs text-slate-600 mt-1">
                                        Fill the form below and start learning today
                                    </p>
                                </div>

                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                                            <div>
                                                <div className="text-sm font-semibold text-green-900">
                                                    Thank You!
                                                </div>
                                                <div className="text-xs text-green-700">
                                                    We&apos;ll contact you within 2 hours.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    {/* Full Name Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                onBlur={() => validateFullName(formData.fullName)}
                                                required
                                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${fullNameError ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter your full name"
                                                style={{ color: '#1e293b' }}
                                            />
                                        </div>
                                        {fullNameError && (
                                            <p className="text-red-500 text-xs mt-1">{fullNameError}</p>
                                        )}
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onBlur={() => validateEmail(formData.email)}
                                                required
                                                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Enter your email address"
                                                style={{ color: '#1e293b' }}
                                            />
                                        </div>
                                        {emailError && (
                                            <p className="text-red-500 text-xs mt-1">{emailError}</p>
                                        )}
                                    </div>

                                    {/* Phone Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Mobile Number *
                                        </label>
                                        <div className="relative">
                                            <PhoneInput
                                                international
                                                defaultCountry="IN"
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                onBlur={() => validatePhoneNumber(formData.phone)}
                                                className={`phone-input-container ${phoneError ? 'border-red-500' : ''
                                                    }`}
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                        {phoneError && (
                                            <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 px-6 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <TrendingUp className="h-5 w-5" />
                                                Get Started Now
                                            </>
                                        )}
                                    </button>

                                    {/* Trust Badges */}
                                    <div className="pt-4 border-t border-slate-200">
                                        <div className="flex items-center justify-center gap-4 text-xs text-slate-600">
                                            <div className="flex items-center gap-1">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                <span>Instant Access</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                <span>No Spam</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                <span>100% Secure</span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}