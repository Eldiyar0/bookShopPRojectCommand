import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  let API_PRODUCT = "http://localhost:3000/product";

  const [data, setData] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCT);
    setData(data);
  }

  let values = {
    addProduct,
    readProduct,
    data,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
