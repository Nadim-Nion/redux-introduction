// types.ts
export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}

export interface IFormData {
  title: string;
  description: string;
  dueDate: Date;
  priority: "High" | "Low" | "Medium";
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
