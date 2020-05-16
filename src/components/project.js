import React, { Component } from "react";
import LandingPage from "../images/landing-page.png";

class Project extends Component {
  state = {};
  render() {
    return (
      <div className="p-4 max-w-4xl mx-auto h-screen">
        <h1 className="mt-4 text-lg font-bold md:text-2xl">
          My latest project
        </h1>
        <p className="mt-2">
          All source code are available on{" "}
          <a
            href="https://github.com/anas283"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 underline hover:text-teal-600"
          >
            GitHub
          </a>
        </p>
        <div className="flex flex-col mt-4 md:justify-start">
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
