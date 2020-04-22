import * as React from "react";

function Card({title, price, created_by, category, cover}) {
  return (
    <div className="product-card-container relative">
      <img
        src={cover}
        className="bg-gray-200 object-cover w-full h-48 rounded-lg mb-px"
      />
      <div className="flex justify-between mt-2 items-center ">
        <a href="#" className="hover:underline font-bold">
          {title}
        </a>
        <span
          className="rounded bg-gray-100 border border-gray-200 text-sm px-2 py-px text-blue-700"
          title="Precio del art&iacute;culo"
        >
          ${price}
        </span>
      </div>
      <p className="text-sm">
        Por&nbsp;
        <span className="font-bold text-gray-800 hover:underline cursor-pointer">
          {created_by}&nbsp;
        </span>
        en&nbsp;
        <a href="#" className="text-blue-500 hover:underline">
          {category}
        </a>
      </p>
      <div className="absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover">
        <div className="flex flex-col items-center justify-center h-full text-sm">
          <img className="h-6" src="/images/icon-cart.svg" alt="" />
          <a
            href="#"
            className="shadow-lg text-white rounded px-4 py-1 mt-4"
            style={{ background: "#353535" }}
          >
            + Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
