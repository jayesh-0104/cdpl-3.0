'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Briefcase, Award, ArrowRight, Loader2, Phone } from 'lucide-react';
import { submitIstqbStep1 } from '@/app/istqb-registration/actions';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface RegistrationFormProps {
    onSuccess: (data: any) => void;
}

const ISTQB_LEVELS = [
    "ISTQB Certified Tester Foundation Level",
    "ISTQB Certified Tester Agile Tester Extension",
    "ISTQB Certified Tester Acceptance Testing (CT-AcT)",
    "ISTQB Certified Tester AI Testing (CT-AI)",
    "ISTQB Certified Tester Automotive Software Tester (CT-AuT)",
    "ISTQB Certified Tester Gambling Industry Tester (CT-GT)",
    "ISTQB Certified Tester Game Testing (CT-GaMe)",
    "ISTQB Certified Tester Mobile Application Testing (CT-MAT)",
    "ISTQB Certified Tester Model-Based Tester (CT-MBT)",
    "ISTQB Certified Tester Performance Testing (CT-PT)",
    "ISTQB Certified Tester Security Tester (CT-ST)",
    "ISTQB Certified Tester Test Automation Engineer (CT-TAE)",
    "ISTQB Certified Tester Usability Testing (CT-UT)",
    "ISTQB Certified Tester Advanced Level Test Manager (CTAL-TM)",
    "ISTQB Certified Tester Advanced Level Test Analyst (CTAL-TA)",
    "ISTQB Certified Tester Advanced Level Technical Test Analyst (CTAL-TTA)"
];

const CustomInput = React.forwardRef(({ className, ...props }: any, ref) => (
    <input {...props} ref={ref} className="w-full py-3 px-3 outline-none bg-transparent" required />
));
CustomInput.displayName = 'CustomInput';

import { isValidPhoneNumber } from 'libphonenumber-js';

// ... other imports

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        jobTitle: ''
    });

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        phone?: string;
    }>({});

    // Validation Functions (Matched with HomeHeroSection)
    const validateFullName = (name: string) => {
        if (!name) return 'Full Name is required.';
        if (name.trim().length < 3) return 'Full Name must be at least 3 characters.';
        return undefined;
    };

    const validateEmail = (email: string) => {
        if (!email) return 'Email Address is required.';
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return 'Invalid email format.';
        return undefined;
    };

    const validatePhoneNumber = (phone: string | undefined) => {
        if (!phone) return 'Mobile Number is required.';
        if (!isValidPhoneNumber(phone)) return 'Invalid phone number format.';

        const digits = phone.replace(/\D/g, '');
        // Check for repeating digits
        if (/^(\d)\1+$/.test(digits)) return 'Phone number cannot consist of repeating digits.';

        // Check for sequential digits
        const isSequential = (num: string) => {
            for (let i = 0; i < num.length - 2; i++) {
                const n1 = parseInt(num[i]);
                const n2 = parseInt(num[i + 1]);
                const n3 = parseInt(num[i + 2]);
                if ((n2 === n1 + 1 && n3 === n2 + 1) || (n2 === n1 - 1 && n3 === n2 - 1)) return true;
            }
            return false;
        };
        if (isSequential(digits)) return 'Phone number cannot consist of sequential digits.';

        // Check for all zeros
        if (/^0+$/.test(digits)) return 'Phone number cannot be all zeros.';

        return undefined;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation clearing (optional, or validate on change)
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handlePhoneChange = (value: string | undefined) => {
        setFormData(prev => ({ ...prev, phone: value || '' }));
        if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Run Validations
        const nameError = validateFullName(formData.name);
        const emailError = validateEmail(formData.email);
        const phoneError = validatePhoneNumber(formData.phone);

        if (nameError || emailError || phoneError) {
            setErrors({ name: nameError, email: emailError, phone: phoneError });
            return;
        }

        if (!selectedLevel) {
            alert('Please select a certification level.');
            return;
        }

        setIsSubmitting(true);
        const submissionData = new FormData();
        submissionData.append('name', formData.name);
        submissionData.append('email', formData.email);
        submissionData.append('phone', formData.phone);
        submissionData.append('city', formData.city); // basic required check by browser
        submissionData.append('jobTitle', formData.jobTitle); // basic required check by browser
        submissionData.append('certificationLevel', selectedLevel);

        // Extract data for local state passing
        const data = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            jobTitle: formData.jobTitle,
            certificationLevel: selectedLevel,
        };

        try {
            const result = await submitIstqbStep1(submissionData);
            if (result.success) {
                onSuccess(data);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Error submitting form.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 py-8 px-6 md:p-10 relative h-full flex flex-col"
        >
            {/* ... Decor & Header unchanged ... */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/40 to-transparent rounded-bl-full rounded-tr-3xl -z-10" />

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">ISTQB Registration</h2>
                <p className="text-slate-600 mt-2">Start your certification journey with us.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
                {/* Full Name */}
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3.5 top-3.5 h-5 w-5 text-blue-500 z-10" />
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={() => setErrors(prev => ({ ...prev, name: validateFullName(formData.name) }))}
                            placeholder="Rahul Sharma"
                            className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all outline-none bg-slate-50 focus:bg-white ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                        />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-purple-500 z-10" />
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => setErrors(prev => ({ ...prev, email: validateEmail(formData.email) }))}
                            placeholder="rahul@gmail.com"
                            className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all outline-none bg-slate-50 focus:bg-white ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'}`}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative phone-input-container">
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            onBlur={() => setErrors(prev => ({ ...prev, phone: validatePhoneNumber(formData.phone) }))}
                            className={`flex w-full rounded-xl border transition-all bg-slate-50 focus-within:bg-white overflow-hidden pl-0 ${errors.phone ? 'border-red-500 focus-within:border-red-500' : 'border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200'}`}
                            controlStyle={{ border: 'none', background: 'transparent' }}
                            inputComponent={CustomInput}
                        />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone}</p>}
                    <style jsx global>{`
                        /* ... existing styles ... */
                        /* Add error border style support if needed, mostly handled by classnames */
                    `}</style>
                    {/* ... Rest of styles kept same ... */}

                    <style jsx global>{`
                        .PhoneInput {
                            display: flex;
                            align-items: center;
                        }
                        .PhoneInputInput {
                            outline: none;
                            background: transparent;
                            height: 100%;
                            flex: 1;
                            padding: 0.75rem;
                            font-size: 1rem;
                        }
                        .PhoneInputCountry {
                            margin-right: 0.5rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-width: 3.5rem;
                            padding: 0 0.5rem;
                            border-right: 1px solid #cbd5e1;
                            border-top-left-radius: 0.75rem;
                            border-bottom-left-radius: 0.75rem;
                            background-color: transparent;
                            cursor: pointer;
                            transition: all 0.2s;
                        }
                        .PhoneInputCountry:hover {
                            background-color: #f1f5f9;
                        }
                        /* Ensure flag is clearly visible */
                        .PhoneInputCountryIcon {
                             width: 1.5em; 
                             height: 1em;
                             box-shadow: 0 0 1px rgba(0,0,0,0.5);
                        }
                        /* Chevron Style Arrow */
                        .PhoneInputCountrySelectArrow {
                            display: block;
                            margin-left: 0.5rem;
                            width: 0.5rem;
                            height: 0.5rem;
                            border-right: 2px solid #94a3b8;
                            border-bottom: 2px solid #94a3b8;
                            border-left: 0;
                            border-top: 0;
                            transform: rotate(45deg);
                            opacity: 1;
                            margin-bottom: 0.15rem;
                        }
                        .PhoneInputCountrySelect {
                            cursor: pointer;
                        }
                    `}</style>
                </div>

                {/* City */}
                <div className="space-y-1.5">
                    <label htmlFor="city" className="text-sm font-semibold text-slate-700 ml-1">City</label>
                    <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 h-5 w-5 text-pink-500 z-10" />
                        <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Mumbai"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Job Title */}
                <div className="space-y-1.5">
                    <label htmlFor="jobTitle" className="text-sm font-semibold text-slate-700 ml-1">Job Title / Designation</label>
                    <div className="relative">
                        <Briefcase className="absolute left-3.5 top-3.5 h-5 w-5 text-amber-500 z-10" />
                        <input
                            type="text"
                            name="jobTitle"
                            required
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            placeholder="QA Engineer"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Certification Level */}
                <div className="space-y-1.5 relative z-50 pb-4">
                    <label className="text-sm font-semibold text-slate-700 ml-1">ISTQB Certification Level</label>
                    <div className="relative">
                        <Award className="absolute left-3.5 top-3.5 h-5 w-5 text-indigo-500 z-10" />
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-full text-left pl-11 pr-10 py-3 rounded-xl border transition-all outline-none bg-slate-50 focus:bg-white ${isOpen
                                ? 'border-indigo-500 ring-2 ring-indigo-200 bg-white'
                                : 'border-slate-200 hover:border-indigo-300'
                                }`}
                        >
                            <span className={`block truncate ${!selectedLevel ? 'text-slate-400 font-normal' : 'text-slate-900 font-medium'}`}>
                                {selectedLevel || "Select Level"}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </span>
                        </button>
                        {isOpen && (
                            <div className="absolute mt-2 w-full bg-white rounded-xl shadow-xl border border-slate-100 max-h-60 overflow-y-auto z-50 py-2">
                                {ISTQB_LEVELS.map((level) => (
                                    <button
                                        key={level}
                                        type="button"
                                        onClick={() => {
                                            setSelectedLevel(level);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-orange-50 hover:text-orange-700 transition-colors
                                            ${selectedLevel === level ? 'bg-orange-50 text-orange-700 font-medium' : 'text-slate-700'}
                                        `}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="pt-2 mt-auto">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                Next Step
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
