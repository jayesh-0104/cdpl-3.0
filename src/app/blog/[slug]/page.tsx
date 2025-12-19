import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts, getAuthorById, getCategoryById } from '@/data/BlogPostData';
import { notFound } from 'next/navigation';
import { BlogCategoryMenu } from '@/components/blog';
import { generateBlogMetadata } from '@/lib/metadata-generator';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';

const BlogPostHeroSection = dynamic(
    () => import("@/components/sections/BlogPostHeroSection").then(m => ({ default: m.BlogPostHeroSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

const BlogPostSection = dynamic(
    () => import("@/components/sections/BlogPostSection").then(m => ({ default: m.BlogPostSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

const BlogPostContactSection = dynamic(
    () => import("@/components/sections/BlogPostContactSection").then(m => ({ default: m.BlogPostContactSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

// ============================================================================
// STATIC SITE GENERATION - Generate pages for all blog posts
// ============================================================================
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found | CDPL Tech Blog',
            description: 'The requested blog post could not be found.',
            robots: { index: false, follow: true },
        };
    }

    const author = getAuthorById(post.authorId);
    const category = getCategoryById(post.categoryId);

    return generateBlogMetadata({
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        slug: post.slug,
        author: author ? author.name : 'CDPL Team',
        publishedDate: new Date(post.publishDate).toISOString(),
        modifiedDate: post.lastModified ? new Date(post.lastModified).toISOString() : undefined,
        category: category ? category.name : undefined,
        tags: post.tags,
        image: post.seo.ogImage || post.featuredImage,
    });
}

// ============================================================================
// BLOG POST PAGE COMPONENT
// ============================================================================
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const author = getAuthorById(post.authorId);
    const category = getCategoryById(post.categoryId);

    // Calculate estimated word count
    const estimatedWordCount = parseInt(post.readTime) * 200;

    // Generate Article Schema
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.description,
        url: `/blog/${post.slug}`,
        image: post.featuredImage,
        author: author ? author.name : 'CDPL Team',
        publishedDate: new Date(post.publishDate).toISOString(),
        modifiedDate: post.lastModified ? new Date(post.lastModified).toISOString() : undefined,
        keywords: post.tags,
        wordCount: estimatedWordCount,
        category: category ? category.name : undefined,
    });

    // Generate Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: category?.name || 'Category', url: `/blog/category/${category?.slug || 'all'}` },
        { name: post.title, url: `/blog/${post.slug}` },
    ]);

    return (
        <>
            {/* Standardized JSON-LD Injection */}
            <JsonLd id="article-schema" schema={articleSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />

            <article className="blog-post-page">
                {/* Category Navigation Menu */}
                <nav aria-label="Blog categories">
                    <React.Suspense fallback={<div>Loading menu...</div>}>
                        <BlogCategoryMenu />
                    </React.Suspense>
                </nav>

                {/* Blog Post Hero Section */}
                <header>
                    <React.Suspense fallback={<div>Loading header...</div>}>
                        <BlogPostHeroSection slug={slug} />
                    </React.Suspense>
                </header>

                {/* Blog Post Main Content */}
                <main role="main" aria-label="Article content">
                    <React.Suspense fallback={<div>Loading content...</div>}>
                        <BlogPostSection slug={slug} />
                    </React.Suspense>
                </main>

                {/* Contact Section */}
                <aside role="complementary" aria-label="Contact information">
                    <React.Suspense fallback={<div>Loading contact form...</div>}>
                        <BlogPostContactSection slug={slug} />
                    </React.Suspense>
                </aside>
            </article>
        </>
    );
}
