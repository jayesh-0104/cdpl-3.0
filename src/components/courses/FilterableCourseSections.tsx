"use client";
import { useState, useMemo, useRef, useEffect } from "react";
// import SearchFilter from "@/components/courses/SearchFilter";
import CategoryCard from "@/components/courses/CategoryCard";
import CourseCard from "@/components/courses/CourseCard";
import { coursesData } from "@/components/courses/coursesData";
import { textToBg } from "@/components/courses/course";
import { Hash } from "lucide-react";

import type { Course as BaseCourse, Category as BaseCategory } from "@/components/courses/course";
import type { ReactNode } from "react";

/** Match optional fields CourseCard reads so we never need `any` */
type CourseExtras = {
  href?: string;
  trending?: boolean;
  highlights?: string[];
  brochureHref?: string;
  countdown?: { hours: number; minutes: number; seconds: number };
  icon?: ReactNode | string;
  students?: string;
  level?: string;
  duration?: string;
  price?: string;
  features?: string[];
  syllabusLink?: string;
  offerEndsAt?: string;
  link?: string;
  popular?: boolean;
};

type UICourse = BaseCourse & Partial<CourseExtras>;

/** If you also need a typed Category locally (optional – helps IntelliSense) */
type UICategory = BaseCategory & {
  courses: UICourse[];
  icon?: ReactNode;
  iconBgColor?: string;
  color?: string; // e.g. "text-emerald-600"
};

const ACCENTS = [
  { chip: "bg-rose-50 text-rose-700 border border-rose-200", ring: "ring-rose-300", dot: "bg-rose-400" },
  { chip: "bg-amber-50 text-amber-700 border border-amber-200", ring: "ring-amber-300", dot: "bg-amber-400" },
  { chip: "bg-emerald-50 text-emerald-700 border border-emerald-200", ring: "ring-emerald-300", dot: "bg-emerald-400" },
  { chip: "bg-sky-50 text-sky-700 border border-sky-200", ring: "ring-sky-300", dot: "bg-sky-400" },
  { chip: "bg-violet-50 text-violet-700 border border-violet-200", ring: "ring-violet-300", dot: "bg-violet-400" },
  { chip: "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200", ring: "ring-fuchsia-300", dot: "bg-fuchsia-400" },
];

/** Renders the grid with “show 3 then reveal the rest smoothly”. */
function RevealCoursesGrid({
  courses,
  categoryBgColor,
  buttonLabel = "View All Courses",
  visibleCount = 3,
  nowMs
}: {
  courses: UICourse[];
  categoryBgColor: string;
  buttonLabel?: string;
  visibleCount?: number;
  nowMs: number;
}) {
  const [expanded, setExpanded] = useState(false);

  const head = useMemo(() => courses.slice(0, visibleCount), [courses, visibleCount]);
  const tail = useMemo(() => courses.slice(visibleCount), [courses, visibleCount]);

  // Smooth height wrapper for the hidden tail
  const shellRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const shell = shellRef.current;
    const inner = innerRef.current;
    if (!shell || !inner) return;

    shell.style.willChange = "height";
    shell.style.overflow = "hidden";

    const setHeight = () => {
      const full = inner.scrollHeight;
      shell.style.height = expanded ? `${full + 1}px` : "0px";
    };

    setHeight();

    const ro = new ResizeObserver(() => {
      if (!expanded) return;
      const full = inner.scrollHeight;
      shell.style.height = `${full + 1}px`;
    });
    ro.observe(inner);

    const onEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "height" || e.target !== shell) return;
      if (expanded) {
        shell.style.height = "auto";
        shell.style.overflow = "visible";
        shell.style.willChange = "auto";
      }
    };
    shell.addEventListener("transitionend", onEnd);

    const onResize = () => {
      if (!expanded) return;
      const isAuto = shell.style.height === "auto";
      if (isAuto) return;
      const full = inner.scrollHeight;
      shell.style.height = `${full + 1}px`;
    };
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      shell.removeEventListener("transitionend", onEnd);
      window.removeEventListener("resize", onResize);
    };
  }, [expanded, tail.length]);

  return (
    <>
      {/* Always visible first N */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {head.map((course, idx) => (
          <div
            key={course.id}
            className="h-full"
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={String(idx + 1)} />
            <CourseCard course={course as any} index={idx} nowMs={nowMs} categoryBgColor={categoryBgColor} />
          </div>
        ))}
      </div>

      {/* Smoothly revealed remainder */}
      {tail.length > 0 && (
        <>
          <div
            ref={shellRef}
            className="overflow-hidden transition-[height] duration-500 ease-in-out"
            aria-hidden={!expanded}
          >
            <div
              ref={innerRef}
              className={[
                "mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                expanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
                "transition-opacity duration-500",
              ].join(" ")}
            >
              {tail.map((course, idx) => (
                <div
                  key={course.id}
                  className="h-full"
                  itemProp="itemListElement"

                >
                  <meta itemProp="position" content={String(visibleCount + idx + 1)} />
                  <CourseCard course={course as any} index={visibleCount + idx} nowMs={nowMs} categoryBgColor={categoryBgColor} />
                </div>
              ))}
            </div>
          </div>

          {!expanded && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300"
                aria-expanded={expanded}
              >
                {buttonLabel}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default function FilterableCourseSections() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Timer logic for countdown
  const [nowMs, setNowMs] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  void setSelectedCategory;
  void setSearchTerm;

  const filteredCategories = useMemo(() => {
    return coursesData.filter((cat) => {
      if (selectedCategory !== "all" && cat.id !== selectedCategory) return false;

      if (searchTerm) {
        const q = searchTerm.toLowerCase();
        const categoryMatch =
          cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
        const courseMatch = cat.courses.some(
          (course) =>
            course.title.toLowerCase().includes(q) ||
            course.description.toLowerCase().includes(q) ||
            course.skills.some((s: string) => s.toLowerCase().includes(q))
        );
        return categoryMatch || courseMatch;
      }
      return true;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      {/* Categories Overview */}
      <section
        className="py-16 px-4 bg-white"

        aria-label="Course Categories Overview"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Course Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose from expert-led, industry-aligned programs designed to help you master in-demand
              skills, upgrade your portfolio, and accelerate your tech career with hands-on projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((category, idx) => (
              <div
                key={category.id}
                id={category.id}
                className="h-full"
                itemProp="itemListElement"

              >
                <meta itemProp="position" content={String(idx + 1)} />
                <CategoryCard category={category as unknown as UICategory} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses by Category */}
      {filteredCategories.length === 0 ? (
        <section className="py-24 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
              <Hash className="w-6 h-6 text-slate-500" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              Try different keywords or clear filters to discover job-ready courses with certification,
              real projects, and placement support.
            </p>
          </div>
        </section>
      ) : (
        filteredCategories.map((category, idx) =>
          category.courses.length > 0 ? (
            <section
              key={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="py-16 px-4 bg-white border-t border-slate-100"
            >
              <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="flex flex-wrap items-start gap-4 mb-8">
                  <div className={`${category.iconBgColor} p-3 rounded-lg ${category.color} shadow-inner`} aria-hidden>
                    {category.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="mb-2">
                      <span className={`inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-md ${ACCENTS[idx % ACCENTS.length].chip}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${ACCENTS[idx % ACCENTS.length].dot}`} />
                        Featured Tracks
                      </span>
                    </div>
                    <h2 id={`${category.id}-heading`} className="text-2xl md:text-3xl font-bold text-slate-900">
                      {category.name} Courses
                    </h2>
                    <p className="text-slate-600">{category.description}</p>
                    <p className="sr-only">
                      {category.name} certification training, updated syllabus, capstone projects, and mentor support.
                    </p>
                  </div>
                </div>

                {/* Courses grid with reveal */}
                <div>

                  <RevealCoursesGrid
                    courses={category.courses as UICourse[]}
                    categoryBgColor={textToBg(category.color)}
                    buttonLabel={`View All ${category.name} Courses`}
                    visibleCount={3}
                    nowMs={nowMs}
                  />
                </div>
              </div>
            </section>
          ) : null
        )
      )}
    </>
  );
}

