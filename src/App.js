import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Pages from "./pages/Pages";


function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Navigate to={"login"} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
      </Routes>
    </div>
  );
}

export default App;
