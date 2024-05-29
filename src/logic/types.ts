export interface Task {
  id: number;
  titre: string;
  estTerminee: boolean;
}

export interface UseTask {
  tasks: Task[];
  addTask: (newTask: string) => void;
  completeTask: (taskId: number) => void;
}

// should be in a proper config file, this is not a type
export const taskPrefix: string = "Todo: ";
