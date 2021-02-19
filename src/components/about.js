import React, { Component } from "react";
import Html5 from "../images/small/html5.png";
import Css3 from "../images/small/css3.png";
import Sass from "../images/small/sass.png";
import Javascript from "../images/small/javascript.png";
import ReactLogo from "../images/small/react.png";
import Angular from "../images/small/angular.png";

class About extends Component {
	state = {};
	render() {
		return (
			<div className="p-6 max-w-4xl mx-auto h-screen">
				<div>
					<div>
						<h1 className="text-5xl font-bold">About me</h1>
					</div>
				</div>
				<div className="mt-6">
					<p className="font-normal text-base">
						Hi, my name is Anas. I'm a Front-end Developer with 4+ months of
						experience. I have developed numerous websites and coding as well.
					</p>
					<p className="font-normal text-base mt-6">
						I grew up in Alor Setar and went to school at Sungai Petani and 
						just finished my last semester of diploma in Computer Science. I spend
						my free time listening music and enjoying time with my family in 
						Guar Chempedak, Kedah.
					</p>
				</div>
				<div className="mt-10">
					<h1 className="font-bold">What I've worked with so far</h1>
				</div>
				<div className="flex flex-col mt-6 sm:flex-row">
					<div className="flex justify-between px-6 sm:w-1/2 sm:-mr-6 md:mr-0 sm:px-10">
						<div className="flex flex-col justify-center">
							<img src={ReactLogo} alt="react" />
							<h1 className="text-xs text-center mt-4">React</h1>
						</div>
						<div className="flex flex-col justify-center">
							<img src={Angular} alt="angular" />
							<h1 className="text-xs text-center mt-3">Angular</h1>
						</div>
						<div className="flex flex-col justify-center">
							<img className="w-4/5 mx-auto" src={Javascript} alt="javascript" />
							<h1 className="text-xs text-center mt-4">Javascript</h1>
						</div>
					</div>
					<div className="flex justify-between px-6 mt-8 sm:mt-0 sm:w-1/2 sm:-ml-6 md:ml-0 sm:px-10">
						<div className="flex flex-col justify-center">
							<img src={Html5} alt="html" />
							<h1 className="text-xs text-center mt-4">HTML5</h1>
						</div>
						<div className="flex flex-col justify-center">
							<img src={Css3} alt="css" />
							<h1 className="text-xs text-center mt-4">CSS3</h1>
						</div>
						<div className="flex flex-col justify-center">
							<img src={Sass} alt="sass" />
							<h1 className="text-xs text-center mt-4">Sass</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
