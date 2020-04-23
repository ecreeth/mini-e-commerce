import * as React from "react";

const ProductContext = React.createContext({
  products: [],
  cart: [],
  total: 0,
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  filterByCategory: productId => {},
});

export default ProductContext;
