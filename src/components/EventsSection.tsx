import { useState } from 'react';
import './EventsSection.css';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'upcoming' | 'past';
  category: 'workshop' | 'networking' | 'competition' | 'social';
  image?: string;
}

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const events: Event[] = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "November 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Engineering Building, Room 201",
      description: "Join us for an hands-on workshop covering the fundamentals of AI and machine learning. Learn about neural networks, data preprocessing, and build your first ML model.",
      type: 'upcoming',
      category: 'workshop'
    },
    {
      id: 2,
      title: "Industry Career Fair",
      date: "November 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Student Union Building",
      description: "Network with top tech companies and explore internship and full-time opportunities. Bring your resume and dress professionally!",
      type: 'upcoming',
      category: 'networking'
    },
    {
      id: 3,
      title: "Robotics Competition",
      date: "December 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "STEM Center",
      description: "Compete in our annual robotics challenge! Teams will design and build robots to complete various tasks. Prizes for top performers.",
      type: 'upcoming',
      category: 'competition'
    },
    {
      id: 4,
      title: "IoT Development Bootcamp",
      date: "October 20, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Computer Science Lab",
      description: "Intensive bootcamp on Internet of Things development. Participants built smart devices using Arduino and Raspberry Pi.",
      type: 'past',
      category: 'workshop'
    },
    {
      id: 5,
      title: "Fall Social Mixer",
      date: "September 15, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Student Center Ballroom",
      description: "Great turnout at our fall social event! Members connected over food, games, and shared their summer internship experiences.",
      type: 'past',
      category: 'social'
    },
    {
      id: 6,
      title: "Cybersecurity Workshop",
      date: "September 8, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Engineering Building, Room 105",
      description: "Comprehensive workshop on cybersecurity fundamentals, ethical hacking, and network security best practices.",
      type: 'past',
      category: 'workshop'
    }
  ];

  const filteredEvents = events.filter(event => event.type === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'workshop': return '🔧';
      case 'networking': return '🤝';
      case 'competition': return '🏆';
      case 'social': return '🎉';
      default: return '📅';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'workshop': return '#0066cc';
      case 'networking': return '#00aa44';
      case 'competition': return '#ff6600';
      case 'social': return '#cc0066';
      default: return '#666666';
    }
  };

  return (
    <section id="events" className="events-section section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-in">
          <h2 className="section-title">Events & Activities</h2>
          <p className="section-subtitle">
            Stay connected with our vibrant community through exciting events, workshops, and networking opportunities
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="events-tabs fade-in fade-in-delay-1">
          <button 
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <span className="tab-icon">📅</span>
            Upcoming Events
            <span className="tab-count">
              {events.filter(e => e.type === 'upcoming').length}
            </span>
          </button>
          <button 
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <span className="tab-icon">📚</span>
            Past Events
            <span className="tab-count">
              {events.filter(e => e.type === 'past').length}
            </span>
          </button>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`event-card fade-in fade-in-delay-${(index % 3) + 2}`}
            >
              {/* Category Badge */}
              <div 
                className="category-badge"
                style={{ backgroundColor: getCategoryColor(event.category) }}
              >
                <span className="category-icon">{getCategoryIcon(event.category)}</span>
                <span className="category-text">{event.category}</span>
              </div>

              {/* Event Content */}
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                
                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span className="detail-text">{event.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span className="detail-text">{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span className="detail-text">{event.location}</span>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                {/* Event Action */}
                <div className="event-action">
                  {event.type === 'upcoming' ? (
                    <button className="btn btn-primary">
                      Register Now
                    </button>
                  ) : (
                    <div className="event-status">
                      <span className="status-icon">✅</span>
                      <span className="status-text">Completed</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="events-cta fade-in fade-in-delay-3">
          <h3>Don't Miss Out!</h3>
          <p>
            Join our mailing list to stay updated on all IEEE TXST events and activities. 
            Be the first to know about workshops, competitions, and networking opportunities.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Subscribe to Updates</button>
            <button className="btn btn-secondary">View Calendar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;