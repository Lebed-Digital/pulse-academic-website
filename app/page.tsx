'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Upload, Lightbulb, CheckSquare, BarChart2, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../lib/blog';
import Footer from '../components/Footer';

const APP_URL = 'https://pulse-academic.vercel.app';
const PRIMARY_SITE_URL = 'https://pulseacademic.com';

const btnHover = { scale: 1.04, y: -2 };
const btnTap   = { scale: 0.96 };

const mockStudents = [
  { initials: 'RB', status: 'green' },
  { initials: 'JC', status: 'green' },
  { initials: 'ML', status: 'amber' },
  { initials: 'SA', status: 'green' },
  { initials: 'TW', status: 'red' },
  { initials: 'DK', status: 'green' },
  { initials: 'PH', status: 'amber' },
  { initials: 'ER', status: 'green' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="glow-field" aria-hidden>
        <span className="g1" /><span className="g2" /><span className="g3" />
        <span className="g4" /><span className="g5" />
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-left">
            <Link href="/" className="nav-logo">Pulse <span>Academic</span></Link>
            <span className="nav-badge">Free</span>
          </div>
          <div className="nav-links">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <Link href="/blog" className="nav-link">Blog</Link>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#privacy" className="nav-link">🔒 Privacy</a>
          </div>
          <div className="nav-right">
            <motion.a
              href={APP_URL}
              className="btn-primary"
              whileHover={btnHover}
              whileTap={btnTap}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              target="_blank" rel="noopener noreferrer"
            >
              Try It Free →
            </motion.a>
            <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="nav-mobile-menu" onClick={() => setMenuOpen(false)}>
            <a href="#how-it-works" className="nav-mobile-link">How It Works</a>
            <Link href="/blog" className="nav-mobile-link">Blog</Link>
            <a href="#faq" className="nav-mobile-link">FAQ</a>
            <a href="#privacy" className="nav-mobile-link">🔒 Privacy</a>
            <a href={APP_URL} className="nav-mobile-link nav-mobile-cta" target="_blank" rel="noopener noreferrer">Try It Free →</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">Free &nbsp;·&nbsp; No App Store &nbsp;·&nbsp; Works on Any Device</div>
            <h1>Know exactly who<br /><em>got it</em> — before<br />the bell rings.</h1>
            <p className="hero-sub">
              Upload your lesson plan, get an AI exit ticket question in seconds, and tap each student
              into Got It, Almost, or Needs Help. Your whole class on one screen.
            </p>
            <div className="hero-ctas">
              <motion.a
                href={APP_URL}
                className="btn-primary"
                whileHover={btnHover} whileTap={btnTap}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                target="_blank" rel="noopener noreferrer"
              >
                Try It Free →
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="btn-ghost"
                whileHover={{ scale: 1.03, y: -1 }} whileTap={btnTap}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                See How It Works
              </motion.a>
            </div>
          </div>

          {/* Mock UI card */}
          <div className="hero-visual">
            <div className="mock-card">
              <div className="mock-lesson-title">Today&apos;s Lesson</div>
              <div className="mock-lesson-name">Introduction to Fractions</div>
              <div className="mock-exit-banner">
                <strong>💡 Exit Ticket</strong>
                Draw a model showing 3/4 of a circle. What does the denominator tell us?
              </div>
              <div className="mock-grid">
                {mockStudents.map(s => (
                  <div key={s.initials} className="mock-student">
                    <div className={`mock-avatar mock-avatar--${s.status}`}>{s.initials}</div>
                    <div className="mock-name">{s.status === 'green' ? 'Got It' : s.status === 'amber' ? 'Almost' : 'Needs Help'}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ padding: '80px 0' }}>
        <div className="section-inner">
          <div className="section-label" style={{ marginBottom: '1rem' }}>Sound familiar?</div>
          <h2 className="section-heading" style={{ marginBottom: '2.5rem' }}>Before &amp; After<br /><em>Pulse Academic.</em></h2>
          <div className="before-after-grid">
            <div className="before-card">
              <div className="ba-label">Before</div>
              {[
                'Exit tickets on index cards — lost by 3rd period',
                '"Did everyone understand?" (3 hands go up)',
                'Making up questions on the spot',
                'No record of who struggled with what',
                'Reviewing the whole lesson because you aren\'t sure who got it',
              ].map(item => (
                <div key={item} className="ba-item ba-item--before">
                  <span className="ba-icon">✗</span> {item}
                </div>
              ))}
            </div>
            <div className="after-card">
              <div className="ba-label">After</div>
              {[
                'AI exit ticket tied to today\'s actual objective',
                'Visual grid — green, amber, red — at a glance',
                'Upload your lesson plan once, it plans the whole week',
                'History by student and by lesson, always saved',
                'You know exactly who to pull for small group tomorrow',
              ].map(item => (
                <div key={item} className="ba-item ba-item--after">
                  <span className="ba-icon">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-section">
        <div className="section-inner">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-number"><span>30</span> sec</div>
              <div className="stat-label">from lesson plan to exit ticket</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Any <span>device</span></div>
              <div className="stat-label">phone, tablet, or computer</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><span>Zero</span> install</div>
              <div className="stat-label">no app store required</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">
        <div className="section-inner">
          <div style={{ marginBottom: '0.5rem' }}>
            <div className="section-label">How it works</div>
            <h2 className="section-heading">Three steps to a <em>smarter check-in.</em></h2>
            <p className="section-sub">No setup. No training. Start using it in minutes.</p>
          </div>
          <div className="how-steps">
            <div className="how-step">
              <div className="how-step-num">01</div>
              <Upload size={28} style={{ color: 'var(--accent-light)', marginBottom: 14 }} strokeWidth={1.75} />
              <div className="how-step-title">Upload Your Lesson Plan</div>
              <p className="how-step-desc">
                Drop in a PDF, Word doc, or paste text. Pulse Academic reads your objective, activities,
                and assessment to understand what you actually taught today.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">02</div>
              <Lightbulb size={28} style={{ color: 'var(--accent-light)', marginBottom: 14 }} strokeWidth={1.75} />
              <div className="how-step-title">Get AI Exit Tickets</div>
              <p className="how-step-desc">
                Tap the 💡 button. The AI suggests 3 targeted exit ticket questions based on your specific
                lesson. Pick one and it appears as a banner above your student grid.
              </p>
            </div>
            <div className="how-step">
              <div className="how-step-num">03</div>
              <CheckSquare size={28} style={{ color: 'var(--accent-light)', marginBottom: 14 }} strokeWidth={1.75} />
              <div className="how-step-title">Tap to Check for Understanding</div>
              <p className="how-step-desc">
                As students respond, tap each name to cycle through{' '}
                <strong style={{ color: '#22c55e' }}>Got It</strong>,{' '}
                <strong style={{ color: '#f59e0b' }}>Almost</strong>, and{' '}
                <strong style={{ color: '#ef4444' }}>Needs Help</strong>.
                Saved automatically. Review history anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES ROW */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="section-inner">
          <div className="section-label" style={{ marginBottom: '1rem' }}>What&apos;s inside</div>
          <h2 className="section-heading" style={{ marginBottom: '3rem' }}>Built for the <em>real classroom.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { icon: <BookOpen size={24} strokeWidth={1.75} />, title: 'Lesson Plan Tracker', desc: 'Upload your week\'s plans. Each day auto-fills when you open the app — no re-entering the same lesson every morning.' },
              { icon: <Lightbulb size={24} strokeWidth={1.75} />, title: 'AI Exit Ticket Generator', desc: 'Suggests 3 exit ticket questions based on your actual lesson objective and activities — not generic prompts.' },
              { icon: <CheckSquare size={24} strokeWidth={1.75} />, title: 'Formative Assessment Grid', desc: 'Your whole class on one screen. Color-coded status rings show understanding at a glance — no squinting at index cards.' },
              { icon: <BarChart2 size={24} strokeWidth={1.75} />, title: 'History & Trends', desc: 'View results by student or by lesson. See who consistently struggles with which topics across the whole week.' },
              { icon: <Clock size={24} strokeWidth={1.75} />, title: 'Week Planning', desc: 'Edit any lesson inline, swap days, copy to next day, or skip and push forward. Full undo support.' },
              { icon: <Upload size={24} strokeWidth={1.75} />, title: 'Any File Format', desc: 'Upload PDF, Word doc, or plain text. Or just paste your lesson notes directly — whatever you already have.' },
            ].map(f => (
              <div key={f.title} style={{
                background: 'rgba(17,24,20,0.55)', border: '1px solid var(--border)',
                borderRadius: 18, padding: '28px 24px',
                backdropFilter: 'blur(16px)',
              }}>
                <div style={{ color: 'var(--accent-light)', marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.02em' }}>{f.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="section-inner">
          <div className="section-label" style={{ marginBottom: '1rem' }}>From the blog</div>
          <h2 className="section-heading" style={{ marginBottom: '2.5rem' }}>Latest teacher guides on <em>exit tickets.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {[...blogPosts].reverse().slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  background: 'rgba(17,24,20,0.55)',
                  border: '1px solid var(--border)',
                  borderRadius: 18,
                  padding: '24px',
                  backdropFilter: 'blur(16px)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10, letterSpacing: '-0.02em' }}>{post.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 12 }}>{post.description}</p>
                <span style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem' }}>Read article →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="/blog" className="btn-ghost">Browse all posts</Link>
          </div>
        </div>
      </section>

      {/* CREATOR */}
      <section className="creator-section">
        <div className="section-inner">
          <div className="creator-card">
            <div className="creator-top">
              <Image src="/creator.jpg" alt="Gregory, creator of Pulse Academic" className="creator-photo" width={180} height={230} priority />
              <div>
                <div className="creator-eyebrow">Built by a Teacher. For Teachers.</div>
                <h2 className="creator-heading">A Message from the Creator</h2>
              </div>
            </div>
            <p className="creator-body" style={{ fontWeight: 600, fontSize: '1.02rem', color: 'var(--text)' }}>
              I built this because I was tired of writing exit ticket questions on sticky notes
              and losing track of which students actually got it.
            </p>
            <div className="creator-badges">
              {['20+ Years K–8 Experience', 'Former RBT', 'Active 3rd Grade Teacher'].map(b => (
                <span key={b} className="creator-badge">{b}</span>
              ))}
            </div>
            <p className="creator-body">
              I have spent over 20 years in the classroom. I know exactly how fast a period goes,
              and how hard it is to get accurate data on who understood the lesson before the bell rings.
              Pulse Academic was built from that frustration — a fast, no-friction tool that actually
              fits into the last five minutes of class.
            </p>
            <blockquote className="creator-quote">
              &ldquo;You can&apos;t plan tomorrow&apos;s reteach if you don&apos;t know who didn&apos;t get today&apos;s lesson.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="privacy-section">
        <div className="section-inner">
          <div className="section-label" style={{ textAlign: 'center' }}>Data &amp; Privacy</div>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>Our Privacy Promise<br /><em>(Teacher-to-Teacher)</em></h2>
          <p className="section-sub" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
            You&apos;re trusting me with data about real students. Here&apos;s exactly how I protect it.
          </p>
          <div className="privacy-grid">
            {[
              { icon: '🔒', title: 'No Student Names Required', desc: 'The app uses initials or first names only. No student IDs, no full legal names, no FERPA-sensitive data collected.' },
              { icon: '🚫', title: 'No Data Selling. Ever.', desc: "I'm a teacher, not a data broker. Lesson data and student status are never sold, shared, or used for advertising." },
              { icon: '🤖', title: 'AI with Boundaries', desc: 'The AI only sees your lesson plan when you ask for exit ticket suggestions. It never watches your class data passively.' },
              { icon: '🗑️', title: 'You Own the Data', desc: 'Your lesson plans and student data stay in your account. You can delete everything at any time.' },
              { icon: '🔐', title: 'Encrypted in Transit', desc: 'All data is transmitted over SSL/TLS. Your classroom information is protected at every step.' },
            ].map(item => (
              <div key={item.title} className="privacy-card">
                <div className="privacy-icon">{item.icon}</div>
                <div className="privacy-title">{item.title}</div>
                <p className="privacy-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is Pulse Academic?", "acceptedAnswer": { "@type": "Answer", "text": "Pulse Academic is a free exit ticket app and formative assessment tool for teachers. Upload a lesson plan, get AI-suggested exit ticket questions, and tap students to mark Got It, Almost, or Needs Help — all from one screen." } },
          { "@type": "Question", "name": "What does \"exit ticket app\" mean?", "acceptedAnswer": { "@type": "Answer", "text": "An exit ticket is a quick end-of-lesson check for understanding — usually one question students answer before leaving. Pulse Academic generates that question from your actual lesson plan and lets you record every student's response with a single tap." } },
          { "@type": "Question", "name": "How is this different from a lesson plan tracker?", "acceptedAnswer": { "@type": "Answer", "text": "It's both. You upload your weekly lesson plans once, and Pulse Academic uses them to auto-fill the tracker each day AND generate exit ticket questions. It's a lesson plan tracker that also does formative assessment." } },
          { "@type": "Question", "name": "Is Pulse Academic free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No subscription, no credit card, no app store download. It works in any browser and can be installed as a Progressive Web App." } },
          { "@type": "Question", "name": "What devices does it work on?", "acceptedAnswer": { "@type": "Answer", "text": "Any device with a browser — phone, tablet, Chromebook, or desktop. It's a PWA so you can also save it to your home screen for easy access." } },
          { "@type": "Question", "name": "Do I need to set up student accounts?", "acceptedAnswer": { "@type": "Answer", "text": "No. Student lists are configured by your teacher account. Students never log in or touch the app — this is a teacher-side tool." } },
          { "@type": "Question", "name": "Is this the same as ShortHand?", "acceptedAnswer": { "@type": "Answer", "text": "No. ShortHand is a behavior tracking and parent communication app. Pulse Academic is focused on academic formative assessment — lesson plans, exit tickets, and check-for-understanding data. Same creator, different tools." } },
        ]
      })}} />

      {/* FAQ */}
      <section id="faq" className="faq-section">
        <div className="section-inner">
          <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Common Questions</div>
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>FAQ: <em>Everything you need to know.</em></h2>
          <div className="faq-list">
            {[
              { q: 'What is Pulse Academic?', a: 'Pulse Academic is a free exit ticket app and formative assessment tool for teachers. Upload a lesson plan, get AI-suggested exit ticket questions, and tap students to mark Got It, Almost, or Needs Help — all from one screen.' },
              { q: 'What does "exit ticket app" mean?', a: 'An exit ticket is a quick end-of-lesson check for understanding — usually one question students answer before leaving. Pulse Academic generates that question from your actual lesson plan and lets you record every student\'s response with a single tap.' },
              { q: 'How is this different from a lesson plan tracker?', a: 'It\'s both. You upload your weekly lesson plans once, and Pulse Academic uses them to auto-fill the tracker each day AND generate exit ticket questions. It\'s a lesson plan tracker that also does formative assessment.' },
              { q: 'Is Pulse Academic free?', a: 'Yes, completely free. No subscription, no credit card, no app store download. It works in any browser and can be installed as a Progressive Web App.' },
              { q: 'What devices does it work on?', a: 'Any device with a browser — phone, tablet, Chromebook, or desktop. It\'s a PWA so you can also save it to your home screen for easy access.' },
              { q: 'Do I need to set up student accounts?', a: 'No. Student lists are configured by your teacher account. Students never log in or touch the app — this is a teacher-side tool.' },
              { q: 'Is this the same as ShortHand?', a: 'No. ShortHand is a behavior tracking and parent communication app. Pulse Academic is focused on academic formative assessment — lesson plans, exit tickets, and check-for-understanding data. Same creator, different tools.' },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-summary">
                  {q}
                  <span className="faq-plus">+</span>
                </summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-inner">
          <div className="cta-card">
            <div className="section-label">Get started</div>
            <h2 className="cta-heading">Free to use.<br />Works on any device.</h2>
            <p className="cta-sub">
              No app store. No sign-up friction. Open it in your browser, upload a lesson plan,
              and run your first AI exit ticket in under two minutes.
            </p>
            <div className="cta-btns">
              <motion.a
                href={APP_URL}
                className="btn-primary"
                whileHover={btnHover} whileTap={btnTap}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                target="_blank" rel="noopener noreferrer"
              >
                Try Pulse Academic Free →
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS OPTIONS */}
      <section className="access-section">
        <div className="section-inner">
          <div className="access-card">
            <div className="section-label">School network access</div>
            <h2 className="access-heading">If one link is blocked, use the backup link.</h2>
            <p className="access-sub">
              Some school filters take time to trust new domains. Use your preferred URL first.
              If one link does not open on your network, use the direct Vercel fallback.
            </p>
            <div className="access-links">
              <a
                href={PRIMARY_SITE_URL}
                className="btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Primary site
              </a>
              <a
                href={APP_URL}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Direct app fallback
              </a>
              <Link href="/school-access" className="access-it-link">
                Access help page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden SEO text */}
      <section style={{ display: 'none' }} aria-hidden="true">
        <p>Pulse Academic is an education technology application designed to improve formative assessment in K–12 classrooms. This exit ticket app helps teachers check for understanding, track lesson plan progress, and generate AI-powered exit ticket questions tied to real lesson objectives. Built for teachers seeking formative assessment tools, check for understanding apps, lesson plan trackers, and exit ticket generators.</p>
      </section>

      <Footer />
    </>
  );
}
