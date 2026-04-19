import redFort      from '../assets/images/redFort.jpeg';
import qutubMinar   from '../assets/images/qutubMinar.jpg';
import lotusTemple  from '../assets/images/lotusTemple.jpg';
import lodhiGarden  from '../assets/images/lodhiGarden.jpg';
import chandniChowk from '../assets/images/ChandniChowk.jpeg';
import connaughtPl  from '../assets/images/connaughtPlace.jpg';

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = {
    Explore: ['Historic Sites', 'UNESCO Heritage', 'Museums & Galleries', 'Parks & Gardens', 'Shopping Districts'],
    Food:    ['Street Food', 'Fine Dining', 'Local Cuisine', 'Sweets & Desserts', 'Cafés & Bakeries'],
    Stay:    ['Luxury Hotels', 'Boutique Hotels', 'Budget Stays', 'Hostels', 'Serviced Apartments'],
    Guide:   ['Plan My Trip', 'Food Recommendations', 'Transport Help', 'Festival Calendar', 'Chat with AI'],
  };

  const galleryImgs = [
    { src: redFort,      alt: 'Red Fort' },
    { src: qutubMinar,   alt: 'Qutub Minar' },
    { src: lotusTemple,  alt: 'Lotus Temple' },
    { src: lodhiGarden,  alt: 'Lodhi Garden' },
    { src: chandniChowk, alt: 'Chandni Chowk' },
    { src: connaughtPl,  alt: 'Connaught Place' },
  ];

  return (
    <footer className="footer">
      <div className="container">

        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#0077B6,#00B4D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                🕌
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--pale)' }}>Delhi</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Tourist Helper</div>
              </div>
            </a>
            <p>
              Your AI-powered guide to the Heart of India. Discover, explore, and experience 
              Delhi like never before — from ancient Mughal monuments to modern street food adventures.
            </p>
            <div className="footer-socials">
              {['🌐','📘','📸','🐦'].map((ic, i) => (
                <a key={i} href="#" className="social-btn">{ic}</a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(cols).map(([heading, items]) => (
            <div key={heading} className="footer-col">
              <h5>{heading}</h5>
              <ul className="footer-links">
                {items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gallery strip */}
        <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Glimpses of Delhi
        </p>
        <div className="footer-gallery" style={{ marginBottom: '2rem' }}>
          {galleryImgs.map((img, i) => (
            <div key={i} className="footer-gallery-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} Delhi Tourist Helper · AI-powered travel guide · Built with Google Dialogflow</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="footer-bar" />
      </div>
    </footer>
  );
}
