import React from "react";
import now from "../../../img/now.png";
import { useState, useEffect } from "react";
import { useProduct } from "../../context/ProductContext";

const Detail = () => {
  const { readProduct, data } = useProduct();
  const [recommendedBooks, setRecommendedBooks] = useState(getRandomBooks(3));

  useEffect(() => {
    readProduct();
  }, []);

  function getRandomBooks(count) {
    const shuffledBooks = data.sort(() => Math.random() - 0.5);
    return shuffledBooks.slice(0, count);
  }

  const handleMoreClick = () => {
    setRecommendedBooks(getRandomBooks(3));
  };

  return (
    <div>
      <div className="detail">
        <div className="container">
          <img src={now} alt="" />
          <div>
            <h2>Рекомендации</h2>
            <booksAll-blocks books={recommendedBooks} />
            <div className="booksAll-blocks">
              {data.map((el) => (
                <div className="booksAll-block">
                  <img
                    style={{ width: "250px", height: "300px" }}
                    src={el.img}
                    alt=""
                  />
                  <h4>{el.name}</h4>
                  <h4>{el.price}</h4>
                  <h4>{el.categotia}</h4>
                  <h4 style={{ width: "250px" }}>{el.description}</h4>
                </div>
              ))}
            </div>
            <button onClick={handleMoreClick}>more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
