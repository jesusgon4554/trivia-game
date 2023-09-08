import React from "react";
import "./Button.css";
//map category data from API into buttons to render onto screen
//with category being passed into CategoryName.

function CategoryOption({ categoryName, categoryId, setUserCategory }) {
  function categoryBtnClicked() {}

  return (
    <button
      className="categoryOptionBtn"
      onClick={() => {
        setUserCategory((prevState) => ({
          ...prevState,
          categoryName: categoryName,
          categoryId: categoryId,
        }));
      }}
      value={categoryId}
    >
      <h3>{categoryName}</h3>
    </button>
  );
}

export default CategoryOption;
