import type { RootState } from "@/redux/store";
import type { ITask, ITaskInput } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { is } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

/* 

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

*/

const initialState: IInitialState = {
  tasks: [],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITaskInput>) => {
      const id = uuidv4();

      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
