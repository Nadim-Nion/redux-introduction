import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";

import { Trash2 } from "lucide-react";
import UpdateTaskModal from "./UpdateTaskModal";
import { selectUsers } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUsers);
  const assignedUser = users.find(user => user.id === task.assignedTo)

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "High",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "Low",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <UpdateTaskModal task={task} />
          <Button onClick={() => dispatch(deleteTask(task.id))}>
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p className="my-2">Assigned To - {assignedUser ? assignedUser.name : "No one"}</p>
      <p>{task.description}</p>
    </div>
  );
}
