import "./Menu.css";

import Tasks from "../Tasks";
import Completed from "../Completed";

import { useState } from "react";
import { useEffect } from "react";

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
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  }

  // Taskni o'chirish
  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  // Taskni tahrirlash
  function handleEditTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);

    localStorage.setItem("tasks", JSON.stringify(taskToEdit.text));

    setTaskInput(taskToEdit.text);
    setEditingTaskId(id);
  }

  // taskga yangi vazifa yuklash

  function handleUpdateTask() {
    if (taskInput.trim()) {
      const newTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: taskInput } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
      setTaskInput("");
      setEditingTaskId(null);
    }
  }

  // Completedga malumot yuklash

  function handleCompleteTask(id) {
    const newTasks = tasks.map((task) =>
      task.id == id ? { ...task, completed: !task.completed } : task
    );

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    // Sanani formatlaymiz va saqlaymiz
    const today = new Date();
    setCurrentDate(today.toLocaleDateString());
  }, []);

  console.log("tasks", tasks);

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1 className="menu-header__title"> To-Do-List!</h1>

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
        <button
          onClick={editingTaskId ? handleUpdateTask : handleAddTask}
          className="menu-navigation__button"
        >
          {editingTaskId ? "Save " : " + Add item"}
        </button>
      </nav>
      <Tasks
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
      <Completed
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
}

export default Menu;
