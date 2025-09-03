// types.ts
export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignedTo: string | null;
}

export interface IFormData {
  title: string;
  description: string;
  dueDate: Date;
  priority: "High" | "Low" | "Medium";
  assignedTo: string | null;
}

export interface IUser {
  id: string;
  name: string;
}

export interface IUserFormData {
  name: string;
}

export interface IUser {
  id: string;
  name: string;
}
