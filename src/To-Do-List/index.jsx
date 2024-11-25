import "./Menu.css";

import Tasks from "../Tasks";
import Completed from "../Completed";

import { useState } from "react";
import { useEffect } from "react";
import Taskbar from "../Taskbar";

function Menu() {
  const [currentDate, setCurrentDate] = useState("");

  const [taskInput, setTaskInput] = useState("");

  const [tasks, setTasks] = useState([]);

  const [editingTaskId, setEditingTaskId] = useState(null);

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }

  function handleAddTask() {
    if (taskInput.trim()) {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
      console.log(tasks);
    }
  }

  // Taskni o'chirish
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Taskni tahrirlash
  function handleEditTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskInput(taskToEdit.text);
    setEditingTaskId(id);
  }

  // taskga yangi vazifa yuklash

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
          onChange={handleInputChange}
          type="text"
          placeholder="What's your tasks today?"
          className="menu-navigation__input"
        />
        <button onClick={handleAddTask} className="menu-navigation__button">
          + Add Item
        </button>
      </nav>
      <Tasks
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
      <Completed />
      <Taskbar />
    </div>
  );
}

export default Menu;
