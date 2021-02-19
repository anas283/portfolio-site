import React, { Component } from "react";
import ManageLandingPage from "../images/manage-landing-page.png";
import Dashboard from "../images/dashboard.png";

class Project extends Component {
	state = {};
	render() {
		return (
			<div className="p-4 max-w-4xl mx-auto h-screen">
				<h1 className="mt-4 px-2 text-lg font-bold md:text-2xl">
					My latest project
				</h1>
				<p className="mt-2 px-2">
					All source code are available on{" "}
				<a
					href="https://github.com/anas283"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-500 underline hover:text-teal-600"
				>
					GitHub
				</a>
				</p>

				<div className="w-auto h-auto mt-4 flex flex-wrap">
					<a
						className="land w-full h-full p-2 sm:w-1/2"
						href="https://manage-landing-page-master-plum.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="w-full h-full bg-gray-900 rounded shadow-md p-4">
							<h5 className="-mt-2 text-white text-center">Manage Landing page</h5>
							<img className="mt-2 h-60 rounded" src={ManageLandingPage} alt="" />
						</div>
					</a>

					<a
						className="dash w-full h-full p-2 sm:w-1/2"
						href="https://sales-dashboard.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="w-full h-full bg-gray-900 rounded shadow-md p-4">
							<h5 className="-mt-2 text-white text-center">Dashboard</h5>
							<img className="mt-2 rounded" src={Dashboard} alt="" />
						</div>
					</a>
				</div>
			</div>
		);
	}
}

export default Project;
