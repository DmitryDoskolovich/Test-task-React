import React from "react";
import Logo from "./components/logo/Logo";
import LoginForm from "./components/loginForm/LoginForm";
import LoginForm2 from "./components/loginForm/LoginForm2";
import "./App.css";

function App() {
  return (
    <div className="authorization-page">
      <Logo />
      <LoginForm2 />
    </div>
  );
}

export default App;
