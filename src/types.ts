// types.ts
export interface ITaskInput {
  title: string;
  description: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
}

export interface ITask extends ITaskInput {
  id: string;
  isCompleted: boolean;
}


export interface IFormData {
  title: string;
  description: string
  dueDate: Date;
  priority: 'High' | 'Low' | 'Medium'
}
