import smog        from '../assets/images/smog.jpg';
import lodhiGarden from '../assets/images/lodhiGarden.jpg';

const seasons = [
  {
    icon: '❄️', badge: '🏆 Best Season',
    name: 'Winter (Oct – Feb)', temp: '5°C – 22°C',
    desc: 'The ideal time to visit Delhi. Crisp mornings, pleasant afternoons, and vibrant festival season. Witness Diwali (Oct–Nov) light up millions of diyas across the city, attend the iconic Republic Day Parade on January 26th, and explore every outdoor monument in comfortable weather.',
  },
  {
    icon: '🌸', badge: '🌺 Holi Season',
    name: 'Spring (Mar – Apr)', temp: '18°C – 35°C',
    desc: 'Holi festival transforms Delhi into a joyous riot of colour, music, and celebration. Gardens bloom spectacularly across the city. Temperatures are comfortable but quickly rising — visiting in early March gives you the best of spring weather before the summer heat sets in.',
  },
  {
    icon: '☀️', badge: '🥵 Very Hot',
    name: 'Summer (May – Jun)', temp: '35°C – 48°C',
    desc: 'Extreme heat makes prolonged outdoor sightseeing difficult. However, hotel prices drop significantly and major attractions are far less crowded. If you must visit in summer, plan outdoor excursions only in the early morning before 9 AM and after 6 PM.',
  },
  {
    icon: '🌧️', badge: '🌿 Atmospheric',
    name: 'Monsoon (Jul – Sep)', temp: '25°C – 38°C',
    desc: 'Delhi receives roughly 650mm of annual rainfall primarily in July and August. The city turns lush and verdant, greenery explodes across Lodhi Garden and other parks, and the scorching heat breaks dramatically. Expect atmospheric heavy showers but also occasional flooding in low-lying areas.',
  },
];

const festivals = [
  { icon: '🪔', name: 'Diwali',      month: 'Oct – Nov', desc: 'Festival of lights. Delhi glows with millions of oil lamps, fireworks, and elaborate light installations across every market and colony.' },
  { icon: '🇮🇳', name: 'Republic Day Parade', month: 'Jan 26', desc: 'India\'s most spectacular national parade along Kartavya Path. Military might, cultural tableaux, and aerial aerobatics on display.' },
  { icon: '🎨', name: 'Holi',        month: 'March', desc: 'Festival of colours. The entire city erupts in vibrant colour — open spaces like Dilli Haat and Connaught Place host the biggest events.' },
  { icon: '🥁', name: 'Qutub Festival', month: 'November', desc: 'Classical music and dance performances against the breathtaking backdrop of the illuminated Qutub Minar complex at night.' },
  { icon: '🎭', name: 'Delhi International Arts Festival', month: 'January', desc: 'India\'s premier contemporary arts festival. Theatre, visual arts, dance, and film converge in events across the capital.' },
  { icon: '🌙', name: 'Eid ul-Fitr', month: 'April (varies)', desc: 'Old Delhi\'s Jama Masjid and Chandni Chowk come alive with night markets, special feasts, and joyous community celebrations.' },
];

const neighbourhoods = [
  {
    icon: '🏯', name: 'Old Delhi (Shahjahanabad)', label: 'Historic Core',
    desc: 'The original walled city built by Shah Jahan in the 17th century. Home to Red Fort, Jama Masjid, Chandni Chowk, and the most authentic Mughal-era street food anywhere in the world. Walking these lanes, you feel Delhi\'s past still breathing around every corner.',
  },
  {
    icon: '🏛️', name: 'Lutyens\' Delhi', label: 'Official Capital',
    desc: 'Designed by British architect Edwin Lutyens in the 1920s, this area contains India Gate, Rashtrapati Bhavan, Parliament House, and wide tree-lined boulevards. It represents imperial power architecturally transformed into democratic grandeur.',
  },
  {
    icon: '☕', name: 'South Delhi', label: 'Trendy & Upscale',
    desc: 'Hauz Khas, Greater Kailash, Defence Colony, and Lajpat Nagar are known for boutique shopping, rooftop bars, international cuisine, and a cosmopolitan resident population. The best café-hopping and nightlife territory in Delhi.',
  },
  {
    icon: '🛍️', name: 'West Delhi (Karol Bagh)', label: 'Vibrant & Commercial',
    desc: 'A densely packed commercial district overflowing with clothing markets, wholesale shops, gold jewellers, and excellent mid-range restaurants. An authentic Delhi neighbourhood experience away from the tourist sheen of central Delhi.',
  },
];

export default function DelhiInfo() {
  return (
    <section id="delhiinfo" className="section-alt">
      <div className="container">

        {/* ── Seasons ── */}
        <div className="section-header reveal">
          <div className="badge">🌦️ Best Time to Visit</div>
          <h2 className="display-lg text-gradient-warm">Delhi Through the Seasons</h2>
          <hr className="divider divider-center" />
          <p>
            Delhi experiences dramatic seasonal variation — from bone-chilling winter fog in January 
            to inferno-like heatwaves touching 48°C in May. Choosing the right time to visit makes 
            an enormous difference in both comfort and the depth of your experience.
          </p>
        </div>

        <div className="seasons-grid" style={{ marginBottom: '5rem' }}>
          {seasons.map((s, i) => (
            <div key={i} className={`season-card reveal d${i + 1}`}>
              <div className="season-icon">{s.icon}</div>
              <div className="season-name">{s.name}</div>
              <div className="season-temp">{s.temp}</div>
              <div className="season-badge">{s.badge}</div>
              <p className="season-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Image + Smog awareness */}
        <div className="about-grid reveal" style={{ marginBottom: '5rem', alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--card-radius)', overflow: 'hidden', height: 320, border: '1.5px solid var(--glass-bd)' }}>
            <img src={smog} alt="Delhi smog and winter fog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="badge">🌫️ Traveller Advisory</div>
            <h3 className="display-md" style={{ color: 'var(--pale)' }}>Delhi's Winter Air Quality</h3>
            <p className="body-md text-muted">
              Delhi experiences significant air pollution in late autumn (November–December) due to 
              a combination of vehicle emissions, construction dust, crop stubble burning in 
              neighbouring Punjab and Haryana, and temperature inversions that trap pollutants 
              close to the ground. The Air Quality Index (AQI) can reach "Severe" levels during 
              these months, particularly during Diwali.
            </p>
            <p className="body-md text-muted">
              Travellers are advised to carry N95 masks if visiting in November–December, monitor 
              the SAFAR (System of Air Quality and Weather Forecasting) portal, and schedule 
              outdoor sightseeing for midday when winds are strongest. The government runs an 
              odd-even vehicle rotation during severe pollution episodes, which generally improves 
              Metro ridership and air quality marginally.
            </p>
          </div>
        </div>

        {/* ── Festivals ── */}
        <div className="section-header reveal" style={{ marginTop: 0 }}>
          <div className="badge">🎉 Events & Festivals</div>
          <h2 className="display-lg text-gradient-warm">Celebrate Delhi's Festivals</h2>
          <hr className="divider divider-center" />
          <p>
            Delhi's festival calendar is as diverse as its population. From the blinding splendour 
            of Diwali to the colour chaos of Holi, from solemn national celebrations to Sufi music 
            nights at medieval monuments — there is always something extraordinary happening.
          </p>
        </div>

        <div className="festivals-grid" style={{ marginBottom: '5rem' }}>
          {festivals.map((f, i) => (
            <div key={i} className={`festival-card reveal d${Math.min(i % 3 + 1, 6)}`}>
              <div className="festival-icon">{f.icon}</div>
              <div className="festival-text">
                <h4>{f.name}</h4>
                <span className="festival-month">{f.month}</span>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Neighbourhoods ── */}
        <div className="section-header reveal" style={{ marginTop: 0 }}>
          <div className="badge">🗺️ Navigating the City</div>
          <h2 className="display-lg text-gradient-warm">Delhi's Diverse Neighbourhoods</h2>
          <hr className="divider divider-center" />
          <p>
            Delhi is not one city — it is an expansive constellation of distinct urban villages, 
            each with its own architecture, culture, food scene, and social character. 
            Understanding the city's geography is essential to making the most of your visit.
          </p>
        </div>

        <div className="nbhd-blocks">
          {neighbourhoods.map((n, i) => (
            <div key={i} className={`nbhd-block reveal d${i + 1}`}>
              <div className="nbhd-block-icon">{n.icon}</div>
              <div>
                <div className="nbhd-label">{n.label}</div>
                <h4>{n.name}</h4>
                <p>{n.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
