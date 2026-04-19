const features = [
  { icon: '🗺️', title: 'Personalised Itineraries',    desc: 'Tell the AI your travel dates, group size, interests, and budget — receive a custom hour-by-hour Delhi plan tailored specifically for you.' },
  { icon: '🍛', title: 'Food Recommendations',         desc: 'Ask for the best biryani, best chaat, or best pure vegetarian restaurants — the bot knows every corner of Delhi\'s complex, layered food scene.' },
  { icon: '🏨', title: 'Hotel & Stay Guidance',        desc: 'From 5-star heritage palaces to budget backpacker hostels — get the best stay options based on your neighbourhood preference and budget.' },
  { icon: '🚇', title: 'Transport Navigation',         desc: 'Get Metro route recommendations, cab estimate ranges, auto-rickshaw tips, and Delhi HOHO bus information in seconds, conversation-style.' },
  { icon: '🎭', title: 'Events & Experiences',         desc: 'Find current festivals, light and sound shows, cultural performances, rooftop dinners, and off-the-beaten-path experiences happening in the city.' },
  { icon: '🌦️', title: 'Weather & Packing Tips',      desc: 'Season-aware advice on what to wear, what to carry, when to visit which landmark, and how to handle Delhi\'s extreme temperature swings.' },
];

const sampleQs = [
  '"Plan my 2-day Delhi trip as a solo traveller"',
  '"Best street food near Chandni Chowk?"',
  '"Budget hotels near India Gate?"',
  '"How to travel from IGI airport to Old Delhi?"',
  '"What is the best time to visit Red Fort?"',
  '"Things to do in Delhi in December?"',
];

export default function ChatbotSection() {
  return (
    <section id="chatbot" className="section-alt">
      <div className="container">

        <div className="section-header reveal">
          <div className="badge">🤖 Powered by Google Dialogflow</div>
          <h2 className="display-lg text-gradient-warm">Your Personal AI Delhi Guide</h2>
          <hr className="divider divider-center" />
          <p>
            Don't navigate Delhi alone — and don't rely on generic travel blogs written two years ago. 
            Our AI assistant is trained specifically on Delhi's tourism landscape and is available 
            around the clock to answer every question, craft every itinerary, and guide every 
            single step of your Delhi journey. Think of it as having a local expert in your pocket.
          </p>
        </div>

        {/* Feature cards */}
        <div className="chatbot-features">
          {features.map((f, i) => (
            <div key={i} className={`chat-feat reveal d${Math.min(i + 1, 6)}`}>
              <div className="chat-feat-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="chatbot-cta reveal">
          <div className="chatbot-avatar float">🤖</div>
          <h3>Start Your Delhi Journey Now</h3>
          <p>
            Click the chat bubble in the bottom-right corner of this page to begin a real-time 
            conversation with your AI Delhi guide. Ask anything — from "What should I see in 
            6 hours on a layover?" to "Where do I find Delhi's best winter Daulat Ki Chaat?" 
            — and get an expert, contextual answer in seconds.
          </p>

          <div className="sample-qs">
            {sampleQs.map(q => (
              <span key={q} className="sample-q">{q}</span>
            ))}
          </div>

          <div className="chatbot-cta">
            <div className="online-indicator">
              <span className="pulse-dot" />
              <span>AI is Online · Typical response under 2 seconds · Available in English & Hindi</span>
            </div>
            <p style={{ marginTop: '0.875rem', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
              👉 Look for the blue chat bubble icon at the bottom-right corner of this page to begin
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
