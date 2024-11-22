import { useRef, useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Cart from "./Card";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const inputRef = useRef(null);

  const handleClick = () => {
    // input elementiga fokus berish
    inputRef.current.focus();
  };

  return (
    <div className="Container">
      <h1>Jaegar Resto</h1>
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} />

      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Focus Input</button>
      </div>
    </div>
  );
}

export default App;
