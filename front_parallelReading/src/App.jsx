import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "./components/login";
import Register from "./components/Register";
import Logout from "./components/Logout";
function App() {
  return (
    <>
      <div className="container">
        <Login />
        <Register />
        <Logout />
      </div>
    </>
  );
}

export default App;
