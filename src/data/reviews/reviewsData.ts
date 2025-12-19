// /src/data/reviews.ts
export type StudentReview = {
  id: string;
  name: string;
  role: "Software Testing" | "QA Engineer" | "Data Analyst" | "Data Scientist" | "Digital Marketing";
  course: string;
  company?: string;
  rating: number;
  quote: string;
  avatar: string; // path to image
  span?: "normal" | "wide" | "tall" | "big";
  feature?: boolean; // <-- mark as true to show in Hero (max 3)
};

// -------- Helpers (optional) --------

// -------- Data (unchanged content, just moved + added `feature`) --------
export const REVIEWS: StudentReview[] = [
  // Mark up to THREE as featured for Hero (example: r1, r3, r5)
  { id: "r1", name: "Neha R.", role: "QA Engineer", course: "Manual + Automation Testing", rating: 4.9, avatar: "/testimonial_images/testimonial.jpeg", quote: "CDPL’s mentor cadence and projects sharpened my testing mindset. We didn’t just learn theory, we ran focused exploratory sessions with charters, mapped risks, and compared coverage heuristics. I built API and UI suites that ran on CI for every PR, learned to tame flakiness with better waits/selectors, and used traces to debug fast.", span: "big", feature: true },
  { id: "r2", name: "Aarav S.", role: "Digital Marketing", course: "Performance Marketing", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Practical playbooks and live dashboards meant I could launch, read signals, and iterate fast in my new role.", span: "normal" },
  { id: "r3", name: "Zara K.", role: "Data Scientist", course: "ML & MLOps", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "The product-first approach to ML made evaluation and deployment feel natural. We practiced with structured reviews, shipped capstones, and wrote docs like in a real team. I came out with a portfolio piece, confident interviews, and habits I still use daily.", span: "tall", feature: true },
  { id: "r4", name: "Ishaan P.", role: "Data Analyst", course: "Analytics + BI", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "From SQL to stakeholder storytelling, the reps made interviews feel like a recap of class work.", span: "normal" },
  { id: "r5", name: "Priya D.", role: "Software Testing", course: "API + Postman + Cypress", rating: 5.0, avatar: "/testimonial_images/testimonial.jpeg", quote: "Real-world bug bashes and CI integrations helped me ship with quality. We practiced with structured reviews, shipped capstones, and wrote docs like in a real team. I came out with a portfolio piece, confident interviews, and habits I still use daily.", span: "wide", feature: true },
  { id: "r6", name: "Kabir M.", role: "Digital Marketing", course: "SEO + Content Systems", rating: 4.5, avatar: "/testimonial_images/testimonial.jpeg", quote: "Strategy plus systems thinking: we built calendars, briefs, and reporting that finally scaled.", span: "normal" },
  { id: "r7", name: "Mira S.", role: "Data Analyst", course: "Advanced SQL + dbt", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Modeled real pipelines, added tests, and delivered clear dashboards, day-1 impact at work.", span: "normal" },
  { id: "r8", name: "Sanjay V.", role: "Software Testing", course: "Playwright + Test Strategy", rating: 4.9, avatar: "/testimonial_images/testimonial.jpeg", quote: "We stabilized flaky suites and added trace-based debugging that saved hours each week. We practiced with structured reviews, shipped capstones, and wrote docs like in a real team. I came out with a portfolio piece, confident interviews, and habits I still use daily.", span: "tall" },
  { id: "r9", name: "Rhea K.", role: "Data Scientist", course: "GenAI for Product", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Loved the focus on measurable product impact offline metrics tied to real user outcomes.", span: "normal" },
  { id: "r10", name: "Tanmay G.", role: "Digital Marketing", course: "Analytics for Growth", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Attribution, cohorts, and experimentation finally clicked with templates I still reuse.", span: "wide" },
  // ... keep the rest exactly as you have, unchanged (r11 → r44)
  { id: "r11", name: "Ananya B.", role: "Software Testing", course: "Test Design + Strategy", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Industry mentors, practical reviews, and real deliverables, exactly what hiring managers asked about.", span: "normal" },
  { id: "r12", name: "Dev S.", role: "Data Analyst", course: "Power BI + Storytelling", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Critical feedback on my dashboards improved clarity and decision speed for business users.", span: "normal" },
  { id: "r13", name: "Meera T.", role: "Data Scientist", course: "End-to-End ML Projects", rating: 5.0, avatar: "/testimonial_images/testimonial.jpeg", quote: "Shipping real ML with code reviews made interviews feel like show-and-tell. We framed problems with measurable metrics, versioned data properly, and wrote evals that matched business goals—not just leaderboard scores. I practiced PR hygiene, paired reviews, and safe rollouts with monitoring and guardrails.", span: "big" },
  // ... (continue all the way to r44 as in your file)
  { id: "r44", name: "Veer J.", role: "QA Engineer", course: "Playwright + Trace Viewer", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Trace viewer turned debugging into a few clicks. It’s my favorite demo in interviews.", span: "normal" },
];

export const toKebab = (s: string) =>
  s.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

export const avatarFor = (name: string, ext: "jpg" | "jpeg" | "png" = "jpg") =>
  `/testimonial_images/${toKebab(name)}.${ext}`;

// E:\testriq\cdpl3.0\public\placement_images\anonymous_student.png or public\placement_images\anonymous_student.png
export const AVATAR_FALLBACK = "/placement_images/anonymous_student.png";
// export const AVATAR_FALLBACK = "/testimonial_images/anonymous_student.png";


export const getAllReviews = () => REVIEWS;
export const getFeaturedReviews = (limit = 3) =>
  REVIEWS.filter((r) => r.feature).slice(0, limit);