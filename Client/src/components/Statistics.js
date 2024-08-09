import React from "react";
import "../styles/Statistics.css";
import Img1 from "../img/stat1.jpg";
import Img2 from "../img/stat2.jpg";
import Img3 from "../img/stat3.jpg";
import Img4 from "../img/stat4.jpg";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h2 className="statistics-title">Our Statistics</h2>
      <div className="statistics-grid">
        <div className="stat-item stat-item-1">
          <div className="stat-info">
            <span className="stat-number stat-number-1">3,35,990</span>
            <span className="stat-label stat-label-1">Loans</span>
          </div>
          <div className="stat-image-container">
            <img
              src={Img1}
              alt="Loans"
              className="stat-image animate__animated animate__pulse animate__delay-2s animate__infinite animate__slower"
            />
          </div>
        </div>
        <div className="stat-item stat-item-2">
          <div className="stat-image-container">
            <img
              src={Img2}
              alt="Customers"
              className="stat-image animate__animated animate__pulse animate__delay-2s animate__infinite animate__slower"
            />
          </div>
          <div className="stat-info">
            <span className="stat-number stat-number-2">3,13,621</span>
            <span className="stat-label stat-label-2">Customers</span>
          </div>
        </div>
        <div className="stat-item stat-item-3">
          <div className="stat-info">
            <span className="stat-number stat-number-3">494</span>
            <span className="stat-label stat-label-3">Payment Plans</span>
          </div>
          <div className="stat-image-container">
            <img
              src={Img3}
              alt="Payment Plans"
              className="stat-image animate__animated animate__pulse animate__delay-2s animate__infinite animate__slower"
            />
          </div>
        </div>
        <div className="stat-item stat-item-4">
          <div className="stat-image-container">
            <img
              src={Img4}
              alt="Payments Made"
              className="stat-image animate__animated animate__pulse animate__delay-2s animate__infinite animate__slower"
            />
          </div>
          <div className="stat-info">
            <span className="stat-number stat-number-4">37,40,962</span>
            <span className="stat-label stat-label-4">Payments Made</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
