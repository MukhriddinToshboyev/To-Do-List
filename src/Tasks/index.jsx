import "./Tasks.css";

function Tasks({
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
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
                onChange={() => handleCompleteTask(task.id)}
                className="tasks-input__checkbox"
              />
              <input type="text" value={task.text} className="tasks-input" />

              <button
                onClick={() => handleEditTask(task.id)}
                className="tasks-button__edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="tasks-button__deleted"
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
