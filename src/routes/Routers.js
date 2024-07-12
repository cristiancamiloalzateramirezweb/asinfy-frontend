import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Home } from "../pages/home/Home";
import { Footer } from "../components/footer/Footer";

export const Routers = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};
