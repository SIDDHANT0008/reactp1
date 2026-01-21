import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover Ancient Wisdom, Modern Wellness</h1>
        <p className="hero-subtitle">
          BNK Sattva Wellness brings you patented Ayurvedic formulations that blend traditional healing
          with cutting-edge research for optimal health and vitality.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Patented Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Natural Ingredients</span>
          </div>
        </div>
        <button className="hero-cta">Explore Our Products</button>
      </div>
      <div className="hero-image">
        <div className="floating-elements">
          <div className="floating-element elem1">🌿</div>
          <div className="floating-element elem2">🌸</div>
          <div className="floating-element elem3">🍃</div>
          <div className="floating-element elem4">🌺</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;