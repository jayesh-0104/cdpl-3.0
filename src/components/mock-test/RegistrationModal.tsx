"use client";

import { useState, useEffect } from "react";
import { X, User, Mail, Briefcase } from "lucide-react";
import dynamic from "next/dynamic";
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';
import Link from "next/link";

const PhoneInput = dynamic(() => import("react-phone-number-input"), { ssr: false });

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (data: RegistrationData) => void;
    courseName: string;
}

export interface RegistrationData {
    name: string;
    email: string;
    number: string;
    occupation: "student" | "professional";
}

const RegistrationModal = ({ isOpen, onClose, onRegister, courseName }: RegistrationModalProps) => {
    const [formData, setFormData] = useState<RegistrationData>({
        name: "",
        email: "",
        number: "",
        occupation: "student",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        number: ""
    });

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: "",
                email: "",
                number: "",
                occupation: "student",
            });
            setErrors({
                name: "",
                email: "",
                number: ""
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const validateName = (name: string) => {
        if (!name) return "Full Name is required.";
        if (name.trim().length < 3) return "Full Name must be at least 3 characters.";
        return "";
    };

    const validateEmail = (email: string) => {
        if (!email) return "Email Address is required.";
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return "Invalid email format.";
        return "";
    };

    const validateNumber = (number: string) => {
        if (!number) return "Mobile Number is required.";
        if (!isValidPhoneNumber(number)) return "Invalid phone number format.";

        const digits = number.replace(/\D/g, '');
        // Check for repeating digits
        if (/^(\d)\1+$/.test(digits)) return "Phone number cannot consist of repeating digits.";

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
        if (isSequential(digits)) return "Phone number cannot consist of sequential digits.";

        // Check for all zeros
        if (/^0+$/.test(digits)) return "Phone number cannot be all zeros.";

        return "";
    };

    const handleBlur = (field: keyof typeof errors, value: string) => {
        let error = "";
        if (field === 'name') error = validateName(value);
        if (field === 'email') error = validateEmail(value);
        if (field === 'number') error = validateNumber(value);

        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const numberError = validateNumber(formData.number);

        setErrors({
            name: nameError,
            email: emailError,
            number: numberError
        });

        if (!nameError && !emailError && !numberError) {
            onRegister(formData);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            ></div>

            <style jsx global>{`
                .phone-input-wrapper .PhoneInputInput {
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .phone-input-wrapper .PhoneInputCountry {
                    margin-right: 8px;
                }
            `}</style>

            {/* Modal Content */}
            <div className="relative w-full h-[650px] max-w-lg bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-purple-600"></div>

                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100/50"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-2">
                            Start Your Journey
                        </h2>
                        <p className="text-gray-600">
                            Complete your profile to unlock the <span className="font-semibold text-brand">{courseName}</span> mock test.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-0">
                            <div className="relative mb-6">
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors w-5 h-5" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setFormData({ ...formData, name: val });
                                            // Eager validation to match Home form
                                            setErrors(prev => ({ ...prev, name: validateName(val) }));
                                        }}
                                        onBlur={(e) => handleBlur('name', e.target.value)}
                                        className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-gray-800 placeholder-gray-400 hover:bg-white`}
                                        placeholder="Full Name"
                                    />
                                </div>
                                {errors.name && <p className="absolute -bottom-5 left-1 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
                            </div>

                            <div className="relative mb-6">
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors w-5 h-5" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setFormData({ ...formData, email: val });
                                            // Eager validation to match Home form
                                            setErrors(prev => ({ ...prev, email: validateEmail(val) }));
                                        }}
                                        onBlur={(e) => handleBlur('email', e.target.value)}
                                        className={`w-full pl-12 pr-4 py-3.5 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all font-medium text-gray-800 placeholder-gray-400 hover:bg-white`}
                                        placeholder="Email Address"
                                    />
                                </div>
                                {errors.email && <p className="absolute -bottom-5 left-1 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
                            </div>

                            <div className="relative mb-6">
                                <div className="relative group">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Phone Number</label>
                                    <div className={`phone-input-wrapper w-full px-3 py-3.5 bg-gray-50 border ${errors.number ? 'border-red-500' : 'border-gray-200'} rounded-xl focus-within:ring-2 focus-within:ring-brand/20 focus-within:border-brand hover:bg-white transition-all`}>
                                        <PhoneInput
                                            defaultCountry="IN"
                                            international
                                            countryCallingCodeEditable={false}
                                            value={formData.number}
                                            onChange={(v) => {
                                                const val = v || '';
                                                setFormData({ ...formData, number: val });
                                                // Eager validation to match Home form
                                                if (val) setErrors(prev => ({ ...prev, number: validateNumber(val) }));
                                            }}
                                            onBlur={() => handleBlur('number', formData.number)}
                                            className="w-full [&>input]:w-full [&>input]:border-none [&>input]:outline-none [&>input]:bg-transparent"
                                            inputClass="!w-full !pl-14 !text-base !border-none !outline-none !ring-0 !bg-transparent"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                {errors.number && <p className="absolute -bottom-5 left-1 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">{errors.number}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1 flex items-center gap-2">
                                <Briefcase className="w-4 h-4" /> I am a:
                            </label>
                            <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-xl">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, occupation: "student" })}
                                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${formData.occupation === "student"
                                        ? "bg-white text-brand shadow-md transform scale-100"
                                        : "text-gray-500 hover:text-gray-700 bg-transparent"
                                        }`}
                                >
                                    Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, occupation: "professional" })}
                                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm ${formData.occupation === "professional"
                                        ? "bg-white text-brand shadow-md transform scale-100"
                                        : "text-gray-500 hover:text-gray-700 bg-transparent"
                                        }`}
                                >
                                    Professional
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-gradient-to-r from-brand to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            Start Assessment
                        </button>

                        <p className="text-xs text-center text-gray-400">
                            By continuing, you agree to our <Link href="/terms-of-service">Terms</Link> & <Link href="/privacy-policy">Privacy Policy</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationModal;
