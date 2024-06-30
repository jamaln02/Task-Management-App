import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux-system/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input } from "@material-tailwind/react";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title !== "" && title !== " ") {
      dispatch(
        addTask({
          id: Math.floor(Math.random() * 1000),
          title,
          completed: false,
        })
      );
      toast.success("Task added successfully!", { autoClose: 2000 });
      setTitle("");
    } else {
      toast.error("Please fill the fields");
    }
  };

  return (
    <div className="my-10 container mx-auto bg-white drop-shadow-xl  text-center rounded">
      <ToastContainer />
      <label className="block text-xl font-medium text-blue-600 pt-2">
        Add a new task
      </label>
      <div className="flex justify-between items-center gap-4 w-full mb-4 px-4 py-2 rounded ">
        <Input
          label="Add a new task"
          type="text"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          type="button"
          color="cyan"
          variant="gradient"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
