import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="authorization-page authorization-page_default">
      <Logo />
      <LoginForm />
    </div>
  );
}

export default App;
