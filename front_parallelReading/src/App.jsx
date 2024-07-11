import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Calender from "./pages/Calender";
import Today_post from "./pages/today_post";

function App() {
  return (
    <>
      <div className="container">
        <h1>Welcome ~ </h1>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/calender" Component={Calender} />
          <Route path="/today_post" Component={Today_post} />
        </Routes>
      </div>
    </>
  );
}

export default App;
