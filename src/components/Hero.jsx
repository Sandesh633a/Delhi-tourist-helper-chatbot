import heroVideo from '../assets/videos/delhi-hero.mp4';
import redFort    from '../assets/images/redFort.jpeg';
import qutubMinar from '../assets/images/qutubMinar.jpg';
import lotusTemple from '../assets/images/lotusTemple.jpg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* ── Video Background ── */}
      <div className="hero-video-wrap">
        <video autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />

      {/* ── Content ── */}
      <div className="container" style={{ paddingBlock: '5rem' }}>
        <div className="hero-content">

          {/* Left */}
          <div className="hero-left">
            <div className="badge" style={{ animationDelay: '0.1s' }}>
              🇮🇳 AI-Powered Delhi Travel Guide
            </div>

            <h1 className="display-xl hero-title">
              Discover the<br />
              <em className="text-gradient">Heart of India</em><br />
              <span style={{ fontWeight: 300, fontSize: '0.7em', fontStyle: 'italic' }}>with AI Guidance</span>
            </h1>

            <p className="hero-desc hero-desc-text">
              Delhi — a city where ancient Mughal grandeur meets modern cosmopolitan vibrancy. 
              From the majestic Red Fort echoing centuries of history to the bustling lanes of 
              Chandni Chowk overflowing with flavours, Delhi is a sensory journey unlike any 
              other. Let our AI guide craft your perfect Delhi experience — tailored to your 
              budget, time frame, and travel style.
            </p>

            <div className="hero-btns">
              <a href="#chatbot" className="btn btn-primary">🤖 Talk to AI Guide</a>
              <a href="#places"  className="btn btn-outline">🗺️ Explore Places</a>
            </div>

            <div className="hero-stats">
              {[
                { icon: '🏛️', num: '1,200+', label: 'Historic Sites' },
                { icon: '🍛', num: '5,000+', label: 'Restaurants'   },
                { icon: '🏨', num: '800+',   label: 'Hotels'        },
                { icon: '🤖', num: '24/7',   label: 'AI Assistance' },
              ].map(s => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-icon">{s.icon}</span>
                  <div>
                    <div className="hero-stat-num">{s.num}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — collage */}
          <div className="hero-right">
            {/* Main card */}
            <div className="hero-card"
              style={{ width: 280, height: 340, top: 0, left: 0, transform: 'rotate(-2deg)' }}>
              <img src={redFort} alt="Red Fort, Delhi" />
              <div className="hero-card-badge">Red Fort · Lal Qila</div>
            </div>

            {/* Tall right card */}
            <div className="hero-card"
              style={{ width: 220, height: 380, top: 40, right: 0, transform: 'rotate(1.5deg)' }}>
              <img src={qutubMinar} alt="Qutub Minar" />
              <div className="hero-card-badge">Qutub Minar · 72.5m</div>
            </div>

            {/* Bottom card */}
            <div className="hero-card float"
              style={{ width: 240, height: 160, bottom: 0, left: 60, transform: 'rotate(-1deg)' }}>
              <img src={lotusTemple} alt="Lotus Temple" />
              <div className="hero-card-badge">Lotus Temple</div>
            </div>

            {/* Live badge */}
            <div className="glass"
              style={{
                position: 'absolute', bottom: 20, right: -10,
                padding: '0.75rem 1rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                minWidth: 160, zIndex: 5, borderRadius: 12,
              }}>
              <span style={{ fontSize: '1.5rem' }}>🤖</span>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Online Now</div>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--cyan)' }}>AI Guide Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <span>Scroll to Explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
