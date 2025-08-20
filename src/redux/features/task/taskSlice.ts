import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "12345",
      title: "Initialize Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11-30",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "678910",
      title: "Init GitHub Repo",
      description: "Create stage branch",
      dueDate: "2025-11-30",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
