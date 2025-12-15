'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  TrendingUp,
  Users,
  Star,
  CheckCircle2,
  Sparkles,
  Download,
  Eye,
  Play,
  User,
  Mail,
  Home
} from 'lucide-react';

// Import react-phone-number-input for professional phone input
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';

// Import BrochureDownloadModal
import BrochureDownloadModal from './BrochureDownloadModal';

// Import YouTubeVideoModal
import YouTubeVideoModal from './YouTubeVideoModal';

// Component for the list of features/stats (for mobile)
interface MobileFeatureListProps {
  onOpenBrochure: () => void;
  onOpenVideo: () => void;
}

const MobileFeatureList: React.FC<MobileFeatureListProps> = ({ onOpenBrochure, onOpenVideo }) => (
  <div className="mt-7 space-y-4">
    {/* List of features/stats */}
    <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">5,000+ Students Placed</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-orange-500 fill-orange-500 flex-shrink-0" />
        <span className="font-semibold">4.9/5 Student Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="h-4 w-4 text-indigo-600 flex-shrink-0" />
        <span className="font-semibold">15+ Years Industry Experience</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">100% Live Interactive Classes</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">90+ Real-World Projects</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">ISTQB & Industry Certifications</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">100% Job Support with Interview Guarantee</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">Flexible Weekend & Weekday Batches</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
        <span className="font-semibold">Lifetime Access to Course Materials</span>
      </div>
    </div>


    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={onOpenBrochure}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
      >
        <Download className="h-5 w-5" />
        Download Brochure
      </button>
      <Link
        href="/jobs/placements"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
      >
        <Eye className="h-5 w-5" />
        View Placement Stories
      </Link>
      <button
        onClick={onOpenVideo}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto cursor-pointer"
      >
        <Play className="h-5 w-5" />
        Watch CDPL
      </button>
    </div>
  </div>
);

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const }
};

// Component for desktop hero content
interface DesktopHeroContentProps {
  onOpenBrochure: () => void;
  onOpenVideo: () => void;
}

const DesktopHeroContent: React.FC<DesktopHeroContentProps> = ({ onOpenBrochure, onOpenVideo }) => (
  <>
    {/* Top Badge */}
    <motion.div
      {...fadeUp}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-full px-4 py-2 mb-5"
    >
      <Sparkles className="h-3.5 w-3.5 text-indigo-500" aria-hidden="true" />
      <span className="text-[11px] sm:text-xs font-semibold text-indigo-700">
        🏆 India&apos;s #1 Software Testing & Data Science Training Institute
      </span>
    </motion.div>

    {/* Main Headline - Updated Copy */}
    <motion.h1
      id="home-heading"
      {...fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.06 }}
      className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
    >
      Master <span className="text-brand">Software Testing</span> & <span className="text-brand">Data Science</span> with <span className="text-brand">100% Placement</span>
    </motion.h1>

    {/* Enhanced Subheadline */}
    <motion.p
      {...fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.12 }}
      className="mt-5 text-[15px] sm:text-base md:text-lg leading-7 text-slate-700"
    >
      Launch your tech career with industry-leading courses, live projects, and guaranteed job interviews. Join 5000+ successful graduates today.
    </motion.p>

    {/* Trust Indicators - 3 Cards */}
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.18 }}
      className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4"
    >
      {/* Card 1 - Students Placed */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
          <Users className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">5,000+</div>
          <div className="text-xs text-slate-600">Students Placed</div>
        </div>
      </div>

      {/* Card 2 - Rating */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
          <Star className="h-5 w-5 text-white fill-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">4.9/5</div>
          <div className="text-xs text-slate-600">Student Rating</div>
        </div>
      </div>

      {/* Card 3 - Experience */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Award className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-xl font-bold text-slate-900">15+ Years</div>
          <div className="text-xs text-slate-600">Industry Experience</div>
        </div>
      </div>
    </motion.div>

    {/* Key Features - 6 Benefits */}
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.24 }}
      className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {[
        { icon: CheckCircle2, text: '100% Live Interactive Classes', color: 'text-green-600' },
        { icon: CheckCircle2, text: '90+ Real-World Projects', color: 'text-blue-600' },
        { icon: CheckCircle2, text: 'ISTQB & Industry Certifications', color: 'text-purple-600' },
        { icon: CheckCircle2, text: '100% Job Support with Interview Guarantee', color: 'text-indigo-600' },
        { icon: CheckCircle2, text: 'Flexible Weekend & Weekday Batches', color: 'text-orange-600' },
        { icon: CheckCircle2, text: 'Lifetime Access to Course Materials', color: 'text-teal-600' },
      ].map((feature, index) => (
        <div key={index} className="flex items-start gap-2">
          <feature.icon className={`h-5 w-5 ${feature.color} flex-shrink-0 mt-0.5`} />
          <span className="text-sm text-slate-700">{feature.text}</span>
        </div>
      ))}
    </motion.div>


    {/* CTA Buttons */}
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.36 }}
      className="mt-7 flex flex-col sm:flex-row gap-4"
    >
      {/* Primary CTA - Download Brochure */}
      <button
        onClick={onOpenBrochure}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Download className="h-5 w-5" />
        Download Brochure
      </button>

      {/* Secondary CTA - View Placement Success Stories */}
      <Link
        href="/jobs/placements"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Eye className="h-5 w-5" />
        View Placement Stories
      </Link>

      {/* Tertiary CTA - Watch CDPL */}
      <button
        onClick={onOpenVideo}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <Play className="h-5 w-5" />
        Watch CDPL
      </button>
    </motion.div>
  </>
);

const HomeHeroSection: React.FC = () => {
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

  // Brochure modal state
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // YouTube video URL - UPDATE THIS WITH YOUR VIDEO URL
  const videoUrl = 'https://www.youtube.com/watch?v=8kB2wESj1n8'; // Replace YOUR_VIDEO_ID with actual video ID

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
            source: 'Enquiry Form - Home Hero Section'
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

  const openBrochure = useCallback(() => setIsBrochureModalOpen(true), []);
  const openVideo = useCallback(() => setIsVideoModalOpen(true), []);

  // The original Breadcrumb component
  const Breadcrumb = (
    <nav aria-label="Breadcrumb" className="lg:mb-6 mb-2">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          <Link href="/" className="hover:text-indigo-700 font-semibold text-slate-900 transition-colors">
            Home
          </Link>
        </li>
      </ol>
    </nav>
  );

  // The original Lead Form block (Right side of the grid)
  const LeadForm = (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] as const }}
      className="order-2 lg:order-2 lg:col-span-5"
    >
      <div className="sticky top-4 max-w-sm mx-auto lg:ml-auto lg:mr-0">
        <div className="bg-white/92 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8">
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

            {/* Full Name Input - TestRiq Style */}
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

            {/* Email Input - TestRiq Style */}
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

            {/* Phone Input - TestRiq Style with react-phone-number-input */}
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
    </motion.div>
  );

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

      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 lg:py-4 py-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full blur-3xl"
          />
        </div>

        {/* Main Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- Mobile Layout (lg:hidden) --- */}
          <div className="lg:hidden">
            {/* 1. Breadcrumb */}
            {Breadcrumb}

            {/* 2. Headline */}
            <motion.h1
              id="home-heading-mobile"
              {...fadeUp}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.06 }}
              className="mt-2 py-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Master <span className="block mt-1 text-brand">Software Testing</span> & <span className="text-brand">Data Science</span>
            </motion.h1>

            {/* 3. Description */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.12 }}
              className="mt-1 mb-1.5 text-[15px] sm:text-base leading-7 text-slate-700"
            >
              Launch your tech career with industry-leading courses, live projects, and guaranteed job interviews. Join 5000+ successful graduates today.
            </motion.p>

            {/* 4. Form Card */}
            {LeadForm}

            {/* 5. Mobile Feature List */}
            <MobileFeatureList
              onOpenBrochure={openBrochure}
              onOpenVideo={openVideo}
            />
          </div>

          {/* --- Desktop/Laptop Layout (hidden lg:block) --- */}
          <div className="hidden lg:block">
            {/* 1. Breadcrumb */}
            {Breadcrumb}

            {/* 2. Grid Layout - 8 columns left, 4 columns right */}
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

              {/* Left Content - 8 columns (66.67% width) */}
              <div className="order-1 lg:order-1 lg:col-span-7">
                <DesktopHeroContent onOpenBrochure={openBrochure} onOpenVideo={openVideo} />
              </div>

              {/* Right Form - 4 columns (33.33% width) */}
              <div className="order-2 lg:order-2 lg:col-span-5">
                {LeadForm}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download Modal */}
      <BrochureDownloadModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* YouTube Video Modal */}
      <YouTubeVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default HomeHeroSection;