import React from "react";
import Logo from "./components/Logo/Logo";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="authorization-page authorization-page_default page__authorization-page_position page__authorization-page_size ">
      <Logo />
      <LoginForm />
    </div>
  );
}

export default App;
