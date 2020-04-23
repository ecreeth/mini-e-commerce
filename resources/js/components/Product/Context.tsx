import * as React from "react";

const ProductContext = React.createContext({
  products: [],
  cart: [],
  total: 0,
  isLoading: false,
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  filterByCategory: productId => {},
  getAllProducts: () => {},
  sortProductBy: type => {}
});

export default ProductContext;
