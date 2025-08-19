import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";

function Task() {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  console.log("tasks:", tasks);
  console.log("filter:", filter);

  return <div>Task</div>;
}

export default Task;
