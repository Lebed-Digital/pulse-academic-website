import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Pulse Academic',
  description: 'How Pulse Academic handles your data.',
  alternates: { canonical: 'https://pulseacademic.com/privacy' },
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '100px 32px 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: 40 }}>
        ← Back to Pulse Academic
      </Link>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
        Privacy Policy
      </h1>
      <p style={{ color: 'var(--text-dim)', marginBottom: 40 }}>Last updated: April 29, 2026</p>
      <div style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Pulse Academic is a teacher-facing formative assessment tool. This privacy policy explains what data we collect and how we use it.
        </p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>What we collect</h2>
        <p style={{ marginBottom: '1.5rem' }}>We collect your email address (for authentication) and the lesson plan data and student status records you enter. Student data is limited to first names or initials and check-for-understanding status (Got It / Almost / Needs Help).</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>How we use it</h2>
        <p style={{ marginBottom: '1.5rem' }}>Your data is used only to provide the Pulse Academic service. We do not sell your data. We do not use it for advertising. The AI feature only processes your lesson plan when you explicitly request exit ticket suggestions.</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Data storage</h2>
        <p style={{ marginBottom: '1.5rem' }}>Data is stored in Supabase, which uses industry-standard encryption at rest and in transit (SSL/TLS). Access is restricted by row-level security — only you can see your data.</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Deleting your data</h2>
        <p style={{ marginBottom: '1.5rem' }}>You can request deletion of your account and all associated data at any time by emailing gregorylebed@gmail.com.</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Contact</h2>
        <p>Questions? Email <a href="mailto:gregorylebed@gmail.com" style={{ color: 'var(--accent-light)' }}>gregorylebed@gmail.com</a>.</p>
      </div>
    </div>
  );
}
