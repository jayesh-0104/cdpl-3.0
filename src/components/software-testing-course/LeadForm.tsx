'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, 'Valid phone required'),
    course: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    showCourse?: boolean;
    source?: string;
}

export default function LeadForm({
    title = "Book Your Free Demo Class",
    subtitle = "Get personalized career guidance in 5 minutes",
    buttonText = "Book Free Demo Now",
    showCourse = true,
    source = "Course Category - Hero Section (Default)"
}: LeadFormProps) {
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { name: '', email: '', phone: '', course: '' },
    });

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: data.name,
                    email: data.email,
                    phone: data.phone,
                    interest: data.course,
                    source: source,
                }),
            });
            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We received your enquiry. Our expert advisor will call you within 2 hours.</p>
            </div>
        );
    }

    return (
        <div className="w-full overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 break-words">
                {title}
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base break-words">
                {subtitle}
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5 w-full overflow-hidden">
                <div className="w-full overflow-hidden">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        {...form.register('name')}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 overflow-hidden"
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 break-words">
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>

                <div className="w-full overflow-hidden">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                    </label>
                    <input
                        {...form.register('email')}
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 overflow-hidden"
                    />
                    {form.formState.errors.email && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 break-words">
                            {form.formState.errors.email.message}
                        </p>
                    )}
                </div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                </label>
                <div className="phone-input-wrapper w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-orange-500 bg-white overflow-hidden">

                    <PhoneInput
                        defaultCountry="IN"
                        international
                        countryCallingCodeEditable={false}
                        value={form.watch('phone')}
                        onChange={(v) => form.setValue('phone', v || '')}
                        className="w-full [&>input]:w-full [&>input]:border-none [&>input]:outline-none [&>input]:bg-transparent overflow-hidden"
                        inputClass="!w-full !pl-14 !text-base !border-none !outline-none !ring-0"
                        containerClass="w-full"
                    />
                    {form.formState.errors.phone && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1 break-words">
                            {form.formState.errors.phone.message}
                        </p>
                    )}
                </div>

                {showCourse && (
                    <select
                        {...form.register('course')}
                        className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 bg-white overflow-hidden"
                    >
                        <option value="">Select Course</option>
                        <option>Manual Software Testing</option>
                        <option>Advanced Automation Testing</option>
                        <option>API Testing using POSTMAN and RestAPIs</option>
                        <option>ETL Testing Course</option>
                        <option>Database Management System using MySQL</option>
                        <option>Advanced Software Testing</option>
                        <option>Master Program in Java Programming</option>
                        <option>Advanced Manual & Automation Testing — Master Program</option>
                        <option>Python Programming</option>
                    </select>
                )}

                <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 rounded-xl text-base sm:text-lg transition overflow-hidden"
                >
                    {form.formState.isSubmitting ? 'Submitting...' : buttonText}
                </button>
            </form>
        </div>
    );
}
