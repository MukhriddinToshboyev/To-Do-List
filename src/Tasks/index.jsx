import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  // Vazifa inputini yangilash
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Vazifa qo'shish
  const handleAddTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  // Vazifani o'chirish
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Vazifani tahrirlash
  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskInput(taskToEdit.text);
    setEditingTaskId(id);
  };

  // Vazifani yangilash
  const handleUpdateTask = () => {
    if (taskInput.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTaskId ? { ...task, text: taskInput } : task
        )
      );
      setTaskInput("");
      setEditingTaskId(null);
    }
  };

  // Vazifani bajarilgan sifatida belgilash
  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>A To-Do-List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="What's your tasks today?"
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px 0 0 4px",
          outline: "none",
          width: "calc(100% - 90px)",
        }}
      />
      <button
        onClick={editingTaskId ? handleUpdateTask : handleAddTask}
        style={{
          padding: "10px",
          backgroundColor: "#4285f4",
          color: "#fff",
          border: "none",
          borderRadius: "0 4px 4px 0",
          cursor: "pointer",
        }}
      >
        {editingTaskId ? "Update" : "+ Add Item"}
      </button>

      <h2>Tasks</h2>
      <ul>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                onChange={() => handleCompleteTask(task.id)}
              />
              <span style={{ flex: 1, margin: "0 10px" }}>{task.text}</span>
              <button
                onClick={() => handleEditTask(task.id)}
                style={{
                  marginRight: "5px",
                  backgroundColor: "#17a2b8",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>

      <h2>Completed</h2>
      <ul>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked
                onChange={() => handleCompleteTask(task.id)}
              />
              <span
                style={{
                  flex: 1,
                  margin: "0 10px",
                  textDecoration: "line-through",
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleEditTask(task.id)}
                style={{
                  marginRight: "5px",
                  backgroundColor: "#17a2b8",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Tasks;
