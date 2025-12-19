"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// ---------- Loader (keep inline) ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-slate-500">{label}</p>
    </div>
  );
}

// Lazy-load the marquee
const ReviewsMarquee = dynamic(
  () => import("./ReviewMarque").then((m) => m.default),
  {
    ssr: false,
    loading: () => <SectionLoader label="Loading reviews..." />,
  }
);

type Review = {
  name: string;
  date: string;
  source: "Google" | "Sulekha" | "Justdial";
  text: string;
  city?: string;
  logo: { src: string; alt: string };
  rating: number;
};
type PLATFORM = "Google" | "Sulekha" | "Justdial";

const REVIEWS: Review[] = [
  // (same data you provided) ...
  {
    name: "Prathik Singh",
    date: "2025-06-27",
    source: "Google",
    text:
      "I had the opportunity to intern at Cinute, and it has been a great learning experience... I worked on data analysis in Excel, created dashboards, and explored Power BI & Tableau. The quality of teaching is so good...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },
  { name: "YASH", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" }, rating: 5 },
  { name: "Sujal Vaity", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" }, rating: 5 },
  {
    name: "bhumika Ankush",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },
  {
    name: "Vedang Mohit",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },
  {
    name: "Aryan Prasad",
    date: "2025-06-27",
    source: "Google",
    text: "It's a good opportunity to do course and learn coding languages... good mentors.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },
  {
    name: "Dhruv Salvi",
    date: "2025-06-27",
    source: "Google",
    text:
      "Helped me to learn and gain a lot of knowledge and skills growth throughout, humble and good communicating staff and members.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },
  {
    name: "Bhuvan Sharma",
    date: "2025-06-27",
    source: "Google",
    text:
      "Good information provided by the domain providers, very good at communicating and humble...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },
  { name: "Sahil Bhaye", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" }, rating: 5 },
  {
    name: "Durgesh parab",
    date: "2025-06-27",
    source: "Google",
    text:
      "It is best company to get experience... I’m learning full-stack with highly talented staff...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
    rating: 5,
  },

  // SULEKHA
  {
    name: "Aarya",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text:
      "Excellent Service, Extremely Professional Behavior, Most Trusted Company. Good explanation and friendly nature.",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
    rating: 5,
  },
  {
    name: "Riya Rajnath Yadav",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text:
      "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. The instructor teaches very well...",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
    rating: 5,
  },
  {
    name: "Shital Sawant",
    city: "Mumbai",
    date: "28 Oct, 2024",
    source: "Sulekha",
    text:
      "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. Would recommend the class to freshers & newcomers...",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
    rating: 5,
  },
  {
    name: "Piyush Prasad",
    city: "Mumbai",
    date: "17 Oct, 2024",
    source: "Sulekha",
    text:
      "Tableau and Excel are excellent batches and the instructors are helpful... I recommend students to enroll in Cinute Digital.",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
    rating: 5,
  },

  // JUSTDIAL
  {
    name: "Atul",
    date: "18 Nov",
    source: "Justdial",
    text:
      "EMI available, one-on-one mentoring from specialized faculty in AC classrooms. Approachable faculty and resourceful library...",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
    rating: 5,
  },
  {
    name: "User",
    date: "18 Nov",
    source: "Justdial",
    text:
      "Amazing trainers who make even tough topics easy to understand. Super approachable and always ready to help.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
    rating: 5,
  },
  {
    name: "Aatish",
    date: "06 Nov",
    source: "Justdial",
    text:
      "Clean and highly specialized facilities. Regular evaluation ensures top-notch quality; multiple facilities cater to diverse needs.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
    rating: 5,
  },
  {
    name: "Ami",
    date: "18 Nov",
    source: "Justdial",
    text: "Trainers were amazing.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
    rating: 5,
  },
];

export default function JobsLiveJobsReviewSection() {
  const [tab] = useState<PLATFORM>("Google");
  const filtered = useMemo(() => REVIEWS.filter((r) => r.source === tab), [tab]);

  const stats = useMemo(() => {
    const rating = filtered.reduce((acc, review) => acc + review.rating, 0) / filtered.length;
    const total = filtered.length;
    return { rating, total };
  }, [filtered]);

  const GOOGLE_LOGO = '/slider_logos/google-logo.svg'; // Ensure this path is correct based on previous file


  // marquee bits (kept to preserve behavior and sizing from your original)
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const [paused] = useState(false);
  const [speed, setSpeed] = useState(80);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    halfWidthRef.current = track.scrollWidth / 2;
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) setSpeed(110);
      else if (window.innerWidth >= 1024) setSpeed(95);
      else if (window.innerWidth >= 640) setSpeed(85);
      else setSpeed(75);
    }
  };

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [tab, filtered.length]);

  useEffect(() => {
    offsetRef.current = 0;
    lastTsRef.current = null;
    if (trackRef.current) trackRef.current.style.transform = `translateX(0px)`;
  }, [tab]);

  useEffect(() => {
    if (reduced) return;
    const tick = (ts: number) => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (paused) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - (lastTsRef.current || ts)) / 1000;
      lastTsRef.current = ts;
      offsetRef.current -= speed * dt;
      const half = halfWidthRef.current || 0;
      if (half > 0 && Math.abs(offsetRef.current) >= half) offsetRef.current += half;
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [paused, speed, reduced]);

  return (
    <section className="overflow-hidden w-full relative bg-gradient-to-b from-sky-50 via-white to-violet-50 dark:[color-scheme:light]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10">
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Image src={GOOGLE_LOGO} alt="Google" width={60} height={60} />
            <span className="text-sm font-medium text-slate-700">
              Rated <span className="font-bold text-slate-900">{stats.rating}/5</span> based on <span className="font-bold text-slate-900">{stats.total}+</span> reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Loved by Students,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Trusted by Professionals
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            Join thousands of successful graduates who transformed their careers with us.
          </p>
        </div>

        <ReviewsMarquee />
      </div>
    </section>
  );
}
