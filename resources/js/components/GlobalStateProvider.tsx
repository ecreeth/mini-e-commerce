import React, { useReducer, useEffect } from "react";
import ProductContext from "./Product/Context";
import axios from "axios";
import cogoToast from "cogo-toast";
import {
  CartReducer,
  ADD_PRODUCT,
  ADD_PRODUCTS,
  REMOVE_PRODUCT,
  SET_LOADING,
  SET_EMPTY_CART,
  SET_LOADING_SAVING
} from "./reducer";

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
    products: [],
    total: 0,
    isLoading: true,
    isSaving: false
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

  const sortProductBy = type => {
    fetchProduct(`/api/products/order/${type}`);
  };

  const completeOrder = () => {
    dispatch({ type: SET_LOADING_SAVING, loading: true });
    let total: number = 0;
    const products = state.cart.flatMap(el => {
      total += Number(el.price) * Number(el.quantity);
      return { id: el.id, quantity: el.quantity };
    });
    cogoToast.loading("Guardando la orden...").then(() => {
      axios
        .post(`/api/order`, { products, total })
        .then(res => {
          dispatch({ type: SET_EMPTY_CART });
          dispatch({ type: SET_LOADING_SAVING, loading: false });
        })
        .catch(error => console.log(error));
      cogoToast.success("Su orden ha sido guardada con exito!");
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        total: state.total,
        cart: state.cart,
        isSaving: state.isSaving,
        isLoading: state.isLoading,
        completeOrder,
        addProductToCart,
        getAllProducts,
        removeProductFromCart,
        filterByCategory,
        sortProductBy
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default GlobalStateProvider;
