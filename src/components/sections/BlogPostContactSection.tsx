"use client";
import React, { useState } from 'react';
import {
  Award
} from "lucide-react";
import dynamic from 'next/dynamic';

const EnquireModal = dynamic(
  () => import("../Layout/EnquireModal"),
  { ssr: false }
);

interface BlogPostContactSectionProps {
  slug?: string;
}

export const BlogPostContactSection: React.FC<BlogPostContactSectionProps> = ({ slug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mt-8 sm:mt-12  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">

      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for Career Guidance?
          </h3>
          <p className="text-lg text-white/90 mb-8">
            At CDPL Ed-tech Institute, we provide expert career advice and counselling in AI, ML, Software Testing, Software Development, and more. Apply this checklist to your content strategy and elevate your skills. For personalized guidance, book a session today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Award className="w-5 h-5" />
              Book a Free Counselling Session
            </button>

          </div>
        </div>
      </div>

      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={`Blog - ${slug || 'unknown'} - contact - Book a Free Counselling Session`}
      />
    </section>
  );
};