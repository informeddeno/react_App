import React, { useState } from "react";
import "./App.css";

// Define AddItem as a separate component
function AddItem({ items, setItems, inputValue, setInputValue }) {
  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type an item"
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Todo List</h1>
      <AddItem
        items={items}
        setItems={setItems}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
