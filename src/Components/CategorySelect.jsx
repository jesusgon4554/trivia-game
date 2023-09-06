import React from "react";
import "./CategorySelect.css";

//map category data from API into buttons to render onto screen
//with catgory being passed into CategoryName.

function CategorySelect({ categoryName }) {
  return (
    <button id={categoryName}>
      <h3>{categoryName}</h3>
    </button>
  );
}

export default CategorySelect;
