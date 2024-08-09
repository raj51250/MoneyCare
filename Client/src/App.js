import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Slider from "./components/Slider";
import Statistics from "./components/Statistics";
import Custmor from "./components/Custmor";
import Service from "./components/Service";
import Works from "./components/Works";
import FQ from "./components/FQ";
import CustomerSay from "./components/CustomerSay";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Statistics />
      <Custmor />
      <Service />
      <Works />
      <FQ />
      <CustomerSay />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
