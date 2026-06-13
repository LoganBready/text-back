import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'text-back — Your AI answers. Your business wins.',
  description:
    'Deploy an AI agent on your phone number in minutes. It texts back every missed call, qualifies your leads, and books appointments — automatically, 24/7.',
  keywords: [
    'missed call text back',
    'AI SMS platform',
    'automated text response',
    'lead qualification',
    'appointment booking AI',
    'local business automation',
    'salon SMS bot',
    'contractor lead capture',
    'agency white label SMS',
    'AI answering service',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'text-back — Your AI answers. Your business wins.',
    description:
      'AI-powered SMS that responds to every missed call in under 30 seconds. Trusted by 400+ local businesses.',
    type: 'website',
    url: 'https://textback.ai',
    siteName: 'text-back',
    images: [{ url: 'https://textback.ai/og-image.png', width: 1200, height: 630, alt: 'text-back AI SMS platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'text-back — Your AI answers. Your business wins.',
    description: 'AI-powered SMS that responds to every missed call in under 30 seconds.',
  },
}

export default function LandingV5() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --white: #FFFFFF;
          --black: #0A0A0A;
          --blue: #0057FF;
          --blue-mid: #1A6FFF;
          --blue-light-2: #60A5FA;
          --blue-bg: rgba(0,87,255,0.05);
          --blue-border: rgba(0,87,255,0.18);
          --blue-shadow: rgba(0,87,255,0.14);
          --gray: #6B7280;
          --gray-light: #9CA3AF;
          --surface: #F8F9FC;
          --border: #E5E7EB;
          --border-hover: #C7D2FE;
          --gradient: linear-gradient(135deg, #0057FF, #38BDF8);
          --gradient-text: linear-gradient(135deg, #0057FF, #0EA5E9);
          --font: 'Plus Jakarta Sans', -apple-system, sans-serif;
          --radius: 16px;
          --radius-sm: 10px;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: var(--font);
          background: var(--white);
          color: var(--black);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse 90% 55% at 50% -5%, rgba(0,87,255,0.07), transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,87,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,87,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* ─── NAVBAR ─── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 40px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 20px;
          color: var(--black);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .nav-logo-icon {
          width: 32px; height: 32px;
          background: var(--gradient);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }

        .nav-links a {
          color: var(--gray);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
          letter-spacing: 0.01em;
          position: relative;
          padding-bottom: 2px;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: var(--blue);
          transition: width 0.25s ease;
        }

        .nav-links a:hover { color: var(--black); }
        .nav-links a:hover::after { width: 100%; }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-ghost-nav {
          color: var(--gray);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .btn-ghost-nav:hover { color: var(--black); }

        .btn-nav-primary {
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font);
          cursor: pointer;
          border: none;
          background: var(--gradient);
          color: white;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          display: inline-block;
          box-shadow: 0 2px 12px var(--blue-shadow);
        }

        .btn-nav-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px var(--blue-shadow);
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 24px 80px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid var(--blue-border);
          background: var(--blue-bg);
          font-size: 12px;
          font-weight: 600;
          color: var(--blue);
          letter-spacing: 0.04em;
          margin-bottom: 32px;
          opacity: 0;
          animation: badge-in 0.6s 0.1s ease forwards;
        }

        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--blue);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        @keyframes badge-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-headline {
          font-weight: 800;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 1.0;
          letter-spacing: -0.035em;
          max-width: 900px;
          margin-bottom: 28px;
          color: var(--black);
        }

        .hero-headline .line {
          display: block;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-headline .line:nth-child(1) { animation: word-up 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-headline .line:nth-child(2) { animation: word-up 0.7s 0.5s cubic-bezier(0.16,1,0.3,1) forwards; }

        @keyframes word-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gradient-text {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: clamp(16px, 2vw, 19px);
          color: var(--gray);
          max-width: 560px;
          line-height: 1.75;
          margin-bottom: 44px;
          opacity: 0;
          animation: word-up 0.7s 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
          font-weight: 400;
        }

        .hero-btns {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          animation: word-up 0.7s 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        .btn-primary {
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          font-family: var(--font);
          cursor: pointer;
          border: none;
          background: var(--gradient);
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px var(--blue-shadow);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(0,87,255,0.28);
        }

        .btn-outline {
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          font-family: var(--font);
          cursor: pointer;
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--black);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }

        .btn-outline:hover {
          border-color: var(--blue);
          color: var(--blue);
          transform: translateY(-2px);
        }

        .hero-social {
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: word-up 0.7s 1.1s ease forwards;
        }

        .hero-stars { color: #F59E0B; font-size: 15px; display: flex; gap: 2px; }

        .hero-social-text {
          font-size: 14px;
          color: var(--gray);
          font-weight: 500;
        }

        .hero-social-text strong { color: var(--black); font-weight: 700; }

        .hero-scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          animation: word-up 0.7s 1.3s ease forwards;
        }

        .scroll-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--blue);
          opacity: 0.4;
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(8px); opacity: 0.8; }
        }

        /* ─── STATS ROW ─── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin: -20px 40px 80px;
        }

        .stat-item {
          background: var(--white);
          padding: 32px 40px;
          text-align: center;
          transition: background 0.2s;
        }

        .stat-item:hover { background: var(--surface); }

        .stat-num {
          font-weight: 800;
          font-size: 48px;
          letter-spacing: -0.04em;
          line-height: 1;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-desc {
          font-size: 14px;
          color: var(--gray);
          margin-top: 8px;
          font-weight: 500;
        }

        /* ─── BENTO SECTION ─── */
        .bento-section {
          position: relative;
          z-index: 1;
          padding: 0 40px 100px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-header {
          margin-bottom: 48px;
          text-align: center;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--blue);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .section-label::before,
        .section-label::after {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: var(--blue-border);
        }

        .section-title {
          font-weight: 800;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          color: var(--black);
        }

        .section-sub {
          font-size: 17px;
          color: var(--gray);
          max-width: 560px;
          line-height: 1.7;
          margin: 0 auto;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 200px;
          gap: 16px;
          grid-template-areas:
            "sms sms stats"
            "sms sms stats"
            "speed speed feature1"
            "feature2 feature3 feature4";
        }

        .bento-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s;
          opacity: 0;
          animation: card-in 0.7s ease forwards;
        }

        .bento-card:nth-child(1) { animation-delay: 0.1s; }
        .bento-card:nth-child(2) { animation-delay: 0.2s; }
        .bento-card:nth-child(3) { animation-delay: 0.3s; }
        .bento-card:nth-child(4) { animation-delay: 0.4s; }
        .bento-card:nth-child(5) { animation-delay: 0.5s; }
        .bento-card:nth-child(6) { animation-delay: 0.6s; }
        .bento-card:nth-child(7) { animation-delay: 0.7s; }

        @keyframes card-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .bento-card:hover {
          transform: scale(1.015);
          border-color: var(--border-hover);
          box-shadow: 0 8px 32px var(--blue-shadow);
        }

        .bento-card-sms {
          grid-area: sms;
          background: linear-gradient(145deg, rgba(0,87,255,0.03), rgba(14,165,233,0.03));
          border-color: rgba(0,87,255,0.12);
        }

        .bento-card-stats {
          grid-area: stats;
          background: linear-gradient(145deg, rgba(14,165,233,0.04), rgba(0,87,255,0.04));
          border-color: rgba(0,87,255,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bento-card-speed {
          grid-area: speed;
          background: linear-gradient(145deg, rgba(0,87,255,0.03), rgba(56,189,248,0.05));
          border-color: rgba(0,87,255,0.1);
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .bento-card-feature {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bento-card-feature1 { grid-area: feature1; }
        .bento-card-feature2 { grid-area: feature2; }
        .bento-card-feature3 { grid-area: feature3; }
        .bento-card-feature4 { grid-area: feature4; }

        .card-label {
          font-size: 10px;
          font-weight: 700;
          color: var(--blue);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
          opacity: 0.75;
        }

        .card-title {
          font-weight: 700;
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: var(--black);
        }

        /* SMS Demo */
        .sms-demo {
          height: calc(100% - 56px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
          margin-top: 8px;
        }

        .sms-msg { display: flex; align-items: flex-end; gap: 8px; opacity: 0; transform: translateY(10px); animation: msg-in 0.5s ease forwards; }
        .sms-msg.caller { flex-direction: row-reverse; }
        .sms-msg:nth-child(1) { animation-delay: 0.5s; }
        .sms-msg:nth-child(2) { animation-delay: 1.5s; }
        .sms-msg:nth-child(3) { animation-delay: 2.8s; }
        .sms-msg:nth-child(4) { animation-delay: 4.0s; }

        @keyframes msg-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .sms-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .sms-avatar.ai { background: var(--gradient); color: white; }
        .sms-avatar.user-av { background: var(--surface); border: 1px solid var(--border); font-size: 13px; }

        .sms-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 13px;
          line-height: 1.5;
          max-width: 75%;
        }

        .sms-bubble.ai-bubble {
          background: rgba(0,87,255,0.08);
          border: 1px solid rgba(0,87,255,0.15);
          color: var(--black);
          border-bottom-left-radius: 4px;
        }

        .sms-bubble.caller-bubble {
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--black);
          border-bottom-right-radius: 4px;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: rgba(0,87,255,0.06);
          border: 1px solid rgba(0,87,255,0.12);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          width: fit-content;
        }

        .typing-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--blue);
          animation: typing-bounce 1.2s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }

        /* Stats card internals */
        .stat-big {
          font-weight: 800;
          font-size: 72px;
          line-height: 1;
          letter-spacing: -0.04em;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label { font-size: 14px; color: var(--gray); margin-top: 8px; font-weight: 500; }

        .pulse-dot {
          display: inline-block;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.4);
          animation: pulse-ring 2s ease-in-out infinite;
          margin-right: 8px;
          flex-shrink: 0;
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        /* Speed card internals */
        .speed-number {
          font-weight: 800;
          font-size: 64px;
          line-height: 1;
          letter-spacing: -0.04em;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        .speed-label { font-size: 15px; color: var(--gray); margin-top: 6px; font-weight: 500; }

        .speedometer { width: 140px; height: 80px; flex-shrink: 0; position: relative; }

        .feature-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          background: var(--blue-bg);
          border: 1px solid var(--blue-border);
        }

        /* ─── SECTION BASE ─── */
        .section {
          position: relative;
          z-index: 1;
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ─── HOW IT WORKS ─── */
        .how-section {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 100px 40px;
        }

        .how-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .how-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          margin-top: 60px;
        }

        .how-grid::before {
          content: '';
          position: absolute;
          top: 30px;
          left: calc(16.66% + 20px);
          right: calc(16.66% + 20px);
          height: 1px;
          border-top: 1px dashed rgba(0,87,255,0.3);
          z-index: 0;
        }

        .how-step {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 36px 24px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .how-step:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: 0 8px 28px var(--blue-shadow);
        }

        .how-number {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 20px;
          color: white;
          margin: 0 auto 24px;
          box-shadow: 0 4px 16px var(--blue-shadow);
        }

        .how-step-title { font-weight: 700; font-size: 20px; margin-bottom: 12px; letter-spacing: -0.01em; }
        .how-step-desc { font-size: 14px; color: var(--gray); line-height: 1.7; }

        /* ─── TESTIMONIALS ─── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }

        .testimonial-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: 0 8px 28px var(--blue-shadow);
        }

        .testimonial-card.featured {
          border-color: rgba(0,87,255,0.3);
          background: linear-gradient(145deg, rgba(0,87,255,0.04), rgba(14,165,233,0.03));
          box-shadow: 0 4px 20px var(--blue-shadow);
        }

        .stars { display: flex; gap: 3px; }
        .star { font-size: 15px; color: #F59E0B; }

        .testimonial-text { font-size: 15px; line-height: 1.75; color: var(--black); font-style: italic; flex: 1; }

        .testimonial-author { display: flex; align-items: center; gap: 12px; }

        .author-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          color: white;
          flex-shrink: 0;
        }

        .author-name { font-weight: 700; font-size: 14px; color: var(--black); }
        .author-role { font-size: 12px; color: var(--gray); margin-top: 1px; }

        /* ─── PRICING ─── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
          align-items: start;
        }

        .pricing-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .pricing-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.07); }

        .pricing-card.popular {
          border-color: rgba(0,87,255,0.5);
          border-width: 2px;
          background: linear-gradient(145deg, rgba(0,87,255,0.04), rgba(14,165,233,0.03));
          transform: translateY(-8px);
          box-shadow: 0 8px 32px var(--blue-shadow);
        }

        .pricing-card.popular:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 56px rgba(0,87,255,0.2);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gradient);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 100px;
          white-space: nowrap;
        }

        .pricing-tier { font-size: 11px; font-weight: 700; color: var(--blue); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; }
        .pricing-name { font-weight: 800; font-size: 24px; letter-spacing: -0.02em; margin-bottom: 16px; color: var(--black); }

        .pricing-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: 12px; }

        .price-dollar {
          font-size: 20px; font-weight: 700;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-number {
          font-weight: 800;
          font-size: 56px;
          line-height: 1;
          letter-spacing: -0.04em;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-period { font-size: 14px; color: var(--gray); font-weight: 500; }

        .pricing-desc { font-size: 14px; color: var(--gray); line-height: 1.6; margin-bottom: 28px; }

        .pricing-divider { height: 1px; background: var(--border); margin-bottom: 24px; }

        .pricing-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }

        .pricing-features li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--black); font-weight: 500; }

        .check-icon {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--blue-bg);
          border: 1px solid var(--blue-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
          color: var(--blue);
        }

        .btn-pricing-primary {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font);
          cursor: pointer;
          border: none;
          background: var(--gradient);
          color: white;
          text-decoration: none;
          display: block;
          text-align: center;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px var(--blue-shadow);
        }

        .btn-pricing-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,87,255,0.3); }

        .btn-pricing-ghost {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font);
          cursor: pointer;
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--black);
          text-decoration: none;
          display: block;
          text-align: center;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }

        .btn-pricing-ghost:hover { border-color: var(--blue); color: var(--blue); transform: translateY(-1px); }

        /* ─── CTA BANNER ─── */
        .cta-banner {
          position: relative;
          z-index: 1;
          margin: 0 40px 100px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #0057FF 0%, #38BDF8 100%);
          padding: 80px 60px;
          text-align: center;
        }

        .cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.12), transparent);
          pointer-events: none;
        }

        .cta-banner-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .cta-banner-content { position: relative; z-index: 1; }

        .cta-banner-title {
          font-weight: 800;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: white;
          margin-bottom: 16px;
        }

        .cta-banner-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.82);
          margin-bottom: 40px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.65;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          font-family: var(--font);
          cursor: pointer;
          border: none;
          background: white;
          color: var(--blue);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        }

        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(0,0,0,0.22); }

        .cta-note { margin-top: 20px; font-size: 13px; color: rgba(255,255,255,0.6); }

        /* ─── FOOTER ─── */
        .footer-wrap {
          position: relative;
          z-index: 1;
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 60px 40px 0;
        }

        .footer {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
        }

        .footer-brand p { font-size: 14px; color: var(--gray); line-height: 1.7; margin-top: 14px; max-width: 260px; }

        .footer-col h4 { font-weight: 700; font-size: 13px; margin-bottom: 16px; color: var(--black); letter-spacing: 0.04em; text-transform: uppercase; }

        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }

        .footer-col ul a { color: var(--gray); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .footer-col ul a:hover { color: var(--blue); }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          border-top: 1px solid var(--border);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-bottom p { font-size: 13px; color: var(--gray-light); }

        .footer-bottom-links { display: flex; gap: 24px; }
        .footer-bottom-links a { font-size: 13px; color: var(--gray-light); text-decoration: none; transition: color 0.2s; }
        .footer-bottom-links a:hover { color: var(--blue); }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .stats-row { margin: -20px 20px 60px; }
          .bento-section { padding: 0 20px 80px; }
          .cta-banner { margin: 0 20px 80px; padding: 60px 32px; }
        }

        @media (max-width: 900px) {
          .navbar { padding: 0 20px; }
          .nav-links { display: none; }
          .hero { padding: 120px 20px 80px; }

          .stats-row { grid-template-columns: 1fr; margin: 20px 20px 60px; }

          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "sms" "stats" "speed" "feature1" "feature2" "feature3" "feature4";
            grid-auto-rows: auto;
          }

          .bento-card-sms { min-height: 380px; }
          .bento-card-stats { min-height: 240px; }
          .bento-card-speed { min-height: 180px; flex-direction: column; gap: 20px; }
          .bento-card-feature { min-height: 160px; }

          .how-section { padding: 60px 20px; }
          .how-grid { grid-template-columns: 1fr; gap: 16px; }
          .how-grid::before { display: none; }

          .testimonials-grid { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card.popular { transform: none; }

          .section { padding: 60px 20px; }
          .cta-banner { margin: 0 20px 60px; padding: 48px 24px; }

          .footer { grid-template-columns: 1fr 1fr; padding: 0 0 40px; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-wrap { padding: 48px 20px 0; }
          .footer-bottom { flex-direction: column; text-align: center; padding: 20px 0; }
        }
      `}</style>

      <div className="grid-bg" />

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">⚡</div>
          text-back
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Stories</a></li>
        </ul>
        <div className="nav-right">
          <a href="/sign-in" className="btn-ghost-nav">Sign In</a>
          <a href="/sign-up" className="btn-nav-primary">Get Started →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI-Powered SMS Platform
        </div>
        <h1 className="hero-headline">
          <span className="line">Your AI answers.</span>
          <span className="line gradient-text">Your business wins.</span>
        </h1>
        <p className="hero-sub">
          Deploy an AI agent on your phone number in minutes. It texts back every missed call,
          qualifies your leads, and books appointments — automatically.
        </p>
        <div className="hero-btns">
          <a href="/sign-up" className="btn-primary">⚡ Deploy Free Agent</a>
          <a href="#features" className="btn-outline">▷ Watch It Work</a>
        </div>
        <div className="hero-social">
          <div className="hero-stars">★★★★★</div>
          <p className="hero-social-text">
            <strong>4.9/5</strong> from 200+ reviews · <strong>400+ businesses</strong> deployed
          </p>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* STATS ROW */}
      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-num">400+</div>
          <div className="stat-desc">Businesses deployed</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">94%</div>
          <div className="stat-desc">Lead capture rate</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">&lt;30s</div>
          <div className="stat-desc">Average response time</div>
        </div>
      </div>

      {/* BENTO GRID */}
      <section id="features" className="bento-section">
        <div className="bento-header">
          <div className="section-label">Platform Features</div>
          <h2 className="section-title">Everything, automated.</h2>
          <p className="section-sub">Built for local businesses who can&apos;t afford to miss a call — and agencies who need to scale it.</p>
        </div>

        <div className="bento-grid">
          {/* SMS Demo */}
          <div className="bento-card bento-card-sms">
            <div className="card-label">Live Demo</div>
            <div className="card-title">AI Conversations in Real Time</div>
            <div className="sms-demo">
              <div className="sms-msg caller">
                <div className="sms-avatar user-av">👤</div>
                <div className="sms-bubble caller-bubble">Hi, I tried calling but couldn&apos;t get through.</div>
              </div>
              <div className="sms-msg">
                <div className="sms-avatar ai">AI</div>
                <div className="sms-bubble ai-bubble">Hi! This is Sarah&apos;s Salon — sorry we missed you! I&apos;m the AI assistant. How can I help? 😊</div>
              </div>
              <div className="sms-msg caller">
                <div className="sms-avatar user-av">👤</div>
                <div className="sms-bubble caller-bubble">I&apos;d like to book a haircut for Saturday.</div>
              </div>
              <div className="sms-msg">
                <div className="sms-avatar ai">AI</div>
                <div className="sms-bubble ai-bubble">Perfect! We have 10am, 2pm, or 4pm open this Saturday. Which works best?</div>
              </div>
              <div className="sms-msg">
                <div className="sms-avatar ai">AI</div>
                <div className="typing-indicator">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bento-card bento-card-stats">
            <div>
              <div className="card-label">Missed Calls Recaptured</div>
              <div className="stat-big">247</div>
              <div className="stat-label">This month</div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="pulse-dot" />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#22C55E' }}>3 active conversations</span>
                </div>
                <div style={{ height: '1px', background: 'var(--border)' }} />
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>98%</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '2px' }}>Satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Speed */}
          <div className="bento-card bento-card-speed">
            <div>
              <div className="card-label">Response Time</div>
              <div className="speed-number">&lt; 30s</div>
              <div className="speed-label">Average reply to missed call</div>
            </div>
            <div className="speedometer">
              <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0057FF" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
                <path d="M 10 75 A 60 60 0 0 1 130 75" stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M 10 75 A 60 60 0 0 1 130 75" stroke="url(#arcGrad)" strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray="190" strokeDashoffset="30" />
                <circle cx="111" cy="40" r="5" fill="#38BDF8" />
                <line x1="70" y1="75" x2="105" y2="44" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
                <circle cx="70" cy="75" r="6" fill="#0057FF" />
              </svg>
            </div>
          </div>

          {/* Feature cards */}
          <div className="bento-card bento-card-feature bento-card-feature1">
            <div className="feature-icon">🤖</div>
            <div>
              <div className="card-title">AI-Powered Conversations</div>
              <div style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '8px', lineHeight: '1.6' }}>Contextual, human-feeling replies that qualify leads and book appointments.</div>
            </div>
          </div>

          <div className="bento-card bento-card-feature bento-card-feature2">
            <div className="feature-icon">📅</div>
            <div>
              <div className="card-title">Appointment Booking</div>
              <div style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '8px', lineHeight: '1.6' }}>Syncs with your calendar. Books, reschedules, and confirms — no human needed.</div>
            </div>
          </div>

          <div className="bento-card bento-card-feature bento-card-feature3">
            <div className="feature-icon">🌙</div>
            <div>
              <div className="card-title">24/7 Operation</div>
              <div style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '8px', lineHeight: '1.6' }}>Your AI agent never sleeps, never takes lunch, and never misses a lead.</div>
            </div>
          </div>

          <div className="bento-card bento-card-feature bento-card-feature4">
            <div className="feature-icon">📊</div>
            <div>
              <div className="card-title">Full Analytics</div>
              <div style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '8px', lineHeight: '1.6' }}>See every conversation, lead score, and conversion — in real time.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div id="how-it-works" className="how-section">
        <div className="how-inner">
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Live in under 10 minutes.</h2>
            <p className="section-sub">No engineers. No complicated setup. Just connect your number, configure your AI, and go live.</p>
          </div>

          <div className="how-grid">
            <div className="how-step">
              <div className="how-number">1</div>
              <h3 className="how-step-title">Connect Your Number</h3>
              <p className="how-step-desc">Link your existing business number or get a new one through text-back in seconds. Works with any carrier.</p>
            </div>
            <div className="how-step">
              <div className="how-number">2</div>
              <h3 className="how-step-title">Configure Your AI</h3>
              <p className="how-step-desc">Tell the AI about your business, services, and availability. It learns your voice and booking rules instantly.</p>
            </div>
            <div className="how-step">
              <div className="how-number">3</div>
              <h3 className="how-step-title">Never Miss a Lead</h3>
              <p className="how-step-desc">Every missed call triggers an instant AI text. Leads are qualified, appointments booked, revenue captured.</p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Customer Stories</div>
          <h2 className="section-title">Businesses that never miss a call.</h2>
          <p className="section-sub">400+ businesses trust text-back to handle their missed calls every single day.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card featured">
            <div className="stars">{[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}</div>
            <p className="testimonial-text">&ldquo;I set it up in 10 minutes and it booked 3 appointments that same night. I woke up to a full Saturday schedule. This is insane.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <div className="author-name">Sarah K.</div>
                <div className="author-role">Salon Owner, Chicago</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">{[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}</div>
            <p className="testimonial-text">&ldquo;As a contractor I&apos;m always on job sites. Used to lose 5-6 leads a week to missed calls. Now my AI handles them all. Revenue is up 40%.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #0EA5E9, #0057FF)' }}>M</div>
              <div>
                <div className="author-name">Marcus T.</div>
                <div className="author-role">General Contractor, Austin</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">{[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}</div>
            <p className="testimonial-text">&ldquo;Rolled it out to 12 of my agency clients. Every single one saw immediate ROI. It&apos;s now our most-requested product. Incredible.&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #38BDF8, #0057FF)' }}>J</div>
              <div>
                <div className="author-name">Jamie L.</div>
                <div className="author-role">Digital Agency Owner, NYC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <div className="section-label">Pricing</div>
            <h2 className="section-title">Simple, transparent pricing.</h2>
            <p className="section-sub">Start free, scale as you grow. One missed appointment pays for an entire month.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-name">Solo</div>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-number">97</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-desc">Perfect for solo business owners ready to stop losing leads to missed calls.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {['1 phone number', 'Up to 500 conversations/mo', 'AI appointment booking', 'SMS conversations', 'Basic analytics', 'Email support'].map(f => (
                  <li key={f}><span className="check-icon">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/sign-up" className="btn-pricing-ghost">Get Started →</a>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">✦ Most Popular</div>
              <div className="pricing-tier">Growth</div>
              <div className="pricing-name">Business</div>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-number">197</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-desc">For growing businesses that want to dominate their local market and automate everything.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {['3 phone numbers', 'Unlimited conversations', 'Advanced AI customization', 'Lead qualification scoring', 'CRM integrations', 'Full analytics dashboard', 'Priority support'].map(f => (
                  <li key={f}><span className="check-icon">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/sign-up" className="btn-pricing-primary">Deploy Your AI →</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Agency</div>
              <div className="pricing-name">Scale</div>
              <div className="pricing-price">
                <span className="price-dollar">$</span>
                <span className="price-number">497</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-desc">White-label solution for agencies managing SMS AI for multiple clients at scale.</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {['Unlimited phone numbers', 'Unlimited conversations', 'White-label dashboard', 'Client management portal', 'Custom AI personas', 'Webhook integrations', 'Dedicated success manager'].map(f => (
                  <li key={f}><span className="check-icon">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/sign-up" className="btn-pricing-ghost">Contact Sales →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <div className="cta-banner">
          <div className="cta-banner-grid" />
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Your next lead is calling.<br />Will you answer?
            </h2>
            <p className="cta-banner-sub">
              Join 400+ businesses that never lose a customer to a missed call again.
              Set up in under 10 minutes.
            </p>
            <a href="/sign-up" className="btn-white">Deploy Free Agent ⚡</a>
            <p className="cta-note">14-day free trial · No setup fees · Cancel anytime</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer-wrap">
        <div className="footer">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ textDecoration: 'none' }}>
              <div className="nav-logo-icon">⚡</div>
              text-back
            </a>
            <p>AI-powered SMS that turns missed calls into booked appointments. Deploy in minutes, capture leads 24/7.</p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="/sign-up">Get Started</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/agencies">For Agencies</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/compliance">TCPA Compliance</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 text-back. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  )
}
