import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Pulse Academic',
  description: 'Terms of service for Pulse Academic.',
  alternates: { canonical: 'https://pulseacademic.com/terms' },
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '100px 32px 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: 40 }}>
        ← Back to Pulse Academic
      </Link>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
        Terms of Service
      </h1>
      <p style={{ color: 'var(--text-dim)', marginBottom: 40 }}>Last updated: April 29, 2026</p>
      <div style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
        <p style={{ marginBottom: '1.5rem' }}>By using Pulse Academic, you agree to these terms. The service is provided as-is for educational use by classroom teachers.</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Use of the service</h2>
        <p style={{ marginBottom: '1.5rem' }}>Pulse Academic is intended for K–12 teachers to track formative assessment data. You agree not to misuse the service or enter sensitive personally identifiable student information beyond what is required (first name or initials).</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Availability</h2>
        <p style={{ marginBottom: '1.5rem' }}>The service is provided free of charge and may be modified or discontinued at any time without notice.</p>
        <h2 style={{ color: 'var(--text)', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2rem' }}>Contact</h2>
        <p>Questions? Email <a href="mailto:gregorylebed@gmail.com" style={{ color: 'var(--accent-light)' }}>gregorylebed@gmail.com</a>.</p>
      </div>
    </div>
  );
}
