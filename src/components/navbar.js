import React, { Component } from "react";
import NightMode from "../images/nightmode.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-center bg-gray-100 max-w-4xl mx-auto h-full">
        <div className="w-full flex justify-between sm:justify-end">
          <Link to="/project">
            <button className="mt-6 ml-4 border-b-2 border-gray-100 hover:border-black focus:outline-none md:mx-4">
              Project
            </button>
          </Link>
          <Link to="/">
            <button className="mt-6 ml-4 border-b-2 border-gray-100 hover:border-black focus:outline-none md:mx-4">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="mt-6 ml-4 border-b-2 border-gray-100 hover:border-black focus:outline-none md:mx-4">
              About
            </button>
          </Link>
          <button className="mt-4 ml-4 border-b-2 border-gray-100 hover:border-black focus:outline-none md:mx-4">
            Contact
          </button>
          <button className="flex justify-center w-10 h-10 mt-4 mx-3 bg-gray-200 border border-gray-200 rounded hover:bg-gray-300 focus:outline-none">
            <img className="w-4 h-4" src={NightMode} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
