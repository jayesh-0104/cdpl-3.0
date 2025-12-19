import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, TrendingUp, CheckCircle2, Download } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

// --- Types ---
export interface DownloadFormValues {
  fullName: string;
  email: string;
  phone: string;
}

interface DownloadFormContentProps {
  courseTitle: string;
  syllabusLink?: string;
  source?: string;
  onSubmit: (data: DownloadFormValues) => void;
  onClose: () => void;
}

export interface DownloadFormButtonProps {
  courseTitle: string;
  syllabusLink?: string;
  buttonText: React.ReactNode;
  buttonClassName: string;
  source?: string;
  onSubmit: (data: DownloadFormValues) => void;
}

// --- Validation Logic Extracted from HomeHeroSection.tsx ---

const validateFullName = (name: string): string | null => {
  if (!name) return 'Full Name is required.';
  if (name.trim().length < 3) return 'Full Name must be at least 3 characters.';
  return null;
};

const validateEmail = (email: string): string | null => {
  if (!email) return 'Email Address is required.';
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return 'Invalid email format.';
  return null;
};

const validatePhoneNumber = (phone: string | undefined): string | null => {
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
      if (
        (n2 === n1 + 1 && n3 === n2 + 1) ||
        (n2 === n1 - 1 && n3 === n2 - 1)
      ) {
        return true;
      }
    }
    return false;
  };
  if (isSequential(digits)) return 'Phone number cannot consist of sequential digits.';

  // Check for all zeros
  if (/^0+$/.test(digits)) return 'Phone number cannot be all zeros.';

  return null;
};

// --- Reusable Form Component (Modal Content) ---
const DownloadFormContent: React.FC<DownloadFormContentProps> = ({ courseTitle, syllabusLink, source, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<DownloadFormValues>({
    fullName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DownloadFormValues, string | null>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null })); // Clear error on change
    setSubmitError(null);
  };

  const handlePhoneChange = (phone: string | undefined) => {
    setFormData(prev => ({ ...prev, phone: phone || '' }));
    setErrors(prev => ({ ...prev, phone: null })); // Clear error on change
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof DownloadFormValues, string | null>> = {
      fullName: validateFullName(formData.fullName),
      email: validateEmail(formData.email),
      phone: validatePhoneNumber(formData.phone),
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => error === null);

    if (isValid) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            type: 'syllabus',
            source: source || `Home Page - ${courseTitle} - Download Syllabus Modal Form`,
            courseName: courseTitle,
            syllabusLink,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        onSubmit(formData); // Execute the passed-in submit logic (logging, analytics, etc.)
        setIsSubmitting(false);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitError('Something went wrong. Please try again later.');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 w-full max-w-md mx-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close form"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Form Header */}
      <div className="mb-6 text-center">
        <Download className="h-8 w-8 text-orange-600 mx-auto mb-2" />
        <h3 className="text-xl font-bold text-slate-900">
          Download Syllabus for <span className="text-blue-600">{courseTitle}</span>
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Fill the form to get instant access to the detailed course syllabus.
        </p>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-sm font-semibold text-green-900">
                  Success!
                </div>
                <div className="text-xs text-green-700">
                  Your download link has been sent to your email.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {submitError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
          {submitError}
        </div>
      )}

      {/* Form */}
      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={(e) => setErrors(prev => ({ ...prev, fullName: validateFullName(e.target.value) }))}
                required
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your full name"
                style={{ color: '#1e293b' }}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={(e) => setErrors(prev => ({ ...prev, email: validateEmail(e.target.value) }))}
                required
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#ff8c00] focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your email address"
                style={{ color: '#1e293b' }}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Input - with react-phone-number-input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Mobile Number *
            </label>
            <div className="relative">
              <PhoneInput
                international
                defaultCountry="IN"
                value={formData.phone}
                onChange={handlePhoneChange}
                onBlur={() => setErrors(prev => ({ ...prev, phone: validatePhoneNumber(formData.phone) }))}
                className={`phone-input-container ${errors.phone ? 'border-red-500' : ''
                  }`}
                placeholder="Enter phone number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
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
                Download Now
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
  );
};

// --- Modal Wrapper Component (Styled like CourseOverviewSection.tsx) ---
export const DownloadFormButton: React.FC<DownloadFormButtonProps> = ({
  courseTitle,
  syllabusLink,
  buttonText,
  buttonClassName,
  source,
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  const handleFormSubmit = (data: DownloadFormValues) => {
    onSubmit(data);
    // The form content component handles closing after success
  };

  return (
    <>
      {/* The Button that triggers the modal */}
      <button onClick={openModal} className={buttonClassName}>
        {buttonText}
      </button>

      {/* The Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative w-full max-w-md"
              >
                <DownloadFormContent
                  courseTitle={courseTitle}
                  syllabusLink={syllabusLink}
                  source={source}
                  onSubmit={handleFormSubmit}
                  onClose={closeModal}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Global Phone Input Styles (Extracted from HomeHeroSection.tsx) ---
// Note: In a real Next.js app, this should be in a global CSS file or a dedicated component.
// Since the original HomeHeroSection.tsx used a <style jsx global> block, we'll assume
// the user has a global way to inject these styles, or they are already present.
// I will not include the style block here to avoid issues, but I will remind the user
// that the phone input styling from HomeHeroSection.tsx must be present globally.
