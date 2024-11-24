import "./Menu.css";

import { useState } from "react";
import { useEffect } from "react";

function Menu() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Sanani formatlaymiz va saqlaymiz
    const today = new Date();
    setCurrentDate(today.toLocaleDateString());
  }, []);

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h2 className="menu-header__title">A To-Do-List!</h2>
        <p className="menu-header__text">
          "Your a wizzard Harry.. prepare to die" - Hagrid
        </p>
        <p className="menu-header__date">{currentDate}</p>
      </header>
      <nav className="menu-navigation">
        <input
          type="text"
          placeholder="What's your tasks today?"
          className="menu-navigation__input"
        />
        <button className="menu-navigation__button">+ Add Item</button>
      </nav>
    </div>
  );
}

export default Menu;
