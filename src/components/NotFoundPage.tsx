// components/NotFoundPage.tsx
import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 -z-10"></div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Oops! Course Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            The course you&apos;re looking for seems to have wandered off. Let&apos;s get you back on track!
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce delay-200"></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Link>

          <Link
            href="/courses"
            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-indigo-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 transform group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Browse Courses
            </span>
          </Link>
        </div>

        {/* Help text */}
        <p className="mt-12 text-sm text-gray-500">
          Need assistance?{" "}
          <Link
            href="/contact-us"
            className="text-indigo-600 hover:text-indigo-700 font-medium underline underline-offset-2"
          >
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}

// Add these animation delays to your tailwind.config.ts if not already present:
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'bounce': 'bounce 1s infinite',
//       },
//       animationDelay: {
//         '100': '100ms',
//         '200': '200ms',
//       }
//     }
//   }
// }