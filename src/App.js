import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/Master";
import Proficient from "./components/Proficient";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <About />
      <Proficient />
    </div>
  );
}
