import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { blogPosts } from '../../lib/blog';

export const metadata: Metadata = {
  title: 'Pulse Academic Blog | Exit Tickets, Formative Assessment, and Classroom Data',
  description:
    'Practical teacher-written guides on exit tickets, checking for understanding, formative assessment, and classroom progress tracking.',
  alternates: { canonical: 'https://pulseacademic.com/blog' },
  openGraph: {
    title: 'Pulse Academic Blog',
    description:
      'Practical guides for teachers on exit tickets, formative assessment, and student understanding.',
    url: 'https://pulseacademic.com/blog',
    type: 'website',
    images: [{ url: 'https://pulseacademic.com/og-image.png', width: 1200, height: 630, alt: 'Pulse Academic Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulse Academic Blog',
    description: 'Practical guides for teachers on exit tickets, formative assessment, and student understanding.',
    images: ['https://pulseacademic.com/og-image.png'],
  },
};

export default function BlogIndex() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pulse Academic Blog',
    description: 'Practical teacher guides on exit tickets, formative assessment, and classroom data.',
    url: 'https://pulseacademic.com/blog',
    itemListElement: blogPosts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://pulseacademic.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <main className="blog-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <nav className="blog-nav" aria-label="Blog navigation">
          <Link href="/" className="nav-logo">
            Pulse <span>Academic</span>
          </Link>
          <Link href="/" className="blog-home-link">
            Home
          </Link>
        </nav>

        <section className="blog-hero">
          <div className="section-label">Teacher guides</div>
          <h1>Exit tickets, formative assessment, and faster classroom data.</h1>
          <p>
            Practical writing from the Pulse Academic perspective: teacher-side tools,
            quick checks for understanding, and data that actually helps plan tomorrow.
          </p>
        </section>

        <section className="blog-grid" aria-label="Blog posts">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-meta">
                <span>{post.readingTime}</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="blog-keywords">
                <span>{post.primaryKeyword}</span>
                {post.relatedKeywords.slice(0, 2).map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
