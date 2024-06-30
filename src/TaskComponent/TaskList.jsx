import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { Button } from "@material-tailwind/react";

const TaskList = () => {
  const { currentUser, users } = useSelector((state) => state.userSlice);

  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(false);
  const userTask = users.find((user) => {
    if (user.id === currentUser.id) {
      return user;
    }
  });

  const filteredTasks = userTask?.tasks?.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncomplete") return !task.completed;
    return true;
  });

  const handleClick = (prop) => {
    setActive(true);
    setFilter(prop);
  };

  return (
    <div>
      <div className="flex gap-4 justify-center my-4 items-center ">
        <Button
          variant="text"
          className={
            active === true && filter === "all"
              ? "underline text-orange-800 text-sm md:text-md "
              : "text-sm md:text-md"
          }
          onClick={() => handleClick("all")}
        >
          All
        </Button>
        <Button
          variant="text"
          className={
            active === true && filter === "completed"
              ? "underline text-green-800 text-sm md:text-md "
              : "text-sm md:text-md"
          }
          onClick={() => handleClick("completed")}
        >
          completed
        </Button>
        <Button
          variant="text"
          className={
            active === true && filter === "uncomplete"
              ? "underline text-red-800 text-sm md:text-md "
              : "text-sm md:text-md"
          }
          onClick={() => handleClick("uncomplete")}
        >
          uncomplete
        </Button>
      </div>
      <hr className="w-2/3 text-center mx-auto" />

      {filteredTasks.length !== 0 ? (
        filteredTasks?.map((task, ind) => <TaskItem key={ind} task={task} />)
      ) : (
        <div className="text-center text-lg my-10 text-red-600">
          No tasks found !{" "}
        </div>
      )}
    </div>
  );
};

export default TaskList;
