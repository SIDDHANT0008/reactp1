import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';
import AyurvedicProductForm from './AyurvedicProductForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="products">
        <Products />
      </div>
      <section id="contact">
        <h2>Contact Us</h2>
        <AyurvedicProductForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;