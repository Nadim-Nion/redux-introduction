import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";
// import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
// import { useAppDispatch } from "@/redux/hook";
// import { useSelector } from "react-redux";

function Task() {
  // const tasks = useSelector(selectTasks);
  // console.log("tasks:", tasks);

  // const dispatch = useAppDispatch();

  const {data, isLoading, isError} = useGetTasksQuery(undefined);
  console.log({data, isLoading, isError});

  if(isLoading){
   return <div>Loading...</div>
  }

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <div className="mr-auto">Task</div>
        <Tabs defaultValue="All">
          <TabsList>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("All"))}
              value="All"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("High"))}
              value="High"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("Medium"))}
              value="Medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(updateFilter("Low"))}
              value="Low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="space-y-5 mt-5">
        {!isLoading && data.tasks.map((task: ITask, index: number) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Task;
