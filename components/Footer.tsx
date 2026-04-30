'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Pulse <span>Academic</span></div>
      <div className="footer-tagline">Formative assessment made fast — built by a teacher.</div>
      <a href="mailto:gregorylebed@gmail.com" className="footer-email">
        gregorylebed@gmail.com
      </a>
      <div className="footer-links">
        <Link href="/privacy" className="footer-link">🔒 Privacy Policy</Link>
        <Link href="/terms" className="footer-link">Terms of Service</Link>
        <a href="https://getshorthandapp.com" className="footer-link" target="_blank" rel="noopener noreferrer">ShortHand →</a>
      </div>
      <div className="footer-copy">© 2026 Pulse Academic. All rights reserved.</div>
    </footer>
  );
}
