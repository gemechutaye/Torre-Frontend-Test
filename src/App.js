import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <About />
      <Interest />
    </div>
  );
}
