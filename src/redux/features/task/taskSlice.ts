import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [
    {
      id: "12345",
      title: "Initialize Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11-30",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
