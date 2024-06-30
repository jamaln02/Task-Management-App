import { Route, Routes } from "react-router-dom";
import Login from "./logSystem/Login";
import Register from "./logSystem/Register";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
