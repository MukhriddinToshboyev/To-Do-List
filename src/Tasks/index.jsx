import "./Tasks.css";

function Tasks({
  tasks,
  handleEditTask,
  handleDeleteTask,
  handleCompleteTask,
}) {
  console.log(tasks);

  return (
    <div className="tasks-container">
      <h2 className="tasks-title">Tasks</h2>
      <ul className="tasks-lists">
        {tasks
          ?.filter((task) => !task.completed)
          .map((task) => (
            <li key={task.id} className="tasks-list">
              <div className="tasks-inputs">
                <input
                  type="checkbox"
                  onChange={() => handleCompleteTask(task.id)}
                  className="tasks-input__checkbox"
                />
              </div>
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
