import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>Welcome to Rasya</h1>
        <p>Flavors That Speak, Happiness That Lasts</p>
      </div>

      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          At <strong>Rasya</strong>, we believe that food is more than just a
          meal—it's an experience that brings people together. Our mission is to
          celebrate the rich diversity of flavors and deliver them to your table
          with love, freshness, and care.
        </p>

        <h2>Our Philosophy</h2>
        <p>
          We are inspired by the Sanskrit word “Rasa,” meaning taste, essence,
          and delight. True to our name, Rasya is a journey of flavors, blending
          tradition and modernity to create moments of joy in every bite.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Curated selections of fresh and authentic cuisines</li>
          <li>Fast and reliable service</li>
          <li>Passion for quality and customer satisfaction</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
