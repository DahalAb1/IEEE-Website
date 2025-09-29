import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import OfficersSection from './components/OfficersSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Beautiful Floating Elements */}
      <div className="floating-blob" style={{ top: '10%', left: '10%' }}></div>
      <div className="floating-blob" style={{ top: '60%', right: '10%' }}></div>
      <div className="floating-blob" style={{ bottom: '20%', left: '60%' }}></div>
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <OfficersSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
