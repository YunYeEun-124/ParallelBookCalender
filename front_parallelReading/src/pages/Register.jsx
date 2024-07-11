// Register.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/", {
        email: email,
        password1: password1,
        password2: password2,
      });

      alert("회원가입 성공 💙💙");
      nav("/");
      // 토큰을 localStorage에 저장할 수 있습니다.
    } catch (error) {
      if (password1 !== password2) {
        alert("password diff! ");
        setPassword1("");
        setPassword2("");
        return;
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
