import React from "react";
import "../styles/Custmor.css";

const Customer = ({
  name,
  rating,
  comment,
  debt,
  payment,
  length,
  savings,
}) => {
  return (
    <div className="customer-card">
      <div className="customer-header">
        <span className="customer-icon">👤</span>
        <span className="customer-name">{name}</span>
        <span className="customer-rating">{"★".repeat(rating)}</span>
      </div>
      <p className="customer-comment">{comment}</p>
      <div className="customer-stats">
        <div className="stat">
          <p className="stat-label">total debt</p>
          <p className="stat-value">{debt}</p>
        </div>
        <div className="stat">
          <p className="stat-label">monthly payment</p>
          <p className="stat-value">{payment}</p>
        </div>
        <div className="stat">
          <p className="stat-label">program length</p>
          <p className="stat-value">{length}</p>
        </div>
        <div className="stat">
          <p className="stat-label">total savings</p>
          <p className="stat-value">{savings}</p>
        </div>
      </div>
    </div>
  );
};

const CustomerList = () => {
  const customers = [
    {
      name: "Manoj",
      rating: 5,
      comment: "Manoj is excited to recommend Moneytor Care.",
      debt: "₹23,532",
      payment: "₹23,532",
      length: "12 months",
      savings: "₹11,149",
    },
    {
      name: "Sathvik",
      rating: 5,
      comment: "Sathvik is excited to recommend Moneytor Care.",
      debt: "₹21,65,435",
      payment: "₹20,347",
      length: "56 months",
      savings: "₹11,39,452",
    },
  ];

  return (
    <div className="title">
      <h2>meet our happy custmor :</h2>
      <div className="customer-list">
        {customers.map((customer, index) => (
          <Customer key={index} {...customer} />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
