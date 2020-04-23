import React from "react";

function EmptyProducts({title, type = 1}) {
  return (
    <div
      className={`border border-${type == 1 ? 'green' : 'red'}-500 w-full mt-6 py-8 mb-4 rounded px-4 flex items-center text-white justify-center`}>
     {title}
    </div>
  );
}
export default EmptyProducts;
