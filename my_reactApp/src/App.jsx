import React, { useState } from "react";
import "./App.css";
import "./index.html";

function App() {
  const [Items, setItems] = useState([]); // Capitalized state name for consistency
  const [InputValue, setInputValue] = useState(""); // Capitalized state name for consistency

  const AddItem = () => { // Capitalized function name
    if (InputValue.trim() === "") return; // Prevent adding empty items
    setItems((prevItems) => [...prevItems, InputValue]); // Add the new item to the list
    setInputValue(""); // Clear the input field after adding the item
  };

  return (
      <div>
	<App  />
      </div>
  );
}

export default App;
