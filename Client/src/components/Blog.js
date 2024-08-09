import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Blog.css";
import Img7 from "../img/blobImg1.png";
import Img8 from "../img/blobImg2.png";
import Img9 from "../img/blobImg3.png";
import Img10 from "../img/blobImg4.png";
import Img11 from "../img/blobImg5.png";

const Blog = () => {
  const blogs = [
    {
      title: "What if you break the lender's trust and default on a loan",
      description: "by Moneytor | 6 Oct 2022",
      data: "read more...",
      image: Img7,
    },
    {
      title: "Here's why data automation is more important than ever",
      description: "by Moneytor | 13 Jul 2021",
      data: "read more...",
      image: Img8,
    },
    {
      title: "Indian retail lending space — what to expect in 2021",
      description: "by Moneytor | 7 Mar 2021",
      data: "read more...",
      image: Img9,
    },
    {
      title: "3 Ways in which Collections can Help Consumers",
      description: "by Moneytor | 5 June 2020",
      data: "read more...",
      image: Img10,
    },
    {
      title: "4 Ways Digital Debt Collection Can Help Your Business",
      description: "by Moneytor | 4 June 2020",
      data: "read more...",
      image: Img11,
    },
  ];
  const extendedBlogs = [...blogs, ...blogs, ...blogs];

  const [currentIndex, setCurrentIndex] = useState(blogs.length);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedBlogs.length - blogs.length : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedBlogs.length - 1 ? blogs.length : prevIndex + 1
    );
  };

  return (
    <div className="blog-section">
      <h2 className="blog-title">Blogs</h2>
      <div className="blog-slider">
        <button className="slider-button prev" onClick={handlePrev}>
          {"<"}
        </button>
        <div
          className="blog-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / blogs.length)}%)`,
          }}
        >
          {extendedBlogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.description} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <span>{blog.data}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Blog;
