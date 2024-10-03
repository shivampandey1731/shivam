import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container2">
        <div className="box1">
          <h3>Quick links</h3>
          <a href="#">Home</a>
          <a href="#">Destination</a>
          <a href="#">Testimonial</a>
        </div>
        <div className="box1">
          <h3>Contact Info</h3>
          <a href="tel:+918369758101"> +91 8369758101 </a>
         
          <a href="mailto:shivampandey1531@gmail.com">
            shivampandey1531@gmail.com
          </a>
          <a href="https://maps.app.goo.gl/5gmHtaK4CUsvZFRv6">Mumbai, India - 421605</a>
        </div>
        <div className="box1">
          <h3>Follow Us</h3>
          <a
            href="https://www.instagram.com/_.shivampandey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-pandey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          
        </div>
      </div>
      <div className="credit">
        Created by <span>shivam pandey </span> @ all rights reserved!
      </div>
    </footer>
  );
};

export default Footer;;