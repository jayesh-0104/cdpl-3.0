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

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [phone, setPhone] = useState<string | undefined>();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!selectedLevel) {
            alert('Please select a certification level.');
            return;
        }

        if (!phone) {
            alert('Please enter a valid phone number.');
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        // Extract data for local state passing
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: phone, // Use state phone
            city: formData.get('city') as string,
            jobTitle: formData.get('jobTitle') as string,
            certificationLevel: selectedLevel,
        };

        try {
            // Append manually if hidden input fails or just to be safe
            if (!formData.get('certificationLevel')) {
                formData.append('certificationLevel', selectedLevel);
            }
            // Append phone from state
            formData.delete('phone');
            formData.append('phone', phone);

            const result = await submitIstqbStep1(formData);
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
            {/* Decor */}
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
                        <User className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 z-10" />
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 z-10" />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative phone-input-container">
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={phone}
                            onChange={setPhone}
                            className="flex w-full rounded-xl border border-slate-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all bg-slate-50 focus-within:bg-white overflow-hidden pl-0"
                            controlStyle={{ border: 'none', background: 'transparent' }}
                            inputComponent={CustomInput}
                        />
                    </div>
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
                        <MapPin className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 z-10" />
                        <input
                            type="text"
                            name="city"
                            required
                            placeholder="Mumbai"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Job Title */}
                <div className="space-y-1.5">
                    <label htmlFor="jobTitle" className="text-sm font-semibold text-slate-700 ml-1">Job Title / Designation</label>
                    <div className="relative">
                        <Briefcase className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 z-10" />
                        <input
                            type="text"
                            name="jobTitle"
                            required
                            placeholder="QA Engineer"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-slate-50 focus:bg-white"
                        />
                    </div>
                </div>

                {/* Certification Level */}
                <div className="space-y-1.5 relative z-50 pb-4">
                    <label className="text-sm font-semibold text-slate-700 ml-1">ISTQB Certification Level</label>
                    <div className="relative">
                        <Award className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400 z-10" />
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-full text-left pl-11 pr-10 py-3 rounded-xl border transition-all outline-none bg-slate-50 focus:bg-white ${isOpen
                                ? 'border-orange-500 ring-2 ring-orange-200 bg-white'
                                : 'border-slate-200 hover:border-orange-300'
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
