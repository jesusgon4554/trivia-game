import React, { useState } from "react";

function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const colorStyle = {
    backgroundColor: selectedColor,
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    margin: "20px auto",
  };

  //   const selectStyle ={

  //   }

  return (
    <div>
      <label htmlFor="color-selector">Select a color:</label>
      <select id="color-selector" onChange={handleChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
      </select>

      {selectedColor && <div style={colorStyle}></div>}
    </div>
  );
}

export default ColorSelector;
