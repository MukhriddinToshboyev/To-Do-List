import "./Menu.css";

import Tasks from "../Tasks";
import Completed from "../Completed";

import { useState } from "react";
import { useEffect } from "react";

function Menu() {
  const [currentDate, setCurrentDate] = useState("");

  const [taskInput, setTaskInput] = useState("");

  function handleAddTask(e) {
    setTaskInput(e.target.value);
  }

  useEffect(() => {
    // Sanani formatlaymiz va saqlaymiz
    const today = new Date();
    setCurrentDate(today.toLocaleDateString());
  }, []);

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1 className="menu-header__title">A To-Do-List!</h1>
        <p className="menu-header__text">
          "It is possible to commit no mistakes and still lose. That is not{" "}
          <br /> a weakness; that is life" - Jean Luc Picard
        </p>
        <p className="menu-header__date">{currentDate}</p>
      </header>
      <nav className="menu-navigation">
        <input
          value={taskInput}
          onChange={handleAddTask}
          type="text"
          placeholder="What's your tasks today?"
          className="menu-navigation__input"
        />
        <button className="menu-navigation__button">+ Add Item</button>
      </nav>
      <Completed />
      <Tasks />
    </div>
  );
}

export default Menu;
