import React from "react";
import Logo from "./components/logo/Logo";
import LoginForm from "./components/loginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="authorization-page">
      <Logo />
      <LoginForm />
    </div>
  );
}

export default App;
