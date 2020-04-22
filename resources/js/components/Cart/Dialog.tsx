import React, { useContext } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ProductContext from "../Product/Context";
import CartItem from "./Item";
import CheckOut from "./CheckOut";
import EmptyCart from "./Empty";

function DialogCart(props) {
  const { removeProductFromCart, cart } = useContext(ProductContext);
  return (
    <Dialog isOpen={props.show} onDismiss={props.close}>
      <div className="flex">
        <div className="w-2/3">
          {cart.length > 0 ? (
            cart.map(item => (
              <CartItem
                key={item["id"]}
                removeItem={removeProductFromCart}
                {...item}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
        <CheckOut {...props} />
      </div>

      <button
        className="bg-gray-800 mt-6 text-white font-bold rounded py-2 px-4"
        onClick={props.close}
      >
        Cerrar
      </button>
    </Dialog>
  );
}

export default DialogCart;
