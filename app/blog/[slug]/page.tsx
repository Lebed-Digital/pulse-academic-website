import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../../components/Footer';
import { blogPosts, getBlogPost } from '../../../lib/blog';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Pulse Academic',
    };
  }

  const url = `https://pulseacademic.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Pulse Academic`,
    description: post.description,
    alternates: { canonical: url },
    keywords: [post.primaryKeyword, ...post.relatedKeywords],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      siteName: 'Pulse Academic',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T00:00:00+00:00`,
    dateModified: `${post.date}T00:00:00+00:00`,
    author: {
      '@type': 'Person',
      name: 'Gregory Lebed',
      jobTitle: '3rd Grade Teacher',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pulse Academic',
    },
    mainEntityOfPage: `https://pulseacademic.com/blog/${post.slug}`,
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(', '),
  };

  return (
    <>
      <main className="blog-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <nav className="blog-nav" aria-label="Blog navigation">
          <Link href="/" className="nav-logo">
            Pulse <span>Academic</span>
          </Link>
          <div className="blog-nav-links">
            <Link href="/blog" className="blog-home-link">
              Blog
            </Link>
            <Link href="/" className="blog-home-link">
              Home
            </Link>
          </div>
        </nav>

        <article className="article">
          <header className="article-header">
            <Link href="/blog" className="article-back">
              Back to blog
            </Link>
            <div className="article-meta">
              <span>{post.readingTime}</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </header>

          <div className="article-content">
            {post.intro.map((paragraph) => (
              <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </section>
            ))}

            <aside className="article-takeaway">
              <strong>Teacher takeaway:</strong>{' '}
              <span dangerouslySetInnerHTML={{ __html: post.takeaway }} />
            </aside>

            <section>
              <h2>Try it in Pulse Academic</h2>
              <p>
                Pulse Academic is a free exit ticket app built by a teacher. Upload your lesson
                plan, generate targeted exit ticket questions, and mark students as Got It,
                Almost, or Needs Help from one classroom-friendly screen.
              </p>
              <p>
                <a
                  href="https://pulse-academic.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-cta"
                >
                  Try Pulse Academic free
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
