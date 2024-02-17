import React from "react";
import "./Section.css";
import img1 from "../../img/1.png";

const Genres = () => {
  return (
    <section id="cenres">
      <div className="container">
        <div className="cenres">
          <div className="cenres-main">
            <h3>Genres</h3>
            <h5>View all</h5>
          </div>
          <div className="cenres-blocks">
            <div className="cenres-block">
              <img src={img1} alt="" />
              <h5>Sci-Fi</h5>
            </div>
            <div className="cenres-block">
              <img src={img1} alt="" />
              <h5>Sci-Fi</h5>
            </div>
            <div className="cenres-block">
              <img src={img1} alt="" />
              <h5>Sci-Fi</h5>
            </div>
            <div className="cenres-block">
              <img src={img1} alt="" />
              <h5>Sci-Fi</h5>
            </div>
            <div className="cenres-block">
              <img src={img1} alt="" />
              <h5>Sci-Fi</h5>
            </div>
            <div className="cenres-block">
              <img src={img1} alt="" />
              <h5>Sci-Fi</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;
