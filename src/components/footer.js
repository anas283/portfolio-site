import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="flex justify-center my-6 max-w-full">
        <h6 className="mt-4">
          Build with{" "}
          <a
            className="text-blue-600"
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
