import "./App.css";
import React from "react";
import All from "./components/All/All";
import Completed from "./components/Completed/Completed";
import { Routes, Route, Link } from "react-router-dom";
import Active from "./components/Active/Active";

function App() {
  return (
    <div className="App">
      <h1>#todo</h1>
      <div className="header">
        <Link to="/">
          <div className="all">All</div>
        </Link>
        <Link to="/active">
          <div className="active">Active</div>
        </Link>
        <Link to="/completed">
          <div className="completed">Completed</div>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/active" element={<Active />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
      </Routes>
    </div>
  );
}

export default App;
