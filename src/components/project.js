import React, { Component } from "react";
import LandingPage from "../images/landing-page.png";
import Dashboard from "../images/dashboard.png";
import ShoeShop from "../images/shoe-shop.jpg";

class Project extends Component {
  state = {};
  render() {
    return (
      <div className="p-4 max-w-4xl mx-auto h-full">
        <h1 className="mt-4 text-lg font-semibold">Static website</h1>
        <div className="md:flex justify-start">
          <div className="bg-gray-900 h-full p-4 mt-4 text-center rounded shadow-md md:w-1/2 md:mr-2">
            <h5 className="-mt-2 text-white">Landing page</h5>
            <img className="mt-2 rounded" src={LandingPage} alt="" />
          </div>
          <div className="bg-gray-900 h-full p-4 mt-4 text-center rounded shadow-md md:w-1/2 md:ml-2">
            <h5 className="-mt-2 text-white">Dashboard</h5>
            <img className="mt-2 rounded" src={Dashboard} alt="" />
          </div>
        </div>
        <div className="md:flex justify-start">
          <div className="bg-gray-900 h-full p-4 mt-4 text-center rounded shadow-md md:w-1/2 md:mr-2">
            <h5 className="-mt-2 text-white">Shoe shop</h5>
            <img className="mt-2 rounded" src={ShoeShop} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
