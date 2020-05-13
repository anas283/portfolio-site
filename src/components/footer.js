import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="p-8">
        <h6 className="text-center">
          Built with react{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 border-b-2 border-teal-500"
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
