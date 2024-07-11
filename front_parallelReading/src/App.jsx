import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Login from "./pages/login";
import Register from "./pages/Register";
import Calender from "./pages/Calender";
import Logout from "./components/Logout";
function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/calender" Component={Calender} />
        </Routes>
      </div>
    </>
  );
}

export default App;
