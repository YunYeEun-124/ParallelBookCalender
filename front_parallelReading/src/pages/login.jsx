// Login.js
/**
 * 1. 입력하면 지워지도록.
 * 2. 틀리면 알람창 뜨도록
 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";

const Login = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  //event handler
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        {
          email: email,
          password: password,
        }
      );
      alert("로그인 성공 🐛🐛");
      nav("/calender");
    } catch (error) {
      if (email == "" || password == "") {
        alert("빈 칸 채우세요");
        return;
      }
      console.error("Login error:", error);
      alert("비밀번호나 아이디가 틀립니다.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">signup</Link>
    </div>
  );
};

export default Login;
