import React from "react";
import cogoToast from "cogo-toast";

function CartItem({ id, name, quantity, price, removeItem }) {
  return (
    <div className="border border-gray-200 py-1 mb-1 rounded pl-4 pr-2 flex items-center justify-between">
      <div className="text-sm">
        <h2 className="font-bold">{name}</h2>
        <span className="pr-2">
          Precio: <span className="text-blue-700">${price}</span>
        </span>
        <span className="w-6 h-6 text-center">
          Cantidad: <span className="text-blue-700">{quantity}</span>
        </span>
      </div>
      <button
        onClick={() => {
          removeItem(id);
          cogoToast.success(
            <span>
              Has eliminado: <strong>{name}</strong> de tu carrito!
            </span>,
            { position: "bottom-right" }
          );
        }}
        className="bg-red-700 hover:bg-red-800 text-sm text-white flex items-center justify-center font-medium rounded px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 fill-current text-gray-200"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path
            className="heroicon-ui"
            d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
          />
        </svg>{" "}
        Eliminar del carrito
      </button>
    </div>
  );
}

export default CartItem;
