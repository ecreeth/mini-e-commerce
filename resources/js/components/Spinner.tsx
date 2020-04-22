import * as React from "react";

function Spinner() {
  return (
    <div className="p-12 border shadow-lg rounded-lg border-gray-1000 text-center mt-4 flex items-center">
      <h1 className="text-white">Cargando lista de productos...</h1>
    </div>
  );
}

export default Spinner;
