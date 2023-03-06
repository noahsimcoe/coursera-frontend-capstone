import "./styles.css";
import './App.css';
import React from "react";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Login from "./Routes/Login";
import Menu from "./Routes/Menu";
import OrderOnline from "./Routes/OrderOnline";
import Reservations from "./Routes/Reservations";

import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/home" element = {<Home />}/>
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
