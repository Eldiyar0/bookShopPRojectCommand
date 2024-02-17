import React from "react";
import "./Section.css";
import img2 from "../../img/2.png";

const Books = () => {
  return (
    <section id="books">
      <div className="container">
        <h1 className="books_h1">New Books</h1>
        <div className="books">
          <div className="books-blocks">
            <div className="books-block">
              <img src={img2} alt="" />
              <h4>
                The Climate Book: <br /> The Facts and the <br /> Solutions
              </h4>
              <h5>by Greta Thunberg</h5>
            </div>
            <div style={{marginTop: "-7pc"}} className="books-block">
              <img src={img2} alt="" />
              <h4>
                The Climate Book: <br /> The Facts and the <br /> Solutions
              </h4>
              <h5>by Greta Thunberg</h5>
            </div>
            <div className="books-block">
              <img src={img2} alt="" />
              <h4>
                The Climate Book: <br /> The Facts and the <br /> Solutions
              </h4>
              <h5>by Greta Thunberg</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
