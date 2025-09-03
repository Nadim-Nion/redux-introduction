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
      assignedTo: null
    },
  ],
  filter: "All",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    assignedTo: null,
    ...taskData,
  };
};

// const updateTask = (taskDate: DraftTask): ITask => {
//   return {
//     id: nanoid(),
//     isCompleted: false,
//     ...taskDate,
//   };
//  };

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
    updateTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    },
    updateFilter: (
      state,
      action: PayloadAction<"All" | "High" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
  },
});

/* I have watched the video of module (25-3) till 6:06 mins */

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  console.log("filter in the taskSlice.ts:", filter);

  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const {
  addTask,
  toggleCompleteState,
  deleteTask,
  updateTask,
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
