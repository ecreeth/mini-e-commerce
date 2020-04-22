import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProductFilter from "./Product/Filters";
import ProductList from "./Product/List";
import Cart from "./Cart";
import DialogCart from "./Cart/Dialog";
import GlobalStateProvider from "./GlobalStateProvider";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <GlobalStateProvider>
      <Cart onClick={open} />
      <ProductFilter />
      <ProductList />
      <DialogCart close={close} show={showDialog} />
    </GlobalStateProvider>
  );
}

const element = document.getElementById("products");

if (element) {
  ReactDOM.render(<App />, element);
}
