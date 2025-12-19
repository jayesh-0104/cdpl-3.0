// cdpl3_project/src/data/organizationSchema.ts

import { SITE_CONFIG } from "@/lib/seo-config";

// This is the primary Organization schema for the entire website.
// It uses EducationalOrganization as the primary type, which is appropriate for a training institute.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": SITE_CONFIG.name,
  "url": SITE_CONFIG.url,
  "logo": `${SITE_CONFIG.url}/logo.png`, // Assuming the logo is at the root of the public folder
  "description": "CDPL - Cinute Digital is a leading training institute in India offering industry-focused courses in Software Testing, Data Science, and AI/ML with 100% placement support.",
  "sameAs": [
    "https://www.facebook.com/cinutedigital",
    "https://twitter.com/cinutedigital",
    "https://www.linkedin.com/company/cinutedigital",
    "https://www.youtube.com/@cinutedigital",
    // Add other social media profiles or knowledge panel links here
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210", // Placeholder: Replace with actual number
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210", // Placeholder: Replace with actual number
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road",
    "addressLocality": "Mira Bhayandar, Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "401107",
    "addressCountry": "IN"
  }
};

// This is the WebSite schema, which is essential for Sitelinks Search Box
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": SITE_CONFIG.url,
  "name": SITE_CONFIG.name,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_CONFIG.url}/search?q={search_term_string}`, // Assuming a search page exists
    "query-input": "required name=search_term_string"
  }
};
