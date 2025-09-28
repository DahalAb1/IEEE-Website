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
    // Add scroll effect to navigation
    const handleScroll = () => {
      const navigation = document.querySelector('.navigation');
      if (navigation) {
        if (window.scrollY > 100) {
          navigation.classList.add('scrolled');
        } else {
          navigation.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <OfficersSection />
      <Footer />
    </div>
  );
}

export default App;
