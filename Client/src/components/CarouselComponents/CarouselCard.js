import React from "react";

const CarouselCard = ({ element }) => {
	return (
		<div
			className="carouselCard"
			style={{ backgroundImage: element.img }}
		></div>
	);
};

export default CarouselCard;
