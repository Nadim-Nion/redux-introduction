import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";

function Task() {
  const tasks = useSelector(selectTasks);
  console.log("tasks:", tasks);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <div>Task</div>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

/* I have watched the video of the module (24-10) till 1:02 mins */

export default Task;
