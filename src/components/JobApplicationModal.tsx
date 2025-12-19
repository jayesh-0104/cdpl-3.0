"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type JobApplicationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    jobId: string;
};

function ModalPortal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return createPortal(children, document.body);
}

export default function JobApplicationModal({
    isOpen,
    onClose,
    jobTitle,
    jobId,
}: JobApplicationModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        skills: "",
        experienceLevel: "",
        currentCtc: "",
        expectedCtc: "",
        noticePeriod: "", // This will be the dropdown value
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Reset form state when modal opens
            setIsSuccess(false);
            setError(null);
            setIsSubmitting(false);
            setResumeFile(null);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                location: "",
                skills: "",
                experienceLevel: "",
                currentCtc: "",
                expectedCtc: "",
                noticePeriod: "",
            });
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 5 * 1024 * 1024) {
                setError("File size exceeds 5MB limit.");
                return;
            }
            if (file.type !== "application/pdf") {
                setError("Only PDF files are allowed.");
                return;
            }
            setError(null);
            setResumeFile(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        if (!resumeFile) {
            setError("Please upload your resume.");
            setIsSubmitting(false);
            return;
        }

        try {
            const data = new FormData();
            data.append("position", jobTitle);
            data.append("jobId", jobId);
            data.append("fullName", formData.fullName);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("location", formData.location);
            data.append("skills", formData.skills);
            data.append("experienceLevel", formData.experienceLevel); // Dropdown
            data.append("currentCtc", formData.currentCtc);
            data.append("expectedCtc", formData.expectedCtc);
            data.append("noticePeriod", formData.noticePeriod); // Dropdown
            data.append("resume", resumeFile);
            data.append("source", "Jobs - Careers - Open role");

            const response = await fetch("/api/apply", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            setIsSuccess(true);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const experienceOptions = [
        "Fresher",
        "1 Year",
        "2 Years",
        "3 Years",
        "4 Years",
        "5 Years",
        "6 Years",
        "7 Years",
        "8 Years",
        "9 Years",
        "10+ Years",
    ];

    const noticePeriodOptions = [
        "Immediate",
        "15 Days",
        "30 Days",
        "45 Days",
        "60 Days",
        "90 Days",
        "Other",
    ];

    const fieldClass =
        "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-300 focus:outline-none focus:ring-4 focus:ring-orange-100";
    const labelClass = "mb-1.5 block text-xs font-semibold text-slate-700 text-left";

    return (
        <ModalPortal>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">Apply for {jobTitle}</h2>
                            <p className="text-xs text-slate-500">Please fill in your details below.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="mb-4 rounded-full bg-green-100 p-3 text-green-600">
                                    <CheckCircle className="h-12 w-12" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Application Submitted!</h3>
                                <p className="mt-2 max-w-xs text-sm text-slate-600">
                                    Thank you for applying. Our HR team will review your profile and get back to you shortly.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-8 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        {error}
                                    </div>
                                )}

                                {/* Personal Information */}
                                <div>
                                    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        <span className="h-px flex-1 bg-slate-200"></span>
                                        Personal Information
                                        <span className="h-px flex-1 bg-slate-200"></span>
                                    </h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="sm:col-span-2">
                                            <label className={labelClass}>Full Name *</label>
                                            <input
                                                required
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="Prakash Mishra"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Email *</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="prakash.mishra@gmail.com"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Phone Number *</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Location *</label>
                                            <input
                                                required
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="City"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Skills, Tools *</label>
                                            <input
                                                required
                                                name="skills"
                                                value={formData.skills}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="React, Node.js, Figma..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Professional Information */}
                                <div>
                                    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        <span className="h-px flex-1 bg-slate-200"></span>
                                        Professional Information
                                        <span className="h-px flex-1 bg-slate-200"></span>
                                    </h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className={labelClass}>Select Experience Level *</label>
                                            <select
                                                required
                                                name="experienceLevel"
                                                value={formData.experienceLevel}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                            >
                                                <option value="">Select...</option>
                                                {experienceOptions.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClass}>Current CTC *</label>
                                            <input
                                                required
                                                name="currentCtc"
                                                value={formData.currentCtc}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="e.g. 8 LPA"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Expected CTC *</label>
                                            <input
                                                required
                                                name="expectedCtc"
                                                value={formData.expectedCtc}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                                placeholder="e.g. 12 LPA"
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Notice Period (Days) *</label>
                                            <select
                                                required
                                                name="noticePeriod"
                                                value={formData.noticePeriod}
                                                onChange={handleInputChange}
                                                className={fieldClass}
                                            >
                                                <option value="">Select...</option>
                                                {noticePeriodOptions.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Resume Upload */}
                                <div>
                                    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        <span className="h-px flex-1 bg-slate-200"></span>
                                        Resume / CV
                                        <span className="h-px flex-1 bg-slate-200"></span>
                                    </h3>
                                    <div className="rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center transition-colors hover:border-orange-300 hover:bg-orange-50/30">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="resume-upload"
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="cursor-pointer flex flex-col items-center gap-2"
                                        >
                                            <div className="rounded-full bg-white p-3 shadow-sm ring-1 ring-slate-900/5">
                                                <Upload className="h-6 w-6 text-orange-500" />
                                            </div>
                                            <div className="text-sm font-medium text-slate-900">
                                                {resumeFile ? resumeFile.name : "Click to upload resume"}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                PDF only, max 5MB
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center gap-2 rounded-full bg-[#ff8c00] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#e67e00] focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                                        {isSubmitting ? "Submitting..." : "Submit Application"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
}
