'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, TrendingUp, CheckCircle2 } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

interface EnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose, source }) => {
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

    // Country state for PhoneInput to allow placeholder visibility
    const [country, setCountry] = useState<any>('IN');

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
                        source: source || 'Book Free Demo - Header Button'
                    }),
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    setIsSubmitted(true);
                    setTimeout(() => {
                        setIsSubmitted(false);
                        onClose();
                        // Reset form
                        setFormData({
                            fullName: '',
                            email: '',
                            phone: ''
                        });
                    }, 3000);
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
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed z-[70] w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-6 sm:p-8">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        Book a Free Demo
                                    </h3>
                                </div>
                                <p className="text-sm font-semibold text-orange-600">
                                    Schedule a session with our experts
                                </p>
                                <p className="text-xs text-slate-600 mt-1">
                                    Fill the form below to schedule your free demo.
                                </p>
                            </div>

                            {/* Success Message */}
                            {isSubmitted ? (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        <div>
                                            <div className="text-sm font-semibold text-green-900">
                                                Thank You!
                                            </div>
                                            <div className="text-xs text-green-700">
                                                We'll contact you within 2 hours.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Form */
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
                                                country={country}
                                                onCountryChange={setCountry}
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
                            )}
                        </div>
                    </motion.div>
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

                        /* Fix placeholder visibility for all inputs with vendor prefixes */
                        .phone-input-container .PhoneInputInput::-webkit-input-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                        .phone-input-container .PhoneInputInput::-moz-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                        .phone-input-container .PhoneInputInput:-ms-input-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                        .phone-input-container .PhoneInputInput:-moz-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }

                        input::placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                        
                        input::-webkit-input-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                        input::-moz-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                        input:-ms-input-placeholder {
                            color: #64748b !important;
                            opacity: 1 !important;
                        }
                    `}</style>
                </>
            )}
        </AnimatePresence>
    );
};

export default EnquireModal;
