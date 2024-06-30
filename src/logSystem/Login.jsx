import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux-system/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const checkUser = users.some(
      (user) =>
        user.userEmail === userEmail && user.userPassword === userPassword
    );
    const userData = users.find(
      (curUser) =>
        curUser.userEmail === userEmail && curUser.userPassword === userPassword
    );

    if (checkUser) {
      toast.success("Login successful");
      dispatch(setCurrentUser(userData));
      navigate("/home");
    } else {
      toast.error("User not found or password incorrect");
    }
    setUserPassword("");
    setUserEmail("");
  };
  return (
    <div>
      <ToastContainer />
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-10 lg:px-5 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Welcome! So good to have you back!
          </p>
          <div>
            <p className="text-red-500"></p>
            <div className="space-y-2">
              <div>
                <label className="text-gray-600 mb-2 block" />
                User Email
                <input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-gray-600 mb-2 block" />
                Password
                {showPass ? (
                  <div className="relative">
                    <input
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      type="text"
                      className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                      placeholder="***********"
                    />
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300"
                    >
                      <BsEye />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      type="password"
                      className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
                      placeholder="***********"
                    />
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300"
                    >
                      <BsEyeSlash />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                type="button"
                className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium"
              >
                Login
              </button>
              <div className="flex gap-2 pt-5">
                <p className="text-gray-600 text-sm">Dont have an account?</p>
                <Link
                  className="text-gray-600 text-sm underline"
                  to="/register"
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
