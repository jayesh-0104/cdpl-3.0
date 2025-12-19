'use client';

import { useState, useEffect } from 'react';
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
    const [meetingDateInfo, setMeetingDateInfo] = useState<{ label: string; full: string; gCalUrl: string } | null>(null);

    useEffect(() => {
        const now = new Date();
        const cutoff = new Date();
        cutoff.setHours(15, 30, 0, 0);

        const isToday = now < cutoff;

        // Calculate Target Date for Display & URL
        const targetDate = new Date(now);
        if (!isToday) {
            targetDate.setDate(targetDate.getDate() + 1);
        }

        const label = isToday ? 'Today' : 'Tomorrow';
        const full = targetDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

        // Google Calendar Date Logic (Target 3:30 PM IST = 10:00 AM UTC)
        // Format YYYYMMDD
        const yyyy = targetDate.getFullYear();
        const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
        const dd = String(targetDate.getDate()).padStart(2, '0');
        const dateStr = `${yyyy}${mm}${dd}`;

        // dates=START/END in UTC. 3:30 PM IST is 10:00 UTC. 4:30 PM IST is 11:00 UTC.
        // Even better: use YYYYMMDDTHHMMSS format in local time with TZ offset? No, GCal prefers UTC Z.
        // We will hardcode 100000Z / 110000Z which assumes standard time.
        // Actually, if IST is +5:30. 15:30 - 5:30 = 10:00.
        const gCalUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=ISTQB+Consultation+with+CDPL&details=Discussing+ISTQB+Certification+Path&location=Online+Meeting&dates=${dateStr}T100000Z/${dateStr}T110000Z`;

        setMeetingDateInfo({ label, full, gCalUrl });
    }, []);

    async function handleBook() {
        if (!meetingDateInfo) return;
        setIsSubmitting(true);
        try {
            const result = await submitIstqbStep2({
                action: 'book_meeting',
                ...userData,
                meetingDate: meetingDateInfo.full
            });
            if (result.success) {
                // Open Google Calendar in new tab
                window.open(meetingDateInfo.gCalUrl, '_blank');
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
                            <p className="font-medium text-slate-900">
                                {meetingDateInfo ? `${meetingDateInfo.label}, ${meetingDateInfo.full}` : <span className="animate-pulse bg-slate-200 h-5 w-32 block rounded"></span>}
                            </p>
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
