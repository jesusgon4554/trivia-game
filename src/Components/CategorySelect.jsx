import React from "react";
import "./CategorySelect.css";
// import "./Button.css";
//map category data from API into buttons to render onto screen
//with category being passed into CategoryName.

function CategorySelect({ categoryName, categoryId }) {
  return (
    <button id="categoryBtn" value={categoryId}>
      <h3>{categoryName}</h3>
    </button>
  );
}

export default CategorySelect;
