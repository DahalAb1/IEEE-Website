import './OfficersSection.css';

interface Officer {
  id: number;
  name: string;
  position: string;
  email: string;
  major: string;
  year: string;
  bio: string;
  image?: string;
}

const OfficersSection = () => {
  const officers: Officer[] = [
    {
      id: 1,
      name: "Name here",
      position: "President",
      email: "president@ieee.txst.edu",
      major: "Computer Engineering",
      year: "Senior",
      bio: "some stuff here"
    },
    {
      id: 2,
      name: "Name here",
      position: "Vice President",
      email: "vp@ieee.txst.edu",
      major: "Electrical Engineering",
      year: "Junior",
      bio: "some stuff here"
    },
    {
      id: 3,
      name: "Name here",
      position: "Secretary",
      email: "secretary@ieee.txst.edu",
      major: "Computer Science",
      year: "Sophomore",
      bio: "some stuff here"
    },
    {
      id: 4,
      name: "Name here",
      position: "Treasurer",
      email: "treasurer@ieee.txst.edu",
      major: "Software Engineering",
      year: "Junior",
      bio: "some stuff here"
    },
    {
      id: 5,
      name: "Name here",
      position: "Events Coordinator",
      email: "events@ieee.txst.edu",
      major: "Computer Engineering",
      year: "Senior",
      bio: "some stuff here"
    },
    {
      id: 6,
      name: "Name here",
      position: "Public Relations",
      email: "pr@ieee.txst.edu",
      major: "Computer Science",
      year: "Junior",
      bio: "some stuff here"
    }
  ];

  const getPositionIcon = (position: string) => {
    switch (position.toLowerCase()) {
      case 'president': return '👑';
      case 'vice president': return '🎖️';
      case 'secretary': return '📝';
      case 'treasurer': return '💰';
      case 'events coordinator': return '📅';
      case 'public relations': return '📢';
      default: return '⭐';
    }
  };

  return (
    <section id="officers" className="officers-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in">
          <h2 className="section-title">Meet Our Officers</h2>
          <p className="section-subtitle">
            Dedicated leaders committed to advancing IEEE TXST and supporting our members
          </p>
        </div>

        {/* Officers Grid */}
        <div className="officers-grid">
          {officers.map((officer, index) => (
            <div 
              key={officer.id} 
              className={`officer-card fade-in fade-in-delay-${(index % 3) + 1}`}
            >
              {/* Officer Avatar */}
              <div className="officer-avatar">
                <div className="avatar-circle">
                  <span className="avatar-text">
                    {officer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="position-badge">
                  <span className="position-icon">{getPositionIcon(officer.position)}</span>
                </div>
              </div>

              {/* Officer Info */}
              <div className="officer-info">
                <h3 className="officer-name">{officer.name}</h3>
                <div className="officer-position">{officer.position}</div>
                
                <div className="officer-details">
                  <div className="detail-item">
                    <span className="detail-label">Major:</span>
                    <span className="detail-value">{officer.major}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{officer.year}</span>
                  </div>
                </div>

                <p className="officer-bio">{officer.bio}</p>

                {/* Contact Info */}
                <div className="officer-contact">
                  <a href={`mailto:${officer.email}`} className="contact-btn">
                    <span className="contact-icon">✉️</span>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="join-team-cta fade-in fade-in-delay-3">
          <h3>Want to Join Our Leadership Team?</h3>
          <p>
            We're always looking for passionate students to help lead IEEE TXST. 
            Officer positions become available each semester, and we welcome fresh ideas and perspectives.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Learn About Positions</button>
            <button className="btn btn-secondary">Contact Leadership</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficersSection;