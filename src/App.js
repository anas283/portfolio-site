import React from "react";
import "./styles/app.css";
import Project from "./components/project";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App bg-gray-100">
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
