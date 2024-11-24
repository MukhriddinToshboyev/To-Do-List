import "./App.css";
import Menu from "./To-Do-List";
import Tasks from "./Tasks";
import Completed from "./Completed";

function App() {
  return (
    <div className="Container">
      <h1>Jaegar Resto</h1>
      <Menu />
      <Tasks />
      <Completed />
    </div>
  );
}

export default App;
