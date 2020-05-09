import React from "react";
import "./styles/app.css";
import Home from "./components/home";
import Project from "./components/project";
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NightMode from "./images/nightmode.png";
import DayMode from "./images/daymode.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="flex justify-center max-w-4xl mx-auto h-full">
          <div className="w-full flex justify-between sm:justify-end">
            <Link
              to="/project"
              className="mt-6 ml-4 focus:outline-none md:mx-4"
            >
              Project
            </Link>
            <Link to="/" className="mt-6 ml-4 focus:outline-none md:mx-4">
              Home
            </Link>
            <Link to="/about" className="mt-6 ml-4 focus:outline-none md:mx-4">
              About
            </Link>
            <Link
              to="/contact"
              className="mt-6 ml-4 focus:outline-none md:mx-4"
            >
              Contact
            </Link>
            <button
              className="flex justify-center w-10 h-10 mt-4 mx-3 focus:outline-none"
              onClick={() => setDarkMode((prevMode) => !prevMode)}
            >
              <img
                className="w-4 h-4"
                src={darkMode ? DayMode : NightMode}
                alt=""
              />
            </button>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
