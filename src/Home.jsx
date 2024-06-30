import { useSelector } from "react-redux";
import Header from "./Header";

import TaskForm from "./TaskComponent/TaskForm";
import TaskList from "./TaskComponent/TaskList";

const Home = () => {
  const { currentUser } = useSelector((state) => state.userSlice);

  return (
    <div>
      <Header />
      {currentUser ? (
        <div>
          <TaskForm />
          <TaskList />
        </div>
      ) : (
        <div className="text-red-500 text-3xl font-bold text-center mt-10 ">
          you should login first{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
