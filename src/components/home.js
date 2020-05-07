import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="flex justify-center bg-gray-100 max-w-4xl mx-auto max-h-full md:h-screen xl:h-full">
        <div className="w-full px-6 mt-24 md:mt-32">
          <h1 className="text-5xl font-bold md:text-6xl">Hello, I'm Anas</h1>
          <p className="w-full font-hairline text-gray-700 text-md mt-6 md:w-4/5 md:text-lg">
            I'm a freelance front-end developer, my expertise is in the area of
            responsive design. With every line of code, I strive to make the web
            a beautiful place.
          </p>
          <div className="w-full flex items-center mt-20 mb-32 flex-col md:items-start md:mt-2 md:flex-row md:mb-64">
            <Link to="/project">
              <button className="bg-black rounded text-white w-40 h-12 mt-8 hover:bg-gray-900">
                Project
              </button>
            </Link>
            <button className="border border-black rounded w-40 h-12 mt-2 md:mt-8 md:ml-2 hover:bg-gray-200">
              Resume
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
