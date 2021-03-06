import React from "react";

function FilterItem({ id, title, category, filter, selected, setSelected }) {
  const isSelected = selected == id;
  return (
    <li className="mr-4">
      <button
        disabled={isSelected}
        onClick={() => {
          filter(category);
          setSelected(id);
        }}
        className="font-thin hover:text-white text-gray-150"
      >
        <span className="text-gray-100">#</span>&nbsp;
        <span className={`${isSelected ? "font-bold text-white" : ""}`}>
          {title}
        </span>
      </button>
    </li>
  );
}

export default FilterItem;
