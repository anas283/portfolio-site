import React, { Component } from "react";
import Twitter from "../images/large/twitter.png";
import GitHub from "../images/large/github.png";
import LinkedIn from "../images/large/linkedin.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="p-6 max-w-4xl mx-auto h-screen">
        <div>
          <p>
            My preferred way of contact is via{" "}
            <a
              href="https://twitter.com/anas_283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 underline hover:text-teal-600"
            >
              Twitter
            </a>{" "}
            or{" "}
            <a
              href="mailto:muhammadanasbinadam@gmail.com"
              className="text-teal-500 underline hover:text-teal-600"
            >
              e-mail
            </a>
            . Feel free to check out my social media presence below to get to
            know me better.
          </p>
        </div>
        <div className="flex flex-row justify-center mt-6">
          <a
            href="https://twitter.com/anas_283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12 h-12 mx-4" src={Twitter} alt="" />
          </a>
          <a
            href="https://github.com/anas283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12 h-12 mx-4" src={GitHub} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/anas283/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-12 h-12 mx-4" src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
