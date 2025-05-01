import React, { useState } from "react";
import "./App.css";

function App() {
  const [Items, SetItems] = useState([]); // Updated state variables to PascalCase
  const [InputValue, SetInputValue] = useState(""); // Updated state variables to PascalCase

  const HandleAddItem = () => { // Updated function name to PascalCase
    const value = InputValue.trim();
    if (value === "") return;

    SetItems((prevItems) => [...prevItems, value]);
    SetInputValue("");
  };

  return (
    <div className="Container">
      <h2>My Dynamic App: List Manager</h2>
      <div>
        <input
          type="text"
          value={InputValue}
          onChange={(e) => SetInputValue(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={HandleAddItem}>Add Item</button>
      </div>
      <div className="ListContainer">
        <ul>
          {Items.map((item, index) => (
            <li key={index} className="ListItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
