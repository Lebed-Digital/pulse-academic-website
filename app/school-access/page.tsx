import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Access Help | Pulse Academic',
  description:
    'Quick access help for Pulse Academic with primary and backup links for school networks.',
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
              If one link is blocked on a school network, use the backup link below.
              Both links open the same Pulse Academic experience.
            </p>
          </header>

          <div className="article-content">
            <section>
              <h2>Primary link</h2>
              <p>
                <a
                  href="https://pulseacademic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-cta"
                >
                  pulseacademic.com
                </a>
              </p>
            </section>

            <section>
              <h2>Backup link</h2>
              <p>
                <a
                  href="https://pulse-academic.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-cta"
                >
                  pulse-academic.vercel.app
                </a>
              </p>
            </section>

            <section>
              <h2>Quick note</h2>
              <p>
                School filters can vary by building and network. If one URL does not open,
                use the other link and continue as normal.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
