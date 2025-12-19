/**
 * ============================================================================
 * CENTRALIZED SEO CONFIGURATION FOR CDPL
 * ============================================================================
 * 
 * This file serves as the single source of truth for all SEO-related
 * configuration across the entire website. It follows Next.js 15 best
 * practices and modern SEO standards.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

// ============================================================================
// CORE SITE CONFIGURATION
// ============================================================================

export const SITE_CONFIG = {
  // Basic Information
  name: 'CDPL - Cinute Digital',
  legalName: 'Cinute Digital Private Limited',
  shortName: 'CDPL',
  tagline: 'Transform Your Career with Industry-Ready Skills',

  // URLs
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com',
  domain: 'cinutedigital.com',

  // Brand Colors
  brandColor: '#ff8c00', // Orange
  themeColor: '#ff8c00',

  // Default Images
  logo: '/logo.png',
  logoWidth: 200,
  logoHeight: 60,
  defaultOgImage: '/og-image-default.jpg',
  defaultOgImageWidth: 1200,
  defaultOgImageHeight: 630,
  favicon: '/favicon.ico',
  appleTouchIcon: '/apple-touch-icon.png',
} as const;

// ============================================================================
// BUSINESS INFORMATION
// ============================================================================

export const BUSINESS_INFO = {
  // Contact Details
  phone: '+918488988984',
  email: 'contact@cinutedigital.com',
  supportEmail: 'contact@cinutedigital.com',
  admissionsEmail: 'contact@cinutedigital.com',

  // Physical Address
  address: {
    streetAddress: 'Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road',
    addressLocality: 'Mira Bhayandar, Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '401107',
    addressCountry: 'IN',
  },

  // Geo Coordinates (for LocalBusiness schema)
  geo: {
    latitude: 19.29403967980817,
    longitude: 72.87115175396495,
  },

  // Business Hours
  openingHours: [
    'Monday 09:00-18:00',
    'Tuesday 09:00-18:00',
    'Wednesday 09:00-18:00',
    'Thursday 09:00-18:00',
    'Friday 09:00-18:00',
    'Saturday 09:00-15:00',
  ],

  // Price Range
  priceRange: '₹₹',

  // Founded Year
  foundedYear: '2020',

  // Number of Employees
  numberOfEmployees: '200',
} as const;

// ============================================================================
// SOCIAL MEDIA PROFILES
// ============================================================================

export const SOCIAL_PROFILES = {
  facebook: 'https://www.facebook.com/cinutedigital',
  linkedin: 'https://www.linkedin.com/company/cinutedigital',
  twitter: 'https://twitter.com/cinutedigital',
  twitterHandle: '@cinutedigital',
  instagram: 'https://www.instagram.com/cinutedigital',
  youtube: 'https://www.youtube.com/@cinutedigital',
  // Add more as needed
} as const;

// ============================================================================
// STATISTICS & ACHIEVEMENTS
// ============================================================================

export const STATISTICS = {
  studentsPlaced: 5000,
  rating: 4.9,
  maxRating: 5,
  reviewCount: 5000,
  yearsOfExperience: 15,
  realWorldProjects: 90,
  hiringPartners: 50,
  successRate: 100, // Placement success rate
} as const;

// ============================================================================
// SEO METADATA DEFAULTS
// ============================================================================

export const SEO_DEFAULTS = {
  // Default Title Template
  titleTemplate: '%s | CDPL - Cinute Digital',
  defaultTitle: 'CDPL - Best Software Testing, Data Science & AI/ML Training Institute in India',

  // Default Description
  defaultDescription: 'Leading EdTech company providing industry-focused training in Software Testing, Data Science, AI/ML, and Digital Marketing with 100% placement support. Transform your career with expert-led courses.',

  // Default Keywords
  defaultKeywords: [
    'software testing course',
    'data science training',
    'AI ML course',
    'machine learning training',
    'automation testing',
    'manual testing',
    'data analytics course',
    'python training',
    'digital marketing course',
    'placement support',
    'career change',
    'IT training India',
    'CDPL',
    'Cinute Digital',
    'online tech courses',
    'ISTQB certification',
    'job guarantee program',
  ] as string[],

  // Locale
  locale: 'en_IN',
  alternateLocales: ['en_US', 'en_GB'] as string[],

  // Robots
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
} as const;

// ============================================================================
// VERIFICATION CODES
// ============================================================================

export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE || '',
  bing: process.env.NEXT_PUBLIC_BING_VERIFICATION_CODE || '',
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_CODE || '',
  pinterest: process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION_CODE || '',
} as const;

// ============================================================================
// ANALYTICS & TRACKING
// ============================================================================

export const ANALYTICS = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || '',
} as const;

// ============================================================================
// COURSE CATEGORIES
// ============================================================================

export const COURSE_CATEGORIES = [
  {
    id: 'software-testing',
    name: 'Software Testing',
    slug: 'software-testing',
    description: 'Comprehensive software testing courses covering manual and automation testing',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    slug: 'data-science',
    description: 'Advanced data science and machine learning courses with Python',
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    slug: 'business-intelligence',
    description: 'BI tools and big data engineering courses',
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'AI and ML courses with hands-on projects',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Complete digital marketing courses',
  },
] as const;

// ============================================================================
// FEATURED COURSES (for home page schema)
// ============================================================================

export const FEATURED_COURSES = [
  {
    name: 'Manual Software Testing',
    slug: 'manual-testing-course',
    description: 'Learn to facilitate Scrum teams and drive Agile projects effectively with comprehensive manual testing training.',
    duration: 'P12W', // 12 weeks in ISO 8601 format
    level: 'Beginner',
    rating: 4.9,
    enrollmentCount: 1200,
    price: 25000,
    currency: 'INR',
    highlights: ['ISTQB Foundation Prep', 'Test Case Design', 'Defect Life Cycle'],
  },
  {
    name: 'Advanced Automation Testing',
    slug: 'automation-testing-course',
    description: 'Drive product vision and delivery in SAFe settings with advanced automation testing skills.',
    duration: 'P16W',
    level: 'Intermediate',
    rating: 4.8,
    enrollmentCount: 950,
    price: 35000,
    currency: 'INR',
    highlights: ['Selenium WebDriver', 'CI/CD Integration (Jenkins)', 'Advanced Java Concepts'],
  },
  {
    name: 'Advanced Data Science and Machine Learning Masterclass',
    slug: 'data-science-course',
    description: 'Master coding challenges and technical questions with comprehensive data science training.',
    duration: 'P20W',
    level: 'Advanced',
    rating: 4.9,
    enrollmentCount: 1100,
    price: 45000,
    currency: 'INR',
    highlights: ['Python Programming', 'Statistical Modeling', 'Machine Learning'],
  },
] as const;

// ============================================================================
// COMPANY PARTNERS (for trust signals)
// ============================================================================

export const HIRING_PARTNERS = [
  'Testriq',
  'Axiom',
  'DFY',
  'Maxwell',
  'Tech Mahindra',
  'Accenture',
  'eClerx',
  'eVistaar',
  'JM Financial',
  // Add more as needed
] as const;

// ============================================================================
// CERTIFICATIONS & CREDENTIALS
// ============================================================================

export const CERTIFICATIONS = [
  {
    name: 'ISTQB Certified Training Partner',
    issuer: 'ISTQB',
    type: 'Training Partner',
  },
  {
    name: 'Industry Recognized Certifications',
    issuer: 'Various Industry Bodies',
    type: 'Educational Credential',
  },
] as const;

// ============================================================================
// AI CRAWLER OPTIMIZATION
// ============================================================================

export const AI_OPTIMIZATION = {
  summary: 'CDPL provides comprehensive training in Software Testing, Data Science, AI/ML with 100% placement support. Expert-led courses with hands-on projects and industry certifications.',
  keyPoints: [
    'Software Testing Training',
    'Data Science Courses',
    'AI/ML Training',
    '100% Placement Support',
    'Industry Expert Mentors',
    'Hands-on Projects',
    'Career Transformation',
    '5000+ Students Placed',
    '4.9/5 Rating',
    '15+ Years Experience',
  ],
  targetAudience: 'Career changers, fresh graduates, IT professionals seeking upskilling, non-IT professionals transitioning to tech',
  primaryServices: [
    'Software Testing Training (Manual & Automation)',
    'Data Science & Machine Learning Courses',
    'AI/ML Training Programs',
    'Digital Marketing Courses',
    'Placement Assistance & Job Support',
  ],
} as const;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get full URL for a path
 */
export function getFullUrl(path: string = ''): string {
  if (path === '/' || path === '') {
    return SITE_CONFIG.url;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Get full image URL
 */
export function getImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  return getFullUrl(imagePath);
}

/**
 * Get all social media URLs as array (for schema.org sameAs)
 */
export function getSocialMediaUrls(): string[] {
  return Object.values(SOCIAL_PROFILES);
}

/**
 * Format phone number for schema
 */
export function getFormattedPhone(): string {
  return BUSINESS_INFO.phone;
}

/**
 * Get organization JSON-LD ID
 */
export function getOrganizationId(): string {
  return `${SITE_CONFIG.url}/#organization`;
}

/**
 * Get website JSON-LD ID
 */
export function getWebsiteId(): string {
  return `${SITE_CONFIG.url}/#website`;
}
