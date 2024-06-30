import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux-system/slices/userSlice";
import { Button, Checkbox } from "@material-tailwind/react";
import TaskEdit from "./TaskEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskItem = ({ task }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    toast.success("Task deleted successfully!", { autoClose: 2000 });
  };

  const toggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleEditClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className="my-10 container mx-auto bg-white drop-shadow-xl rounded text-center ">
      <TaskEdit
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        task={task}
      />
      <div className="flex justify-between items-center gap-4 w-full mb-4 px-4 py-2 rounded flex-wrap">
        <Checkbox
          color="green"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span>{task.title}</span>
        <div className="flex gap-2">
          <Button color="yellow" variant="gradient" onClick={handleEditClick}>
            Edit
          </Button>
          <Button color="red" variant="gradient" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
