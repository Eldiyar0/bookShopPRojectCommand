import React, { useEffect } from "react";
import "./Section.css";
import { useProduct } from "../context/ProductContext";

const BooksAll = () => {
  const { readProduct, data } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <section id="books">
      <div className="container">
        <div className="booksAll">
          <div className="booksAll-main">
            <h3>Books</h3>
            <h6>View all</h6>
          </div>

          <div className="booksAll-blocks">
            {data.map((el) => (
              <div className="booksAll-block">
                <img style={{width: "250px", height: "300px"}} src={el.img} alt="" />
                <h4>{el.name}</h4>
                <h4>{el.price}</h4>
                <h4>{el.categotia}</h4>
                <h4 style={{width: "250px"}}>{el.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksAll;
