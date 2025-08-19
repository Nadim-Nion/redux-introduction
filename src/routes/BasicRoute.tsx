import App from "@/App";
import Login from "@/pages/login";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { Route, Routes } from "react-router";

const BasicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Task />} />
        <Route path="user" element={<User />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default BasicRoute;
