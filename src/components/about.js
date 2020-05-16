import React, { Component } from "react";
import Html5 from "../images/small/html5.png";
import Css3 from "../images/small/css3.png";
import Sass from "../images/small/sass.png";
import Javascript from "../images/small/javascript.png";
import ReactLogo from "../images/small/react.png";
import Php from "../images/small/php.png";
import MySql from "../images/small/mysql.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="p-6 max-w-4xl mx-auto h-screen">
        <div>
          <div>
            <h1 className="text-6xl font-bold">Anas</h1>
          </div>
          <div>
            <h1 className="text-6xl font-bold">code</h1>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-normal md:text-lg">
            Hi, my name is Anas. I'm a Front-end Developer with 6 months of
            experience. I have designed numerous websites and coding as well.
          </p>
        </div>
        <div className="mt-10">
          <h1 className="font-bold">What I've worked with so far</h1>
        </div>
        <div className="flex flex-col mt-6 sm:flex-row">
          <div className="flex justify-between px-6 sm:w-1/2 sm:-mr-6 md:mr-0 sm:px-10">
            <div className="flex flex-col justify-center">
              <img src={Html5} alt="" />
              <h1 className="text-xs text-center mt-4">HTML5</h1>
            </div>
            <div className="flex flex-col justify-center">
              <img src={Css3} alt="" />
              <h1 className="text-xs text-center mt-4">CSS3</h1>
            </div>
            <div className="flex flex-col justify-center">
              <img src={Sass} alt="" />
              <h1 className="text-xs text-center mt-4">Sass</h1>
            </div>
          </div>
          <div className="flex justify-between px-6 mt-8 sm:mt-0 sm:w-1/2 sm:-ml-6 md:ml-0 sm:px-10">
            <div className="flex flex-col justify-center">
              <img className="w-4/5 mx-auto" src={Javascript} alt="" />
              <h1 className="text-xs text-center mt-4">Javascript</h1>
            </div>
            <div className="flex flex-col justify-center">
              <img src={ReactLogo} alt="" />
              <h1 className="text-xs text-center mt-4">React</h1>
            </div>
            <div className="flex flex-col justify-center">
              <img src={Php} alt="" />
              <h1 className="text-xs text-center mt-8">PHP</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2 sm:flex-row">
          <div className="flex justify-between px-6 mt-8 sm:w-1-2 sm:px-10">
            <div className="flex flex-col justify-center">
              <img className="w-4/5 mx-auto" src={MySql} alt="" />
              <h1 className="text-xs text-center mt-4">MySQL</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
