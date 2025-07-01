
import React from 'react';
import './VehiclesPage.css';

const VehiclesPage = () => {
  const vehicleTypes = [
    {
      id: 1,
      name: 'Cars',
      icon: '🚗',
      description: 'Standard parking spaces for sedans, hatchbacks, and SUVs',
      features: ['Compact & Mid-size', 'SUVs & Crossovers', 'Electric Vehicles', 'Luxury Cars']
    },
    {
      id: 2,
      name: 'Motorcycles',
      icon: '🏍️',
      description: 'Dedicated spaces for motorcycles and scooters',
      features: ['Sports Bikes', 'Cruisers', 'Scooters', 'Electric Bikes']
    },
    {
      id: 3,
      name: 'Bicycles',
      icon: '🚴',
      description: 'Secure bicycle parking with lock facilities',
      features: ['Mountain Bikes', 'Road Bikes', 'Electric Bikes', 'Folding Bikes']
    },
    {
      id: 4,
      name: 'Buses',
      icon: '🚌',
      description: 'Large parking areas for buses and coaches',
      features: ['City Buses', 'Tourist Coaches', 'School Buses', 'Mini Buses']
    },
    {
      id: 5,
      name: 'Trucks',
      icon: '🚛',
      description: 'Commercial parking for trucks and cargo vehicles',
      features: ['Delivery Trucks', 'Semi-Trailers', 'Pickup Trucks', 'Cargo Vans']
    },
    {
      id: 6,
      name: 'Vans',
      icon: '🚐',
      description: 'Medium-sized parking for vans and mini-buses',
      features: ['Cargo Vans', 'Passenger Vans', 'Minivans', 'Camper Vans']
    }
  ];

  const features = [
    {
      title: 'Smart Allocation',
      description: 'AI-powered system automatically assigns optimal parking slots',
      icon: '🤖'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor vehicle entry and exit with advanced sensors',
      icon: '📡'
    },
    {
      title: 'Mobile Integration',
      description: 'Seamless booking and payment through mobile app',
      icon: '📱'
    },
    {
      title: '24/7 Security',
      description: 'Comprehensive surveillance and security monitoring',
      icon: '🔒'
    }
  ];

  return (
    <div className="vehicles-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <img 
                src="https://www.ewaysservices.com/images/eways.jpg" 
                alt="Eways Services" 
                className="logo"
              />
              <h1 className="brand-name">At Parkkin</h1>
            </div>
            <nav className="nav">
              <a href="#home" className="nav-link">Home</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#vehicles" className="nav-link active">Vehicles</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              Smart Parking Solutions
              <span className="gradient-text">For Every Vehicle</span>
            </h2>
            <p className="hero-description">
              Advanced parking management system supporting all vehicle types with 
              intelligent allocation and real-time monitoring
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">6</div>
                <div className="stat-label">Vehicle Types</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Availability</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-content">
                  <div className="app-header">
                    <div className="app-title">Parkkin</div>
                    <div className="app-status">Connected</div>
                  </div>
                  <div className="app-content">
                    <div className="parking-map">
                      <div className="map-grid">
                        <div className="parking-slot occupied"></div>
                        <div className="parking-slot available"></div>
                        <div className="parking-slot occupied"></div>
                        <div className="parking-slot available"></div>
                        <div className="parking-slot available"></div>
                        <div className="parking-slot occupied"></div>
                      </div>
                    </div>
                    <div className="quick-actions">
                      <button className="action-btn">Find Slot</button>
                      <button className="action-btn">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="vehicle-types">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Supported Vehicle Types</h2>
            <p className="section-description">
              Our smart parking system accommodates all types of vehicles with 
              optimized slot allocation and competitive pricing
            </p>
          </div>
          <div className="vehicles-grid">
            {vehicleTypes.map(vehicle => (
              <div key={vehicle.id} className="vehicle-card">
                <div className="vehicle-icon">{vehicle.icon}</div>
                <h3 className="vehicle-name">{vehicle.name}</h3>
                <p className="vehicle-description">{vehicle.description}</p>
                <div className="vehicle-features">
                  {vehicle.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="book-btn">
                  <span>Book Slot</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Parkkin?</h2>
            <p className="section-description">
              Advanced technology meets user-friendly design for the ultimate parking experience
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience Smart Parking?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust Parkkin for their parking needs
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                Download App
              </button>
              <button className="cta-btn secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>Email: info@parkkin.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <p>Smart Parking</p>
              <p>Vehicle Management</p>
              <p>Real-time Monitoring</p>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <p>About Us</p>
              <p>Careers</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Eways Services Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehiclesPage;
