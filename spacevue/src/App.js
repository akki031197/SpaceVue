import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      {/* <img src={space} alt="" /> */}
      <header className="App-header">
        <Header />
        <Login />
      </header>
    </div>
  );
}

export default App;
