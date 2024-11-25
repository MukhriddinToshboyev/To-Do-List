import "./Completed.css";

function Completed({
  tasks,
  handleCompleteTask,
  handleEditTask,
  handleDeleteTask,
}) {
  return (
    <div className="completed-container">
      <h2 className="completed-title">Completed</h2>
      <ul className="completed-lists">
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <li key={task.id} className="completed-list">
              <div className="completed-list__input">
                <input
                  type="checkbox"
                  checked
                  onChange={() => handleCompleteTask(task.id)}
                  className="completed-input"
                />
              </div>
              <input value={task.text} className="completed-list__text"></input>
              <button
                onClick={() => handleEditTask(task.id)}
                className="completed-button__edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="completed-button__delete"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Completed;
