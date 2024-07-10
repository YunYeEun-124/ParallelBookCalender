// Logout.js

import React from "react";
import "../styles/Logout.css";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged out 성공 💻😍❤️😊");
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
