import React, { useState } from "react";
import "../styles/Slider.css";
import Imgg from "../img/main.png";

const Slider = () => {
  const [amount, setAmount] = useState(0);

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  return (
    <div className="slider-container">
      <div className="background-image">
        <img src={Imgg} alt="background" />
      </div>
      <div className="text-content">
        <p className="t1">get debt free with</p>
        <h1>Moneytor Care</h1>
        <p className="t2">Your path to a debt-free future</p>
      </div>
      <div className="slider-card">
        <p className="slider-title">Your Total Loan Amount</p>
        <p className="amount">₹{amount.toLocaleString()}</p>{" "}
        {/* Format the number with commas */}
        <input
          type="range"
          className="slider"
          min="0"
          max="100000" 
          step="100"
          value={amount}
          onChange={handleSliderChange}
        />
        <button className="care-button">Get Care</button>
      </div>
    </div>
  );
};

export default Slider;
