import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About Delhi', href: '#about' },
    { label: 'Places',      href: '#places' },
    { label: 'Food',        href: '#food' },
    { label: 'Hotels',      href: '#hotels' },
    { label: 'Plan Your Trip', href: '#plan' },
    { label: 'AI Guide',    href: '#chatbot' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">🕌</div>
            <div className="nav-logo-text">
              <span className="nav-logo-title">Delhi</span>
              <span className="nav-logo-sub">Tourist Helper</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#chatbot" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}>
            🤖 Chat with AI
          </a>

          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(p => !p)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#chatbot" className="btn btn-primary" style={{ marginTop: '0.5rem' }} onClick={() => setMobileOpen(false)}>
            🤖 Chat with AI
          </a>
        </div>
      </div>
    </nav>
  );
}
