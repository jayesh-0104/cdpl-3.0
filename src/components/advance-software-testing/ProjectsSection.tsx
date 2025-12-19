'use client';
import { ShoppingCart, Smartphone, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { JSX } from 'react';

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  // light, non-repeating accents (no heavy gradients)
  cardBg: string;
  cardBorder: string;
  chipBg: string;
  chipText: string;
};

const projects: Project[] = [
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: 'E-Commerce Full-Stack Testing',
    description:
      'Automate end-to-end user journeys: auth, cart, checkout, payments, and order lifecycle with robust reporting.',
    features: ['POM + TestNG', 'API + DB Validation', 'Cross-Browser', 'Jenkins CI'],
    cardBg: 'bg-sky-50',
    cardBorder: 'border-sky-200',
    chipBg: 'bg-sky-600',
    chipText: 'text-white',
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: 'Banking Mobile App',
    description:
      'Build reliable Appium test suites for Android/iOS on real devices and cloud farms to validate critical flows.',
    features: ['Gestures', 'OTP Handling', 'Biometric Login', 'Cloud Device Farm'],
    cardBg: 'bg-emerald-50',
    cardBorder: 'border-emerald-200',
    chipBg: 'bg-emerald-600',
    chipText: 'text-white',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Security & Performance Suite',
    description:
      'Establish quality gates with load tests and automated OWASP scans to prevent regressions before release.',
    features: ['JMeter Scripts', 'ZAP Automation', 'SSL Testing', 'Report Dashboard'],
    cardBg: 'bg-amber-50',
    cardBorder: 'border-amber-200',
    chipBg: 'bg-amber-700',
    chipText: 'text-white',
  },
];

export default function ProjectsSection() {


  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-8 md:py-10 bg-white">
      {/* subtle top/bottom separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Build Your <span className="text-ST">SDET Portfolio</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Production-style projects that showcase <strong>UI, API, Mobile</strong>, and <strong>Performance</strong> automation skills. Perfect
            for resumes, GitHub, and interviews.
          </p>
        </motion.header>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className={[
                'group relative h-full overflow-hidden rounded-2xl border',
                p.cardBg,
                p.cardBorder,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
              ].join(' ')}
            >
              {/* Header row */}
              <div className="flex items-start justify-between pl-6 py-6 pb-0 pr-28">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-slate-800 shadow-sm">
                    {p.icon}
                  </div>
                  <h3 className="max-w-[16ch] text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                    {p.title}
                  </h3>
                </div>
                <span className={`absolute top-6 right-6 rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${p.chipBg} ${p.chipText}`}>
                  Hands-On
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-700">{p.description}</p>

                <ul className="mt-4 grid gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* micro-footnote for SEO & clarity */}
                <p className="mt-4 text-[11px] leading-5 text-slate-500">
                  Deliverables: test plans, evidence-rich reports, CI results, and a public repo link.
                </p>
              </div>

              {/* subtle bottom bar accent */}
              <div className="pointer-events-none h-1 w-full bg-white/60" />
            </motion.article>
          ))}
        </div>

        {/* SEO supportive copy */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            These projects validate <strong>framework design</strong>, <strong>data-driven testing</strong>,{' '}
            <strong>parallel execution</strong>, <strong>API/DB assertions</strong>, and <strong>CI/CD quality gates</strong>-the exact
            capabilities hiring managers expect from modern <strong>SDETs</strong>.
          </p>
        </div>
      </div>

    </section>
  );
}
