'use client';

export default function LandingV4() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #08090F;
          --text: #F0F0FF;
          --text-muted: rgba(240,240,255,0.5);
          --text-subtle: rgba(240,240,255,0.3);
          --violet: #7C3AED;
          --violet-light: #9F6DF0;
          --pink: #FF4D88;
          --cyan: #00D4FF;
          --card-bg: rgba(255,255,255,0.04);
          --card-border: rgba(255,255,255,0.08);
          --card-border-hover: rgba(255,255,255,0.15);
          --gradient: linear-gradient(135deg, #7C3AED, #FF4D88);
          --gradient-text: linear-gradient(135deg, #9F6DF0, #FF4D88);
          --font-display: 'Outfit', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --font-mono: 'DM Mono', monospace;
          --radius: 16px;
          --radius-sm: 10px;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          line-height: 1.6;
          overflow-x: hidden;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.3), transparent);
          pointer-events: none;
          z-index: 0;
          animation: glow-pulse 8s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* ─── NAVBAR ─── */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0 40px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(8,9,15,0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--card-border);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 20px;
          color: var(--text);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .nav-logo-icon {
          width: 32px;
          height: 32px;
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
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-ghost-nav {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .btn-ghost-nav:hover {
          color: var(--text);
        }

        .btn-nav-primary {
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          border: 1px solid transparent;
          background: var(--gradient);
          color: white;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-block;
        }

        .btn-nav-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
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
          border: 1px solid rgba(124,58,237,0.5);
          background: rgba(124,58,237,0.1);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--violet-light);
          letter-spacing: 0.05em;
          margin-bottom: 32px;
          animation: badge-glow 3s ease-in-out infinite;
          opacity: 0;
          animation: badge-in 0.6s 0.1s ease forwards, badge-glow 3s 0.7s ease-in-out infinite;
        }

        @keyframes badge-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 12px rgba(124,58,237,0.2); }
          50% { box-shadow: 0 0 24px rgba(124,58,237,0.5); }
        }

        .hero-headline {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(52px, 8vw, 96px);
          line-height: 1.0;
          letter-spacing: -0.03em;
          max-width: 900px;
          margin-bottom: 28px;
        }

        .hero-headline .line {
          display: block;
          opacity: 0;
          transform: translateY(30px);
        }

        .hero-headline .line:nth-child(1) {
          animation: word-up 0.7s 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        .hero-headline .line:nth-child(2) {
          animation: word-up 0.7s 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
        }

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
          font-size: clamp(16px, 2vw, 20px);
          color: var(--text-muted);
          max-width: 580px;
          line-height: 1.7;
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
          font-family: var(--font-body);
          cursor: pointer;
          border: none;
          background: var(--gradient);
          background-size: 200% 200%;
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(124,58,237,0.4);
          animation: gradient-shift 4s linear infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(124,58,237,0.6);
        }

        .btn-ghost {
          padding: 14px 32px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          border: 1px solid var(--card-border);
          background: var(--card-bg);
          color: var(--text);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(10px);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }

        .btn-ghost:hover {
          border-color: rgba(124,58,237,0.4);
          background: rgba(124,58,237,0.08);
          transform: translateY(-2px);
        }

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
          animation: word-up 0.7s 1.2s ease forwards;
        }

        .scroll-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--violet-light);
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(8px); opacity: 1; }
        }

        /* ─── SECTION WRAPPER ─── */
        .section {
          position: relative;
          z-index: 1;
          padding: 100px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--violet-light);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-label::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: var(--violet-light);
        }

        .section-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .section-sub {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 560px;
          line-height: 1.7;
        }

        /* ─── BENTO GRID ─── */
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
          background: var(--card-bg);
          border: 1px solid var(--card-border);
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
          transform: scale(1.02);
          border-color: var(--card-border-hover);
          box-shadow: 0 8px 40px rgba(124,58,237,0.15);
        }

        .bento-card-sms {
          grid-area: sms;
          background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(255,77,136,0.04));
        }

        .bento-card-stats {
          grid-area: stats;
          background: linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.08));
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bento-card-speed {
          grid-area: speed;
          background: linear-gradient(135deg, rgba(255,77,136,0.06), rgba(124,58,237,0.06));
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
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          color: var(--violet-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
          opacity: 0.8;
        }

        .card-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        /* SMS Demo Card */
        .sms-demo {
          height: calc(100% - 40px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
          margin-top: 8px;
        }

        .sms-msg {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          opacity: 0;
          transform: translateY(10px);
          animation: msg-in 0.5s ease forwards;
        }

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
          width: 28px;
          height: 28px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .sms-avatar.ai {
          background: var(--gradient);
          color: white;
          font-family: var(--font-mono);
        }

        .sms-avatar.caller-av {
          background: rgba(255,255,255,0.1);
          border: 1px solid var(--card-border);
          font-size: 13px;
        }

        .sms-bubble {
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 13px;
          line-height: 1.5;
          max-width: 75%;
        }

        .sms-bubble.ai-bubble {
          background: rgba(124,58,237,0.2);
          border: 1px solid rgba(124,58,237,0.3);
          color: var(--text);
          border-bottom-left-radius: 4px;
        }

        .sms-bubble.caller-bubble {
          background: rgba(255,255,255,0.08);
          border: 1px solid var(--card-border);
          color: var(--text);
          border-bottom-right-radius: 4px;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(124,58,237,0.25);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          width: fit-content;
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--violet-light);
          animation: typing-bounce 1.2s ease-in-out infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }

        /* Stats Card */
        .stat-big {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 72px;
          line-height: 1;
          letter-spacing: -0.04em;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 8px;
          font-weight: 500;
        }

        .pulse-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 0 rgba(34,197,94,0.4);
          animation: pulse-ring 2s ease-in-out infinite;
          margin-right: 8px;
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          70% { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        .stat-row {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* Speed Card */
        .speed-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 64px;
          line-height: 1;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #FF4D88, #7C3AED);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        .speed-label {
          font-size: 15px;
          color: var(--text-muted);
          margin-top: 6px;
          font-weight: 500;
        }

        .speedometer {
          width: 140px;
          height: 80px;
          flex-shrink: 0;
          position: relative;
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          background: rgba(124,58,237,0.15);
          border: 1px solid rgba(124,58,237,0.25);
        }

        /* ─── HOW IT WORKS ─── */
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
          border-top: 1px dashed rgba(124,58,237,0.4);
          z-index: 0;
        }

        .how-step {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 36px 24px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .how-step:hover {
          transform: translateY(-4px);
          border-color: rgba(124,58,237,0.3);
          box-shadow: 0 8px 32px rgba(124,58,237,0.12);
        }

        .how-number {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 20px;
          color: white;
          margin: 0 auto 24px;
          box-shadow: 0 4px 20px rgba(124,58,237,0.4);
        }

        .how-step-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .how-step-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ─── TESTIMONIALS ─── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
        }

        .testimonial-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius);
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: rgba(124,58,237,0.25);
          box-shadow: 0 8px 32px rgba(124,58,237,0.1);
        }

        .testimonial-card.featured {
          border-color: rgba(124,58,237,0.4);
          background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(255,77,136,0.05));
        }

        .stars {
          display: flex;
          gap: 3px;
        }

        .star {
          font-size: 16px;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(240,240,255,0.85);
          font-style: italic;
          flex: 1;
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
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
          color: white;
          flex-shrink: 0;
        }

        .author-name {
          font-weight: 600;
          font-size: 14px;
          color: var(--text);
        }

        .author-role {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* ─── PRICING ─── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 56px;
          align-items: start;
        }

        .pricing-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius);
          padding: 32px;
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }

        .pricing-card.popular {
          border-color: rgba(124,58,237,0.6);
          background: linear-gradient(135deg, rgba(124,58,237,0.1), rgba(255,77,136,0.06));
          transform: translateY(-8px);
          box-shadow: 0 0 0 1px rgba(124,58,237,0.4), 0 20px 60px rgba(124,58,237,0.2);
        }

        .pricing-card.popular:hover {
          transform: translateY(-12px);
          box-shadow: 0 0 0 1px rgba(124,58,237,0.6), 0 24px 64px rgba(124,58,237,0.3);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gradient);
          color: white;
          font-size: 11px;
          font-weight: 700;
          font-family: var(--font-mono);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 100px;
          white-space: nowrap;
        }

        .pricing-tier {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--violet-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pricing-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 24px;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin: 20px 0;
        }

        .price-dollar {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 56px;
          line-height: 1;
          letter-spacing: -0.04em;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-period {
          font-size: 14px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .pricing-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(240,240,255,0.8);
        }

        .check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(124,58,237,0.2);
          border: 1px solid rgba(124,58,237,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
          color: var(--violet-light);
        }

        .btn-pricing-primary {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          border: none;
          background: var(--gradient);
          color: white;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(124,58,237,0.3);
        }

        .btn-pricing-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.5);
        }

        .btn-pricing-ghost {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          border: 1px solid var(--card-border);
          background: transparent;
          color: var(--text);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }

        .btn-pricing-ghost:hover {
          border-color: rgba(124,58,237,0.4);
          background: rgba(124,58,237,0.06);
          transform: translateY(-1px);
        }

        /* ─── CTA BANNER ─── */
        .cta-banner {
          position: relative;
          z-index: 1;
          margin: 0 40px 100px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #7C3AED 0%, #FF4D88 100%);
          padding: 80px 60px;
          text-align: center;
        }

        .cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.1), transparent);
          pointer-events: none;
        }

        .cta-banner-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
        }

        .cta-banner-content {
          position: relative;
          z-index: 1;
        }

        .cta-banner-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: white;
          margin-bottom: 16px;
        }

        .cta-banner-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 40px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 40px;
          border-radius: 12px;
          font-size: 17px;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          border: none;
          background: white;
          color: #7C3AED;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.2);
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
        }

        /* ─── FOOTER ─── */
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--card-border);
          padding: 56px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
        }

        .footer-brand p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-top: 16px;
          max-width: 280px;
        }

        .footer-col h4 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 16px;
          color: var(--text);
          letter-spacing: -0.01em;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-col ul a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-col ul a:hover {
          color: var(--text);
        }

        .footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--card-border);
          padding: 24px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-bottom p {
          font-size: 13px;
          color: var(--text-subtle);
          font-family: var(--font-mono);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 13px;
          color: var(--text-subtle);
          text-decoration: none;
          font-family: var(--font-mono);
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover {
          color: var(--text-muted);
        }

        /* ─── STATS ROW ─── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--card-border);
          border: 1px solid var(--card-border);
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin: -20px 40px 80px;
        }

        .stat-item {
          background: var(--bg);
          padding: 32px 40px;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-display);
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
          color: var(--text-muted);
          margin-top: 8px;
          font-weight: 500;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .navbar { padding: 0 20px; }
          .nav-links { display: none; }

          .hero { padding: 120px 20px 80px; }

          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "sms" "stats" "speed" "feature1" "feature2" "feature3" "feature4";
            grid-auto-rows: auto;
          }

          .bento-card-sms { min-height: 380px; }
          .bento-card-stats { min-height: 240px; }
          .bento-card-speed { min-height: 180px; }
          .bento-card-feature { min-height: 160px; }

          .how-grid { grid-template-columns: 1fr; }
          .how-grid::before { display: none; }

          .testimonials-grid { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card.popular { transform: none; }

          .section { padding: 60px 20px; }
          .bento-section { padding: 0 20px 60px; }

          .cta-banner { margin: 0 20px 60px; padding: 48px 28px; }

          .footer {
            grid-template-columns: 1fr 1fr;
            padding: 48px 20px;
            gap: 36px;
          }

          .footer-brand { grid-column: 1 / -1; }

          .stats-row {
            grid-template-columns: 1fr;
            margin: 0 20px 60px;
          }

          .footer-bottom { padding: 20px; flex-direction: column; gap: 12px; text-align: center; }
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
        <div className="nav-cta">
          <a href="/sign-in" className="btn-ghost-nav">Sign In</a>
          <a href="/sign-up" className="btn-nav-primary">Get Started →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <span>✦</span> AI-Powered SMS Platform
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
          <a href="/sign-up" className="btn-primary">
            ⚡ Deploy Free Agent
          </a>
          <a href="#features" className="btn-ghost">
            ▷ Watch It Work
          </a>
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
        </div>

        <div className="bento-grid">
          {/* SMS Demo Card */}
          <div className="bento-card bento-card-sms">
            <div className="card-label">Live Demo</div>
            <div className="card-title">AI Conversations in Real Time</div>
            <div className="sms-demo">
              <div className="sms-msg caller">
                <div className="sms-avatar caller-av">👤</div>
                <div className="sms-bubble caller-bubble">Hi, I tried calling but couldn't get through.</div>
              </div>
              <div className="sms-msg">
                <div className="sms-avatar ai">AI</div>
                <div className="sms-bubble ai-bubble">Hi! This is Sarah's Salon — sorry we missed you! I'm the AI assistant. How can I help? 😊</div>
              </div>
              <div className="sms-msg caller">
                <div className="sms-avatar caller-av">👤</div>
                <div className="sms-bubble caller-bubble">I'd like to book a haircut for Saturday.</div>
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

          {/* Stats Card */}
          <div className="bento-card bento-card-stats">
            <div>
              <div className="card-label">Missed Calls Recaptured</div>
              <div className="stat-big">247</div>
              <div className="stat-label">This month</div>
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="stat-row">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                    <span className="pulse-dot" />
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live Right Now</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(240,240,255,0.6)' }}>3 active conversations</div>
                </div>
                <div style={{ height: '1px', background: 'var(--card-border)' }} />
                <div className="stat-row">
                  <div style={{ fontSize: '24px', fontFamily: 'var(--font-display)', fontWeight: '800', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>98%</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Speed Card */}
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
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#FF4D88" />
                  </linearGradient>
                </defs>
                <path d="M 10 75 A 60 60 0 0 1 130 75" stroke="rgba(255,255,255,0.08)" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M 10 75 A 60 60 0 0 1 130 75" stroke="url(#arcGrad)" strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray="190" strokeDashoffset="30" />
                <circle cx="111" cy="40" r="5" fill="#FF4D88" />
                <line x1="70" y1="75" x2="105" y2="44" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="70" cy="75" r="6" fill="#7C3AED" />
              </svg>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="bento-card bento-card-feature bento-card-feature1">
            <div className="feature-icon">🤖</div>
            <div>
              <div className="card-title">AI-Powered Conversations</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.6' }}>Contextual, human-feeling replies that qualify leads and book appointments.</div>
            </div>
          </div>

          <div className="bento-card bento-card-feature bento-card-feature2">
            <div className="feature-icon">📅</div>
            <div>
              <div className="card-title">Appointment Booking</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.6' }}>Syncs with your calendar. Books, reschedules, and confirms — no human needed.</div>
            </div>
          </div>

          <div className="bento-card bento-card-feature bento-card-feature3">
            <div className="feature-icon">🌙</div>
            <div>
              <div className="card-title">24/7 Operation</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.6' }}>Your AI agent never sleeps, never takes lunch, and never misses a lead.</div>
            </div>
          </div>

          <div className="bento-card bento-card-feature bento-card-feature4">
            <div className="feature-icon">📊</div>
            <div>
              <div className="card-title">Full Analytics</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.6' }}>See every conversation, lead score, and conversion — in real time.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section">
        <div style={{ textAlign: 'center', marginBottom: '0' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
          <h2 className="section-title">Live in under 10 minutes.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>No engineers. No complicated setup. Just connect your number, configure your AI, and go live.</p>
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
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section" style={{ paddingTop: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Customer Stories</div>
          <h2 className="section-title">Businesses that never miss a call.</h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card featured">
            <div className="stars">
              {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
            </div>
            <p className="testimonial-text">"I set it up in 10 minutes and it booked 3 appointments that same night. I woke up to a full Saturday schedule. This is insane."</p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div>
                <div className="author-name">Sarah K.</div>
                <div className="author-role">Salon Owner, Chicago</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
            </div>
            <p className="testimonial-text">"As a contractor I'm always on job sites. Used to lose 5-6 leads a week to missed calls. Now my AI handles them all. Revenue is up 40%."</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #00D4FF, #7C3AED)' }}>M</div>
              <div>
                <div className="author-name">Marcus T.</div>
                <div className="author-role">General Contractor, Austin</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
            </div>
            <p className="testimonial-text">"Rolled it out to 12 of my agency clients. Every single one saw immediate ROI. It's now our most-requested product. Incredible."</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg, #FF4D88, #7C3AED)' }}>J</div>
              <div>
                <div className="author-name">Jamie L.</div>
                <div className="author-role">Digital Agency Owner, NYC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section" style={{ paddingTop: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 className="section-title">Simple, transparent pricing.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Start free, scale as you grow. One missed appointment pays for an entire month.</p>
        </div>

        <div className="pricing-grid">
          {/* Starter */}
          <div className="pricing-card">
            <div className="pricing-tier">Starter</div>
            <div className="pricing-name">Solo</div>
            <div className="pricing-price">
              <span className="price-dollar">$</span>
              <span className="price-number">97</span>
              <span className="price-period">/month</span>
            </div>
            <p className="pricing-desc">Perfect for solo business owners ready to stop losing leads to missed calls.</p>
            <ul className="pricing-features">
              {['1 phone number', 'Up to 500 conversations/mo', 'AI appointment booking', 'SMS conversations', 'Basic analytics', 'Email support'].map(f => (
                <li key={f}>
                  <span className="check-icon">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="btn-pricing-ghost">Get Started →</button>
          </div>

          {/* Growth */}
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
            <ul className="pricing-features">
              {['3 phone numbers', 'Unlimited conversations', 'Advanced AI customization', 'Lead qualification scoring', 'CRM integrations', 'Full analytics dashboard', 'Priority support'].map(f => (
                <li key={f}>
                  <span className="check-icon">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="btn-pricing-primary">Deploy Your AI →</button>
          </div>

          {/* Agency */}
          <div className="pricing-card">
            <div className="pricing-tier">Agency</div>
            <div className="pricing-name">Scale</div>
            <div className="pricing-price">
              <span className="price-dollar">$</span>
              <span className="price-number">497</span>
              <span className="price-period">/month</span>
            </div>
            <p className="pricing-desc">White-label solution for agencies managing SMS AI for multiple clients at scale.</p>
            <ul className="pricing-features">
              {['Unlimited phone numbers', 'Unlimited conversations', 'White-label dashboard', 'Client management portal', 'Custom AI personas', 'Webhook integrations', 'Dedicated success manager'].map(f => (
                <li key={f}>
                  <span className="check-icon">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="btn-pricing-ghost">Contact Sales →</button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <div className="cta-banner-noise" />
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">
            Your next lead is calling.<br />Will you answer?
          </h2>
          <p className="cta-banner-sub">
            Join 400+ businesses that never lose a customer to a missed call again.
          </p>
          <a href="/sign-up" className="btn-white">
            Deploy Free Agent ⚡
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
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
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">TCPA Compliance</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 text-back. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
