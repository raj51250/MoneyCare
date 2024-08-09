import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CustomerSay.css";

const CustomerSay = () => {
  const testimonials = [
    {
      name: "Arbeen Bhatra",
      location: "Odisha",
      message:
        "I am honoured to have the pride of fact that you have the power to rise above any situation and deliver the best results no matter the circumstances.",
    },
    {
      name: "Raghunath Giri",
      location: "Mumbai",
      message:
        "Thanks for your kind support. I really appreciate Mrs. Porismita. She was very positive and helping nature.",
    },
    {
      name: "Ravindra Thakare",
      location: "Dhule",
      message:
        "I will give five star rating to Moneytor. I really say thanks to Aditya sir financial advisor. Thanks for support Moneytor.",
    },
    {
      name: "Suman Sharma",
      location: "Delhi",
      message:
        "Moneytor has been a lifesaver. Their team is incredibly supportive and knowledgeable. Highly recommend their services!",
    },
    {
      name: "Priya Singh",
      location: "Bangalore",
      message:
        "I was struggling with my debts, but Moneytor helped me find a way out. Their personalized approach is fantastic.",
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      message:
        "The financial advice I received from Moneytor was top-notch. They really care about their clients' well-being.",
    },
    {
      name: "Neha Gupta",
      location: "Pune",
      message:
        "I can't thank Moneytor enough for their help. They made the debt relief process so much easier for me.",
    },
    {
      name: "Rahul Verma",
      location: "Chennai",
      message:
        "Moneytor's team is very professional and helpful. They guided me through every step of the debt settlement process.",
    },
    {
      name: "Anjali Mehta",
      location: "Kolkata",
      message:
        "I am very satisfied with the services provided by Moneytor. They are truly experts in their field.",
    },
    {
      name: "Raj Pardeshi",
      location: "Pune",
      message:
        "Moneytor helped me regain control of my finances. Their support and guidance were invaluable.",
    },
    {
      name: "Madur Kanve",
      location: "Hyderabad",
      message:
        "I am very satisfied with the services provided by Moneytor. They are truly experts in their field.",
    },
    {
      name: "Akash Pardeshi",
      location: "Pune",
      message:
        "Moneytor helped me regain control of my finances. Their support and guidance were invaluable.",
    },
  ];

  return (
    <div className="customer-say-container">
      <h2>Our Customers Say</h2>
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="mat-card-content">
                <div className="cardTopText">
                  <p className="card-title">{testimonial.name}</p>
                  <p className="card-subtitle">{testimonial.location}</p>
                  <p className="card-description">“{testimonial.message}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
