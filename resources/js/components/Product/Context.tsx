import * as React from "react";

const ProductContext = React.createContext({
  products: [],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});

export default ProductContext;
