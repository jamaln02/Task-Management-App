import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux-system/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskEdit = ({ open, handleClose, task }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);
  const handleUpdate = () => {
    if (task) {
      dispatch(updateTask({ ...task, title }));
      handleClose();
      toast.success("Task updated successfully!", { autoClose: 2000 });
    }
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Dialog open={open} handler={handleClose}>
        <DialogHeader>Edit Task</DialogHeader>
        <DialogBody>
          <Input
            label="Edit Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleUpdate}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default TaskEdit;
