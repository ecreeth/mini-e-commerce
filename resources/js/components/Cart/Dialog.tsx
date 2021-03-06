import React, { useContext } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ProductContext from "../Product/Context";
import CartItem from "./Item";
import CheckOut from "./CheckOut";
import EmptyCart from "./Empty";

function DialogCart(props) {
  const {
    removeProductFromCart,
    completeOrder,
    isSaving,
    cart,
    total
  } = useContext(ProductContext);
  const isCartEmpty = cart.length > 0 ? true : false;
  return (
    <Dialog isOpen={props.show} onDismiss={props.close}>
      <div className="flex items-center">
        <div className="w-full">
          {isCartEmpty ? (
            cart.map(item => (
              <CartItem
                loading={isSaving}
                key={item["id"]}
                removeItem={removeProductFromCart}
                {...item}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
        {isCartEmpty && (
          <CheckOut
            loading={isSaving}
            completeOrder={completeOrder}
            total={total}
            {...props}
          />
        )}
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
