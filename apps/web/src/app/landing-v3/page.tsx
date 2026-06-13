import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'text-back — Never Miss a Customer. Not Once.',
  description:
    'text-back automatically responds to every missed call with an intelligent AI conversation — qualifying leads, booking appointments, and capturing customers 24/7 while you focus on your work.',
  keywords: [
    'missed call text back',
    'AI SMS platform',
    'automated text response',
    'lead qualification',
    'appointment booking',
    'local business automation',
    'salon SMS',
    'contractor leads',
    'agency white label SMS',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'text-back — Never Miss a Customer. Not Once.',
    description:
      'AI-powered SMS that responds to every missed call in under 30 seconds. Trusted by 400+ local businesses.',
    type: 'website',
    url: 'https://textback.ai',
    siteName: 'text-back',
    images: [
      {
        url: 'https://textback.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'text-back AI SMS platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'text-back — Never Miss a Customer. Not Once.',
    description:
      'AI-powered SMS that responds to every missed call in under 30 seconds.',
  },
}

export default function LandingV3() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --white: #FFFFFF;
          --black: #0A0A0A;
          --blue: #0057FF;
          --blue-dark: #0043CC;
          --blue-light: #EBF0FF;
          --gray-text: #6B7280;
          --surface: #F7F7F7;
          --border: #E5E5E5;
          --font: 'Plus Jakarta Sans', 'Outfit', -apple-system, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font);
          background: var(--white);
          color: var(--black);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        /* ─── NAVBAR ─── */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          height: 64px;
          display: flex;
          align-items: center;
        }

        .nav-inner {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-size: 20px;
          font-weight: 800;
          color: var(--black);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .nav-logo span {
          color: var(--blue);
        }

        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          align-items: center;
        }

        .nav-links a {
          font-size: 15px;
          font-weight: 500;
          color: var(--gray-text);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--blue);
          transition: width 0.25s ease;
        }

        .nav-links a:hover {
          color: var(--black);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-cta {
          font-family: var(--font);
          font-size: 14px;
          font-weight: 600;
          color: var(--blue);
          background: transparent;
          border: 1.5px solid var(--blue);
          border-radius: 8px;
          padding: 9px 20px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }

        .nav-cta:hover {
          background: var(--blue);
          color: var(--white);
          transform: translateY(-1px);
        }

        /* ─── HERO ─── */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 80px 32px 0;
          max-width: 1160px;
          margin: 0 auto;
        }

        .hero-left {
          flex: 1;
          padding-right: 60px;
          padding-top: 40px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-light);
          color: var(--blue);
          font-size: 13px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 32px;
          letter-spacing: 0.02em;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue);
          animation: pulse-dot 2s ease infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-headline {
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--black);
          margin-bottom: 28px;
        }

        .hero-sub {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
          color: var(--gray-text);
          max-width: 480px;
          margin-bottom: 44px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          font-family: var(--font);
          font-size: 16px;
          font-weight: 700;
          color: var(--white);
          background: var(--blue);
          border: none;
          border-radius: 10px;
          padding: 15px 32px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease, opacity 0.4s;
          opacity: 0;
        }

        .btn-primary:hover {
          background: var(--blue-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,87,255,0.28);
        }

        .btn-primary:hover::after {
          width: 300px;
          height: 300px;
          opacity: 1;
        }

        .btn-ghost {
          font-family: var(--font);
          font-size: 16px;
          font-weight: 600;
          color: var(--black);
          background: transparent;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 15px 0;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .btn-ghost:hover {
          color: var(--blue);
        }

        .btn-ghost-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: border-color 0.2s, background 0.2s;
        }

        .btn-ghost:hover .btn-ghost-arrow {
          border-color: var(--blue);
          background: var(--blue-light);
        }

        .hero-social {
          margin-top: 52px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-stars {
          display: flex;
          gap: 2px;
          color: #F59E0B;
          font-size: 16px;
        }

        .hero-social-text {
          font-size: 14px;
          color: var(--gray-text);
          font-weight: 500;
        }

        .hero-social-text strong {
          color: var(--black);
          font-weight: 700;
        }

        /* ─── PHONE MOCKUP ─── */
        .hero-right {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 80px;
        }

        .phone-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        .phone {
          width: 280px;
          height: 560px;
          background: var(--black);
          border-radius: 44px;
          padding: 16px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08),
            0 32px 80px rgba(0,0,0,0.22),
            0 8px 24px rgba(0,0,0,0.12);
          position: relative;
        }

        .phone-notch {
          width: 100px;
          height: 28px;
          background: #0A0A0A;
          border-radius: 0 0 20px 20px;
          margin: 0 auto 8px;
          position: relative;
          z-index: 2;
        }

        .phone-notch::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
        }

        .phone-screen {
          background: #F0F0F0;
          border-radius: 32px;
          height: calc(100% - 0px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .sms-header {
          background: var(--white);
          padding: 12px 16px 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border);
        }

        .sms-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: var(--white);
          flex-shrink: 0;
        }

        .sms-contact {
          flex: 1;
        }

        .sms-contact-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--black);
          line-height: 1.2;
        }

        .sms-contact-status {
          font-size: 11px;
          color: #34C759;
          font-weight: 500;
        }

        .sms-body {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
        }

        .sms-time {
          text-align: center;
          font-size: 10px;
          color: #999;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .bubble {
          max-width: 82%;
          padding: 10px 13px;
          border-radius: 16px;
          font-size: 12.5px;
          line-height: 1.45;
          font-weight: 400;
        }

        .bubble-in {
          background: var(--white);
          color: var(--black);
          border-bottom-left-radius: 4px;
          align-self: flex-start;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }

        .bubble-out {
          background: var(--blue);
          color: var(--white);
          border-bottom-right-radius: 4px;
          align-self: flex-end;
        }

        .bubble-typing {
          background: var(--white);
          color: var(--black);
          border-bottom-left-radius: 4px;
          align-self: flex-start;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 12px 16px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #999;
          animation: blink 1.4s ease infinite;
        }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }

        .sms-input-bar {
          padding: 10px 12px;
          background: var(--white);
          border-top: 1px solid var(--border);
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .sms-input-fake {
          flex: 1;
          background: #F0F0F0;
          border-radius: 18px;
          height: 32px;
          padding: 0 12px;
          font-size: 12px;
          color: #aaa;
          display: flex;
          align-items: center;
          font-family: var(--font);
        }

        .sms-send-btn {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sms-send-btn svg {
          width: 14px;
          height: 14px;
          fill: white;
        }

        /* ─── METRICS STRIP ─── */
        .metrics {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 52px 32px;
        }

        .metrics-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .metric-item {
          text-align: center;
          padding: 0 32px;
          position: relative;
        }

        .metric-item + .metric-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: var(--border);
        }

        .metric-number {
          font-size: clamp(44px, 5vw, 64px);
          font-weight: 800;
          color: var(--blue);
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 10px;
        }

        .metric-label {
          font-size: 15px;
          font-weight: 500;
          color: var(--gray-text);
          line-height: 1.5;
        }

        /* ─── SECTION BASE ─── */
        .section {
          padding: 100px 32px;
          max-width: 1160px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
          color: var(--black);
          margin-bottom: 18px;
        }

        .section-desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--gray-text);
          max-width: 520px;
          margin: 0 auto;
        }

        /* ─── FEATURES ─── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .feature-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--blue);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          border-color: transparent;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }

        .feature-icon svg {
          width: 22px;
          height: 22px;
          stroke: var(--blue);
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .feature-desc {
          font-size: 15px;
          line-height: 1.65;
          color: var(--gray-text);
        }

        /* ─── HOW IT WORKS ─── */
        .how-section {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 100px 32px;
        }

        .how-inner {
          max-width: 1160px;
          margin: 0 auto;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          position: relative;
        }

        .steps-grid::before {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(16.67% + 28px);
          right: calc(16.67% + 28px);
          height: 1px;
          background: linear-gradient(90deg, var(--blue), var(--blue));
          border-top: 1px dashed var(--blue);
          opacity: 0.3;
        }

        .step-card {
          padding: 0 32px;
          text-align: center;
        }

        .step-number {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--blue);
          color: var(--white);
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 6px var(--blue-light);
        }

        .step-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .step-desc {
          font-size: 15px;
          line-height: 1.65;
          color: var(--gray-text);
        }

        /* ─── TESTIMONIALS ─── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .testimonial-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
        }

        .testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 18px;
          color: #F59E0B;
          font-size: 16px;
        }

        .testimonial-quote {
          font-size: 15px;
          line-height: 1.7;
          color: var(--black);
          margin-bottom: 24px;
          font-weight: 400;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          border: 1px solid var(--border);
        }

        .author-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--black);
        }

        .author-role {
          font-size: 13px;
          color: var(--gray-text);
          font-weight: 400;
        }

        /* ─── PRICING ─── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }

        .pricing-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 40px 36px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pricing-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.07);
        }

        .pricing-card.featured {
          border-color: var(--blue);
          border-width: 2px;
          box-shadow: 0 8px 32px rgba(0,87,255,0.12);
          transform: translateY(-8px);
          position: relative;
        }

        .pricing-card.featured:hover {
          transform: translateY(-11px);
          box-shadow: 0 20px 56px rgba(0,87,255,0.18);
        }

        .pricing-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--blue);
          color: var(--white);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 100px;
          white-space: nowrap;
        }

        .pricing-plan {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gray-text);
          margin-bottom: 12px;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 6px;
        }

        .pricing-dollar {
          font-size: 24px;
          font-weight: 700;
          color: var(--black);
        }

        .pricing-amount {
          font-size: 52px;
          font-weight: 800;
          color: var(--black);
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .pricing-period {
          font-size: 15px;
          color: var(--gray-text);
          font-weight: 500;
        }

        .pricing-desc {
          font-size: 14px;
          color: var(--gray-text);
          margin-bottom: 32px;
          line-height: 1.5;
        }

        .pricing-divider {
          height: 1px;
          background: var(--border);
          margin-bottom: 28px;
        }

        .pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }

        .pricing-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--black);
          font-weight: 500;
          line-height: 1.4;
        }

        .pricing-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .pricing-check svg {
          width: 10px;
          height: 10px;
          stroke: var(--blue);
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .pricing-btn {
          font-family: var(--font);
          font-size: 15px;
          font-weight: 700;
          display: block;
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
          letter-spacing: 0.01em;
        }

        .pricing-btn-outline {
          color: var(--black);
          border: 1.5px solid var(--border);
          background: transparent;
        }

        .pricing-btn-outline:hover {
          border-color: var(--blue);
          color: var(--blue);
          transform: translateY(-1px);
        }

        .pricing-btn-solid {
          color: var(--white);
          background: var(--blue);
          border: none;
        }

        .pricing-btn-solid:hover {
          background: var(--blue-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,87,255,0.28);
        }

        /* ─── CTA SECTION ─── */
        .cta-section {
          background: var(--blue);
          padding: 100px 32px;
        }

        .cta-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .cta-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          margin-bottom: 44px;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-white {
          font-family: var(--font);
          font-size: 16px;
          font-weight: 700;
          color: var(--blue);
          background: var(--white);
          border: none;
          border-radius: 10px;
          padding: 16px 36px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s;
          letter-spacing: 0.01em;
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .btn-white-ghost {
          font-family: var(--font);
          font-size: 16px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 10px;
          padding: 16px 36px;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }

        .btn-white-ghost:hover {
          border-color: rgba(255,255,255,0.7);
          color: var(--white);
          transform: translateY(-1px);
        }

        .cta-note {
          margin-top: 20px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
        }

        /* ─── FOOTER ─── */
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 60px 32px 40px;
        }

        .footer-inner {
          max-width: 1160px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .footer-brand-logo {
          font-size: 20px;
          font-weight: 800;
          color: var(--black);
          text-decoration: none;
          letter-spacing: -0.5px;
          display: block;
          margin-bottom: 14px;
        }

        .footer-brand-logo span { color: var(--blue); }

        .footer-tagline {
          font-size: 14px;
          color: var(--gray-text);
          line-height: 1.6;
          max-width: 240px;
        }

        .footer-col-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--black);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-size: 14px;
          color: var(--gray-text);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: var(--blue); }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copy {
          font-size: 13px;
          color: var(--gray-text);
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a {
          font-size: 13px;
          color: var(--gray-text);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover { color: var(--blue); }

        /* ─── SCROLL ANIMATION ─── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeInUp 0.6s ease both;
        }

        .fade-in-delay-1 { animation-delay: 0.1s; }
        .fade-in-delay-2 { animation-delay: 0.2s; }
        .fade-in-delay-3 { animation-delay: 0.3s; }
        .fade-in-delay-4 { animation-delay: 0.4s; }
        .fade-in-delay-5 { animation-delay: 0.5s; }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: 1fr 1fr; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 36px; }
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding: 100px 24px 60px;
            text-align: center;
            min-height: auto;
          }
          .hero-left { padding-right: 0; padding-top: 0; }
          .hero-sub { margin: 0 auto 40px; }
          .hero-actions { justify-content: center; }
          .hero-social { justify-content: center; }
          .hero-right { padding-top: 48px; }
          .phone { width: 240px; height: 480px; }
          .metrics-inner { grid-template-columns: 1fr; gap: 32px; }
          .metric-item + .metric-item::before { display: none; }
          .features-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr; gap: 40px; }
          .steps-grid::before { display: none; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card.featured { transform: none; }
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">text<span>-back</span></a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Reviews</a></li>
          </ul>
          <a href="/sign-up" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: 'var(--white)', overflow: 'hidden' }}>
        <div className="hero">
          <div className="hero-left">
            <div className="hero-badge fade-in">
              <span className="hero-badge-dot" />
              AI-Powered SMS Automation
            </div>
            <h1 className="hero-headline fade-in fade-in-delay-1">
              Never miss a<br />customer.<br />Not once.
            </h1>
            <p className="hero-sub fade-in fade-in-delay-2">
              text-back automatically responds to every missed call with an intelligent AI conversation — qualifying leads, booking appointments, and capturing customers while you focus on your work.
            </p>
            <div className="hero-actions fade-in fade-in-delay-3">
              <a href="/sign-up" className="btn-primary">Start Free Trial</a>
              <a href="#how-it-works" className="btn-ghost">
                Watch Demo
                <span className="btn-ghost-arrow">→</span>
              </a>
            </div>
            <div className="hero-social fade-in fade-in-delay-4">
              <div className="hero-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="hero-social-text">
                <strong>4.9/5</strong> from 200+ reviews · Trusted by <strong>400+ businesses</strong>
              </p>
            </div>
          </div>

          <div className="hero-right fade-in fade-in-delay-3">
            <div className="phone-float">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="sms-header">
                    <div className="sms-avatar">AI</div>
                    <div className="sms-contact">
                      <div className="sms-contact-name">text-back Assistant</div>
                      <div className="sms-contact-status">● Active now</div>
                    </div>
                  </div>
                  <div className="sms-body">
                    <div className="sms-time">Today 2:34 PM</div>
                    <div className="bubble bubble-in">
                      Hi! I tried calling but couldn&apos;t get through. Do you have a moment?
                    </div>
                    <div className="bubble bubble-out">
                      Hey! Thanks for reaching out — I&apos;m the AI assistant for Apex Salon. How can I help you today? 😊
                    </div>
                    <div className="bubble bubble-in">
                      I&apos;d love to book a haircut for Saturday!
                    </div>
                    <div className="bubble bubble-out">
                      I&apos;d love to help with that! We have Saturday openings at 10am, 1pm, and 3pm. Which works best?
                    </div>
                    <div className="bubble-typing">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                  <div className="sms-input-bar">
                    <div className="sms-input-fake">Message</div>
                    <div className="sms-send-btn">
                      <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <div className="metrics">
        <div className="metrics-inner">
          <div className="metric-item">
            <div className="metric-number">&lt;30s</div>
            <div className="metric-label">Average response time<br />to a missed call</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">68%</div>
            <div className="metric-label">Of missed calls converted<br />into booked appointments</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">24/7</div>
            <div className="metric-label">AI available to capture<br />leads while you sleep</div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Everything your business needs<br />to capture every lead</h2>
          <p className="section-desc">Built for local businesses who can&apos;t afford to miss a call — and agencies who need to scale it.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="feature-title">Auto-Response in &lt;30 Seconds</h3>
            <p className="feature-desc">The moment a call goes unanswered, text-back fires an intelligent SMS — before your caller has a chance to try a competitor.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/><path d="M16 11l2 2 4-4"/></svg>
            </div>
            <h3 className="feature-title">AI Lead Qualification</h3>
            <p className="feature-desc">The AI asks the right questions, qualifies intent, captures contact details, and routes hot leads to you — automatically.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
            </div>
            <h3 className="feature-title">Appointment Booking</h3>
            <p className="feature-desc">Sync your calendar and let the AI book appointments directly in the conversation. No back-and-forth. No phone tag.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 className="feature-title">Custom Business Hours</h3>
            <p className="feature-desc">Set when you&apos;re open, and text-back handles the rest. Custom after-hours messaging, holidays, and special schedules.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </div>
            <h3 className="feature-title">Full Conversation Dashboard</h3>
            <p className="feature-desc">See every conversation, jump in anytime, review lead quality, and export data. Complete visibility, zero guesswork.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3 className="feature-title">Agency &amp; White-Label</h3>
            <p className="feature-desc">Run text-back under your own brand. Manage dozens of client accounts from one dashboard. Built for agencies who scale.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div id="how-it-works" className="how-section">
        <div className="how-inner">
          <div className="section-header">
            <span className="section-label">How it works</span>
            <h2 className="section-title">Set up in minutes.<br />Running in seconds.</h2>
            <p className="section-desc">No complex integrations. No tech team required. Just connect your phone number and go.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Connect your number</h3>
              <p className="step-desc">Link your existing business phone number or get a new one. Takes under two minutes with no technical setup required.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Customize your AI</h3>
              <p className="step-desc">Tell text-back about your business, services, pricing, and FAQs. The AI learns your voice and handles conversations your way.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Never miss a lead</h3>
              <p className="step-desc">Every missed call gets an instant, intelligent reply. Leads are captured, qualified, and handed to you — ready to close.</p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="section-header">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">Loved by local businesses</h2>
          <p className="section-desc">400+ businesses trust text-back to handle their missed calls every single day.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">&ldquo;I was losing 10-15 leads a week just from missed calls. text-back paid for itself in the first three days. I booked four new clients before I even checked my phone in the morning.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">💇</div>
              <div>
                <div className="author-name">Maria Delgado</div>
                <div className="author-role">Owner, Glow Beauty Studio</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">&ldquo;As a contractor, I&apos;m on job sites all day. I can&apos;t answer every call. text-back keeps the pipeline full without me lifting a finger. My close rate went up 40%.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">🔨</div>
              <div>
                <div className="author-name">James Whitfield</div>
                <div className="author-role">Owner, Whitfield Contracting</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">&ldquo;We onboarded 12 clients onto text-back in the first month. The white-label setup was seamless. It&apos;s now a core service we sell to every local business we work with.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">📈</div>
              <div>
                <div className="author-name">Trevor Banks</div>
                <div className="author-role">Founder, LocalReach Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 32px' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-desc">No setup fees. No contracts. Cancel anytime.</p>
          </div>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <div className="pricing-plan">Starter</div>
              <div className="pricing-price">
                <span className="pricing-dollar">$</span>
                <span className="pricing-amount">97</span>
                <span className="pricing-period">/mo</span>
              </div>
              <p className="pricing-desc">Perfect for solo operators and small businesses just getting started.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {['1 business location', '500 AI messages/month', 'Auto-response in &lt;30s', 'Conversation dashboard', 'Email support'].map((f, i) => (
                  <li key={i} className="pricing-feature-item">
                    <span className="pricing-check">
                      <svg viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <a href="/sign-up" className="pricing-btn pricing-btn-outline">Get Started</a>
            </div>

            {/* Growth - Featured */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-plan">Growth</div>
              <div className="pricing-price">
                <span className="pricing-dollar">$</span>
                <span className="pricing-amount">197</span>
                <span className="pricing-period">/mo</span>
              </div>
              <p className="pricing-desc">For growing businesses that need more power and lead intelligence.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {['3 business locations', '2,000 AI messages/month', 'AI lead qualification', 'Appointment booking', 'Custom business hours', 'Priority support'].map((f, i) => (
                  <li key={i} className="pricing-feature-item">
                    <span className="pricing-check">
                      <svg viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/sign-up" className="pricing-btn pricing-btn-solid">Start Free Trial</a>
            </div>

            {/* Agency */}
            <div className="pricing-card">
              <div className="pricing-plan">Agency</div>
              <div className="pricing-price">
                <span className="pricing-dollar">$</span>
                <span className="pricing-amount">497</span>
                <span className="pricing-period">/mo</span>
              </div>
              <p className="pricing-desc">White-label power for agencies managing multiple business clients.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {['Unlimited locations', 'Unlimited AI messages', 'White-label branding', 'Client management dashboard', 'API access', 'Dedicated account manager'].map((f, i) => (
                  <li key={i} className="pricing-feature-item">
                    <span className="pricing-check">
                      <svg viewBox="0 0 12 12"><path d="M2 6l3 3 5-5"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/sign-up" className="pricing-btn pricing-btn-outline">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Start for free.<br />No credit card.</h2>
          <p className="cta-sub">Join 400+ businesses that never lose a lead to a missed call. Set up in under five minutes.</p>
          <div className="cta-actions">
            <a href="/sign-up" className="btn-white">Start Free Trial</a>
            <a href="#how-it-works" className="btn-white-ghost">See How It Works</a>
          </div>
          <p className="cta-note">14-day free trial · No setup fees · Cancel anytime</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <a href="/" className="footer-brand-logo">text<span>-back</span></a>
              <p className="footer-tagline">AI-powered SMS that responds to every missed call instantly — so you never lose a customer again.</p>
            </div>
            <div>
              <div className="footer-col-title">Product</div>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="/sign-up">Get started</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/agencies">For agencies</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/compliance">SMS Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2025 text-back. All rights reserved.</p>
            <div className="footer-legal">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/compliance">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
