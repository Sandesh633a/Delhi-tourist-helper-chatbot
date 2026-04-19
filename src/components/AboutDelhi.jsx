import delhiSkyline    from '../assets/images/DelhiSkyLine.jpeg';
import chandniChowk    from '../assets/images/ChandniChowk.jpeg';
import redFort         from '../assets/images/redFort.jpeg';

export default function AboutDelhi() {
  return (
    <section id="about" className="section-alt">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="section-header reveal">
          <div className="badge">🏙️ The Soul of India</div>
          <h2 className="display-lg text-gradient-warm">Why Delhi is Unlike Any City on Earth</h2>
          <hr className="divider divider-center" />
          <p>
            Delhi is not simply a capital city — it is a living civilisation compressed into one 
            sprawling, breathing, perpetually evolving entity. With over 3,000 years of recorded 
            history, this city has been the seat of emperors, the birthplace of revolutions, and 
            the cradle of India's most diverse cultural tapestry. Every street corner in Delhi 
            whispers a story; every monument carries an epoch.
          </p>
        </div>

        {/* ── Main two-column block ── */}
        <div className="about-grid" style={{ marginBottom: '4rem' }}>

          {/* Images */}
          <div className="about-image-stack reveal reveal-left">
            <div className="about-img-main">
              <img src={delhiSkyline} alt="Delhi Skyline at dusk" />
            </div>
            <div className="about-img-float">
              <img src={chandniChowk} alt="Busy Chandni Chowk market" />
            </div>
          </div>

          {/* Text */}
          <div className="about-text reveal reveal-right">
            <div className="badge">📜 Historical Depth</div>
            <h3 className="display-md" style={{ color: 'var(--pale)' }}>
              A City of Seven Empires
            </h3>
            <p>
              Delhi holds the extraordinary distinction of having served as the capital of at 
              least seven consecutive empires. From the early Tomar and Chahamana dynasties in 
              the 9th century CE, through the brutal grandeur of the Mamluk, Khalji, Tughlaq, 
              Sayyid, and Lodi sultanates, to the magnificent Mughal dynasty that completed the 
              city's most iconic monuments — each era left permanent imprints on the landscape 
              and culture. Walk through Mehrauli and you traverse centuries in a single afternoon.
            </p>
            <p>
              The British colonial period added another distinct layer — the wide tree-lined 
              boulevards of Lutyens' New Delhi, the imperial architecture of Rashtrapati Bhavan, 
              and the grand colonial bungalows of Chanakyapuri that now house foreign embassies. 
              Post-independence, modern Delhi exploded into one of Asia's true megacities, 
              developing a Metro rail system that is the envy of the developing world.
            </p>

            <div className="about-features">
              {[
                {
                  icon: '🎭',
                  title: 'Cultural Melting Pot',
                  body: 'Every Indian state is represented here. Punjabis, Bengalis, Tamils, Keralites — all co-exist, creating a cultural festival that never ends.',
                },
                {
                  icon: '🌐',
                  title: 'Modernity Meets Antiquity',
                  body: 'From 12th-century minarets to world-class tech parks — Delhi refuses to choose between its glorious past and its ambitious future.',
                },
                {
                  icon: '🚇',
                  title: 'Best-in-Class Infrastructure',
                  body: 'The Delhi Metro — one of the world\'s finest rapid transit systems — seamlessly connects ancient bazaars with gleaming commercial districts.',
                },
              ].map((f, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">{f.icon}</div>
                  <div className="about-feature-body">
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Wide image text block ── */}
        <div className="about-grid reveal" style={{ marginBottom: '4rem' }}>
          <div className="about-text">
            <div className="badge">🏛️ UNESCO World Heritage</div>
            <h3 className="display-md" style={{ color: 'var(--pale)' }}>
              Red Fort — The Crown Jewel of Delhi
            </h3>
            <p>
              Constructed by Mughal Emperor Shah Jahan between 1638 and 1648 CE, the Red Fort 
              (Lal Qila) is one of India's most iconic monuments and a UNESCO World Heritage Site. 
              Built predominantly from red sandstone quarried from Rajasthan, this magnificent 
              fortress served as the principal residence of the Mughal Emperors for nearly 200 
              years — until the fall of the empire in 1857 during the First War of Indian Independence.
            </p>
            <p>
              Its massive walls — stretching over 2.5 kilometres and rising to 33 metres — enclose 
              exquisite palaces within. The Diwan-i-Aam (Hall of Public Audience) saw emperors 
              receive petitions from their subjects; the Diwan-i-Khas (Hall of Private Audience) 
              once housed the legendary Peacock Throne, said to be worth more than the entire 
              Taj Mahal. Every year on August 15th, India's Prime Minister hoists the national 
              tricolour from its ramparts — making it the enduring symbol of a free India.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {['Entry ₹35 (Indian)', '₹500 (Foreign)', 'Metro: Chandni Chowk', '9:30 AM – 4:30 PM'].map(tag => (
                <span key={tag} style={{
                  fontSize: '0.72rem', padding: '0.25rem 0.75rem',
                  borderRadius: '100px',
                  background: 'rgba(0,180,216,0.1)',
                  border: '1px solid rgba(0,180,216,0.25)',
                  color: 'var(--sky)',
                }}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="about-image-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 260, border: '1.5px solid var(--glass-bd)' }}>
              <img src={redFort} alt="Red Fort, Delhi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="stats-row reveal">
          {[
            { num: '3,000+', label: 'Years of Documented History', icon: '📜' },
            { num: '32.9M',  label: 'Population (2024)',           icon: '👥' },
            { num: '11',     label: 'UNESCO Sites Nearby',         icon: '🏛️' },
            { num: '#1',     label: 'Tourist City in India',       icon: '🏆' },
          ].map((s, i) => (
            <div key={i} className={`stat-box reveal d${i + 1}`}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div className="stat-box-num">{s.num}</div>
              <div className="stat-box-label">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
