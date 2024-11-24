import "./Tasks.css";

function Tasks({ tasks, handleEditTask, handleDeleteTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                // onChange={() => handleCompleteTask(task.id)}
              />
              <input type="text" value={task.text} />

              <button onClick={() => handleEditTask(task.id)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Tasks;
