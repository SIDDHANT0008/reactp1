import React from 'react';
import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Ayurvedic Superfood Range',
      description: 'Our premium Ayurvedic Superfood Range combines ancient wisdom with modern nutrition. Featuring a blend of organic herbs, superfoods, and Ayurvedic ingredients designed to promote holistic wellness, boost immunity, and support overall health.',
      features: [
        'Organic and sustainably sourced ingredients',
        'Traditional Ayurvedic formulations',
        'Supports digestive health and detoxification',
        'Rich in antioxidants and essential nutrients',
        'Suitable for all ages and dietary preferences'
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '₹1,299'
    },
    {
      id: 2,
      name: 'Patent Range - Immunity Booster',
      description: 'Our patented Immunity Booster formula is a revolutionary blend of rare herbs and minerals that strengthen your body\'s natural defense mechanisms. Clinically tested and backed by traditional Ayurvedic wisdom.',
      features: [
        'Patented formulation with unique herb combinations',
        'Enhances immune system response',
        'Reduces susceptibility to common infections',
        'Supports respiratory health',
        '100% natural and safe for long-term use'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '₹899'
    },
    {
      id: 3,
      name: 'Patent Range - Joint Care Formula',
      description: 'Experience relief from joint discomfort with our patented Joint Care Formula. This innovative Ayurvedic blend targets inflammation at its source while promoting cartilage health and mobility.',
      features: [
        'Patented anti-inflammatory compounds',
        'Supports joint flexibility and mobility',
        'Reduces joint stiffness and pain',
        'Promotes cartilage regeneration',
        'Safe for long-term joint health maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '₹1,499'
    },
    {
      id: 4,
      name: 'Patent Range - Digestive Harmony',
      description: 'Our patented Digestive Harmony capsules combine probiotics with traditional Ayurvedic herbs to create the ultimate digestive wellness solution. Say goodbye to digestive discomfort!',
      features: [
        'Patented probiotic-Ayurvedic synergy',
        'Improves gut microbiome balance',
        'Relieves bloating and indigestion',
        'Supports nutrient absorption',
        'Gentle and effective for sensitive stomachs'
      ],
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '₹749'
    },
    {
      id: 5,
      name: 'Patent Range - Stress Relief Elixir',
      description: 'In today\'s fast-paced world, our patented Stress Relief Elixir provides natural calm and mental clarity. A unique blend of adaptogenic herbs that help you manage stress effectively.',
      features: [
        'Patented adaptogenic herb formulation',
        'Reduces stress and anxiety naturally',
        'Improves focus and mental clarity',
        'Promotes restful sleep',
        'Non-habit forming and safe for daily use'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '₹1,099'
    },
    {
      id: 6,
      name: 'Patent Range - Hair Vitality Serum',
      description: 'Transform your hair with our patented Hair Vitality Serum. This Ayurvedic formula nourishes hair follicles, promotes healthy growth, and restores natural shine and strength.',
      features: [
        'Patented herbal extract blend',
        'Stimulates hair follicle regeneration',
        'Reduces hair fall and promotes growth',
        'Restores natural hair color and shine',
        'Suitable for all hair types'
      ],
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '₹1,299'
    }
  ];

  return (
    <div className="products-container">
      <h2>Our Ayurvedic Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="product-price">
                <span>{product.price}</span>
              </div>
              <button className="buy-now-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;