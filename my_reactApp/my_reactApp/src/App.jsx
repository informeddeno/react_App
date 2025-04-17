import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'; './Index.css'; '../Index.html';

<div className="button">                                                                                                           
       <button OnClick={() => setCount((count) => count + 1)}>                                                                              
          count is {count}</button>
</div>

function AddItem() {
          const AddInput = document.getElementById("itemInput");
                 const Value = input.value.trim();
                  if (value === "") return;

                  const Li = document.createElement("li");
                  li.className = "list-item";
                  li.textContent = value;

                  document.getElementById("itemList").appendChild(li);
                  input.value = "";
              }

function App() {
    const [count, setCount] = useState(0)

    return (
	<div><AddItem /></div>
      
  )
}
export default App
