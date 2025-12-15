/**
 * ============================================================================
 * CENTRALIZED METADATA GENERATOR FOR CDPL
 * ============================================================================
 * 
 * This file provides a unified function to generate Next.js metadata objects
 * for all pages, ensuring consistency and following Next.js 15 best practices.
 * 
 * @version 2.0.1
 * @updated 2025-12-02
 */

import type { Metadata } from 'next';
import type { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import {
  SITE_CONFIG,
  SEO_DEFAULTS,
  SOCIAL_PROFILES,
  VERIFICATION,
  AI_OPTIMIZATION,
  getFullUrl,
  getImageUrl,
} from './seo-config';

// Helper to abbreviate titles to max 60 chars smartly
function abbreviateTitle(title: string): string {
  const MAX_LENGTH = 60;
  if (title.length <= MAX_LENGTH) return title;

  // 1. Try removing "Best " prefix
  let newTitle = title.replace(/^Best /, '');
  if (newTitle.length <= MAX_LENGTH) return newTitle;

  // 2. Try removing " | CDPL - Cinute Digital" suffix if present and replacing with " | CDPL"
  newTitle = newTitle.replace(/ \| CDPL - Cinute Digital$/, ' | CDPL');
  // Also handle " | CDPL Blog" -> " | CDPL" if that helps, or just allow it to be truncated properly.
  // Ideally, we want to KEEP " | CDPL" or " | CDPL Blog" but shorten the rest.

  // Normalization: If it ends with " | CDPL Blog", treat that as the suffix to preserve (or shorten to | CDPL)
  let suffix = ' | CDPL';
  if (newTitle.endsWith(' | CDPL Blog')) {
    suffix = ' | CDPL Blog';
  } else if (newTitle.endsWith(' - CDPL')) {
    suffix = ' - CDPL';
  }

  if (newTitle.length <= MAX_LENGTH) return newTitle;

  // 3. Try removing suffix, shortening content, then re-adding
  const targetLength = MAX_LENGTH - suffix.length;

  // Split into words and reconstruct
  const words = newTitle.replace(suffix, '').split(' ');
  let reduced = '';
  for (const word of words) {
    if ((reduced + (reduced ? ' ' : '') + word).length <= targetLength) {
      reduced += (reduced ? ' ' : '') + word;
    } else {
      break;
    }
  }

  // If we couldn't even fit one word + suffix (rare), just return truncated title
  if (reduced.length === 0) return newTitle.substring(0, MAX_LENGTH - 3) + '...';

  return reduced + suffix;
}

export interface MetadataGeneratorInput {
  // Basic SEO
  title: string | TemplateString;
  description: string;
  keywords?: string[];

  // URL & Canonical
  url?: string;
  canonical?: string;

  // Open Graph
  type?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;

  // Article-specific (for blog posts)
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];

  // Robots
  noindex?: boolean;
  nofollow?: boolean;

  // Additional
  locale?: string;
  alternateLocales?: string[];
}

export function generateMetadata(input: MetadataGeneratorInput): Metadata {
  const {
    title,
    description,
    keywords = [],
    url = '',
    canonical,
    type = 'website',
    image,
    imageAlt,
    imageWidth = SITE_CONFIG.defaultOgImageWidth,
    imageHeight = SITE_CONFIG.defaultOgImageHeight,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    noindex = false,
    nofollow = false,
    locale = SEO_DEFAULTS.locale,
    alternateLocales = SEO_DEFAULTS.alternateLocales,
  } = input;

  // Construct full URLs
  const fullUrl = getFullUrl(url);
  const canonicalUrl = canonical ? getFullUrl(canonical) : fullUrl;
  const ogImage = image ? getImageUrl(image) : getImageUrl(SITE_CONFIG.defaultOgImage);

  // Helper to get string title for OG/Twitter
  let titleString = typeof title === 'string'
    ? title
    : (title as { absolute: string }).absolute || (title as { default: string }).default || '';

  // Enforce 60 char limit
  titleString = abbreviateTitle(titleString);

  // Update the title object if it's a string, or just use the optimized string
  const finalTitle = typeof title === 'string' ? titleString : title;

  const ogImageAlt = imageAlt || titleString;

  // Merge keywords with defaults
  const allKeywords = [...new Set([...keywords, ...SEO_DEFAULTS.defaultKeywords])];

  return {
    // Basic Metadata
    title: finalTitle,
    description,
    keywords: allKeywords,

    // Authors
    ...(author && {
      authors: [{ name: author }],
    }),

    // Creator & Publisher
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,

    // Category
    category: 'education',

    // Canonical URL & Hreflang
    // Removed explicit hreflang to avoid conflicts. Canonical is sufficient for single-language site.
    alternates: {
      canonical: canonicalUrl,
    },

    // Open Graph
    openGraph: {
      type,
      locale,
      alternateLocale: alternateLocales,
      url: fullUrl,
      siteName: SITE_CONFIG.name,
      title: titleString,
      description,
      images: [
        {
          url: ogImage,
          width: imageWidth,
          height: imageHeight,
          alt: ogImageAlt,
        },
      ],

      // Article-specific fields
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        section,
        tags,
        authors: author ? [author] : undefined,
      }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: SOCIAL_PROFILES.twitterHandle,
      creator: SOCIAL_PROFILES.twitterHandle,
      title: titleString,
      description,
      images: [ogImage],
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Format Detection
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    // Verification
    verification: {
      google: VERIFICATION.google,
      ...(VERIFICATION.bing && { other: { 'msvalidate.01': VERIFICATION.bing } }),
    },
  };
}

// ============================================================================
// CONVENIENCE WRAPPERS
// ============================================================================

export function generateStaticPageMetadata(input: {
  title: string | { absolute: string };
  description: string;
  url: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const title = typeof input.title === 'string'
    ? `${input.title} | CDPL`
    : input.title;

  return generateMetadata({
    title,
    description: input.description,
    keywords: input.keywords,
    url: input.url,
    image: input.image,
    type: 'website',
  });
}

export function generateCategoryMetadata(input: {
  categoryName: string;
  description: string;
  slug: string;
  itemCount?: number;
}): Metadata {
  const title = `${input.categoryName} Courses - ${input.itemCount ? `${input.itemCount}+ ` : ''}Programs | CDPL`;

  const keywords = [
    `${input.categoryName.toLowerCase()} courses`,
    `${input.categoryName.toLowerCase()} training`,
    `best ${input.categoryName.toLowerCase()} courses`,
    'online training',
    'placement support',
  ];

  return generateMetadata({
    title,
    description: input.description,
    keywords,
    url: `/courses/${input.slug}`,
    type: 'website',
  });
}

export function generateEventMetadata(input: {
  title: string;
  description: string;
  slug: string;
  category: string;
  organizer?: string;
  location?: string;
  image?: string;
  keywords?: string[];
}): Metadata {

  const keywords = [
    ...(input.keywords || []),
    input.category,
    input.title,
    "CDPL event",
    "corporate training",
    "workshop",
    input.organizer || "CDPL",
    input.location || "",
    "technical training",
    "professional development",
    "industry event",
  ];

  return generateMetadata({
    title: `${input.title} - ${input.category} | CDPL`,
    description: input.description,
    keywords: keywords.filter(Boolean),
    url: `/events/${input.slug}`,
    image: input.image,
    type: 'website',
  });
}

export function generateBlogMetadata(input: {
  title: string;
  description: string;
  slug: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
  tags?: string[];
  image?: string;
}): Metadata {
  const title = `${input.title} | CDPL Blog`;

  return generateMetadata({
    title,
    description: input.description,
    keywords: input.tags,
    url: `/blog/${input.slug}`,
    image: input.image,
    type: 'article',
    author: input.author,
    publishedTime: input.publishedDate,
    modifiedTime: input.modifiedDate,
    section: input.category,
    tags: input.tags,
  });
}

// ============================================================================
// AI CRAWLER META TAGS
// ============================================================================

export function generateAIMetaTags(customSummary?: string, customKeyPoints?: string[]): Record<string, string> {
  return {
    'ai:summary': customSummary || AI_OPTIMIZATION.summary,
    'ai:key_points': (customKeyPoints || AI_OPTIMIZATION.keyPoints).join(' | '),
    'ai:target_audience': AI_OPTIMIZATION.targetAudience,
    'ai:primary_services': AI_OPTIMIZATION.primaryServices.join(' | '),
  };
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be',
    'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will',
    'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this',
    'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
  ]);

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

export function generateMetaDescription(content: string, maxLength: number = 160): string {
  const cleanContent = content.replace(/<[^>]*>/g, ' ');
  const sentences = cleanContent.split(/[.!?]+/);
  let description = sentences[0].trim();

  let i = 1;
  while (description.length < maxLength && i < sentences.length) {
    const nextSentence = sentences[i].trim();
    if (description.length + nextSentence.length + 2 <= maxLength) {
      description += '. ' + nextSentence;
      i++;
    } else {
      break;
    }
  }

  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }

  return description;
}

export function validateMetadata(metadata: MetadataGeneratorInput): {
  isValid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];

  const titleLength = typeof metadata.title === 'string'
    ? metadata.title.length
    : (metadata.title as { absolute: string }).absolute?.length || 0;

  if (titleLength < 30) warnings.push('Title is too short. Aim for 50-60 characters.');
  else if (titleLength > 60) warnings.push('Title is too long. Keep it under 60 characters.');

  if (metadata.description.length < 120) warnings.push('Description is too short. Aim for 150-160 characters.');
  else if (metadata.description.length > 160) warnings.push('Description is too long. Keep it under 160 characters.');

  if (!metadata.keywords || metadata.keywords.length === 0) {
    warnings.push('No keywords provided. Add relevant keywords for better SEO.');
  }

  if (!metadata.image) {
    warnings.push('No custom image provided. Using default OG image.');
  }

  return {
    isValid: warnings.length === 0,
    warnings,
  };
}

// ============================================================================
// LEGACY / BACKWARD-COMPATIBILITY ALIASES
// ============================================================================

/**
 * LEGACY ALIAS — DO NOT REMOVE
 * 
 * Used by 50+ existing course pages (e.g. manual-testing-course, selenium, python, etc.)
 * All new pages should use `generateMetadata` directly.
 * This alias ensures zero breaking changes during migration.
 */
export const generateCourseMetadata = generateMetadata;