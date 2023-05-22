import React from "react";
import CarouselCard from "./CarouselComponents/CarouselCard";
const ListCarousel = ({ list }) => {
	return (
		<div className="listCarousel">
			<h2 className="listTitle">
				{list && (
					<ul>
						{list.map((el) => (
							<CarouselCard key={el.id} element={el} />
						))}
					</ul>
				)}
			</h2>
		</div>
	);
};

export default ListCarousel;
