import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import About from "./components/Master";
import Proficient from "./components/Proficient";
import Expert from "./components/Expert";
import Contacts from './components/contacts';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <About />
      <Proficient />
      <Expert />
    </div>
    
  );
}


          //   <div class="card-body">
          //     <h5 class="card-title">Steve Jobs</h5>
          //     <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
          //     <p class="card-text">Stay Hungry, Stay Foolish</p>
          //   </div>
          // </div>
