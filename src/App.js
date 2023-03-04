import "./styles.css";
import './App.css';
import React from "react";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Reservations from "./Reservations";

import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/menu" element = {<Menu />}/>
        <Route path = "/orderonline" element = {<OrderOnline />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </>
  );
}

export default App;
