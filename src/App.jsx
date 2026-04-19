import { useEffect } from 'react'
import './index.css'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import AboutDelhi      from './components/AboutDelhi'
import Places          from './components/Places'
import Food            from './components/Food'
import DelhiInfo       from './components/DelhiInfo'
import Hotels          from './components/Hotels'
import TripPlan        from './components/TripPlan'
import ChatbotSection  from './components/ChatbotSection'
import Footer          from './components/Footer'

function App() {
  // Scroll reveal — watches ALL .reveal elements
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutDelhi />
        <Places />
        <Food />
        <DelhiInfo />
        <Hotels />
        <TripPlan />
        <ChatbotSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
