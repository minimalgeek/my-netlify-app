import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/" className="App-link">
            Home
          </Link>
          <Link to="/about" className="App-link">
            About
          </Link>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </main>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="App-content">Home</div>
      <div>Hello Codecool!</div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="App-content">About</div>
      <div>Such a cool site, right?!</div>
    </>
  );
}

export default App;
