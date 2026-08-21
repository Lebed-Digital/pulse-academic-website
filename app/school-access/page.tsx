import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Access Help | Pulse Academic',
  description: 'Pulse Academic is temporarily paused. Signups and app access are not available right now.',
  alternates: { canonical: 'https://pulseacademic.com/school-access' },
};

export default function SchoolAccessPage() {
  return (
    <>
      <main className="blog-shell">
        <nav className="blog-nav" aria-label="Access navigation">
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
            <h1>Access Help</h1>
            <p>
              Pulse Academic is temporarily paused while it gets rebuilt. There is no app to sign
              in to right now, so there is nothing to unblock on a school network.
            </p>
          </header>

          <div className="article-content">
            <section>
              <h2>What this means</h2>
              <p>
                New signups are closed and the app is offline for the time being. This is not a
                network or filtering issue, the app itself is paused.
              </p>
            </section>

            <section>
              <h2>Coming back</h2>
              <p>
                Check the <Link href="/">homepage</Link> or the <Link href="/blog">blog</Link> for
                updates. When Pulse Academic reopens, access will work the same as any other site,
                no special setup required.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
