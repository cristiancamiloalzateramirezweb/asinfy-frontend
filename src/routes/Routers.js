import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/Home";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
};
