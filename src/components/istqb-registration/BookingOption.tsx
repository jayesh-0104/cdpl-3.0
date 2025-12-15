'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Loader2, Video } from 'lucide-react';
import { submitIstqbStep2 } from '@/app/istqb-registration/actions';

interface BookingOptionProps {
    userData: { name: string; email: string; phone: string };
    onSuccess: () => void;
    onBack: () => void;
}

export default function BookingOption({ userData, onSuccess, onBack }: BookingOptionProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Logic: Before 3:30 PM (15:30) -> Today, else Tomorrow
    const now = new Date();
    const cutoff = new Date();
    cutoff.setHours(15, 30, 0, 0);

    const isToday = now < cutoff;
    const meetingDateLabel = isToday ? 'Today' : 'Tomorrow';
    const meetingDateFull = isToday
        ? now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
        : new Date(now.setDate(now.getDate() + 1)).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    async function handleBook() {
        setIsSubmitting(true);
        try {
            const result = await submitIstqbStep2({
                action: 'book_meeting',
                ...userData,
                meetingDate: meetingDateFull
            });
            if (result.success) {
                // Open Google Calendar in new tab
                window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=ISTQB+Consultation+with+CDPL&details=Discussing+ISTQB+Certification+Path&location=Online+Meeting', '_blank');
                onSuccess();
            } else {
                alert('Error booking meeting.');
            }
        } catch (e) {
            console.error(e);
            alert('Error booking meeting.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full"
        >
            <div className="p-8 md:p-10 flex flex-col h-full relative">
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    title="Go Back"
                >
                    <ArrowRight className="w-5 h-5 rotate-180" />
                </button>

                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mt-6">
                    <Video className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">Book a Free Consultation</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                    Speak with our ISTQB experts to clarify your doubts and choose the right path.
                </p>

                <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-indigo-500" />
                        <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</p>
                            <p className="font-medium text-slate-900">{meetingDateLabel}, {meetingDateFull}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-indigo-500" />
                        <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Time</p>
                            <p className="font-medium text-slate-900">3:30 PM</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleBook}
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                    {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            Book Meeting
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>
        </motion.div>
    );
}
