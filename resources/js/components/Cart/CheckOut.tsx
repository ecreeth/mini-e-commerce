import React from "react";

function CheckOut(props) {
  return (
    <div className="ml-4 border w-2/5 h-48 bg-gray-100 rounded text-center px-4 py-3">
      <h2 className="mt-2 text-lg">Total a pagar:</h2>
      <p className="text-xl font-bold p-2">RD$25.00</p>
      <button
        className="mt-2 text-white font-bold rounded py-2 px-8"
        style={{ background: "#82b440" }}
        onClick={props.close}
      >
        Completar Orden
      </button>
      <p className="text-xs text-gray-700 text-center mt-4">
        &middot; Impuestos incluidos
      </p>
    </div>
  );
}

export default CheckOut;
