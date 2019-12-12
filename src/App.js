import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components/index";

function App() {
  return (
    <>
      {/* TODO add exact to home Route */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <div>
        <Navigation />
      </div>
    </>
  );
}

export default App;
