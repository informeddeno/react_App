import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   //   <a href="https://vite.dev" target="_blank">
      //  <img src={viteLogo} className="logo" alt="Vite logo" />
      //</a>
   //<a href="https://react.dev" target="_blank">
      //  <img src={reactLogo} className="logo react" alt="React logo" />
      // </a>
  </div> 
      <div>
	<h1>My To Do List</h1>
      </div>
<div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <script>
	    function addItem() {
		let input = document.getElementById("itemInput");
		 const value = input.value.trim();
		  if (value === "") return;

		  const li = document.createElement("li");
		  li.className = "list-item";
		  li.textContent = value;

		  document.getElementById("itemList").appendChild(li);
		  input.value = "";
	      }
	  </script>
        </p>
      </div>
      <p className="">
  
      </p>
    </>
  )
}

export default App
