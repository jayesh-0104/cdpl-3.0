import type { ReactNode } from "react";


export interface Course {
    id: string;
    href: string; // The primary link property
    title: string;
    description: string;
    duration: string;
    level: string;
    students: string;
    rating: number;
    price: string;
    skills: string[];
    icon: ReactNode | string; // Updated to allow string keys

    // Optional fields needed for new CourseCard
    features?: string[];
    syllabusLink?: string;
    offerEndsAt?: string;
    link?: string; // Some data uses 'link' instead of href, we should unify or support both
    popular?: boolean;
    category?: string;
    comingSoon?: boolean;
}


export interface Category {
    id: string;
    name: string;
    description: string;
    icon: ReactNode;
    color: string; // e.g., 'text-blue-600'
    borderColor: string; // e.g., 'border-blue-200'
    bgColor: string; // e.g., 'bg-blue-50'
    iconBgColor: string; // e.g., 'bg-blue-100'
    courses: Course[];
    comingSoon?: boolean;
}


// Utility: convert 'text-' color class to 'bg-'
export const textToBg = (textColor: string) => textColor.replace("text-", "bg-");