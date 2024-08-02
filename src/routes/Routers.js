import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Item } from "../pages/item/Item";
import { About } from "../pages/about/About";
import { Help } from "../pages/help/Help";
import { Contact } from "../pages/contact/Contact";
import { Legal } from "../pages/legal/Legal";
import { Error } from "../pages/error/Error";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<Item></Item>}></Route>
        <Route path="/conocenos" element={<About></About>}></Route>
        <Route path="/contactanos" element={<Contact></Contact>}></Route>
        <Route path="/ayuda" element={<Help></Help>}></Route>
        <Route path="/legal" element={<Legal></Legal>}></Route>    
        <Route path="*" element={<Error></Error>}></Route>    
      </Routes>
    </Router>
  );
};
