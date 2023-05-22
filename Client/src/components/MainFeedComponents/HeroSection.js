import React from "react";

import TestingCarousel from "./TestingCarousel";

const HeroSection = ({ movies }) => {
	return (
		<>
			<div className="row hero-container m-0">
				<TestingCarousel movies={movies} />
				<div className="overlay"></div>
			</div>
		</>
	);
};

export default HeroSection;
