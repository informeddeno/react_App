import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="container">
      <h2>My Dynamic App: List Manager</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div className="list-container">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
