import tpmap from '../assets/images/tpmap.jpg';

const oneDayPlan = [
  {
    time: '7:00 AM', title: 'Sunrise at India Gate',
    desc: 'Begin your Delhi day at the stately India Gate while the air is still fresh and the monument glows golden. Walk the full length of Kartavya Path, watch the ceremonial guards, and take in the sweeping views of Parliament House in the distance.',
    tip: 'Carry water and light snacks. Dress layers — it is cold in winter mornings.',
  },
  {
    time: '9:30 AM', title: 'Red Fort & Chandni Chowk',
    desc: 'Head to Lal Qila (Red Fort) when it opens. Explore the Mughal palaces within — Diwan-i-Aam, Diwan-i-Khas, Rang Mahal. Afterwards, plunge into the narrow lanes of Chandni Chowk and stop at Paranthe Wali Gali for a legendary parantha breakfast.',
    tip: 'Take the Metro — Yellow Line to Chandni Chowk. Saves time and avoids traffic.',
  },
  {
    time: '12:30 PM', title: 'Jama Masjid & Karim\'s Lunch',
    desc: 'Walk to Jama Masjid — India\'s largest mosque, a few minutes from Chandni Chowk. Climb the minaret for a panoramic view of Old Delhi. Head to Karim\'s restaurant next door for an unforgettable mutton biryani or seekh kebab lunch.',
    tip: 'Dress modestly to enter the mosque. Camera charge ₹300 applies.',
  },
  {
    time: '3:00 PM', title: 'Humayun\'s Tomb',
    desc: 'Take a 30-minute drive or Metro ride to the serene Humayun\'s Tomb — a Mughal masterpiece that directly inspired the Taj Mahal. Wander its Persian charbagh (four-part garden) and absorb the refined proportions of 16th-century Mughal architecture at its finest.',
    tip: 'Photography is fully permitted. Drones require a permit from ASI.',
  },
  {
    time: '6:00 PM', title: 'Lotus Temple & Lodhi Garden Sunset',
    desc: 'Visit the tranquil Lotus Temple for a few minutes of complete silence. Then stroll through Lodhi Garden as the sun sets over 15th-century tombs surrounded by lush greenery and fragrant flowers — one of Delhi\'s most peaceful golden-hour experiences.',
    tip: 'Lotus Temple closes at 6 PM in summer, 5:30 PM in winter.',
  },
  {
    time: '8:00 PM', title: 'Dinner at Hauz Khas Village',
    desc: 'End your day in the vibrant Hauz Khas Village — rooftop restaurants overlooking the medieval reservoir, live music, craft beer, and a buzzing nightlife scene. Choose from dozens of cuisines ranging from North Indian to Mediterranean.',
    tip: 'Try Naivedyam for authentic South Indian, or Social for fusion & cocktails.',
  },
];

const dayTwoExtras = [
  {
    time: 'Day 2 · Morning', title: 'Qutub Minar Complex',
    desc: 'Spend the morning exploring the UNESCO-listed Qutub Complex — the 72.5m minaret, the ancient Iron Pillar of Chandragupta II (which has never rusted in 1,600 years, defying modern metallurgy), and the ruins of the Quwwat-ul-Islam mosque — India\'s first mosque.',
    tip: 'Opens at 7 AM — least crowded in the first hour. Sunrise is spectacular here.',
  },
  {
    time: 'Day 2 · Afternoon', title: 'Akshardham Temple',
    desc: 'Marvel at the world\'s largest Hindu temple complex — a breathtaking ensemble of Rajput and Telugu architecture featuring 234 ornately carved pillars, 9 domes, 20,000 sculpted stone figures, and an extraordinary exhibition hall depicting the life of Swaminarayan.',
    tip: 'No photography inside the main complex. Attend the sunset Water & Light Show at 7:30 PM (book in advance).',
  },
  {
    time: 'Day 2 · Evening', title: 'Connaught Place & Janpath',
    desc: 'Shop for Indian handicrafts, handlooms, and unique souvenirs at Janpath Market. Then stroll the grand circular colonnaded paths of Connaught Place for evening coffee at Wenger\'s Deli (since 1926), or a heritage meal at the iconic United Coffee House.',
    tip: 'The underground Palika Bazaar beneath CP sells electronics and curios at negotiable prices.',
  },
];

const tips = [
  { icon: '🚇', text: 'Delhi Metro is the fastest and safest way to travel. Purchase a Metro Smart Card (₹100 deposit) to avoid queues.' },
  { icon: '📱', text: 'Download the official Delhi Metro Rail App for real-time route planning and fare estimates across all 12 lines.' },
  { icon: '💵', text: 'Carry small change — many street vendors and temple donation boxes do not accept UPI or debit cards.' },
  { icon: '🌡️', text: 'Best months: October through February. Avoid May–June (extreme heat up to 48°C). Carry a hat and sunblock year-round.' },
  { icon: '🧕', text: 'Dress conservatively when visiting Jama Masjid, Hazrat Nizamuddin Dargah, and any temple or gurdwara.' },
  { icon: '🛺', text: 'For short trips, book auto-rickshaws via Rapido or Ola apps for fixed, pre-negotiated pricing — no fare bargaining needed.' },
  { icon: '💊', text: 'Carry basic antacids and ORS sachets — Delhi street food is extraordinary but rich. Stay hydrated; carry a water bottle.' },
  { icon: '🔒', text: 'Keep photocopies of your passport ID page and hotel address in separate bags from your originals.' },
];

export default function TripPlan() {
  return (
    <section id="plan">
      <div className="container">

        <div className="section-header reveal">
          <div className="badge">📅 Curated Itineraries</div>
          <h2 className="display-lg text-gradient-warm">Plan Your Perfect Delhi Trip</h2>
          <hr className="divider divider-center" />
          <p>
            Our AI-crafted itineraries are designed to extract maximum experience from every hour 
            in Delhi. Whether you are on a lightning-fast single-day layover or a leisurely 
            weekend getaway — these curated routes ensure you see the very best while eating 
            the most iconic food and navigating the city intelligently.
          </p>
        </div>

        <div className="plan-grid" style={{ marginBottom: '3rem' }}>

          {/* 1 Day Plan */}
          <div className="plan-box reveal reveal-left">
            <div className="plan-box-header">
              <div className="plan-box-icon">🌟</div>
              <div>
                <div className="plan-box-title">The Perfect 1-Day Delhi</div>
                <div className="plan-box-sub">A complete, efficient one-day blueprint</div>
              </div>
            </div>
            <div className="timeline">
              {oneDayPlan.map((item, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot">{i + 1}</div>
                  <div className="tl-content">
                    <div className="tl-time">{item.time}</div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                    <div className="tl-tip">💡 {item.tip}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Day + Tips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Day 2 Extension */}
            <div className="plan-box reveal reveal-right">
              <div className="plan-box-header">
                <div className="plan-box-icon" style={{ background: 'linear-gradient(135deg,var(--blue-dark),var(--blue))' }}>🗓️</div>
                <div>
                  <div className="plan-box-title">Day 2 — Extended Delhi</div>
                  <div className="plan-box-sub">Add these experiences on your second day</div>
                </div>
              </div>
              <div className="timeline">
                {dayTwoExtras.map((item, i) => (
                  <div key={i} className="tl-item">
                    <div className="tl-dot" style={{ background: 'linear-gradient(135deg,var(--blue-dark),var(--blue))' }}>{i + 1}</div>
                    <div className="tl-content">
                      <div className="tl-time">{item.time}</div>
                      <div className="tl-title">{item.title}</div>
                      <div className="tl-desc">{item.desc}</div>
                      <div className="tl-tip">💡 {item.tip}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="plan-box reveal reveal-right">
              <div className="plan-box-header">
                <div className="plan-box-icon" style={{ background: 'linear-gradient(135deg,var(--blue),var(--cyan))' }}>🧭</div>
                <div>
                  <div className="plan-box-title">Essential Travel Tips</div>
                  <div className="plan-box-sub">Must-know advice for every Delhi visitor</div>
                </div>
              </div>
              <div className="tips-list">
                {tips.map((t, i) => (
                  <div key={i} className="tip-item">
                    <span className="tip-icon">{t.icon}</span>
                    <p>{t.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Image */}
            <div className="plan-map reveal">
              <img src={tpmap} alt="Delhi tourist map overview" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
