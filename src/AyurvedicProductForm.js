import React, { useState } from 'react';
import './AyurvedicProductForm.css';

function AyurvedicProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    // Here you can add logic to send the form data to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="product">Product of Interest:</label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">Select a product</option>
          <option value="Ayurvedic Superfood Range">Ayurvedic Superfood Range</option>
          <option value="Patent Range - Immunity Booster">Patent Range - Immunity Booster</option>
          <option value="Patent Range - Joint Care Formula">Patent Range - Joint Care Formula</option>
          <option value="Patent Range - Digestive Harmony">Patent Range - Digestive Harmony</option>
          <option value="Patent Range - Stress Relief Elixir">Patent Range - Stress Relief Elixir</option>
          <option value="Patent Range - Hair Vitality Serum">Patent Range - Hair Vitality Serum</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>
      <button type="submit">Submit Inquiry</button>
    </form>
  );
}

export default AyurvedicProductForm;