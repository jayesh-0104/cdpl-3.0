'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, CheckCircle2, Loader2, Building2, Briefcase, Calendar, Users, MessageSquare, BookOpen, ChevronDown } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReactDOM from 'react-dom';

const WORKSHOP_TYPES = [
    "Corporate Training",
    "College Workshop",
    "Faculty Development Program (FDP)",
    "Seminar/Webinar",
    "Other"
];

interface WorkshopRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
    title?: string;
    subtitle?: string;
    serviceName?: string; // Optional, for service requests specially
    interest?: string; // Optional, for mapping to admin templates
    variant?: 'workshop' | 'service' | 'general' | 'consultation' | 'event_contact' | 'affiliate';
}

const WorkshopRequestModal = ({
    isOpen,
    onClose,
    source = 'Website - Workshop Request',
    title = 'Request a Workshop',
    subtitle = 'Tell us about your requirements',
    serviceName,
    interest: initialInterest,
    variant = 'workshop'
}: WorkshopRequestModalProps) => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        workshopType: WORKSHOP_TYPES[0],
        participants: '',
        preferredDate: '',
        message: ''
    });

    // Error states
    const [errors, setErrors] = useState<Record<string, string | null>>({
        fullName: null,
        email: null,
        phone: null,
        company: null,
    });

    // Loading and submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation
    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'fullName':
                return !value || value.trim().length < 3 ? 'Full Name is required (min 3 chars).' : null;
            case 'email':
                return !value || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? 'Invalid email format.' : null;
            case 'company':
                return !value || value.trim().length < 2 ? 'Company/Organization Name is required.' : null;
            default:
                return null;
        }
    };

    const validatePhoneNumber = (phone: string | undefined) => {
        if (!phone || phone.trim() === '') return 'Mobile Number is required.';
        if (!isValidPhoneNumber(phone)) return 'Invalid phone number format.';
        return null;
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation for specific fields
        if (['fullName', 'email', 'company'].includes(name)) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handlePhoneChange = (phone: string | undefined) => {
        setFormData(prev => ({ ...prev, phone: phone || '' }));
        if (phone) setErrors(prev => ({ ...prev, phone: validatePhoneNumber(phone) }));
    };

    // Handle submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors = {
            fullName: validateField('fullName', formData.fullName),
            email: validateField('email', formData.email),
            company: validateField('company', formData.company),
            phone: validatePhoneNumber(formData.phone),
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(err => err !== null)) {
            try {
                // Determine payload based on variant
                const payload: any = {
                    ...formData,
                    source,
                    type: variant === 'service' ? 'service_request' :
                        variant === 'general' ? 'general_enquiry' :
                            variant === 'consultation' ? 'consultation' :
                                variant === 'event_contact' ? 'event_contact' :
                                    variant === 'affiliate' ? 'affiliate' : 'workshop',
                    serviceName: serviceName || undefined,
                    interest: initialInterest || (variant === 'workshop' ? formData.workshopType : undefined),
                    title
                };

                // Exclude unnecessary fields for non-workshop variants if desired, but keeping them safe
                if (variant === 'workshop') {
                    // payload includes workshopType, participants, preferredDate
                } else if (variant === 'service') {
                    // Ensure serviceName is there
                    payload.serviceName = serviceName;
                }

                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    setIsSubmitted(true);
                    setTimeout(() => {
                        handleClose();
                    }, 4000);
                } else {
                    alert('Submission failed. Please try again.');
                }
            } catch (error) {
                console.error('Network error:', error);
                alert('Network error. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
        }
    };

    // Handle modal close
    const handleClose = useCallback(() => {
        if (!isSubmitting) {
            setFormData({
                fullName: '', email: '', phone: '', company: '', jobTitle: '',
                workshopType: WORKSHOP_TYPES[0], participants: '', preferredDate: '', message: ''
            });
            setErrors({});
            setIsSubmitted(false);
            onClose();
        }
    }, [isSubmitting, onClose]);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Use React Portal to render modal at the document body level to avoid z-index/stacking context issues
    if (!mounted || typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
        <>
            <style jsx global>{`
                .PhoneInputCountrySelect { color: #1e293b !important; font-weight: 500 !important; }
                .PhoneInputInput { 
                    border: 1px solid #d1d5db; 
                    border-radius: 0.5rem; 
                    padding: 0.5rem 0.75rem;
                    width: 100%;
                }
                .PhoneInputInput:focus {
                    outline: 2px solid #bfdbfe;
                    border-color: #3b82f6;
                }
            `}</style>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[10000] overflow-y-auto">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/75 backdrop-blur-md transition-all duration-300"
                            onClick={handleClose}
                        />

                        {/* Modal Container */}
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white text-left shadow-2xl ring-1 ring-gray-900/5"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-5 relative">
                                    <button onClick={handleClose} disabled={isSubmitting} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                                        <X className="w-6 h-6" />
                                    </button>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                                            <Briefcase className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
                                            <p className="text-sm text-blue-100/90 font-medium">{subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6">
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                                            <p className="text-gray-600 mb-4">
                                                Thank you for your interest. Our team will review your requirements and contact you shortly.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Kedar Jadhav" className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 placeholder:text-gray-400" disabled={isSubmitting} />
                                                    </div>
                                                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                                                </div>

                                                {variant === 'affiliate' ? (
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Website / Social Profile <span className="text-red-500">*</span></label>
                                                        <div className="relative">
                                                            <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="https://yourwebsite.com" className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 placeholder:text-gray-400" disabled={isSubmitting} />
                                                        </div>
                                                        {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Company / Org <span className="text-red-500">*</span></label>
                                                        <div className="relative">
                                                            <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Acme Corp" className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 placeholder:text-gray-400" disabled={isSubmitting} />
                                                        </div>
                                                        {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Email <span className="text-red-500">*</span></label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="kedar@company.com" className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 placeholder:text-gray-400" disabled={isSubmitting} />
                                                    </div>
                                                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Mobile <span className="text-red-500">*</span></label>
                                                    <PhoneInput
                                                        international
                                                        defaultCountry="IN"
                                                        value={formData.phone}
                                                        onChange={handlePhoneChange}
                                                        placeholder="Enter number"
                                                        className="w-full text-sm font-medium"
                                                        disabled={isSubmitting}
                                                    />
                                                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                                                </div>
                                            </div>

                                            {/* Variant specific fields */}
                                            {variant === 'workshop' && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Workshop Type</label>
                                                        <div className="relative">
                                                            <BookOpen className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                            <select name="workshopType" value={formData.workshopType} onChange={handleInputChange} className="w-full pl-9 pr-8 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 appearance-none disabled:opacity-50" disabled={isSubmitting}>
                                                                {WORKSHOP_TYPES.map(type => (
                                                                    <option key={type} value={type}>{type}</option>
                                                                ))}
                                                            </select>
                                                            <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Participants (Approx)</label>
                                                        <div className="relative">
                                                            <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                            <input type="number" name="participants" value={formData.participants} onChange={handleInputChange} placeholder="e.g. 20" className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 placeholder:text-gray-400" disabled={isSubmitting} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {variant === 'consultation' && (
                                                <div>
                                                    <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Preferred Date</label>
                                                    <div className="relative">
                                                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                                        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900" disabled={isSubmitting} />
                                                    </div>
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wide">Message / Requirements</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder={variant === 'workshop' ? "Tell us about your training needs..." : "How can we help you?"} className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 border-gray-200 transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none" disabled={isSubmitting}></textarea>
                                                </div>
                                            </div>

                                            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none flex items-center justify-center gap-2">
                                                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : "Submit Request"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
};

export default WorkshopRequestModal;
