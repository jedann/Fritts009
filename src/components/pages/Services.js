import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="service-box">
        <h2 className="service-heading">BASIC</h2>
        <img className="service-image" src="https://www.powerflex.com/wp-content/uploads/AdobeStock_300842845.jpeg.jpg" alt="Basic service" />
        <ul className="service-list">
          <li>Invest today and pay next to nothing in the future</li>
          <li>Enjoy 70% less on bills every month</li>
        </ul>
      </div>
      <div className="service-box">
        <h2 className="service-heading">STANDARD</h2>
        <img className="service-image" src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/05/featured-image-solar-panels-1.jpeg.jpg" alt="Standard service" />
        <ul className="service-list">
          <li>Pay 40% upfront</li>
          <li>Enjoy 30% less on bills every month</li>
        </ul>
      </div>
      <div className="service-box">
        <h2 className="service-heading">PREMIUM</h2>
        <img className="service-image" src="https://ae-solar.com/wp-content/uploads/2022/08/types-of-solar-panels-section-1.jpeg" alt="Premium service" />
        <ul className="service-list">
          <li>PAY nothing on your installation</li>
          <li>Enjoy 10% less on bills every month</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;