import { Task, UseTask, taskPrefix } from "./types";
import { useState } from "react";
import { initialTasks } from "./data";

// - data is a file where we can write interactions with a future database or api, for persistant data

// notes : I choose here to create a custom hook to :
// - keep the tasks in memory under the form of a state
// - but to keep the logic separated from the view code
// - And to have the view re-rendered anytime the tasks are modified, we needed to introduce them as a state at some point.

const useTask = (): UseTask => {
  const initalTasks: Task[] = initialTasks();
  const [tasks, setTasks] = useState(initalTasks);
  // find the highest id
  const initialCount = initalTasks.reduce(
    (acc: number, t: Task) => (t.id > acc ? t.id : acc),
    0
  );
  const [idCount, setIdCount] = useState(initialCount);

  const addTask = (newTaskTitle: string): void => {
    // new feature : all titles start with "Todo: "
    let titre = newTaskTitle;
    if (!newTaskTitle.startsWith(taskPrefix)) {
      titre = taskPrefix + titre;
    }

    const newTask = { id: idCount, titre, estTerminee: false };
    const tasksCopy = JSON.parse(JSON.stringify(tasks));
    tasksCopy.push(newTask);
    setTasks(tasksCopy);
    setIdCount(idCount + 1);
    // Here we can use an imported function from ./data that adds a task in a persistant database
  };

  const completeTask = (taskId: number): void => {
    const tasksCopy = JSON.parse(JSON.stringify(tasks));
    tasksCopy.forEach((task: Task) => {
      if (task.id === taskId) {
        task.estTerminee = true;
      }
    });
    setTasks(tasksCopy);
    // Here we can use an imported function from ./data that updates a task in the database
  };

  return { tasks, addTask, completeTask };
};

export default useTask;
