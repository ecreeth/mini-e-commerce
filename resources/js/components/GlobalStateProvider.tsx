import React, { useReducer, useEffect, useState } from "react";
import ProductContext from "./Product/Context";
import axios from "axios";

import { CartReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducer";

function GlobalStateProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then(res => {
        setProducts(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    products: []
  });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart: state.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default GlobalStateProvider;
