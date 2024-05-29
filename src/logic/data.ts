import { Task } from "./types";
// This file handles potential data storage - connexion with a database or an api

export const initialTasks = (): Task[] => {
  return [
    { id: 0, titre: "t1", estTerminee: false },
    { id: 2, titre: "t3", estTerminee: false },
    { id: 18, titre: "t2", estTerminee: false },
  ];
  // Here initialTasks can be retrived from an imported function that gets tasks from the database
};
