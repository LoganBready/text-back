import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'text-back — AI SMS Agent for Missed Calls | Never Lose a Lead Again',
  description:
    'text-back deploys an AI agent on your phone number that instantly texts every missed caller, qualifies leads, and books appointments 24/7. Join 400+ local businesses that never miss a customer.',
  keywords: [
    'AI SMS',
    'missed call text back',
    'automated SMS',
    'lead qualification',
    'appointment booking',
    'local business',
    'SMS automation',
    'AI agent',
    'missed call recovery',
    'business SMS',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'text-back — Never Lose a Customer to a Missed Call Again',
    description:
      'AI-powered SMS that instantly responds to every missed call, qualifies leads, and books appointments around the clock.',
    type: 'website',
    url: 'https://text-back.ai',
    siteName: 'text-back',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'text-back — AI SMS for Missed Calls',
    description:
      'Deploy an AI agent on your phone number. Every missed call gets an instant text. 24/7.',
  },
}

export default function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --black: #000000;
          --off-black: #0A0A0A;
          --card-border: #1A1A1A;
          --text-primary: #FAFAFA;
          --text-muted: #888888;
          --text-dim: #444444;
          --green: #00E87A;
          --green-dim: rgba(0, 232, 122, 0.12);
          --green-glow: rgba(0, 232, 122, 0.25);
          --font-display: 'Syne', sans-serif;
          --font-mono: 'Space Mono', monospace;
          --font-body: 'DM Sans', sans-serif;
        }

        html {
          background: var(--black);
          color: var(--text-primary);
          font-family: var(--font-body);
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
        }

        body {
          background: var(--black);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Scanline overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.015) 2px,
            rgba(255,255,255,0.015) 4px
          );
          pointer-events: none;
          z-index: 9999;
        }

        /* ---- KEYFRAMES ---- */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

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

        @keyframes scanMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes messageIn {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes messageInLeft {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px var(--green-glow); }
          50% { box-shadow: 0 0 40px rgba(0,232,122,0.4); }
        }

        /* ---- NAV ---- */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #111;
        }

        .nav-logo {
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .nav-logo span {
          color: var(--green);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .nav-cta {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--black) !important;
          background: var(--green);
          padding: 8px 20px;
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: opacity 0.2s !important;
        }

        .nav-cta:hover {
          opacity: 0.85;
        }

        /* ---- HERO ---- */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 48px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--card-border) 30%, var(--card-border) 70%, transparent);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--green);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease both;
          animation-delay: 0.1s;
        }

        .hero-label::before {
          content: '[ ';
        }

        .hero-label::after {
          content: ' ]';
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 7vw, 7.5rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 32px;
          animation: fadeInUp 0.7s ease both;
          animation-delay: 0.2s;
        }

        .hero-headline .cursor {
          display: inline-block;
          width: 0.08em;
          height: 0.85em;
          background: var(--green);
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1.1s step-end infinite;
        }

        .hero-sub {
          font-family: var(--font-body);
          font-size: 1.15rem;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 560px;
          margin-bottom: 48px;
          animation: fadeInUp 0.7s ease both;
          animation-delay: 0.35s;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          animation: fadeInUp 0.7s ease both;
          animation-delay: 0.5s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--black);
          background: var(--green);
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: box-shadow 0.2s, opacity 0.2s;
          animation: glowPulse 3s ease-in-out infinite;
        }

        .btn-primary:hover {
          opacity: 0.9;
          box-shadow: 0 0 32px rgba(0,232,122,0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }

        .btn-secondary:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
        }

        /* ---- PHONE MOCKUP ---- */
        .phone-mockup {
          animation: fadeIn 1s ease both;
          animation-delay: 0.6s;
        }

        .phone-frame {
          background: #0D0D0D;
          border: 1.5px solid #222;
          border-radius: 36px;
          padding: 24px 16px 32px;
          box-shadow:
            0 0 0 1px #333,
            0 40px 80px rgba(0,0,0,0.8),
            inset 0 1px 0 rgba(255,255,255,0.05);
          position: relative;
        }

        .phone-notch {
          width: 80px;
          height: 24px;
          background: #000;
          border-radius: 12px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .phone-notch-cam {
          width: 8px;
          height: 8px;
          background: #1a1a1a;
          border-radius: 50%;
          border: 1px solid #333;
        }

        .phone-status {
          display: flex;
          justify-content: space-between;
          padding: 0 8px;
          margin-bottom: 16px;
        }

        .phone-status-text {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: #444;
        }

        .phone-contact-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 12px;
          border-bottom: 1px solid #1a1a1a;
          margin-bottom: 16px;
        }

        .phone-avatar {
          width: 32px;
          height: 32px;
          background: #1a1a1a;
          border-radius: 50%;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .phone-contact-info {
          flex: 1;
        }

        .phone-contact-name {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .phone-contact-sub {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          color: var(--green);
          letter-spacing: 0.08em;
        }

        .phone-messages {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0 8px;
          min-height: 320px;
        }

        .msg {
          max-width: 82%;
          padding: 10px 14px;
          border-radius: 16px;
          font-family: var(--font-body);
          font-size: 0.78rem;
          line-height: 1.45;
        }

        .msg-missed {
          align-self: flex-start;
          background: #1a1a1a;
          color: var(--text-muted);
          border-radius: 4px 16px 16px 16px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #555;
          letter-spacing: 0.04em;
          animation: messageInLeft 0.5s ease both;
          animation-delay: 1.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .msg-ai {
          align-self: flex-end;
          background: var(--green);
          color: #000;
          font-weight: 500;
          border-radius: 16px 4px 16px 16px;
        }

        .msg-ai-1 {
          animation: messageIn 0.5s ease both;
          animation-delay: 1.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .msg-lead {
          align-self: flex-start;
          background: #1C1C1C;
          color: var(--text-primary);
          border-radius: 4px 16px 16px 16px;
        }

        .msg-lead-1 {
          animation: messageInLeft 0.5s ease both;
          animation-delay: 2.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .msg-ai-2 {
          animation: messageIn 0.5s ease both;
          animation-delay: 2.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .msg-lead-2 {
          animation: messageInLeft 0.5s ease both;
          animation-delay: 3.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .msg-ai-3 {
          animation: messageIn 0.5s ease both;
          animation-delay: 4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .msg-time {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          color: #444;
          text-align: center;
          margin: 4px 0;
        }

        .typing-indicator {
          align-self: flex-end;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: var(--green-dim);
          border: 1px solid rgba(0,232,122,0.2);
          border-radius: 16px 4px 16px 16px;
          animation: messageIn 0.5s ease both;
          animation-delay: 3.7s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .typing-dot {
          width: 5px;
          height: 5px;
          background: var(--green);
          border-radius: 50%;
        }

        .typing-dot:nth-child(1) { animation: dotPulse 1s ease-in-out infinite 0s; }
        .typing-dot:nth-child(2) { animation: dotPulse 1s ease-in-out infinite 0.2s; }
        .typing-dot:nth-child(3) { animation: dotPulse 1s ease-in-out infinite 0.4s; }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.55rem;
          color: var(--green);
          letter-spacing: 0.08em;
          margin-top: 16px;
          padding: 0 8px;
          text-transform: uppercase;
        }

        .ai-badge::before {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          background: var(--green);
          border-radius: 50%;
          animation: dotPulse 2s ease-in-out infinite;
        }

        /* ---- STATS BAR ---- */
        .stats-bar {
          border-top: 1px solid var(--card-border);
          border-bottom: 1px solid var(--card-border);
          padding: 32px 48px;
          background: var(--off-black);
        }

        .stats-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 24px;
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          bottom: 20%;
          width: 1px;
          background: var(--card-border);
        }

        .stat-number {
          font-family: var(--font-mono);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          color: var(--green);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 8px;
          text-align: center;
        }

        /* ---- SECTIONS ---- */
        .section {
          padding: 100px 48px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-full {
          padding: 100px 48px;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--green);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .section-label::before {
          content: '[ ';
        }

        .section-label::after {
          content: ' ]';
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.05;
          margin-bottom: 16px;
        }

        .section-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 520px;
          font-weight: 300;
        }

        /* ---- HOW IT WORKS ---- */
        .how-it-works {
          border-top: 1px solid var(--card-border);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--card-border);
          margin-top: 60px;
          border: 1px solid var(--card-border);
        }

        .step-card {
          background: var(--off-black);
          padding: 40px 32px;
          position: relative;
          transition: background 0.2s;
        }

        .step-card:hover {
          background: #0D0D0D;
        }

        .step-number {
          font-family: var(--font-mono);
          font-size: 3rem;
          font-weight: 700;
          color: var(--card-border);
          line-height: 1;
          margin-bottom: 20px;
          letter-spacing: -0.05em;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .step-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-weight: 300;
        }

        .step-icon {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        /* ---- FEATURES ---- */
        .features-section {
          border-top: 1px solid var(--card-border);
        }

        .features-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--card-border);
          border: 1px solid var(--card-border);
        }

        .feature-card {
          background: var(--off-black);
          padding: 36px 32px;
          border-left: 3px solid transparent;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--green-dim) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .feature-card:hover {
          border-left-color: var(--green);
          box-shadow: -3px 0 20px var(--green-glow);
          background: #0C0C0C;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--green);
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .feature-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
        }

        .feature-desc {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.65;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        /* ---- TESTIMONIALS ---- */
        .testimonials-section {
          border-top: 1px solid var(--card-border);
          background: var(--off-black);
        }

        .testimonials-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 48px;
        }

        .terminal-window {
          background: var(--black);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          margin-top: 60px;
          overflow: hidden;
        }

        .terminal-titlebar {
          background: #111;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--card-border);
        }

        .terminal-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .terminal-dot-red { background: #FF5F57; }
        .terminal-dot-yellow { background: #FFBD2E; }
        .terminal-dot-green { background: #28CA41; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #444;
          margin-left: 8px;
          letter-spacing: 0.08em;
        }

        .terminal-body {
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .terminal-line {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .terminal-prompt {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--green);
          letter-spacing: 0.02em;
        }

        .terminal-text {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-primary);
          line-height: 1.6;
          padding-left: 20px;
          border-left: 2px solid #1a1a1a;
        }

        .terminal-meta {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #444;
          padding-left: 20px;
          margin-top: 2px;
          letter-spacing: 0.06em;
        }

        /* ---- PRICING ---- */
        .pricing-section {
          border-top: 1px solid var(--card-border);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--card-border);
          border: 1px solid var(--card-border);
          margin-top: 60px;
        }

        .pricing-card {
          background: var(--off-black);
          padding: 48px 36px;
          position: relative;
          transition: background 0.2s;
        }

        .pricing-card:hover {
          background: #0C0C0C;
        }

        .pricing-card.featured {
          background: #0C0C0C;
          border-top: 2px solid var(--green);
        }

        .pricing-badge {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--black);
          background: var(--green);
          padding: 3px 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: inline-block;
        }

        .pricing-tier {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pricing-price {
          font-family: var(--font-mono);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 4px;
        }

        .pricing-price sup {
          font-size: 1.2rem;
          vertical-align: super;
          opacity: 0.6;
        }

        .pricing-period {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          margin-bottom: 32px;
        }

        .pricing-divider {
          height: 1px;
          background: var(--card-border);
          margin-bottom: 28px;
        }

        .pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .pricing-features li {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--text-muted);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.4;
        }

        .pricing-features li::before {
          content: '→';
          font-family: var(--font-mono);
          color: var(--green);
          font-size: 0.75rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .btn-pricing {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          text-align: center;
          padding: 12px 24px;
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.2s;
        }

        .btn-pricing-outline {
          color: var(--text-muted);
          border: 1px solid var(--card-border);
        }

        .btn-pricing-outline:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
        }

        .btn-pricing-solid {
          color: var(--black);
          background: var(--green);
        }

        .btn-pricing-solid:hover {
          opacity: 0.85;
          box-shadow: 0 0 24px var(--green-glow);
        }

        /* ---- SOCIAL PROOF TICKER ---- */
        .social-proof {
          border-top: 1px solid var(--card-border);
          border-bottom: 1px solid var(--card-border);
          padding: 20px 48px;
          background: var(--off-black);
          display: flex;
          align-items: center;
          gap: 0;
          overflow: hidden;
        }

        .ticker-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--green);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          padding-right: 32px;
          border-right: 1px solid var(--card-border);
          flex-shrink: 0;
        }

        .ticker-content {
          display: flex;
          align-items: center;
          gap: 40px;
          padding-left: 32px;
          overflow: hidden;
        }

        .ticker-item {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          white-space: nowrap;
        }

        .ticker-item span {
          color: var(--green);
        }

        .ticker-sep {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--card-border);
        }

        /* ---- FINAL CTA ---- */
        .final-cta {
          background: var(--green);
          padding: 100px 48px;
          text-align: center;
        }

        .final-cta-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: rgba(0,0,0,0.5);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .final-cta-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 800;
          color: var(--black);
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 24px;
        }

        .final-cta-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          color: rgba(0,0,0,0.6);
          margin-bottom: 48px;
          font-weight: 400;
        }

        .final-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .btn-cta-dark {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--green);
          background: var(--black);
          padding: 14px 32px;
          border-radius: 2px;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }

        .btn-cta-dark:hover {
          opacity: 0.85;
        }

        .btn-cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(0,0,0,0.65);
          border-bottom: 1px solid rgba(0,0,0,0.3);
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding-bottom: 2px;
          transition: color 0.2s;
        }

        .btn-cta-outline:hover {
          color: var(--black);
        }

        /* ---- FOOTER ---- */
        .footer {
          background: var(--black);
          border-top: 1px solid var(--card-border);
          padding: 48px 48px;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-logo {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .footer-logo span {
          color: var(--green);
        }

        .footer-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .footer-links a {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-dim);
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--text-muted);
        }

        .footer-copy {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--text-dim);
          letter-spacing: 0.06em;
        }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 1024px) {
          .nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .hero { padding: 120px 24px 60px; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .phone-mockup {
            max-width: 320px;
            margin: 0 auto;
          }
          .section { padding: 60px 24px; }
          .section-full { padding: 60px 24px; }
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
          .features-header { grid-template-columns: 1fr; gap: 24px; }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .pricing-grid { grid-template-columns: 1fr; }
          .stats-bar { padding: 24px; }
          .stats-inner { grid-template-columns: repeat(3, 1fr); }
          .testimonials-inner { padding: 60px 24px; }
          .footer { padding: 32px 24px; }
          .footer-inner { flex-direction: column; gap: 20px; text-align: center; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
          .final-cta { padding: 60px 24px; }
          .final-cta-actions { flex-direction: column; }
          .social-proof { padding: 16px 24px; }
        }

        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: 1fr; }
          .stat-item:not(:last-child)::after { display: none; }
          .terminal-body { padding: 20px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="#" className="nav-logo">text<span>-back</span></a>
        <ul className="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#" className="nav-cta">Deploy Agent →</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-label">AI-Powered SMS Recovery</div>
            <h1 className="hero-headline">
              Every missed call<br />is a lost customer.<br />
              We fix that.<span className="cursor" />
            </h1>
            <p className="hero-sub">
              text-back deploys an AI agent on your phone number that instantly texts every missed caller, qualifies leads, and books appointments — 24/7.
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">
                Deploy Your Agent →
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See It In Action
              </a>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch">
                <div className="phone-notch-cam" />
              </div>
              <div className="phone-status">
                <span className="phone-status-text">9:41 AM</span>
                <span className="phone-status-text">●●●●○ LTE</span>
              </div>
              <div className="phone-contact-bar">
                <div className="phone-avatar">JR</div>
                <div className="phone-contact-info">
                  <div className="phone-contact-name">Jake Rodriguez</div>
                  <div className="phone-contact-sub">● AI Agent Active</div>
                </div>
              </div>
              <div className="phone-messages">
                <div className="msg-time">Missed call • 9:38 AM</div>
                <div className="msg msg-missed">📵 Missed call from (555) 491-2847</div>
                <div className="msg msg-ai msg-ai-1">
                  Hey! Sorry we missed your call — I&apos;m the AI assistant for Apex Plumbing. What can I help you with today?
                </div>
                <div className="msg msg-lead msg-lead-1">
                  Hi! My sink is leaking bad, need someone asap
                </div>
                <div className="msg msg-ai msg-ai-2">
                  Got it — sounds urgent! I can get a tech out today. Are you available this afternoon, say 2pm or 4pm?
                </div>
                <div className="msg msg-lead msg-lead-2">
                  2pm works perfect
                </div>
                <div className="msg msg-ai msg-ai-3">
                  Confirmed! Jake is booked for 2pm today. You&apos;ll get a reminder 30 min before. ✓
                </div>
              </div>
              <div className="ai-badge">AI Agent — Responded in 28 seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number">247</div>
            <div className="stat-label">Avg. Missed Calls Recovered / Month</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">&lt;30s</div>
            <div className="stat-label">Average AI Response Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">94%</div>
            <div className="stat-label">Lead Conversion Rate</div>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF TICKER */}
      <div className="social-proof">
        <div className="ticker-label">Live Activity</div>
        <div className="ticker-content">
          <div className="ticker-item"><span>Apex Plumbing</span> — booked 3 jobs in the last hour</div>
          <div className="ticker-sep">//</div>
          <div className="ticker-item"><span>Glow Beauty Studio</span> — recovered 12 missed calls today</div>
          <div className="ticker-sep">//</div>
          <div className="ticker-item"><span>Summit Roofing</span> — $8,400 in pipeline from SMS this week</div>
          <div className="ticker-sep">//</div>
          <div className="ticker-item"><span>400+ businesses</span> never miss a customer</div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-it-works" id="how-it-works">
        <div className="section">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Set up in 5 minutes.<br />Recover leads forever.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-title">Connect Your Number</div>
              <p className="step-desc">Link your existing business phone number or provision a new one. No call forwarding headaches — we sit on top of your number silently.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-title">Train Your Agent</div>
              <p className="step-desc">Tell the AI about your business, services, and booking process in plain English. It learns your voice and handles objections like your best employee.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-title">Go Live</div>
              <p className="step-desc">Every missed call triggers an instant outbound text. Your AI agent takes over — qualifying, answering questions, and booking on your calendar.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-title">Watch the Dashboard</div>
              <p className="step-desc">See every conversation in real-time. Jump in at any point. Get notified on hot leads. Full visibility, zero missed opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-section" id="features">
        <div className="section">
          <div className="features-header">
            <div>
              <div className="section-label">Features</div>
              <h2 className="section-title">Built for businesses that can&apos;t afford to miss a call.</h2>
            </div>
            <p className="section-sub">
              Every feature was designed with one goal: make sure no lead ever slips through the cracks, whether you&apos;re swamped on a job site or closed for the night.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">// NEVER_MISS</div>
              <div className="feature-title">Never Miss a Lead</div>
              <p className="feature-desc">Every missed call triggers an instant SMS within seconds. Your agent is awake 24/7, 365 days a year — even Christmas morning.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">// AI_QUALIFY</div>
              <div className="feature-title">AI That Qualifies</div>
              <p className="feature-desc">The agent asks the right questions, filters tire-kickers, and scores leads before they reach you. Only hot leads get escalated to your phone.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">// AUTO_BOOK</div>
              <div className="feature-title">Books Appointments</div>
              <p className="feature-desc">Connects to your Google Calendar or scheduling tool. Confirms appointments, sends reminders, and reduces no-shows automatically.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">// INSTANT_TX</div>
              <div className="feature-title">Instant Response</div>
              <p className="feature-desc">Response under 30 seconds, every time. Studies show you&apos;re 21x more likely to qualify a lead if you contact them within 5 minutes. We beat that by a mile.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">// DASHBOARD</div>
              <div className="feature-title">Full Dashboard</div>
              <p className="feature-desc">See every conversation, lead score, booking status, and ROI in one clean interface. Export reports, set up alerts, track your pipeline.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">// WHITE_LABEL</div>
              <div className="feature-title">White-Label Ready</div>
              <p className="feature-desc">Agencies can deploy branded instances for clients under their own domain. Full API access, custom system prompts, sub-account management.</p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials-section">
        <div className="testimonials-inner">
          <div className="section-label">Customer Feedback</div>
          <h2 className="section-title">What operators are saying.</h2>
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">text-back — customer_feedback.log</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <div className="terminal-prompt">$ cat testimonial --id=1</div>
                <div className="terminal-text">&ldquo;We&apos;ve never lost a lead since installing text-back. I used to miss 15-20 calls a day when I was on jobs. Now every single one gets a text back in under a minute. Booked $40K in new work last month alone.&rdquo;</div>
                <div className="terminal-meta">— Marcus T., Owner @ Summit Roofing Co. // 8 months active</div>
              </div>
              <div className="terminal-line">
                <div className="terminal-prompt">$ cat testimonial --id=2</div>
                <div className="terminal-text">&ldquo;My salon runs on appointments. Before text-back, if we missed a call, that customer was gone — they&apos;d book somewhere else. Now the AI handles everything. My booking rate is up 60% and I didn&apos;t hire anyone new.&rdquo;</div>
                <div className="terminal-meta">— Priya K., Owner @ Glow Beauty Studio // 14 months active</div>
              </div>
              <div className="terminal-line">
                <div className="terminal-prompt">$ cat testimonial --id=3</div>
                <div className="terminal-text">&ldquo;I run text-back for 23 of my agency clients. The white-label setup was painless and the margins are incredible. Clients see it as magic — their phones just start booking themselves.&rdquo;</div>
                <div className="terminal-meta">— Devon R., Founder @ Apex Digital Agency // Agency Plan, 23 sub-accounts</div>
              </div>
              <div className="terminal-line">
                <div className="terminal-prompt">$ grep -c &apos;satisfied&apos; all_reviews.log</div>
                <div className="terminal-text" style={{ color: 'var(--green)' }}>412 / 412</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="pricing-section" id="pricing">
        <div className="section">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">One missed call pays for a month.</h2>
          <p className="section-sub">No contracts. No setup fees. Cancel anytime. Every plan includes unlimited AI conversations.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price"><sup>$</sup>97</div>
              <div className="pricing-period">per month</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>1 phone number</li>
                <li>Unlimited AI conversations</li>
                <li>Google Calendar integration</li>
                <li>Lead scoring & qualification</li>
                <li>Email notifications</li>
                <li>7-day conversation history</li>
              </ul>
              <a href="#" className="btn-pricing btn-pricing-outline">Get Started →</a>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-tier">Growth</div>
              <div className="pricing-price"><sup>$</sup>197</div>
              <div className="pricing-period">per month</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>3 phone numbers</li>
                <li>Unlimited AI conversations</li>
                <li>All calendar integrations</li>
                <li>Advanced lead scoring</li>
                <li>SMS + email + Slack alerts</li>
                <li>Full conversation history</li>
                <li>Custom AI personality</li>
                <li>Priority support</li>
              </ul>
              <a href="#" className="btn-pricing btn-pricing-solid">Deploy Agent →</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-tier">Agency</div>
              <div className="pricing-price"><sup>$</sup>497</div>
              <div className="pricing-period">per month</div>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                <li>Unlimited client sub-accounts</li>
                <li>White-label branding</li>
                <li>Custom domain</li>
                <li>Full API access</li>
                <li>Bulk provisioning tools</li>
                <li>Revenue share program</li>
                <li>Dedicated account manager</li>
                <li>SLA + uptime guarantee</li>
              </ul>
              <a href="#" className="btn-pricing btn-pricing-outline">Talk to Sales →</a>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="final-cta">
        <div className="final-cta-label">[ Get Started Today ]</div>
        <h2 className="final-cta-title">Stop losing customers<br />to voicemail.</h2>
        <p className="final-cta-sub">Join 400+ businesses that never miss a customer. 5-minute setup. No contracts.</p>
        <div className="final-cta-actions">
          <a href="#pricing" className="btn-cta-dark">Deploy Your Agent →</a>
          <a href="#" className="btn-cta-outline">Schedule a Demo</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">text<span>-back</span></div>
          <ul className="footer-links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Agency</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
          <div className="footer-copy">© 2025 text-back. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
