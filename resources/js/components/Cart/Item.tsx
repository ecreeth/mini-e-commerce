import React from "react";

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

export default CartItem;
