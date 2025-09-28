import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in">
          <h2 className="section-title">About IEEE TXST</h2>
          <p className="section-subtitle">
            Connecting students with technology, innovation, and professional growth
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-content">
          <div className="about-text fade-in fade-in-delay-1">
            <h3>Who We Are</h3>
            <p>
              About IEEE // need a standard prompt if there is
            </p>
            <p>
              Founded on the principles of advancing technology for humanity, our chapter focuses on 
              fostering innovation, encouraging collaboration, and preparing students for successful 
              careers in the rapidly evolving technology landscape. ( something like this)
            </p>
          </div>

          <div className="ieee-stats fade-in fade-in-delay-2">
            <div className="stat-card">
              <div className="stat-icon">🌐</div>
              <h4>Global Network</h4>
              <p>Part of IEEE's (some number here)+ member worldwide community</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <h4>Student Focus</h4>
              <p>Dedicated to Engineering student success</p>
            </div>
          </div>
        </div>

        {/* What We Do Cards */}
        <div className="what-we-do">
          <h3 className="subsection-title fade-in fade-in-delay-1">What We Do</h3>
          <div className="activity-cards">
            <div className="activity-card fade-in fade-in-delay-2">
              <div className="card-icon">
                <span className="icon">🔬</span>
              </div>
              <h4>Technical Workshops</h4>
              <p>
                Hands-on workshops covering cutting-edge technologies like AI, IoT, 
                robotics, and software development to enhance practical skills.
              </p>
            </div>

            <div className="activity-card fade-in fade-in-delay-3">
              <div className="card-icon">
                <span className="icon">🤝</span>
              </div>
              <h4>Industry Networking</h4>
              <p>
                Connect with industry professionals, alumni, and peers through networking 
                events, career fairs, and guest speaker sessions.
              </p>
            </div>

            <div className="activity-card fade-in fade-in-delay-2">
              <div className="card-icon">
                <span className="icon">🚀</span>
              </div>
              <h4>Innovation Projects</h4>
              <p>
                Collaborative projects that solve real-world problems while building 
                portfolio-worthy experiences and technical expertise.
              </p>
            </div>

            <div className="activity-card fade-in fade-in-delay-3">
              <div className="card-icon">
                <span className="icon">🏆</span>
              </div>
              <h4>Competitions</h4>
              <p>
                Participate in hackathons, coding competitions, and engineering challenges 
                to test skills and win recognition.
              </p>
            </div>

            <div className="activity-card fade-in fade-in-delay-2">
              <div className="card-icon">
                <span className="icon">📚</span>
              </div>
              <h4>Professional Development</h4>
              <p>
                Resume workshops, interview preparation, and certification programs to 
                boost career prospects and professional skills.
              </p>
            </div>

            <div className="activity-card fade-in fade-in-delay-3">
              <div className="card-icon">
                <span className="icon">🌟</span>
              </div>
              <h4>Leadership Opportunities</h4>
              <p>
                Take on leadership roles, organize events, and develop management skills 
                while contributing to the engineering community.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission-card fade-in fade-in-delay-1">
            <div className="card-header">
              <div className="card-icon-large">
                <span className="icon">🎯</span>
              </div>
              <h3>Our Mission</h3>
            </div>
            <p>
              To foster technological innovation and excellence in engineering by providing 
              students with opportunities for professional growth, technical skill development, 
              and meaningful connections within the global IEEE community.
            </p>
          </div>

          <div className="vision-card fade-in fade-in-delay-2">
            <div className="card-header">
              <div className="card-icon-large">
                <span className="icon">👁️</span>
              </div>
              <h3>Our Vision</h3>
            </div>
            <p>
              To be the premier student organization at Texas State University that bridges 
              the gap between academic learning and industry practice, preparing tomorrow's 
              technology leaders to advance technology for humanity.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta fade-in fade-in-delay-3">
          <h3>Ready to Join Us?</h3>
          <p>
            Become part of a community that's shaping the future of technology. 
            Whether you're interested in software, hardware, or emerging technologies, 
            there's a place for you in IEEE TXST.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get Involved</a>
            <a href="#events" className="btn btn-secondary">View Events</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;