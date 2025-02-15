// TShirtCard.js
import React from "react";
import TShirt from "../assets/tshirt.jpg";

const TShirtCard = ({ handlePayment }) => {
  return (
    <div className="card">
      <img src={TShirt} alt="T-Shirt" />
      <h3>US Polo T-Shirt</h3>
      <p>
        Price: ₹5000 <strike>₹6000</strike> <span>(17% off)</span>
      </p>
      <button className="button" onClick={() => handlePayment(5000)}>
        Buy Now
      </button>
    </div>
  );
};

export default TShirtCard;
