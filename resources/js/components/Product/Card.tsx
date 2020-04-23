import React from "react";
import cogoToast from "cogo-toast";

function Card({ id, title, price, category, cover, addProduct }) {
  return (
    <div className="product-card-container relative">
      <img
        src="/images/computer.png"
        className="object-cover w-full shadow-sm h-48 rounded-lg mb-px"
      />
      <div className="flex justify-between mt-2 items-center text-white">
        <a href="#" className="hover:underline font-bold">
          {title}
        </a>
        <span
          className="rounded text-sm px-2 py-1 text-blue-500 font-medium"
          title="Precio del art&iacute;culo"
          style={{ background: "#2a2a2a" }}
        >
          ${price}
        </span>
      </div>
      <p className="text-xs text-gray-200">
        Por&nbsp;
        <span className="font-bold hover:underline cursor-pointer">
        Luis Alvarado&nbsp;
        </span>
        en&nbsp;
        <a
          href="#"
          className="font-bold hover:underline"
          style={{ color: "rgb(86, 198, 109)" }}
        >
          {category}
        </a>
      </p>
      <div className="absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover">
        <div className="flex flex-col items-center justify-center h-full text-sm">
          <img className="h-6" src="/images/icon-cart.svg" alt="" />
          <button
            onClick={() => {
              addProduct();
              cogoToast.success(
                <span>
                  Has agregado: <strong>{title}</strong> a tu carrito!
                </span>,
                { position: "bottom-right" }
              );
            }}
            className="shadow-lg transition-all text-white hover:bg-gray-800 bg-gray-1000 active:bg-blue-700 rounded px-4 py-1 mt-4"
          >
            + Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
