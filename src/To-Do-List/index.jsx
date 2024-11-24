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
      setTasks([...tasks, newTask]);
      setTaskInput("");
      console.log(tasks);
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskInput(taskToEdit.text);
    setEditingTaskId(id);
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
    </div>
  );
}

export default Menu;

// {
//   // const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState("");
//   const [editingTaskId, setEditingTaskId] = useState(null);

//   // Vazifa inputini yangilash
//   const handleInputChange = (e) => {
//     setTaskInput(e.target.value);
//   };

//   // Vazifa qo'shish
//   const handleAddTask = () => {
//     if (taskInput.trim()) {
//       const newTask = {
//         id: Date.now(),
//         text: taskInput,
//         completed: false,
//       };
//       setTasks([...tasks, newTask]);
//       setTaskInput("");
//     }
//   };

//   // Vazifani o'chirish
//   const handleDeleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

// // Vazifani tahrirlash
// const handleEditTask = (id) => {
//   const taskToEdit = tasks.find((task) => task.id === id);
//   setTaskInput(taskToEdit.text);
//   setEditingTaskId(id);
// };

// Vazifani yangilash
// const handleUpdateTask = () => {
//   if (taskInput.trim()) {
//     setTasks(
//       tasks.map((task) =>
//         task.id === editingTaskId ? { ...task, text: taskInput } : task
//       )
//     );
//     setTaskInput("");
//     setEditingTaskId(null);
//   }
// };

//   // Vazifani bajarilgan sifatida belgilash
//   const handleCompleteTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
//       <h1>A To-Do-List</h1>
//       <input
//         type="text"
//         value={taskInput}
//         onChange={handleInputChange}
//         placeholder="What's your tasks today?"
//         style={{
//           padding: "10px",
//           border: "1px solid #ccc",
//           borderRadius: "4px 0 0 4px",
//           outline: "none",
//           width: "calc(100% - 90px)",
//         }}
//       />
//       <button
//         onClick={editingTaskId ? handleUpdateTask : handleAddTask}
//         style={{
//           padding: "10px",
//           backgroundColor: "#4285f4",
//           color: "#fff",
//           border: "none",
//           borderRadius: "0 4px 4px 0",
//           cursor: "pointer",
//         }}
//       >
//         {editingTaskId ? "Update" : "+ Add Item"}
//       </button>

// <h2>Tasks</h2>
// <ul>
//   {tasks
//     .filter((task) => !task.completed)
//     .map((task) => (
//       <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
//         <input
//           type="checkbox"
//           onChange={() => handleCompleteTask(task.id)}
//         />
//         <span style={{ flex: 1, margin: "0 10px" }}>{task.text}</span>
//         <button
//           onClick={() => handleEditTask(task.id)}
//           style={{
//             marginRight: "5px",
//             backgroundColor: "#17a2b8",
//             color: "#fff",
//             border: "none",
//             padding: "5px 10px",
//             borderRadius: "4px",
//           }}
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => handleDeleteTask(task.id)}
//           style={{
//             backgroundColor: "#dc3545",
//             color: "#fff",
//             border: "none",
//             padding: "5px 10px",
//             borderRadius: "4px",
//           }}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
// </ul>

//       <h2>Completed</h2>
//       <ul>
//         {tasks
//           .filter((task) => task.completed)
//           .map((task) => (
//             <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
//               <input
//                 type="checkbox"
//                 checked
//                 onChange={() => handleCompleteTask(task.id)}
//               />
//               <span
//                 style={{
//                   flex: 1,
//                   margin: "0 10px",
//                   textDecoration: "line-through",
//                 }}
//               >
//                 {task.text}
//               </span>
//               <button
//                 onClick={() => handleEditTask(task.id)}
//                 style={{
//                   marginRight: "5px",
//                   backgroundColor: "#17a2b8",
//                   color: "#fff",
//                   border: "none",
//                   padding: "5px 10px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDeleteTask(task.id)}
//                 style={{
//                   backgroundColor: "#dc3545",
//                   color: "#fff",
//                   border: "none",
//                   padding: "5px 10px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
