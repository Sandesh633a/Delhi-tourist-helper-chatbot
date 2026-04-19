import redFort      from '../assets/images/redFort.jpeg';
import qutubMinar   from '../assets/images/qutubMinar.jpg';
import lotusTemple  from '../assets/images/lotusTemple.jpg';
import lodhiGarden  from '../assets/images/lodhiGarden.jpg';
import delhiMetro   from '../assets/images/delhiMetro.jpg';
import connaughtPl  from '../assets/images/connaughtPlace.jpg';
import chandniChowk from '../assets/images/ChandniChowk.jpeg';
import gateway      from '../assets/images/GateWayOfIndia.jpeg';
import yamuna       from '../assets/images/yamuna.jpg';

const places = [
  {
    name: 'Red Fort (Lal Qila)',
    tag: 'UNESCO Heritage',
    img: redFort,
    alt: 'Red Fort, Old Delhi',
    desc: 'The magnificent 17th-century Mughal fortress built by Shah Jahan. Rising to 33 metres, its red sandstone walls stretch over 2.5 km enclosing breathtaking palace complexes. Every Independence Day, India\'s Prime Minister addresses the nation from its ramparts.',
    meta: ['Metro: Chandni Chowk', '₹35 Indian / ₹500 Foreign', 'Tue–Sun: 9:30 AM – 4:30 PM'],
  },
  {
    name: 'Qutub Minar',
    tag: 'UNESCO Heritage',
    img: qutubMinar,
    alt: 'Qutub Minar tower',
    desc: 'World\'s tallest brick minaret at 72.5 metres, dating to 1193 CE. Built by Qutb ud-Din Aibak of the Mamluk dynasty, it stands as the first tower of Islamic architecture on the Indian subcontinent.',
    meta: ['Metro: Qutub Minar', '₹35 Indian / ₹550 Foreign', 'Sunrise to Sunset'],
  },
  {
    name: 'Lotus Temple',
    tag: 'Bahá\'í House of Worship',
    img: lotusTemple,
    alt: 'Lotus Temple architecture',
    desc: 'An architectural masterpiece shaped like a blooming lotus flower, open to people of all faiths. The 27 petals of marble open towards the sky and can accommodate 2,500 people simultaneously inside its serene hall.',
    meta: ['Metro: Kalkaji Mandir', 'Entry: Free', 'Tue–Sun: 9 AM – 7 PM'],
  },
  {
    name: 'Lodhi Garden',
    tag: 'Heritage Garden',
    img: lodhiGarden,
    alt: 'Lodhi Garden Delhi',
    desc: 'Nestled in the heart of New Delhi, this 90-acre garden is a masterpiece of landscaping dotted with 15th and 16th-century tombs of the Lodhi and Sayyid dynasties. A sanctuary of history surrounded by lush greenery.',
    meta: ['Metro: Jor Bagh', 'Entry: Free', '6 AM – 8 PM daily'],
  },
  {
    name: 'Delhi Metro',
    tag: 'World-Class Transit',
    img: delhiMetro,
    alt: 'Delhi Metro network',
    desc: 'One of the world\'s finest and most extensive metro systems spanning nearly 390 km with over 285 stations across 12 lines. The Metro is the fastest, safest, and most recommended way to navigate Delhi\'s vast geography.',
    meta: ['Trains every 3–5 min', 'Smart Card recommended', '6 AM – 11 PM daily'],
  },
  {
    name: 'Connaught Place',
    tag: 'Commercial Heart',
    img: connaughtPl,
    alt: 'Connaught Place circular market',
    desc: 'Designed by British architect Robert Tor Russell in 1933, this grand circular colonnaded shopping district is New Delhi\'s most vibrant commercial centre — filled with boutiques, restaurants, cinemas, and one of India\'s largest underground markets.',
    meta: ['Metro: Rajiv Chowk', 'Entry: Free', 'Open all days'],
  },
  {
    name: 'Chandni Chowk',
    tag: 'Historic Bazaar',
    img: chandniChowk,
    alt: 'Chandni Chowk old market Delhi',
    desc: 'One of the oldest and busiest markets in India, dating back to the 17th century under Shah Jahan. A labyrinthine world of spices, silver, textiles, street food, and the most authentic Mughal-era atmosphere you\'ll find anywhere.',
    meta: ['Metro: Chandni Chowk', 'Entry: Free', 'Mon–Sat: 9 AM – 8 PM'],
  },
  {
    name: 'Gateway of India',
    tag: 'Colonial Landmark',
    img: gateway,
    alt: 'Gateway colonial arch Delhi',
    desc: 'A grand colonial-era archway symbolising the grandeur of the British Empire in India. Made from yellow Kota stone and Indo-Saracenic architecture, it now serves as one of Delhi\'s most photographed heritage structures.',
    meta: ['Open 24 hours', 'Entry: Free', 'Best: Sunset & Evening'],
  },
  {
    name: 'Yamuna River Front',
    tag: 'Natural Heritage',
    img: yamuna,
    alt: 'Yamuna river Delhi',
    desc: 'The sacred Yamuna river — a tributary of the Ganges and one of the most important rivers in Indian mythology — flows through the eastern edge of Delhi. The river ghats at dawn offer a spiritual experience of remarkable quietude.',
    meta: ['Accessible from various ghats', 'Entry: Free', 'Best at sunrise'],
  },
];

const gems = [
  'Garden of Five Senses 🌸', 'Agrasen Ki Baoli 🌊', 'Tughlaqabad Fort 🏰',
  'National Museum 🏛️', 'Mehrauli Archaeological Park 🏺', 'Rashtrapati Bhavan 🏛️',
  'Lodi Garden 🌿', 'Safdarjung Tomb 🕌', 'Janpath Market 🛍️', 'Dilli Haat 🎨',
  'Garden of Five Senses 🌸', 'Agrasen Ki Baoli 🌊', 'Tughlaqabad Fort 🏰',
  'National Museum 🏛️', 'Mehrauli Archaeological Park 🏺', 'Rashtrapati Bhavan 🏛️',
  'Lodi Garden 🌿', 'Safdarjung Tomb 🕌', 'Janpath Market 🛍️', 'Dilli Haat 🎨',
];

export default function Places() {
  return (
    <section id="places">
      <div className="container">

        <div className="section-header reveal">
          <div className="badge">🗺️ Must-Visit Attractions</div>
          <h2 className="display-lg text-gradient-warm">Iconic Places of Delhi</h2>
          <hr className="divider divider-center" />
          <p>
            From towering Mughal monuments to sacred temples, from ancient bazaars to modern 
            architectural marvels — Delhi's historic and cultural landmarks are among the finest 
            in all of Asia. Each site carries its own universe of stories, art, and spiritual weight 
            accumulated over thousands of years of continuous civilisation.
          </p>
        </div>

        <div className="places-grid">
          {places.map((p, i) => (
            <div key={i} className={`place-card reveal d${Math.min(i % 3 + 1, 6)}`}>
              <div className="place-img">
                <img src={p.img} alt={p.alt} />
                <div className="place-img-overlay" />
                <span className="place-chip">{p.tag}</span>
              </div>
              <div className="place-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="place-meta">
                  {p.meta.map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="marquee-wrap reveal">
          <p className="marquee-label">Hidden Gems & Local Favourites</p>
          <div className="marquee-track">
            {gems.map((g, i) => (
              <span key={i} className="marquee-pill">{g}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
