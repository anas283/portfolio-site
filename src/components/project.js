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
          <div className="h-full p-4 mt-4 text-center rounded bg-white shadow-md md:w-1/2 md:mr-2">
            <h5 className="-mt-2">Landing page</h5>
            <img
              className="mt-2 border border-gray-200 rounded"
              src={LandingPage}
              alt=""
            />
            <button className="border border-black w-full h-10 mt-4 bg-black text-white rounded hover:border hover:border-black hover:bg-white hover:text-black transition duration-200">
              Visit
            </button>
          </div>
          <div className="h-full p-4 mt-4 text-center rounded bg-white shadow-md md:w-1/2 md:ml-2">
            <h5 className="-mt-2">Dashboard</h5>
            <img
              className="mt-2 border border-gray-200 rounded"
              src={Dashboard}
              alt=""
            />
            <button className="border border-black w-full h-10 mt-4 bg-black text-white rounded hover:border hover:border-black hover:bg-white hover:text-black transition duration-200">
              Visit
            </button>
          </div>
        </div>
        <div className="md:flex justify-start">
          <div className="h-full p-4 mt-4 text-center rounded bg-white shadow-md md:w-1/2 md:mr-2">
            <h5 className="-mt-2">Shoe shop</h5>
            <img
              className="mt-2 border border-gray-200 rounded"
              src={ShoeShop}
              alt=""
            />
            <button className="border border-black w-full h-10 mt-4 bg-black text-white rounded hover:border hover:border-black hover:bg-white hover:text-black transition duration-200">
              Visit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
