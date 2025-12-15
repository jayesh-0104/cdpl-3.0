"use client";

import { useEffect, useState, useRef } from "react";
import { Question } from "@/data/mockTestData";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, LayoutGrid, TriangleAlert } from "lucide-react";

interface TestInterfaceProps {
    questions: Question[];
    courseName: string;
    onSubmit: (answers: Record<string, number>) => void;
    isSubmitting: boolean;
}

const TestInterface = ({ questions, courseName, onSubmit, isSubmitting }: TestInterfaceProps) => {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [attemptCounts, setAttemptCounts] = useState<Record<string, number>>({});
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showWarning, setShowWarning] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    void attemptCounts

    useEffect(() => {
        if (timeLeft <= 0) {
            onSubmit(answers);
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, onSubmit, answers]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handleOptionSelect = (questionId: string, optionIndex: number) => {
        // Update answers
        setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));

        // Increment attempt count for this question
        setAttemptCounts((prev) => ({
            ...prev,
            [questionId]: (prev[questionId] || 0) + 1
        }));
    };

    const handleNext = () => {
        if (!isLastQuestion) {
            setCurrentQuestionIndex((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePrevious = () => {
        if (!isFirstQuestion) {
            setCurrentQuestionIndex((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleComplete = () => {
        const answeredCount = Object.keys(answers).length;
        if (answeredCount < questions.length) {
            setShowWarning(true);
            return;
        }
        onSubmit(answers);
    };

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 450; // Approx 10 items
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Jump to specific question
    const handleJumpToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / questions.length) * 100;
    const isUrgent = timeLeft < 300;
    const currentAnswer = answers[currentQuestion.id];
    const isCurrentAnswered = currentAnswer !== undefined;

    return (
        <div className="flex flex-col gap-6 w-full max-w-[1440px] mx-auto px-4 md:px-6 select-none">

            {/* ----------------------------------------------------
                TOP NAVIGATOR: Horizontal Scrollable List
                ---------------------------------------------------- */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border-2 border-brand/30 shadow-lg shadow-orange-300 sticky top-[90px] z-[20] overflow-hidden">
                <div className="flex items-center gap-2">
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => handleScroll('left')}
                        className="p-2 rounded-lg bg-white cursor-pointer border border-gray-200 shadow-sm text-gray-400 hover:text-brand hover:border-brand transition-all flex-shrink-0"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex items-center gap-3 pb-1 custom-scrollbar scroll-smooth overflow-x-auto flex-1"
                    >
                        <div className="flex items-center gap-2 mr-4 text-xs font-bold uppercase tracking-widest text-brand whitespace-nowrap bg-white/80 backdrop-blur-sm z-10 pr-4">
                            <LayoutGrid className="w-4 h-4" />
                            <span>Question Navigator</span>
                        </div>

                        {questions.map((q, idx) => {
                            const isAnswered = answers[q.id] !== undefined;
                            const isCurrent = currentQuestionIndex === idx;

                            return (
                                <button
                                    key={q.id}
                                    onClick={() => handleJumpToQuestion(idx)}
                                    className={`flex-shrink-0 w-8 h-8 cursor-pointer rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${isCurrent
                                        ? 'bg-brand text-white shadow-lg scale-105 ring-2 ring-gray-100'
                                        : isAnswered
                                            ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                >
                                    {isAnswered && !isCurrent ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => handleScroll('right')}
                        className="p-2 rounded-lg bg-white cursor-pointer border border-gray-200 shadow-sm text-gray-400 hover:text-brand hover:border-brand transition-all flex-shrink-0"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* ----------------------------------------------------
                MAIN SPLIT CARD
                ---------------------------------------------------- */}
            <div className="min-h-[60vh] md:mt-5 lg:mt-0 flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">

                {/* LEFT PANEL: Immersive Context (Dark/Brand Theme) */}
                <div className="lg:w-5/12 bg-[#1a1a1a] text-white p-6 lg:p-12 flex flex-col relative overflow-hidden">
                    {/* Abstract decorative shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    {/* Header Info */}
                    <div className="relative z-10 flex items-center justify-between mb-8 lg:mb-0">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 py-2 rounded-full border border-white/10">
                            <Clock className={`w-4 h-4 ${isUrgent ? 'text-red-400 animate-pulse' : 'text-orange-400'}`} />
                            <span className="font-mono font-bold tracking-wider">{formatTime(timeLeft)}</span>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            Question {currentQuestionIndex + 1} / {questions.length}
                        </div>
                    </div>

                    {/* Main Question Display */}
                    <div className="relative lg:mt-16 z-10 animate-in slide-in-from-left-8 duration-700 fade-in">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-md mb-4 shadow-lg shadow-brand/20">
                                {courseName}
                            </span>
                            <h2 className="text-lg lg:text-3xl font-bold leading-tight lg:leading-snug text-white/95">
                                {currentQuestion.text}
                            </h2>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-8">
                            <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                                <span>Assessment Progress</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-brand to-orange-400 transition-all duration-500 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL: Interaction Area (Light Theme) */}
                <div className="lg:w-7/12 bg-gray-50/50 p-4 sm:p-6 lg:p-6 flex flex-col overflow-y-auto">
                    <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">

                        {/* Header with 'Attempted' Status */}
                        <div className="flex justify-between items-center mb-6 pl-1">
                            <h3 className="text-gray-400 font-bold uppercase tracking-wider text-xs">
                                Select your answer
                            </h3>
                            {isCurrentAnswered && (
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm border border-emerald-200">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Attempted</span>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {currentQuestion.options.map((option, idx) => {
                                const isSelected = currentAnswer === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(currentQuestion.id, idx)}
                                        className={`group relative text-left p-3 cursor-pointer rounded-2xl transition-all duration-300 border-2 ${isSelected
                                            ? 'bg-white border-brand shadow-xl shadow-brand/10 translate-x-2'
                                            : 'bg-white border-transparent shadow-sm hover:border-gray-200 hover:shadow-md hover:translate-x-1'
                                            }`}
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${isSelected
                                                ? 'bg-brand text-white'
                                                : 'bg-gray-100 text-brand group-hover:bg-gray-200'
                                                }`}>
                                                {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span className={`text-md font-medium transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                                                }`}>
                                                {option}
                                            </span>
                                        </div>

                                        {isSelected && (
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-brand animate-in zoom-in duration-300">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between gap-4 max-w-2xl mx-auto w-full">
                        <button
                            onClick={handlePrevious}
                            disabled={isFirstQuestion}
                            className={`px-4 sm:px-6 py-3 cursor-pointer rounded-xl font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all flex items-center gap-2 ${isFirstQuestion ? 'opacity-0 pointer-events-none' : ''
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" /> <span className="hidden sm:inline">Previous</span><span className="sm:hidden">Prev</span>
                        </button>

                        {!isLastQuestion ? (
                            <button
                                onClick={handleNext}
                                className="bg-gray-900 text-white px-5 sm:px-8 py-3 cursor-pointer rounded-xl font-bold shadow-lg shadow-gray-900/20 hover:bg-black hover:transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
                            >
                                <span className="hidden sm:inline">Next</span><span className="sm:hidden">Next</span> <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={handleComplete}
                                disabled={isSubmitting}
                                className="relative bg-brand text-white px-6 sm:px-10 py-3 cursor-pointer rounded-xl font-bold shadow-lg shadow-brand/30 hover:bg-orange-600 hover:transform hover:-translate-y-0.5 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                            >
                                {isSubmitting ? 'Finishing...' : 'Complete Test'}
                                {showWarning && (
                                    <div className="absolute bottom-full mb-3 right-0 w-max bg-red-50 text-red-600 text-xs font-bold px-3 py-2 rounded-lg border border-red-200 shadow-xl flex items-center gap-2 animate-in slide-in-from-bottom-2 fade-in">
                                        <TriangleAlert className="w-4 h-4" />
                                        Please attempt all questions first
                                        <div className="absolute bottom-[-5px] right-8 w-2 h-2 bg-red-50 border-r border-b border-red-200 rotate-45 transform" />
                                    </div>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestInterface;
