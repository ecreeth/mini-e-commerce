import React, { useContext } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import ProductContext from "../Product/Context";

function CartItem({ id, name, quantity, price, removeItem }) {
  return (
    <div className="border border-gray-200 py-2 mb-2 rounded px-4 flex items-center justify-between">
      <div>
        <h2 className="font-bold">{name}</h2>
        <span className="text-sm pr-2">
          Precio: <strong>${price}</strong>
        </span>
        <span className="w-6 h-6 text-sm text-center">
          Cantidad: <strong>{quantity}</strong>
        </span>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="bg-red-700 text-sm text-white font-medium rounded px-4 py-2"
      >
        Eliminar del carrito
      </button>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="border text-center py-8 mb-4 rounded px-4 flex items-center justify-between">
      🛒 Su Carrito está vacío{" "}
    </div>
  );
}

function CheckOutSide(props) {
  return (
    <div className="ml-4 border w-1/3 h-48 bg-gray-100 rounded text-center px-4 py-3">
      <h2 className="mt-2 text-lg">Total a pagar:</h2>
      <p className="text-xl font-bold p-2">RD$25.00</p>
      <button
        className="mt-2 text-white font-bold rounded py-2 px-8"
        style={{ background: "#82b440" }}
        onClick={props.close}
      >
        Completar Orden
      </button>
      <p className="text-xs text-gray-700 text-center mt-2">
        &middot; Impuestos incluidos
      </p>
    </div>
  );
}

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
        <CheckOutSide {...props} />
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
