import React from "react";
import "./Button.css";
//map category data from API into buttons to render onto screen
//with category being passed into CategoryName.

function Thing({ categoryName, categoryId, setUserCategory }) {
  return (
    <button
      onClick={() => {
        setUserCategory(categoryId);
      }}
      value={categoryId}
    >
      <h3>
        {categoryName} {categoryId}
      </h3>
    </button>
  );
}

export default Thing;
