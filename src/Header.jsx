import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logoutUser } from "./redux-system/slices/userSlice";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { currentUser } = useSelector((state) => state.userSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Navbar className="mx-auto max-w-screen-6xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography className="mr-4 cursor-pointer py-1.5 font-bold text-md md:text-xl">
          Task Management App
        </Typography>
        <div className="hidden lg:block font-bold text-md">
          {currentUser ? (
            <div className="me-32 tracking-wide">
              Welcome {currentUser.userName}
            </div>
          ) : (
            <div>you are not logged in</div>
          )}
        </div>

        <div className="hidden lg:block">
          {currentUser ? (
            <Button
              variant="gradient"
              size="sm"
              className="mr-3"
              onClick={handleLogOut}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              className="mr-3"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="text-blue-gray-900 my-5">
          {currentUser ? (
            <div>Welcome {currentUser.userName}</div>
          ) : (
            <div>you are not logged in</div>
          )}
        </div>
        <div>
          {currentUser ? (
            <Button
              variant="gradient"
              size="sm"
              className="mr-3"
              onClick={handleLogOut}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              className="mr-3"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
