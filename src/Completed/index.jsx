import "./Completed.css";

function Completed({
  tasks,
  handleCompleteTask,
  handleEditTask,
  handleDeleteTask,
}) {
  return (
    <div>
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
              <input
                value={task.text}
                style={{
                  flex: 1,
                  margin: "0 10px",
                  textDecoration: "line-through",
                }}
              ></input>
              <button onClick={() => handleEditTask(task.id)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Completed;
