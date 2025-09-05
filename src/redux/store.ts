import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// import counterReducer from "./features/counter/counterSlice";
// import logger from "./middlewares/logger";
// import taskReducer from "./features/task/taskSlice";
// import userReducer from "./features/user/userSlice";

/* const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
}); */

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
