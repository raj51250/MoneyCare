import React from "react";
import "../styles/Works.css";
import lockIcon from "../img/mic.png";
import magnifyingGlassIcon from "../img/pageview.png";
import peopleIcon from "../img/handshake.png";
import flagIcon from "../img/free-black.png";

const Works = () => {
  return (
    <div className="title2">
      <h2>how it works</h2>
      <div className="works-container">
        <div className="work-item">
          <img src={lockIcon} alt="Lock Icon" />
          <h3>Talk to Us</h3>
          <p>Let us know your problem, we're here to help.</p>
        </div>
        <div className="work-item">
          <img src={magnifyingGlassIcon} alt="Magnifying Glass Icon" />
          <h3>We'll Analyse Your Case</h3>
          <p>
            Our AI model will analyse your debt and determine a relief program
            that is personalized for you and best suited for your goals.
          </p>
        </div>
        <div className="work-item">
          <img src={peopleIcon} alt="People Icon" />
          <h3>Join Us</h3>
          <p>
            Sign-up for a debt relief program with us and begin your debt-free
            journey.
          </p>
        </div>
        <div className="work-item">
          <img src={flagIcon} alt="Flag Icon" />
          <h3>Your Debt-Free Future</h3>
          <p>We go all the way with you until you are totally out of debt.</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
