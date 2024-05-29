import "./App.css";
import useTask from "./logic/taskmanager2";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const { tasks, addTask, completeTask } = useTask();
  return (
    <div className="taskContainer">
      <h1>task manager</h1>
      {tasks.map((task) => (
        <div
          onClick={() => {
            completeTask(task.id);
          }}
          className={task.estTerminee ? "finishedTask" : "notFinishedTask"}
        >
          {task.titre}
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        disabled={!input}
        onClick={() => {
          if (input) {
            addTask(input);
            setInput("");
          }
        }}
      >
        add Task
      </button>
    </div>
  );
}

export default App;
