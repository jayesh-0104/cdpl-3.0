"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { getCourseBySlug, getRelatedCourses } from "@/lib/mock-db";
import { MockCourse } from "@/data/mockTestData";
import TestInterface from "@/components/mock-test/TestInterface";
import ResultView from "@/components/mock-test/ResultView";
import { RegistrationData } from "@/components/mock-test/RegistrationModal";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ courseSlug: string }>;
}

export default function MockTestPage({ params }: PageProps) {
    const router = useRouter();
    // In Next.js 15 app router, params are async.
    const { courseSlug } = use(params);

    const [course, setCourse] = useState<MockCourse | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<RegistrationData | null>(null);
    const [testCompleted, setTestCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [relatedCourses, setRelatedCourses] = useState<MockCourse[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [showExitConfirm, setShowExitConfirm] = useState(false);

    useEffect(() => {
        // Check registration
        const storedUser = sessionStorage.getItem("mockTestUser");
        if (!storedUser) {
            router.replace("/mock-test");
            return;
        }
        setUser(JSON.parse(storedUser));

        // Fetch Course
        getCourseBySlug(courseSlug).then((c) => {
            if (!c) {
                // Handle 404
                return;
            }

            // Shuffle and select 20 questions
            // We create a new object to avoid mutating the original data source
            const shuffledQuestions = shuffleArray([...c.questions]);
            const selectedQuestions = shuffledQuestions.slice(0, 30);

            setCourse({ ...c, questions: selectedQuestions });

            // Fetch related
            getRelatedCourses(c.categoryId, c.id).then(related => {
                setRelatedCourses([c, ...related]);
            });

            setLoading(false);
        });
    }, [courseSlug, router]);

    // Fisher-Yates Shuffle Algorithm
    const shuffleArray = <T,>(array: T[]): T[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const handleSubmit = async (answers: Record<string, number>) => {
        if (!course || !user) return;
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/mock-test/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userDetails: user,
                    answers,
                    courseSlug: course.slug,
                }),
            });

            if (!response.ok) throw new Error("Submission failed");

            const result = await response.json();
            setScore(result.score);
            setTestCompleted(true);
        } catch (error) {
            console.error(error);
            alert("Failed to submit test. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleExitConfirm = () => {
        router.push("/mock-test");
    };

    if (loading || !course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8 relative">

            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 border border-gray-100 transform transition-all scale-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Leave Mock Test?</h3>
                        <p className="text-gray-600 mb-6 font-medium">
                            Are you sure you want to go back? Your progress will be lost.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setShowExitConfirm(false)}
                                className="px-4 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                No, Stay
                            </button>
                            <button
                                onClick={handleExitConfirm}
                                className="px-4 py-2 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                            >
                                Yes, Leave
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-5xl mx-auto">
                {!testCompleted ? (
                    <div className="md:flex">
                        {/* Heading removed here, now handled inside TestInterface */}
                        <aside className="w-fit h-fit mb-2 md:mb-0 top-0 text-gray-700 mt-2 hover:text-brand transition-all duration-200 cursor-pointer">
                            <button
                                onClick={() => setShowExitConfirm(true)}
                                className="flex items-center gap-1 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-md font-medium">Back</span>
                            </button>
                        </aside>
                        <TestInterface
                            questions={course.questions}
                            courseName={course.name}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                ) : (
                    <ResultView
                        score={score}
                        totalQuestions={course.questions.length}
                        relatedCourses={relatedCourses}
                    />
                )}
            </div>
        </div>
    );
}
