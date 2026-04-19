import lodhiGarden   from '../assets/images/lodhiGarden.jpg';
import connaughtPl   from '../assets/images/connaughtPlace.jpg';
import delhiMetro    from '../assets/images/delhiMetro.jpg';
import smartCity     from '../assets/images/smartCity.jpg';
import delhiSkyline  from '../assets/images/DelhiSkyLine.jpeg';
import yamuna        from '../assets/images/yamuna.jpg';

const hotels = [
  {
    name: 'The Imperial',
    area: 'Connaught Place',
    category: '★★★★★ Luxury Heritage',
    price: '₹15,000 – ₹80,000 / night',
    img: connaughtPl,
    imgAlt: 'Connaught Place, near The Imperial',
    highlight: 'Built in 1931, this Art Deco masterpiece is Delhi\'s most iconic luxury hotel — its corridors are lined with one of the finest private art collections in Asia, and the 1911 Bar serves legendary gin cocktails to heads of state.',
    tags: ['Heritage Architecture', 'Fine Dining', 'Spa & Pool', 'Art Gallery'],
  },
  {
    name: 'ITC Maurya',
    area: 'Chanakyapuri',
    category: '★★★★★ Ultra Luxury',
    price: '₹12,000 – ₹60,000 / night',
    img: delhiSkyline,
    imgAlt: 'Delhi luxury hotel skyline',
    highlight: 'Home to the legendary Bukhara restaurant, frequented by US presidents and global leaders. The Presidential Suite here has hosted Bill Clinton, Barack Obama, and Vladimir Putin.',
    tags: ['Bukhara Restaurant', 'Presidential Suite', 'Business Centre', 'Pool'],
  },
  {
    name: 'Lodhi — a Nature Resort',
    area: 'Lodhi Road, South Delhi',
    category: '★★★★★ Boutique Luxury',
    price: '₹20,000 – ₹1,00,000 / night',
    img: lodhiGarden,
    imgAlt: 'Lodhi Garden area hotel',
    highlight: 'Set amidst 12 acres of lush gardens adjacent to the UNESCO Lodhi Garden, this is Delhi\'s most intimate luxury retreat — each villa has a private plunge pool overlooking heritage tombs.',
    tags: ['Private Pool Villas', 'Garden Setting', 'Spa', 'Nature'],
  },
  {
    name: 'Hotel New Delhi by IHCL',
    area: 'Connaught Place',
    category: '★★★★ Business Hotel',
    price: '₹5,000 – ₹12,000 / night',
    img: smartCity,
    imgAlt: 'Modern hotel Delhi',
    highlight: 'A contemporary four-star property in the absolute centre of New Delhi, walking distance to Connaught Place, Janpath, and Rajiv Chowk Metro. Excellent value for business and leisure travellers.',
    tags: ['Central Location', 'Rooftop Pool', 'Business Centre', 'City Views'],
  },
  {
    name: 'Zostel Delhi',
    area: 'Paharganj',
    category: '★★★★ Budget / Hostel',
    price: '₹600 – ₹2,500 / night',
    img: delhiMetro,
    imgAlt: 'Delhi Metro near Paharganj',
    highlight: 'India\'s most beloved backpacker hostel chain. Brilliantly located near New Delhi Railway Station and Paharganj. A rooftop terrace, vibrant social events, and clean dorm rooms make this the ultimate budget base.',
    tags: ['Social Atmosphere', 'Dorm & Private Rooms', 'Rooftop Terrace', 'Travel Desk'],
  },
  {
    name: 'Bloom Rooms @ Jan Path',
    area: 'Connaught Place',
    category: '★★★★ Mid-Range Boutique',
    price: '₹3,500 – ₹7,000 / night',
    img: yamuna,
    imgAlt: 'Boutique hotel Delhi',
    highlight: 'A beautifully designed boutique hotel with minimalist interiors inspired by Delhi\'s geography. The rooftop café overlooking the city\'s skyline is one of the most romantic spots in central Delhi.',
    tags: ['Designer Interiors', 'Rooftop Café', 'Central Location', 'Great Breakfast'],
  },
];

const neighborhoods = [
  { dot: '🔵', name: 'Connaught Place', desc: 'Central hub, great for business travelers and heritage tourists. Walking distance to major landmarks.' },
  { dot: '🟡', name: 'Paharganj',       desc: 'Backpacker paradise, 2 mins from New Delhi Railway Station. Budget hotels, vibrant street life.' },
  { dot: '🟠', name: 'Karol Bagh',      desc: 'Shopping and mid-range hotels, very well connected by Metro. A true Delhi neighbourhood.' },
  { dot: '🟢', name: 'South Delhi',     desc: 'Hauz Khas, GK, Defence Colony — upscale and quiet. Best cafés and restaurants in the city.' },
  { dot: '⚪', name: 'Chanakyapuri',    desc: 'Embassy district. Luxury hotels, peaceful tree-lined avenues, close to government monuments.' },
  { dot: '✈️', name: 'Aerocity / IGI',  desc: 'Next to the airport. Perfect for early departures, layovers, or business stays without city traffic.' },
];

export default function Hotels() {
  return (
    <section id="hotels">
      <div className="container">

        <div className="section-header reveal">
          <div className="badge">🏨 Where to Stay</div>
          <h2 className="display-lg text-gradient-warm">Best Hotels in Delhi</h2>
          <hr className="divider divider-center" />
          <p>
            Whether you seek the regal splendour of a heritage palace, the quiet luxury of a garden 
            villa, or the camaraderie of a backpacker hostel — Delhi's accommodation spectrum is 
            extraordinary. With thousands of options spanning all budgets, styles, and neighbourhoods, 
            the only challenge is choosing. Our AI guide can help you pick based on your exact needs.
          </p>
        </div>

        <div className="hotels-grid" style={{ marginBottom: '4rem' }}>
          {hotels.map((h, i) => (
            <div key={i} className={`hotel-card reveal d${Math.min(i % 3 + 1, 6)}`}>
              <div className="hotel-img">
                <img src={h.img} alt={h.imgAlt} />
                <div className="hotel-img-caption">{h.category}</div>
              </div>
              <div className="hotel-body">
                <h3>{h.name}</h3>
                <div className="hotel-area">📍 {h.area}</div>
                <div className="hotel-price">{h.price}</div>
                <p>{h.highlight}</p>
                <div className="hotel-tags">
                  {h.tags.map(t => <span key={t} className="hotel-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Neighbourhood Guide */}
        <div className="reveal"
          style={{ background: 'rgba(3,4,94,0.4)', border: '1px solid rgba(0,180,216,0.15)', borderRadius: 'var(--card-radius)', padding: '2.5rem' }}>
          <h3 className="display-md reveal" style={{ color: 'var(--pale)', marginBottom: '0.5rem' }}>
            Choosing the Right Neighbourhood
          </h3>
          <p className="body-md text-muted reveal" style={{ marginBottom: '1.75rem', maxWidth: '640px' }}>
            Delhi is an enormous city with very distinct neighbourhoods, each with its own personality 
            and travel advantages. Choosing wisely will save you hours of transit time.
          </p>
          <div className="nbhd-grid">
            {neighborhoods.map((n, i) => (
              <div key={i} className={`nbhd-card reveal d${i + 1}`}>
                <span className="nbhd-dot">{n.dot}</span>
                <div>
                  <h5>{n.name}</h5>
                  <p>{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
