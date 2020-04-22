import * as React from "react";
import ProductContext from './Context';

function Card({id, title, price, created_by, category, cover, addProduct}) {
  const state = React.useContext(ProductContext);
  return (
    <div className="product-card-container relative">
      <img
        src="/images/computer.png"
        className="object-cover w-full h-48 rounded-lg mb-px"
      />
      <div className="flex justify-between mt-2 items-center text-white">
        <a href="#" className="hover:underline font-bold">
          {title}
        </a>
        <span
          className="rounded text-sm px-2 py-1 text-blue-500 font-medium"
          title="Precio del art&iacute;culo"
          style={{ background: '#2a2a2a' }}
        >
          ${price}
        </span>
      </div>
      <p className="text-xs text-gray-200">
        Por&nbsp;
        <span className="font-bold hover:underline cursor-pointer">
          {created_by}&nbsp;
        </span>
        en&nbsp;
        <a href="#" className="font-bold hover:underline" style={{ color: 'rgb(86, 198, 109)' }}>
          {category}
        </a>
      </p>
      <div className="absolute top-0 rounded-lg right-0 w-full h-48 bg-gray-300 hidden product-card-hover">
        <div className="flex flex-col items-center justify-center h-full text-sm">
          <img className="h-6" src="/images/icon-cart.svg" alt="" />
          <button
            onClick={addProduct}
            className="shadow-lg text-white rounded px-4 py-1 mt-4"
            style={{ background: "#353535" }}
          >
            + Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
