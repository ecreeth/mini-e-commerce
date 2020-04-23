import React, { useReducer, useEffect } from "react";
import ProductContext from "./Product/Context";
import axios from "axios";

import {
  CartReducer,
  ADD_PRODUCT,
  ADD_PRODUCTS,
  REMOVE_PRODUCT,
  FILTER_BY_CATEGORY,
} from "./reducer";

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    products: [],
    total: 0
  });

  const getProducts = async () => {
    await axios
      .get("/api/products")
      .then(res => {
        addProducts(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProducts = products => {
    dispatch({ type: ADD_PRODUCTS, products });
  };

  const getAllProducts = () => {
    getProducts();
  };

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  const filterByCategory = categoryId => {
    dispatch({ type: FILTER_BY_CATEGORY, categoryId });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        total: state.total,
        cart: state.cart,
        addProductToCart,
        getAllProducts,
        removeProductFromCart,
        filterByCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default GlobalStateProvider;
