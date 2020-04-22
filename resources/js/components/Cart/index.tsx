import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ProductContext from "../Product/Context";

function Cart(props) {
  const state = useContext(ProductContext);
  return (
    <button
      onClick={props.onClick}
      className="p-1 mb-2 -mt-12 absolute right-0 top-0 text-gray-400 rounded hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
      style={{ backgroundColor: "#303030" }}
    >
      <div className="relative">
        <a href="#" className="flex items-center justify-between px-2">
          <img
            src="/images/icon-cart.svg"
            className="pr-2 border-gray-800"
            alt="Carrito de compras"
          />
          <span className="text-sm">&middot; &nbsp;$0.00</span>
        </a>
        <span className="bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute top-0 -mt-3 right-0 -mr-3">
          {state.cart.reduce((count, item) => {
            return count + item["quantity"];
          }, 0)}
        </span>
      </div>
    </button>
  );
}

export default Cart;

const element = document.getElementById("cart");

if (element) {
  ReactDOM.render(<Cart />, element);
}
