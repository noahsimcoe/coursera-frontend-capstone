import "./styles.css";
import './App.css';
import React from "react";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Login from "./Routes/Login";
import Menu from "./Routes/Menu";
import OrderOnline from "./Routes/OrderOnline";
import Reservations from "./Routes/Reservations";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReservationDetails from "./Components/ReservationDetails";
import NotFound from "./Routes/NotFound";

// "Switch" is not used anymore in this newest React update
// The NOTFOUND thing has to go at the bottom as it's a "catch-all" for any unlisted routes

function App() {
  return (
    <>
        <Router>
          <div>
            <Routes>
              <Route path = "/" element = {<Home />}/>
              <Route path = "/home" element = {<Home />}/>
              <Route path = "/about" element = {<About />}/>
              <Route path = "/login" element = {<Login />}/>
              <Route path = "/menu" element = {<Menu />}/>
              <Route path = "/orderonline" element = {<OrderOnline />}/>
              <Route path = "/reservations" element = {<Reservations />}/>
              <Route path = "/reservations/:id" element = {<ReservationDetails />}/>
              <Route path ="*" element = {<NotFound />}/>
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
