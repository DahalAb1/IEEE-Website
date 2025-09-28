import './HeroSection.css';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Main Title */}
          <h1 className="hero-title fade-in">
            IEEE Texas State
            <span className="title-highlight"> University</span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle fade-in fade-in-delay-1">
            Empowering future engineers through innovation, collaboration, and technological excellence. 
            Join us in shaping the future of technology at Texas State University.
          </p>

          {/* Stats */}
          <div className="hero-stats fade-in fade-in-delay-2">
            <div className="stat-item">
              <div className="stat-number">X no of +</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">x no of +</div>
              <div className="stat-label">Some metric specified</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">x no of +</div>
              <div className="stat-label">Industry Partners if any</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-actions fade-in fade-in-delay-3">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('events')}
            >
              Upcoming Events
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Scroll to explore</p>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="hero-visual">
          <div className="visual-container">
            <div className="ieee-logo-large">
              <div className="logo-ring ring-1"></div>
              <div className="logo-ring ring-2"></div>
              <div className="logo-ring ring-3"></div>
              <div className="logo-center">
                <span className="logo-ieee">IEEE</span>
              </div>
            </div>
            
            {/* Tech Icons */}
            <div className="tech-icons">
              <div className="tech-icon icon-1">⚡</div>
              <div className="tech-icon icon-2">🔧</div>
              <div className="tech-icon icon-3">💡</div>
              <div className="tech-icon icon-4">🚀</div>
              <div className="tech-icon icon-5">⚙️</div>
              <div className="tech-icon icon-6">🔬</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;