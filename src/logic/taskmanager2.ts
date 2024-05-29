import { Task, UseTask, taskPrefix } from "./types";
import { useState } from "react";

const initialTasks: Task[] = [
  { id: 0, titre: "t1", estTerminee: false },
  { id: 1, titre: "t2", estTerminee: false },
];
// Here initialTasks can be retrived from an imported function that gets tasks from the database

const useTask = (): UseTask => {
  const [tasks, setTasks] = useState(initialTasks);
  const [idCount, setIdCount] = useState(2);
  // Here idCount can be initialized to a count that is stored in the database

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
    // Here we can use an imported function that adds a task in a persistant database
  };

  const completeTask = (taskId: number): void => {
    const tasksCopy = JSON.parse(JSON.stringify(tasks));
    tasksCopy.forEach((task: Task) => {
      if (task.id === taskId) {
        task.estTerminee = true;
      }
    });
    setTasks(tasksCopy);
    // Here we can use an imported function that updates a task in the database
  };

  return { tasks, addTask, completeTask };
};

export default useTask;
