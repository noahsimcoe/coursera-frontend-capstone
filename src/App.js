import "./styles.css";
import React from "react";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Cart from "./Routes/Cart";
import Menu from "./Routes/Menu";
import OrderOnline from "./Routes/OrderOnline";
import Reservations from "./Routes/Reservations";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReservationDetails from "./Components/ReservationDetails";
import NotFound from "./Routes/NotFound";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Container } from "react-bootstrap";
import { ShopContextProvider } from "./Components/Context/shop-context";

// "Switch" is not used anymore in this newest React update
// The NOTFOUND thing has to go at the bottom as it's a "catch-all" for any unlisted routes

function App() {
  return (
    <Container>
        <ShopContextProvider>
        <Router>
        <Header />
          <div>
            <Routes>
              <Route path = "/" element = {<Home />}/>
              <Route path = "/home" element = {<Home />}/>
              <Route path = "/about" element = {<About />}/>
              <Route path = "/cart" element = {<Cart />}/>
              <Route path = "/menu" element = {<Menu />}/>
              <Route path = "/orderonline" element = {<OrderOnline />}/>
              <Route path = "/reservations" element = {<Reservations />}/>
              <Route path = "/reservations/:id" element = {<ReservationDetails />}/>
              <Route path ="*" element = {<NotFound />}/>
            </Routes>
          </div>
        </Router>
        </ShopContextProvider>
        <Footer />
    </Container>
  );
}

export default App;
