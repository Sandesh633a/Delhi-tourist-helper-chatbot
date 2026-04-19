import chandniChowk from '../assets/images/ChandniChowk.jpeg';

const dishes = [
  {
    emoji: '🥘',
    name: 'Butter Chicken (Murgh Makhani)',
    origin: 'Invented in Delhi, 1950s · Moti Mahal, Daryaganj',
    desc: 'Perhaps the most beloved Indian dish worldwide, Butter Chicken was accidentally invented in Delhi in the 1950s at the legendary Moti Mahal restaurant. Tender tandoor-roasted chicken is simmered in a luxuriously rich sauce of tomatoes, butter, and cream, yielding a velvety, mildly sweet sauce with a characteristic orange hue. Its inventor, Kundan Lal Gujral, could never have imagined that his happy accident would become the world\'s most ordered Indian dish.',
  },
  {
    emoji: '🫔',
    name: 'Paranthe Wali Gali Paranthas',
    origin: 'Since 1875 · Chandni Chowk, Old Delhi',
    desc: 'Tucked inside the bustling lanes of Chandni Chowk is a narrow alley called Paranthe Wali Gali — literally "the alley of flatbreads." Operating since 1875, the shops here serve paranthas stuffed with everything from paneer (cottage cheese) to rabri (sweet condensed milk) to seven types of dal. They arrive sizzling with pure ghee, accompanied by spiced chutneys and chilled yogurt. This is a living culinary museum of Old Delhi.',
  },
  {
    emoji: '🦜',
    name: 'Nihari',
    origin: 'Mughal Era · Al Jawahar, Matia Mahal',
    desc: 'A slow-cooked stew of beef or lamb shank, Nihari was historically made overnight and served at dawn (the word derives from "Nahar" — morning in Arabic). The broth is intensely flavoured with over 25 spices including mace, star anise, cardamom, and bone marrow, creating extraordinary depth. Served with naan and topped with ginger, green chillies, and fried onions — it is the definitive Old Delhi breakfast.',
  },
  {
    emoji: '🌮',
    name: 'Chole Bhature',
    origin: 'Delhi\'s Quintessential Breakfast · Paharganj',
    desc: 'The quintessential Delhi breakfast — spicy, tangy chickpea curry (chole) paired with puffed, deep-fried bread (bhature) that is crisp on the outside and pillowy soft inside. A plate from Sita Ram Diwan Chand in Paharganj is a rite of passage. The chickpeas are cooked with black tea and tamarind for a distinctive dark colour and sour-tangy punch that is unlike any other version you will find elsewhere in India.',
  },
  {
    emoji: '🍢',
    name: 'Seekh Kebab',
    origin: 'Mughal Imperial Kitchens · Karim\'s, Jama Masjid',
    desc: 'A legacy of Mughal culinary excellence, the Seekh Kebab is minced mutton blended with ginger, garlic, and over 15 secret spices, moulded around iron skewers and roasted in a blazing tandoor. The exterior chars beautifully while the inside stays melt-in-the-mouth tender. Karim\'s near Jama Masjid — established in 1913 by descendants of Mughal imperial cooks — serves what many consider the definitive version of this royal dish.',
  },
  {
    emoji: '🌊',
    name: 'Gol Gappa (Pani Puri)',
    origin: 'Every Corner in Delhi · Khan Market, CP',
    desc: 'Delhi\'s version is unique — hollow crisp puris stuffed with mashed potatoes and chickpeas, filled on the spot with a sharp, mint-and-tamarind water that is almost aggressively tart. The explosion of flavours in one tiny bite is indescribable. Each vendor has their own secret water recipe, so sampling 5 different vendors in one walk of Connaught Place is the only way to truly understand the spectrum of this beloved street snack.',
  },
  {
    emoji: '🍮',
    name: 'Daulat Ki Chaat',
    origin: 'Winter Only (Nov–Feb) · Chandni Chowk mornings',
    desc: 'One of the most ethereal foods in the world — Daulat Ki Chaat is a winter-only dessert made from whisked milk foam that literally dissolves on your tongue. Vendors collect dew overnight to whip the foam, which is then topped with saffron, khoya, and rabri. It is sold only in the morning hours, as the foam collapses by midday. Discovering it on a foggy January morning in Chandni Chowk feels like stumbling upon a culinary secret.',
  },
  {
    emoji: '🧁',
    name: 'Jalebi with Rabri',
    origin: 'Since 1884 · Old Famous Jalebi Wala, Chandni Chowk',
    desc: 'Hot, crisp, spiralling orange jalebis — immersed in sugar syrup and served with thick, creamy rabri — are among Delhi\'s most beloved sweet indulgences. Old Famous Jalebi Wala in Chandni Chowk has been frying these spirals since 1884 using wheat flour batter fermented for a full 24 hours. The contrast of a warm, crispy jalebi with chilled, cardamom-scented rabri is a transcendental experience.',
  },
];

const restaurants = [
  { name: 'Karim\'s',          area: 'Jama Masjid',     type: 'Mughal Cuisine',     price: '₹₹',   rating: '★★★★★' },
  { name: 'Moti Mahal',        area: 'Daryaganj',        type: 'North Indian',       price: '₹₹',   rating: '★★★★★' },
  { name: 'Indian Accent',     area: 'Lodhi Road',       type: 'Modern Indian',      price: '₹₹₹₹', rating: '★★★★★' },
  { name: 'Saravana Bhavan',   area: 'Connaught Place',  type: 'South Indian Veg',   price: '₹',    rating: '★★★★' },
  { name: 'Bukhara, ITC Maurya', area: 'Chanakyapuri',  type: 'Frontier Cuisine',   price: '₹₹₹₹', rating: '★★★★★' },
  { name: 'Al Jawahar',        area: 'Jama Masjid',      type: 'Old Delhi Mughlai',  price: '₹',    rating: '★★★★' },
];

export default function Food() {
  return (
    <section id="food" className="section-alt">
      <div className="container">

        <div className="section-header reveal">
          <div className="badge">🍛 The Street Food Capital</div>
          <h2 className="display-lg text-gradient-warm">Delhi's Legendary Food Culture</h2>
          <hr className="divider divider-center" />
          <p>
            Delhi is, without question, the street food capital of India. The city's culinary 
            identity is a glorious fusion of Mughal imperial kitchens perfected over centuries, 
            Punjabi home cooking bursting with robust flavours, South Indian vegetarian traditions, 
            and an innovative modern fine-dining scene that is drawing international Michelin-level 
            attention. Whether your budget is ₹30 or ₹30,000, Delhi will feed your soul.
          </p>
        </div>

        {/* Banner image */}
        <div className="food-hero-img reveal">
          <img src={chandniChowk} alt="Chandni Chowk street food market" />
          <div className="food-hero-img-overlay">
            <p>"Where every lane is a recipe and every corner is a kitchen"</p>
          </div>
        </div>

        {/* Dishes grid */}
        <h3 className="display-md reveal" style={{ color: 'var(--pale)', marginBottom: '1.5rem' }}>
          8 Iconic Delhi Dishes You Must Try
        </h3>
        <div className="food-grid" style={{ marginBottom: '3rem' }}>
          {dishes.map((d, i) => (
            <div key={i} className={`food-item reveal d${Math.min(i % 2 + 1, 6)}`}>
              <div className="food-emoji">{d.emoji}</div>
              <div className="food-text">
                <h4>{d.name}</h4>
                <div className="food-origin">{d.origin}</div>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurants */}
        <div className="reveal">
          <h3 className="display-md" style={{ color: 'var(--pale)', marginBottom: '0.5rem' }}>
            Top Restaurants in Delhi
          </h3>
          <p className="body-md text-muted" style={{ marginBottom: '0' }}>
            From centuries-old Mughal dining houses to world-renowned modern Indian restaurants, 
            Delhi offers unparalleled dining experiences across every budget tier.
          </p>
        </div>
        <div className="resto-grid">
          {restaurants.map((r, i) => (
            <div key={i} className={`resto-card reveal d${i + 1}`}>
              <div className="resto-icon">🍽️</div>
              <div className="resto-info">
                <h5>{r.name}</h5>
                <div className="resto-area">{r.area} · {r.type}</div>
                <div className="resto-bottom">
                  <span className="resto-stars">{r.rating}</span>
                  <span className="resto-price">{r.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
