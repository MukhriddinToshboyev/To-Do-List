import { useState } from "react";
import { useEffect } from "react";

function Menu() {
  const [currentDate, setCurrentDate] = useState("");
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      console.log("New Task:", task); // Bu yerda yangi vazifani qo'shish yoki boshqa funksiyani chaqirishingiz mumkin
      setTask(""); // Input maydonini tozalash
    }
  };

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
          value={task}
          onChange={handleInputChange}
          placeholder="What's your tasks today?"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px 0 0 4px",
            outline: "none",
          }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4285f4",
            color: "#fff",
            border: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          + Add Item
        </button>
      </nav>
    </div>
  );
}

export default Menu;
