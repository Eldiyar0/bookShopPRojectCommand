import React from "react";
import img3 from "../../img/3.png";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="about_h1">About Us</h1>
        <div className="about">
          <img src={img3} alt="" />
          <div className="about-text">
            <p>
              We believe that books have the power to change lives, and <br />{" "}
              we're dedicated to helping our customers find the perfect <br />{" "}
              book for them. Whether you're looking for an escape from <br />{" "}
              reality, an educational read, or a book to inspire you, we've{" "}
              <br /> got you covered. <br />
              <br /> Thank you for choosing to shop with us. We look forward to{" "}
              <br />
              helping you discover your next favorite book!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
