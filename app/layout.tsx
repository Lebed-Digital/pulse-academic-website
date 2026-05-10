import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pulseacademic.com'),
  title: 'Pulse Academic — Exit Ticket App & Formative Assessment Tool for Teachers',
  description: 'Upload your lesson plan, get AI exit ticket suggestions, and tap students to mark Got It / Almost / Needs Help — a formative assessment tool built for real classrooms.',
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Pulse Academic',
    title: 'Pulse Academic — Exit Ticket App for Teachers',
    description: 'Upload a lesson plan. Get AI exit tickets. Tap students to check for understanding — all in under 30 seconds.',
    url: 'https://pulseacademic.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Pulse Academic — formative assessment made fast.' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulse Academic — Exit Ticket App for Teachers',
    description: 'Upload a lesson plan. Get AI exit tickets. Tap students to check for understanding.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://pulseacademic.com' },
  robots: { index: true, follow: true },
  keywords: ['exit ticket app', 'formative assessment', 'teacher tools', 'K-12 education', 'lesson planning', 'classroom assessment', 'student mastery tracker'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-27T0CEVZ9L"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-27T0CEVZ9L');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Pulse Academic",
          "url": "https://pulseacademic.com",
          "applicationCategory": "EducationApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "description": "Pulse Academic is an exit ticket app and formative assessment tool that lets teachers upload a lesson plan, get AI-generated exit tickets, and tap students to check for understanding in real time.",
          "creator": { "@type": "Person", "name": "Gregory Lebed", "jobTitle": "3rd Grade Teacher" },
          "audience": { "@type": "EducationalAudience", "educationalRole": "teacher" }
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is Pulse Academic?", "acceptedAnswer": { "@type": "Answer", "text": "Pulse Academic is a free exit ticket app and formative assessment tool for teachers. Upload a lesson plan, get AI-suggested exit ticket questions, and tap students to mark Got It, Almost, or Needs Help." } },
            { "@type": "Question", "name": "Is Pulse Academic free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pulse Academic is completely free. No app store download required — it works in any browser and can be saved to your home screen as a Progressive Web App." } },
            { "@type": "Question", "name": "How does the exit ticket generator work?", "acceptedAnswer": { "@type": "Answer", "text": "Upload or paste your lesson plan. Pulse Academic's AI reads your objective, activities, and assessment and suggests 3 targeted exit ticket questions. Pick one and it appears as a banner above your student grid." } },
            { "@type": "Question", "name": "What devices does Pulse Academic work on?", "acceptedAnswer": { "@type": "Answer", "text": "Pulse Academic works on any device with a browser — phone, tablet, or desktop. No download required." } },
          ]
        })}} />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}
