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

export const taskPrefix: string = "Todo: ";
