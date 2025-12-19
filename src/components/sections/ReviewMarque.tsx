'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Star, Quote, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Types ---
interface Review {
  name: string;
  reviewerInfo: { photoUrl: string; displayName: string };
  comment: string;
  starRating: string;
  createTime: string;
  source: 'Google';
}

const GOOGLE_LOGO = '/slider_logos/google-logo.svg';

// --- Components ---

function MarqueeRow({
  items,
  direction = 'left',
  speed = 50
}: {
  items: Review[];
  direction?: 'left' | 'right';
  speed?: number
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-6 py-4 w-max`}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {[...items, ...items, ...items].map((review, idx) => (
          <ReviewCard key={`${review.name}-${idx}`} review={review} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const dateStr = new Date(review.createTime).toLocaleDateString('en-US', {
    month: 'short', year: 'numeric'
  });

  return (
    <div className="w-[320px] sm:w-[380px] flex-shrink-0 perspective-1000">
      <div className="h-full relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-200 group">

        {/* Glow Effect on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 -z-10"></div>

        {/* Card Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-slate-100 group-hover:ring-blue-400 transition-all">
                {review.reviewerInfo.photoUrl ? (
                  <img src={review.reviewerInfo.photoUrl} alt={review.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                    {review.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <BadgeCheck className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{review.name}</h4>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{dateStr}</div>
            </div>
          </div>
          <Image src={GOOGLE_LOGO} alt="Google" width={20} height={20} className="w-5 h-5 opacity-50 grayscale group-hover:grayscale-0 transition-all" />
        </div>

        {/* Stars */}
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Number(review.starRating) ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-200"}`} />
          ))}
        </div>

        {/* Comment */}
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-slate-100 transform rotate-180 -z-10" />
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-900 transition-colors">
            "{review.comment}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: '0', rating: '0.0' });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await axios.get('/api/reviews');
        const data = res.data;
        setReviews(data.reviews || []);
        if (data.totalReviewCount) {
          setStats({
            total: data.totalReviewCount.toString(),
            rating: typeof data.averageRating === 'number' ? data.averageRating.toFixed(1) : data.averageRating
          });
        }
      } catch (err) {
        console.error('Failed to load reviews', err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="h-96 flex flex-col items-center justify-center space-y-4 bg-slate-50/50">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-slate-400 font-medium animate-pulse">Loading verified reviews...</p>
      </div>
    );
  }

  // Split reviews into two rows if enough data, otherwise duplicate
  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);
  // Ensure reasonably populated rows
  const safeRow1 = row1.length > 5 ? row1 : reviews;
  const safeRow2 = row2.length > 5 ? row2 : reviews;

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-10">

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-100/40 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 space-y-12">

        {/* Animated Header Visual */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-5 pb-5">
          {/* Sound Wave Animation */}
          <div className="flex items-center justify-center gap-1 h-16">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 rounded-full bg-gradient-to-t from-blue-500 to-indigo-500"
                animate={{
                  height: [20, Math.random() * 60 + 20, 20],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200/50 rounded-full shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Live Student Voices • {stats.total}+ Verified Reviews
            </span>
          </motion.div>
        </div>

        {/* Marquees */}
        <div className="space-y-8 mask-linear-gradient">
          <MarqueeRow items={safeRow1} direction="left" speed={60} />
          <MarqueeRow items={safeRow2} direction="right" speed={70} />
        </div>

        {/* CSS for Marquee */}
        <style jsx>{`
            @keyframes marquee-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            @keyframes marquee-right {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(0); }
            }
            .mask-linear-gradient {
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
           `}</style>
      </div>
    </section>
  );
}
