import React, { Component } from "react";
import LandingPage from "../images/landing-page.png";
import Dashboard from "../images/dashboard.png";

class Project extends Component {
  state = {};
  render() {
    return (
      <div className="p-4 max-w-4xl mx-auto h-screen">
        <h1 className="mt-4 text-lg font-semibold">My latest projects</h1>
        <div className="flex flex-col md:justify-start">
          <a
            href="https://magnes-page.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 h-full p-4 mt-4 text-center rounded shadow-md md:w-1/2 md:mr-2"
          >
            <h5 className="-mt-2 text-white">Landing page</h5>
            <img className="mt-2 rounded" src={LandingPage} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
