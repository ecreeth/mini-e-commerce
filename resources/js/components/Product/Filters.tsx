import * as React from "react";

function Filters() {
  return (
    <div className="bg-white container rounded-lg mx-auto" style={{ background: '#303030' }}>
      <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div>
            <ul className="flex">
              <li className="mr-4">
                <a className="font-thin font-bold" href="#" style={{ color: 'white' }}>Mostrar Todo</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Computadoras</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Telefonos</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Celulares</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Impresoras</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Tarjetas</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Almacenamiento</a>
              </li>
              <li className="mr-4">
                <a className="font-thin" href="#" style={{ color: '#a9b7b9' }}>Imágenes & Sonido</a>
              </li>
            </ul>
            </div>
            <div>
              <select className="form-select text-sm text-white bg-gray-1000 border-transparent block w-full">
                <option value="Mas Recientes">Mas Recientes</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Filters;
