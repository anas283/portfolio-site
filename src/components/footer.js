import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <h6 className="text-center p-4">
          Build with react{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
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
