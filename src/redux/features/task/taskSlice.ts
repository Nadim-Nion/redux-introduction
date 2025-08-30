import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { is } from "date-fns/locale";
// import { v4 as uuidv4 } from "uuid";
import { nanoid } from "@reduxjs/toolkit";

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
  tasks: [
    {
      id: "12345",
      title: "Initialize Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11-30",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter: "All",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const id = uuidv4();

      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };

      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

/* I have watched the video of module (25-3) till 6:06 mins */

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
