import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="flex justify-center m-6 mb-6">
        <h6>
          Build with{" "}
          <a
            className="text-blue-600 border-b-2 border-white hover:border-blue-600"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          © 2020
        </h6>
      </div>
    );
  }
}

export default Footer;
