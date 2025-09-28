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
    // Intersection Observer for beautiful animations
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

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Advanced Mouse Tracking for Cards - Stripe Style
    const handleCardMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10; // Tilt based on Y position
      const rotateY = (centerX - x) / 10; // Tilt based on X position
      
      const scale = 1.05;
      const translateZ = 20;
      
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
        translateZ(${translateZ}px)
        translateY(-8px)
      `;
      
      card.classList.add('mouse-tracking');
    };

    const handleCardMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = '';
      card.classList.remove('mouse-tracking');
    };

    const handleCardMouseEnter = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transformStyle = 'preserve-3d';
      card.style.willChange = 'transform';
    };

    // Add mouse tracking to all cards
    const addCardListeners = () => {
      const cards = document.querySelectorAll('.card, .event-card, .officer-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', handleCardMouseMove as EventListener);
        card.addEventListener('mouseleave', handleCardMouseLeave as EventListener);
        card.addEventListener('mouseenter', handleCardMouseEnter as EventListener);
      });
    };

    // Initial setup
    addCardListeners();

    // Re-add listeners when DOM changes (for dynamically added cards)
    const domObserver = new MutationObserver(() => {
      addCardListeners();
    });

    domObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      domObserver.disconnect();
      const cards = document.querySelectorAll('.card, .event-card, .officer-card');
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleCardMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleCardMouseLeave as EventListener);
        card.removeEventListener('mouseenter', handleCardMouseEnter as EventListener);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Beautiful Floating Elements - Stripe Style */}
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