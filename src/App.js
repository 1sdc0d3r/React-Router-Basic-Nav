import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

function App() {
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
