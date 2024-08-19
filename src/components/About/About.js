// About.js

import React from 'react';
import './About.css';
import restaurantImage from './restaurant.jpg'; // Import the restaurant image

function About() {
  return (
    <div className="about">
      <div className="about-card">
        <div className="about-image">
          <img src={restaurantImage} alt="Restaurant" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
          MULINE! Established in 2005, we have been serving delicious meals made from the freshest ingredients. 
          Our journey began with a passion for culinary excellence, inspired by the diverse flavors from around the world. 
          Today, we pride ourselves on being a multi-cuisine restaurant, offering a delightful variety of flavors to tantalize your taste buds. 
          Our vision is to create memorable dining experiences all throught the Nation.
          </p>
        </div>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p>"Amazing food and excellent service! Will definitely visit again."</p>
          <p className="customer">- kishore</p>
        </div>
        <div className="review">
          <p>"One of the best restaurants in town. Highly recommended!"</p>
          <p className="customer">- Alankrith</p>
        </div>
        <div className="review">
          <p>"Fresh ingredients and creative menu options. Had a wonderful dining experience."</p>
          <p className="customer">- Tarun</p>
        </div>
        {/* Add more reviews as needed */}
      </div>
    </div>
  );
}

export default About;
