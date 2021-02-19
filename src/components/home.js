import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="flex justify-center max-w-4xl mx-auto max-h-full h-screen">
			<div className="w-full px-6 mt-16 md:mt-32">
				<div className="hello animated fadeInDown">
					<h1 className="text-5xl font-bold w-5/6">Hey, I'm Anas</h1>
				</div>
				<div className="text animated fadeInDown -mt-4">
					<p className="w-full font-normal mt-0 text-base md:w-4/5">
						I'm a Front-end Developer, my expertise is in the area of responsive
						design. With every line of code, I strive to make the web a
						beautiful place.
					</p>
					<p className="w-full font-normal mt-4 text-base md:w-4/5">
						If you have any development needs, feel free to{" "}
						<Link
							to="/contact"
							className="text-teal-500 underline hover:text-teal-600"
							>
							contact
							</Link>{" "}
							or{" "}
						<Link
							to="/about"
							className="text-teal-500 underline hover:text-teal-600"
							>
							get to know me little better
						</Link>
						.
					</p>
					<div className="w-full flex items-center mt-16 mb-32 flex-col md:items-start md:mt-2 md:flex-row md:mb-64">
						<Link to="/project">
							<button className="w-40 h-12 text-white rounded-full bg-teal-500 mt-10 hover:bg-teal-600 transition duration-300">
								View my work
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
