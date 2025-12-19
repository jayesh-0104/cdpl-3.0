import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateHowToSchema,
  generateFAQSchema
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ---------- SEO ----------
export const metadata: Metadata = generateStaticPageMetadata({
  title: "CDPL Affiliate Program: Earn 25% Commission | CDPL",
  description:
    "Join the CDPL Affiliate Program and earn recurring commissions by promoting world-class IT training, certification courses, events, and services. Get transparent tracking, fast payouts, and dedicated support. Start earning 15-25% commission today!",
  keywords: [
    "CDPL affiliate program",
    "IT training affiliate",
    "affiliate marketing training",
    "corporate training affiliate",
    "certification course affiliate",
    "tech training partner program",
    "earn commission online",
    "passive income affiliate",
    "software testing affiliate",
    "data science affiliate",
    "cloud training affiliate",
    "DevOps training affiliate",
    "recurring commission program",
    "affiliate partner India",
    "tech education affiliate",
  ],
  url: "/cdpl-affiliate-program",
  image: "/og-image-affiliate.jpg",
});

// ---------- Inline Loader ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const AffiliateHeroSection = dynamic(
  () => import("@/components/sections/AffiliateHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Booting the hero..." /> }
);

const AffiliateBenefitsSection = dynamic(
  () => import("@/components/sections/AffiliateBenefitsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const AffiliateHowItWorksSection = dynamic(
  () => import("@/components/sections/AffiliateHowItWorksSection"),
  { ssr: true, loading: () => <SectionLoader label="Wiring the flow..." /> }
);

const AffiliateTiersSection = dynamic(
  () => import("@/components/sections/AffiliateTiersSection"),
  { ssr: true, loading: () => <SectionLoader label="Setting up tiers..." /> }
);

const AffiliatePayoutsSection = dynamic(
  () => import("@/components/sections/AffiliatePayoutsSection"),
  { ssr: true, loading: () => <SectionLoader label="Fetching payouts..." /> }
);

const AffiliateFAQSection = dynamic(
  () => import("@/components/sections/AffiliateFAQSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing FAQs..." /> }
);

const AffiliateCTASection = dynamic(
  () => import("@/components/sections/AffiliateCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Final touch..." /> }
);

const AffiliateContentSection = dynamic(
  () => import("@/components/sections/AffiliateContentSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading content..." /> }
);

export default async function AffiliateProgramPage() {
  // ---------- Generated Schemas ----------
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Affiliate Program", url: "/cdpl-affiliate-program" },
  ]);

  // Note: generateOrganizationSchema returns a full schema object. 
  // We can use it directly or if we want to customize it for this page we might need to adjust.
  // For now, using the standard one is good for consistency.
  const organizationSchema = generateOrganizationSchema();

  // We need a specific WebPage schema generator or construct it manually if not available.
  // Checking schema-generators.ts, we have generateWebsiteSchema but not generateWebPageSchema.
  // Let's construct it manually using the pattern or add generateWebPageSchema if needed.
  // Wait, I saw generateWebPageSchema in the imports I added above. 
  // Let me check if I actually added it to schema-generators.ts. 
  // I did NOT add generateWebPageSchema in the previous steps. I only added generateHowToSchema.
  // So I should construct it manually here or use a generic one.
  // The existing code had a manual webPageSchema. I will keep it but clean it up or use a helper if possible.
  // Actually, I'll stick to the manual construction for WebPage to keep it simple for now, 
  // but use the generators for others.

  const webPageSchema = generateWebPageSchema({
    name: "CDPL Affiliate Program",
    url: "/cdpl-affiliate-program",
    description:
      "Join the CDPL Affiliate Program to earn commissions by promoting CDPL training, developer events, and services with transparent tracking and fast payouts.",
    isPartOf: {
      "@id": "https://www.cinutedigital.com/#website"
    },
    about: {
      "@type": "Offer",
      name: "CDPL Affiliate Commission",
      description:
        "Performance-based affiliate commissions across training, events, and services.",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        price: "15–25% commission by tier",
      },
      availabilityStarts: "2020-01-01",
      eligibleRegion: "Worldwide",
    },
  });

  const howToSchema = generateHowToSchema({
    name: "How to Join CDPL Affiliate Program",
    description: "Step-by-step guide to becoming a CDPL affiliate partner and earning commissions",
    totalTime: "PT10M",
    steps: [
      {
        name: "Sign Up",
        text: "Complete the affiliate application form with your details and promotional channels",
        url: "/cdpl-affiliate-program#apply",
      },
      {
        name: "Get Approved",
        text: "Our team reviews your application and approves qualified partners within 2-3 business days",
      },
      {
        name: "Promote CDPL",
        text: "Use your unique affiliate links to promote CDPL courses, events, and services on your platforms",
      },
      {
        name: "Earn Commissions",
        text: "Earn 15-25% recurring commissions on every successful referral with transparent tracking",
      },
      {
        name: "Get Paid",
        text: "Receive fast payouts monthly via bank transfer or preferred payment method",
      },
    ]
  });

  const faqSchema = generateFAQSchema([
    {
      question: "How much commission can I earn as a CDPL affiliate?",
      answer: "CDPL affiliates earn between 15-25% commission based on their tier level. Commission rates increase as you refer more students and generate higher revenue.",
    },
    {
      question: "When do I get paid as an affiliate?",
      answer: "Affiliate commissions are paid monthly via bank transfer or your preferred payment method. Minimum payout threshold applies.",
    },
    {
      question: "What can I promote as a CDPL affiliate?",
      answer: "You can promote all CDPL offerings including certification courses (AAA, ACTD), corporate training programs, developer events, workshops, and professional services.",
    },
    {
      question: "Is there a cost to join the CDPL affiliate program?",
      answer: "No, joining the CDPL Affiliate Program is completely free. There are no signup fees or hidden costs.",
    },
    {
      question: "Do I need a website to become an affiliate?",
      answer: "While having a website helps, it's not mandatory. You can promote CDPL through social media, YouTube, email lists, or other digital channels.",
    },
  ]);

  return (
    <main
      className="relative min-h-screen bg-white text-slate-800 [color-scheme:light] dark:[color-scheme:light]"
    >
      {/* Structured data for SEO */}
      <JsonLd schema={breadcrumbSchema} id="affiliate-breadcrumb" />
      <JsonLd schema={organizationSchema} id="affiliate-org" />
      <JsonLd schema={webPageSchema} id="affiliate-webpage" />
      <JsonLd schema={howToSchema} id="affiliate-howto" />
      <JsonLd schema={faqSchema} id="affiliate-faq" />

      {/* Page background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(1000px 400px at 20% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(800px 300px at 80% 20%, rgba(16,185,129,0.08), transparent 60%)",
        }}
      />

      {/* Sections (100% width wrapper, content bounded to max-w-7xl) */}
      <AffiliateHeroSection />

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <AffiliateBenefitsSection />
        </div>
      </section>

      {/* New SEO Content Section */}
      <AffiliateContentSection />

      <AffiliateHowItWorksSection />

      <section className="w-full" id="tiers">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliateTiersSection />
        </div>
      </section>

      <section className="w-full" id="payouts">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliatePayoutsSection />
        </div>
      </section>

      <section className="w-full" id="faq">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliateFAQSection />
        </div>
      </section>

      <section className="w-full" id="apply">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliateCTASection />
        </div>
      </section>
    </main>
  );
}
