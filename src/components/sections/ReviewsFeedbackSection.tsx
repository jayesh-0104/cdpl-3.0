"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Filter, CheckCircle2, Trophy, BadgeCheck } from "lucide-react";

import { getAllReviews, type StudentReview } from "@/data/reviews/reviewsData";
import SafeAvatar from "@/components/sections/SafeAvatar";

// --- Configuration ---
const FILTERS = [
  { id: "all", label: "All Reviews" },
  { id: "testing", label: "Software Testing", matches: ["Software Testing", "QA Engineer"] },
  { id: "data", label: "Data & Analytics", matches: ["Data Analyst", "Data Scientist"] },
  { id: "marketing", label: "Digital Marketing", matches: ["Digital Marketing"] },
];

function getCategory(role: string): string {
  if (["Software Testing", "QA Engineer"].includes(role)) return "testing";
  if (["Data Analyst", "Data Scientist"].includes(role)) return "data";
  if (["Digital Marketing"].includes(role)) return "marketing";
  return "other";
}

// --- Components ---

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${active
        ? "bg-slate-900 border-slate-900 text-white shadow-md"
        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
        }`}
    >
      {children}
    </button>
  );
}

function ReviewCard({ review }: { review: StudentReview }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex gap-4">
        {/* Avatar Column */}
        <div className="flex-shrink-0">
          <SafeAvatar
            name={review.name}
            sizes="48px"
            className="w-12 h-12 rounded-full ring-2 ring-slate-100 group-hover:ring-blue-100 transition-all"
          />
        </div>

        {/* Content Column */}
        <div className="flex-1 min-w-0 space-y-3">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                {review.name}
                <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-50" />
              </h3>
              <div className="text-xs text-slate-500 font-medium">{review.role}</div>
            </div>
            <div className="flex items-center gap-0.5" aria-label={`Rated ${review.rating} stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(review.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"}`}
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <p className="text-slate-600 text-sm leading-relaxed">
            {review.quote}
          </p>

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-600 uppercase tracking-wide">
              {review.course}
            </span>
            {review.company && (
              <span className="text-xs text-slate-400 font-medium">Placed at {review.company}</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ReviewsFeedbackSection() {
  const allReviews = useMemo(() => getAllReviews(), []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter Logic
  const filteredReviews = useMemo(() => {
    if (activeFilter === "all") return allReviews;
    return allReviews.filter((r) => getCategory(r.role) === activeFilter);
  }, [allReviews, activeFilter]);

  // Display Subset
  const displayReviews = filteredReviews.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredReviews.length;

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setVisibleCount(8); // Reset pagination on filter change
  };

  return (
    <section id="all-reviews" className="relative w-full bg-slate-50/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* --- LEFT: Sticky Sidebar (Controls & Title) --- */}
          <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-8">
            {/* Header Group */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wide">
                <Trophy className="w-3.5 h-3.5" />
                Student Success
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Real Result.<br />
                <span className="text-slate-400">Real Reviews.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Explore how professionals transformed their careers. Filter by your domain to see relevant stories.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">4.9</div>
                <div className="text-xs font-medium text-slate-500 uppercase mt-1">Avg Rating</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">12k+</div>
                <div className="text-xs font-medium text-slate-500 uppercase mt-1">Alumni Placed</div>
              </div>
            </div>

            {/* Desktop Filters */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Filter className="w-3 h-3" />
                Filter by Role
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <FilterPill
                    key={f.id}
                    active={activeFilter === f.id}
                    onClick={() => handleFilterChange(f.id)}
                  >
                    {f.label}
                  </FilterPill>
                ))}
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 p-4 bg-white/50 border border-slate-200 rounded-xl">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">100% Verified</div>
                <div className="text-xs text-slate-500">Reviews from actual students</div>
              </div>
            </div>
          </div>

          {/* --- MOBILE: Header & Filters (Visible only on < lg) --- */}
          <div className="lg:hidden col-span-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">Student Reviews</h2>
              <p className="text-slate-600">See what our alumni have to say about their journey.</p>
            </div>

            {/* Scrollable Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => handleFilterChange(f.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border ${activeFilter === f.id
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-white border-slate-200 text-slate-700"
                    }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>


          {/* --- RIGHT: Feed (Masonry Style) --- */}
          <div className="col-span-1 lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-sm font-bold text-slate-500">
                Showing {displayReviews.length} of {filteredReviews.length} reviews
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase">
                Sorted by Recent
              </span>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {displayReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Load More Trigger */}
            {canLoadMore && (
              <div className="pt-8 flex justify-center">
                <button
                  onClick={() => setVisibleCount(c => c + 6)}
                  className="px-8 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  Load More Stories
                </button>
              </div>
            )}

            {!canLoadMore && filteredReviews.length > 0 && (
              <div className="text-center py-12 text-slate-400">
                <p className="text-sm font-medium">You've reached the end of the list.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
