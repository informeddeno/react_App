import React, { useState } from "react";
import "./App.css";

function App() {
  const [Items, setItems] = useState([]); // Capitalized state name for consistency
  const [InputValue, setInputValue] = useState(""); // Capitalized state name for consistency

  const AddItem = () => { // Capitalized function name
    if (InputValue.trim() === "") return; // Prevent adding empty items
    setItems((prevItems) => [...prevItems, InputValue]); // Add the new item to the list
    setInputValue(""); // Clear the input field after adding the item
  };

  return (
    <div className="Container">
      <h2>My Dynamic App: List Manager</h2>
      <div className="InputContainer">
        <input
          type="text"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update InputValue state
          placeholder="Enter an item"
        />
        <button onClick={AddItem}>Add Item</button>
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
