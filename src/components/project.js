import React, { Component } from "react";
import LandingPage from "../images/landing-page.png";
import Dashboard from "../images/dashboard.png";

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
        <div className="flex flex-col mt-4 md:flex-row">
          <div className="bg-gray-900 h-full p-4 mt-4 text-center rounded shadow-md md:w-1/2 md:mr-2">
            <a
              href="https://magnes-page.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="-mt-2 text-white">Landing page</h5>
              <img className="mt-2 rounded" src={LandingPage} alt="" />
            </a>
          </div>

          <div className="bg-gray-900 h-full p-4 mt-4 text-center rounded shadow-md relative md:w-1/2 md:mr-2">
            <div className="w-full h-16 mt-16 p-0 mt-0 md:mt-20 -ml-4 absolute">
              <h1 className="text-white mt-6 text-lg font-medium md:mt-6">
                Coming soon
              </h1>
            </div>
            <h5 className="-mt-2 text-white opacity-25">Dashboard</h5>
            <img className="mt-2 rounded opacity-25" src={Dashboard} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
