import React, { useReducer, useEffect } from "react";
import ProductContext from "./Product/Context";
import axios from "axios";

import {
  CartReducer,
  ADD_PRODUCT,
  ADD_PRODUCTS,
  REMOVE_PRODUCT,
  SET_LOADING
} from "./reducer";

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    products: [],
    total: 0,
    isLoading: true
  });

  const fetchProduct = async url => {
    dispatch({ type: SET_LOADING, loading: true });
    await axios
      .get(url)
      .then(res => {
        addProducts(res.data);
        dispatch({ type: SET_LOADING, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProduct("/api/products");
  }, []);

  const addProducts = products => {
    dispatch({ type: ADD_PRODUCTS, products });
  };

  const getAllProducts = () => {
    fetchProduct("/api/products");
  };

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  const filterByCategory = categoryId => {
    fetchProduct(`/api/categories/${categoryId}/products`);
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        total: state.total,
        cart: state.cart,
        isLoading: state.isLoading,
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
