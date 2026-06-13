import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'text-back — AI That Answers Every Call You Miss',
  description:
    'text-back places an intelligent AI agent on your phone line. Every missed call becomes a conversation. Every conversation becomes a customer. Trusted by 400+ local businesses.',
  keywords: [
    'AI SMS platform',
    'missed call text back',
    'AI lead response',
    'automated SMS follow-up',
    'local business AI',
    'missed call automation',
    'AI appointment booking',
    'HVAC lead generation',
    'salon automated texting',
    'contractor lead follow-up',
    'agency white label SMS',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'text-back — The AI That Answers Every Call You Miss',
    description:
      'Every missed call is a lost customer. text-back sends an instant AI-powered text, qualifies leads, and books appointments — 24/7, on autopilot.',
    url: 'https://text-back.ai',
    siteName: 'text-back',
    type: 'website',
    images: [
      {
        url: 'https://text-back.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'text-back AI SMS Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'text-back — The AI That Answers Every Call You Miss',
    description:
      'Every missed call is a lost customer. text-back sends an instant AI-powered text, qualifies leads, and books appointments — 24/7.',
  },
}

export default function LandingV2() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500;1,600&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #080807;
          --bg-secondary: #111110;
          --cream: #F2EDE4;
          --cream-dim: rgba(242, 237, 228, 0.55);
          --gold: #C9A44A;
          --gold-dim: rgba(201, 164, 74, 0.2);
          --gold-mid: rgba(201, 164, 74, 0.5);
          --divider: 1px solid rgba(201, 164, 74, 0.2);
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-sans: 'Instrument Sans', system-ui, sans-serif;
          --max-w: 1200px;
        }

        html {
          background: var(--bg);
          color: var(--cream);
          font-family: var(--font-sans);
          font-weight: 300;
          line-height: 1.8;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          overflow-x: hidden;
        }

        /* ─── NOISE TEXTURE ─────────────────────────── */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }

        /* ─── KEYFRAMES ─────────────────────────────── */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes subtlePulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* ─── ANIMATION UTILITIES ───────────────────── */
        .anim-fade-up {
          animation: fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .anim-fade {
          animation: fadeIn 1.2s ease both;
        }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }
        .delay-5 { animation-delay: 0.75s; }

        /* ─── SCROLL REVEAL ─────────────────────────── */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── NAV ───────────────────────────────────── */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 60px;
          background: linear-gradient(to bottom, rgba(8,8,7,0.95) 0%, rgba(8,8,7,0) 100%);
        }

        .nav-logo {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cream);
          text-decoration: none;
        }

        .nav-logo span {
          color: var(--gold);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cream-dim);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .nav-links a:hover {
          color: var(--cream);
        }

        .nav-cta {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--bg) !important;
          background: var(--gold);
          padding: 10px 22px;
          text-decoration: none;
          transition: opacity 0.25s ease !important;
        }

        .nav-cta:hover {
          opacity: 0.85;
        }

        /* ─── HERO ──────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 160px 60px 120px;
          overflow: hidden;
        }

        .hero-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
          width: 900px;
          height: 600px;
          background: radial-gradient(ellipse at center, rgba(201, 164, 74, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1000px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 44px;
        }

        .hero-eyebrow::before,
        .hero-eyebrow::after {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold-mid);
        }

        .hero-headline {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(64px, 9vw, 112px);
          line-height: 1.05;
          color: var(--cream);
          letter-spacing: -0.01em;
          margin-bottom: 40px;
        }

        .hero-headline .line-2 {
          display: block;
          color: var(--cream);
        }

        .hero-headline .accent-gold {
          color: var(--gold);
        }

        .hero-subhead {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--cream-dim);
          max-width: 560px;
          margin: 0 auto 56px;
          letter-spacing: 0.01em;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--bg);
          padding: 16px 36px;
          background: linear-gradient(
            90deg,
            var(--gold) 0%,
            #e8c06a 40%,
            var(--gold) 60%,
            #b8922e 100%
          );
          background-size: 200% auto;
          animation: shimmer 3.5s linear infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(201, 164, 74, 0.25);
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cream-dim);
          padding: 16px 0;
          border-bottom: 1px solid rgba(242, 237, 228, 0.2);
          transition: color 0.25s ease, border-color 0.25s ease;
        }

        .btn-ghost:hover {
          color: var(--cream);
          border-color: rgba(242, 237, 228, 0.5);
        }

        .btn-ghost-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }

        .btn-ghost:hover .btn-ghost-arrow {
          transform: translateX(4px);
        }

        .hero-scroll-hint {
          position: absolute;
          bottom: 44px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201, 164, 74, 0.5);
          animation: subtlePulse 2.5s ease infinite;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(201,164,74,0.5), transparent);
        }

        /* ─── GOLD RULE ─────────────────────────────── */
        .gold-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(201, 164, 74, 0.15) 15%,
            rgba(201, 164, 74, 0.35) 50%,
            rgba(201, 164, 74, 0.15) 85%,
            transparent 100%
          );
        }

        /* ─── SECTIONS COMMON ───────────────────────── */
        section {
          position: relative;
          z-index: 1;
        }

        .section-label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .container {
          max-width: var(--max-w);
          margin: 0 auto;
          padding: 0 60px;
        }

        /* ─── NUMBERS ───────────────────────────────── */
        .numbers-section {
          padding: 100px 0;
          background: var(--bg-secondary);
        }

        .numbers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .number-item {
          padding: 60px 40px;
          text-align: center;
          border-right: var(--divider);
        }

        .number-item:last-child {
          border-right: none;
        }

        .number-value {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(56px, 7vw, 88px);
          line-height: 1;
          color: var(--gold);
          letter-spacing: -0.02em;
          display: block;
          margin-bottom: 16px;
        }

        .number-caption {
          font-size: 13px;
          letter-spacing: 0.08em;
          color: var(--cream-dim);
          line-height: 1.6;
          max-width: 200px;
          margin: 0 auto;
        }

        /* ─── FEATURES ──────────────────────────────── */
        .features-section {
          padding: 120px 0;
        }

        .features-header {
          text-align: center;
          margin-bottom: 100px;
        }

        .features-title {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(36px, 4vw, 52px);
          line-height: 1.2;
          color: var(--cream);
          letter-spacing: -0.01em;
          margin-bottom: 0;
        }

        .feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: var(--divider);
        }

        .feature-row:last-child {
          border-bottom: var(--divider);
        }

        .feature-cell {
          padding: 70px 60px;
        }

        .feature-cell-right {
          border-left: var(--divider);
          background: var(--bg-secondary);
        }

        .feature-number {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 13px;
          color: var(--gold);
          letter-spacing: 0.15em;
          margin-bottom: 28px;
          display: block;
        }

        .feature-name {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--cream);
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .feature-desc {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--cream-dim);
          max-width: 400px;
        }

        .feature-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 60px;
        }

        .feature-visual-right {
          border-left: var(--divider);
        }

        /* SMS Mock UI */
        .sms-mock {
          width: 100%;
          max-width: 320px;
          background: rgba(17,17,16,0.8);
          border: var(--divider);
          padding: 28px;
          font-size: 13px;
        }

        .sms-header {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: var(--divider);
        }

        .sms-bubble {
          padding: 12px 16px;
          margin-bottom: 10px;
          line-height: 1.5;
          font-size: 13px;
        }

        .sms-bubble-in {
          background: rgba(201, 164, 74, 0.1);
          border-left: 2px solid var(--gold);
          color: var(--cream-dim);
          margin-right: 40px;
        }

        .sms-bubble-out {
          background: rgba(242, 237, 228, 0.05);
          border-right: 2px solid rgba(242, 237, 228, 0.15);
          color: var(--cream-dim);
          margin-left: 40px;
          text-align: right;
        }

        .sms-timestamp {
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(201, 164, 74, 0.4);
          text-align: center;
          margin: 12px 0;
        }

        /* AI Agent visual */
        .agent-visual {
          width: 100%;
          max-width: 300px;
          text-align: center;
        }

        .agent-ring {
          width: 120px;
          height: 120px;
          margin: 0 auto 24px;
          border-radius: 50%;
          border: 1px solid var(--gold-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .agent-ring::before {
          content: '';
          position: absolute;
          inset: 8px;
          border-radius: 50%;
          border: 1px solid rgba(201, 164, 74, 0.1);
        }

        .agent-ring-inner {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(201, 164, 74, 0.15), rgba(201, 164, 74, 0.05));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .agent-stat-row {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .agent-stat {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          padding: 6px 12px;
          border: 1px solid var(--gold-dim);
        }

        /* ─── TRUST LOGOS ───────────────────────────── */
        .trust-section {
          padding: 80px 0;
          background: var(--bg-secondary);
          text-align: center;
        }

        .trust-label {
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--cream-dim);
          margin-bottom: 48px;
        }

        .trust-label span {
          color: var(--gold);
        }

        .trust-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0;
          border-top: var(--divider);
          border-left: var(--divider);
        }

        .trust-logo-item {
          padding: 28px 40px;
          border-right: var(--divider);
          border-bottom: var(--divider);
          font-family: var(--font-display);
          font-style: italic;
          font-size: 16px;
          color: rgba(242, 237, 228, 0.3);
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .trust-logo-item:hover {
          color: rgba(242, 237, 228, 0.65);
        }

        /* ─── TESTIMONIAL ───────────────────────────── */
        .testimonial-section {
          padding: 140px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .testimonial-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(201, 164, 74, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .quote-mark {
          font-family: var(--font-display);
          font-size: 120px;
          line-height: 0.5;
          color: var(--gold);
          opacity: 0.25;
          display: block;
          margin-bottom: 32px;
          font-weight: 400;
        }

        .testimonial-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(24px, 3.5vw, 40px);
          line-height: 1.4;
          color: var(--cream);
          max-width: 800px;
          margin: 0 auto 40px;
          letter-spacing: 0.01em;
        }

        .testimonial-attribution {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .testimonial-rule {
          width: 32px;
          height: 1px;
          background: var(--gold-mid);
        }

        .testimonial-name {
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* ─── HOW IT WORKS ──────────────────────────── */
        .how-section {
          padding: 120px 0;
          background: var(--bg-secondary);
        }

        .how-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .how-title {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(32px, 4vw, 48px);
          color: var(--cream);
          letter-spacing: -0.01em;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: var(--divider);
          border-left: var(--divider);
        }

        .step-item {
          padding: 48px 36px;
          border-right: var(--divider);
          border-bottom: var(--divider);
        }

        .step-num {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 48px;
          color: var(--gold);
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 20px;
          display: block;
        }

        .step-title {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--cream);
          margin-bottom: 12px;
        }

        .step-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--cream-dim);
        }

        /* ─── PRICING ───────────────────────────────── */
        .pricing-section {
          padding: 120px 0;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .pricing-title {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(32px, 4vw, 52px);
          color: var(--cream);
          letter-spacing: -0.01em;
          margin-bottom: 16px;
        }

        .pricing-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: var(--cream-dim);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: var(--divider);
        }

        .pricing-card {
          padding: 56px 44px;
          border-right: var(--divider);
          position: relative;
          transition: background 0.3s ease;
        }

        .pricing-card:last-child {
          border-right: none;
        }

        .pricing-card:hover {
          background: rgba(201, 164, 74, 0.03);
        }

        .pricing-card-featured {
          background: var(--bg-secondary);
          border-top: 2px solid var(--gold);
        }

        .pricing-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--bg);
          background: var(--gold);
          padding: 5px 16px;
          white-space: nowrap;
        }

        .pricing-tier {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
          display: block;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }

        .price-dollar {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--cream-dim);
          font-weight: 400;
        }

        .price-amount {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: 72px;
          line-height: 1;
          color: var(--cream);
          letter-spacing: -0.02em;
        }

        .price-period {
          font-size: 13px;
          color: var(--cream-dim);
          letter-spacing: 0.05em;
        }

        .pricing-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--cream-dim);
          margin-bottom: 36px;
          padding-bottom: 36px;
          border-bottom: var(--divider);
        }

        .pricing-features {
          list-style: none;
          margin-bottom: 44px;
        }

        .pricing-features li {
          font-size: 13px;
          font-weight: 300;
          color: var(--cream-dim);
          padding: 9px 0;
          border-bottom: 1px solid rgba(201, 164, 74, 0.08);
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.5;
        }

        .pricing-features li::before {
          content: '—';
          color: var(--gold);
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .btn-pricing {
          display: block;
          width: 100%;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 24px;
          transition: all 0.25s ease;
        }

        .btn-pricing-solid {
          color: var(--bg);
          background: linear-gradient(
            90deg,
            var(--gold) 0%,
            #e8c06a 40%,
            var(--gold) 60%,
            #b8922e 100%
          );
          background-size: 200% auto;
          animation: shimmer 3.5s linear infinite;
        }

        .btn-pricing-solid:hover {
          box-shadow: 0 8px 32px rgba(201, 164, 74, 0.25);
          transform: translateY(-1px);
        }

        .btn-pricing-outline {
          color: var(--cream-dim);
          border: 1px solid rgba(242, 237, 228, 0.15);
        }

        .btn-pricing-outline:hover {
          color: var(--cream);
          border-color: rgba(242, 237, 228, 0.35);
        }

        /* ─── FINAL CTA ─────────────────────────────── */
        .final-cta-section {
          padding: 140px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .final-cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
          opacity: 0.3;
        }

        .final-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(201, 164, 74, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .final-cta-content {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }

        .final-cta-headline {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.1;
          color: var(--cream);
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .final-cta-sub {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--cream-dim);
          margin-bottom: 48px;
        }

        .final-cta-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .final-cta-note {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(242, 237, 228, 0.3);
        }

        /* ─── FOOTER ────────────────────────────────── */
        footer {
          padding: 60px;
          border-top: var(--divider);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-logo {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cream);
        }

        .footer-logo span {
          color: var(--gold);
        }

        .footer-links {
          display: flex;
          gap: 36px;
          list-style: none;
          flex-wrap: wrap;
        }

        .footer-links a {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--cream-dim);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .footer-links a:hover {
          color: var(--gold);
        }

        .footer-copy {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(242, 237, 228, 0.2);
          width: 100%;
          text-align: center;
          padding-top: 28px;
          border-top: var(--divider);
        }

        /* ─── RESPONSIVE ────────────────────────────── */
        @media (max-width: 900px) {
          nav {
            padding: 24px 32px;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding: 120px 32px 100px;
          }

          .container {
            padding: 0 32px;
          }

          .numbers-grid {
            grid-template-columns: 1fr;
          }

          .number-item {
            border-right: none;
            border-bottom: var(--divider);
          }

          .feature-row {
            grid-template-columns: 1fr;
          }

          .feature-cell-right {
            border-left: none;
            border-top: var(--divider);
          }

          .feature-visual-right {
            border-left: none;
            border-top: var(--divider);
          }

          .feature-cell,
          .feature-visual {
            padding: 48px 32px;
          }

          .steps-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card {
            border-right: none;
            border-bottom: var(--divider);
          }

          .trust-logos {
            gap: 0;
          }

          .trust-logo-item {
            padding: 20px 28px;
          }

          footer {
            padding: 40px 32px;
            flex-direction: column;
            align-items: flex-start;
          }

          .testimonial-section {
            padding: 100px 32px;
          }

          .final-cta-section {
            padding: 100px 32px;
          }
        }

        @media (max-width: 600px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }

          .hero-headline {
            font-size: clamp(52px, 14vw, 80px);
          }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">text<span>—</span>back</a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#pricing" className="nav-cta">Get started</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          <span className="hero-eyebrow anim-fade delay-1">
            AI-Powered SMS Automation
          </span>
          <h1 className="hero-headline anim-fade-up delay-2">
            The AI that answers<br />
            <span className="line-2">every call</span>{' '}
            <em className="accent-gold">you miss.</em>
          </h1>
          <p className="hero-subhead anim-fade-up delay-3">
            text-back places an intelligent AI agent on your phone line.
            Every missed call becomes a conversation.
            Every conversation becomes a customer.
          </p>
          <div className="hero-actions anim-fade-up delay-4">
            <a href="#pricing" className="btn-primary">
              Start Capturing Leads
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See How It Works{' '}
              <span className="btn-ghost-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint anim-fade delay-5">
          <div className="scroll-line" />
          Scroll
        </div>
      </section>

      <div className="gold-rule" />

      {/* BY THE NUMBERS */}
      <section className="numbers-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <span className="section-label">By the numbers</span>
          </div>
          <div className="numbers-grid">
            <div className="number-item">
              <span className="number-value">247</span>
              <p className="number-caption">Average missed calls captured per business in the first 30 days</p>
            </div>
            <div className="number-item">
              <span className="number-value">&lt;30s</span>
              <p className="number-caption">Average AI response time after a missed call is detected</p>
            </div>
            <div className="number-item">
              <span className="number-value">$0</span>
              <p className="number-caption">Revenue lost to unanswered calls when text-back is active</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="features-header">
            <span className="section-label">What text-back does</span>
            <h2 className="features-title">
              Six capabilities.<br />
              One result: more customers.
            </h2>
          </div>
        </div>

        {/* Feature 01 */}
        <div className="feature-row">
          <div className="feature-cell">
            <span className="feature-number">01</span>
            <h3 className="feature-name">Instant AI Response</h3>
            <p className="feature-desc">
              The moment a call goes unanswered, text-back fires an intelligent SMS within seconds. No delays, no missed windows. Your business responds around the clock — even when you can't.
            </p>
          </div>
          <div className="feature-cell feature-cell-right feature-visual">
            <div className="sms-mock">
              <div className="sms-header">Live conversation preview</div>
              <div className="sms-timestamp">Today, 2:47 PM — Missed call detected</div>
              <div className="sms-bubble sms-bubble-in">
                Hi, I just tried calling about a quote for my HVAC system...
              </div>
              <div className="sms-bubble sms-bubble-out">
                Hi! This is the Apex HVAC team — I saw you called and wanted to reach out right away. What kind of system are you looking to service or replace?
              </div>
              <div className="sms-bubble sms-bubble-in">
                It's a 2-ton unit, about 12 years old. Needs a full replacement.
              </div>
              <div className="sms-bubble sms-bubble-out">
                Perfect, I can help with that. Are you available Thursday between 10–2 for a free estimate?
              </div>
            </div>
          </div>
        </div>

        {/* Feature 02 */}
        <div className="feature-row">
          <div className="feature-visual" style={{ padding: '70px 60px' }}>
            <div className="agent-visual">
              <div className="agent-ring">
                <div className="agent-ring-inner">✦</div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--cream-dim)', lineHeight: 1.6, marginBottom: '16px' }}>
                AI qualifying in real time
              </p>
              <div className="agent-stat-row">
                <span className="agent-stat">Budget ✓</span>
                <span className="agent-stat">Timeline ✓</span>
                <span className="agent-stat">Intent ✓</span>
              </div>
            </div>
          </div>
          <div className="feature-cell feature-cell-right">
            <span className="feature-number">02</span>
            <h3 className="feature-name">Lead Qualification</h3>
            <p className="feature-desc">
              Not every caller is your ideal client. text-back's AI gently surfaces intent, budget, and timeline — so your team only spends time on leads worth pursuing. Hot leads flagged instantly.
            </p>
          </div>
        </div>

        {/* Feature 03 */}
        <div className="feature-row">
          <div className="feature-cell">
            <span className="feature-number">03</span>
            <h3 className="feature-name">Appointment Booking</h3>
            <p className="feature-desc">
              The AI doesn't just chat — it converts. Integrated calendar access lets text-back offer real availability and confirm bookings directly in the conversation. No friction. No back-and-forth.
            </p>
          </div>
          <div className="feature-cell feature-cell-right">
            <span className="feature-number">04</span>
            <h3 className="feature-name">Custom AI Persona</h3>
            <p className="feature-desc">
              Your AI agent speaks with your brand's voice. Configure its name, tone, and expertise. Customers believe they're talking to a real member of your team — because the experience is that good.
            </p>
          </div>
        </div>

        {/* Feature 04 */}
        <div className="feature-row">
          <div className="feature-cell">
            <span className="feature-number">05</span>
            <h3 className="feature-name">Full Analytics</h3>
            <p className="feature-desc">
              A real-time dashboard tracks every captured call, every conversation, every booked appointment. See exactly what's working, when leads drop off, and where revenue is being recovered.
            </p>
          </div>
          <div className="feature-cell feature-cell-right">
            <span className="feature-number">06</span>
            <h3 className="feature-name">Agency White-Label</h3>
            <p className="feature-desc">
              Built for agencies from the ground up. Full white-labeling, client sub-accounts, custom branding, and a reseller margin that makes text-back one of the most profitable tools in your stack.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* TRUST */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-label">Trusted by <span>400+ businesses</span> across North America</p>
          <div className="trust-logos">
            <div className="trust-logo-item">Meridian Roofing</div>
            <div className="trust-logo-item">Soleil Beauty Studio</div>
            <div className="trust-logo-item">Apex HVAC & Cooling</div>
            <div className="trust-logo-item">The Verdant Kitchen</div>
            <div className="trust-logo-item">Calloway Electric</div>
            <div className="trust-logo-item">Harbor Dental Group</div>
            <div className="trust-logo-item">Ironwood Contracting</div>
            <div className="trust-logo-item">Reverie Med Spa</div>
            <div className="trust-logo-item">Summit Plumbing Co.</div>
            <div className="trust-logo-item">Ember Fine Dining</div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="container">
          <div className="how-header">
            <span className="section-label">How it works</span>
            <h2 className="how-title">Four steps. Zero effort.</h2>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <h3 className="step-title">Connect your number</h3>
              <p className="step-desc">Link your existing business phone number or provision a new one. Setup takes under five minutes.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <h3 className="step-title">Configure your AI</h3>
              <p className="step-desc">Name your agent, set its tone, upload FAQs, and connect your calendar. Your AI is ready to deploy.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <h3 className="step-title">Calls flow in</h3>
              <p className="step-desc">When you miss a call, text-back detects it instantly and opens an SMS conversation within 30 seconds.</p>
            </div>
            <div className="step-item">
              <span className="step-num">4</span>
              <h3 className="step-title">Leads convert</h3>
              <p className="step-desc">Your dashboard surfaces qualified leads, booked appointments, and recovered revenue in real time.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <span className="quote-mark">&ldquo;</span>
        <blockquote className="testimonial-quote">
          We were losing 60% of our leads to voicemail.
          text-back paid for itself in the first week.
        </blockquote>
        <div className="testimonial-attribution">
          <div className="testimonial-rule" />
          <span className="testimonial-name">Marcus R. — HVAC Company, Nashville</span>
          <div className="testimonial-rule" />
        </div>
      </section>

      <div className="gold-rule" />

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="pricing-header">
            <span className="section-label">Pricing</span>
            <h2 className="pricing-title">
              Simple pricing.<br />Serious results.
            </h2>
            <p className="pricing-subtitle">No contracts. Cancel anytime.</p>
          </div>
          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <span className="pricing-tier">Starter</span>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-amount">97</span>
                <span className="price-period">/mo</span>
              </div>
              <p className="pricing-desc">
                Perfect for solo operators and small local businesses ready to stop losing leads to voicemail.
              </p>
              <ul className="pricing-features">
                <li>1 business phone number</li>
                <li>Up to 300 AI conversations / mo</li>
                <li>Custom AI persona</li>
                <li>Calendar booking integration</li>
                <li>Basic analytics dashboard</li>
                <li>Email support</li>
              </ul>
              <a href="#" className="btn-pricing btn-pricing-outline">Get started</a>
            </div>

            {/* Growth — featured */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <span className="pricing-tier">Growth</span>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-amount">197</span>
                <span className="price-period">/mo</span>
              </div>
              <p className="pricing-desc">
                For growing businesses that run hard and need their AI working just as hard — nights, weekends, holidays.
              </p>
              <ul className="pricing-features">
                <li>3 phone numbers</li>
                <li>Unlimited AI conversations</li>
                <li>Advanced lead qualification</li>
                <li>CRM integrations (HubSpot, Salesforce)</li>
                <li>Full analytics + conversion tracking</li>
                <li>Priority support</li>
                <li>A/B message testing</li>
              </ul>
              <a href="#" className="btn-pricing btn-pricing-solid">Start free trial</a>
            </div>

            {/* Agency */}
            <div className="pricing-card">
              <span className="pricing-tier">Agency</span>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-amount">497</span>
                <span className="price-period">/mo</span>
              </div>
              <p className="pricing-desc">
                White-label text-back under your brand. Resell to your clients and keep the margin. Built for serious agencies.
              </p>
              <ul className="pricing-features">
                <li>Unlimited client sub-accounts</li>
                <li>Full white-label branding</li>
                <li>Custom domain + email</li>
                <li>Agency billing portal</li>
                <li>Reseller pricing access</li>
                <li>Dedicated account manager</li>
                <li>API access</li>
              </ul>
              <a href="#" className="btn-pricing btn-pricing-outline">Talk to sales</a>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-rule" />

      {/* FINAL CTA */}
      <section className="final-cta-section">
        <div className="final-cta-glow" />
        <div className="final-cta-content">
          <span className="section-label">The last call you'll ever miss</span>
          <h2 className="final-cta-headline">
            Your competitors are already<br />answering your leads.
          </h2>
          <p className="final-cta-sub">
            Every minute you wait, a potential customer calls your competitor and gets answered. Start text-back today and make sure that customer is yours.
          </p>
          <div className="final-cta-actions">
            <a href="#pricing" className="btn-primary">
              Start Capturing Leads
            </a>
            <span className="final-cta-note">No credit card required · Setup in 5 minutes</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">text<span>—</span>back</div>
        <ul className="footer-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Agency</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
        <p className="footer-copy">© 2025 text-back. All rights reserved.</p>
      </footer>
    </>
  )
}
