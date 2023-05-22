import React from "react";
import GenreList from "./MovieComponents/GenreList";
const MainMovieCard = () => {
	return (
		<div>
			<div
				className="MainMovieCard"
				style={{
					backgroundImage: "",
				}}
			>
				<div className="details">
					<h1 className="title">Dark</h1>
					<p className="description">Description</p>
					<div className="genres">
						<GenreList />
					</div>
					<a href="##" className="CallToAction">
						Watch Now
					</a>
					<a href="##">Trailer</a>
				</div>
			</div>
		</div>
	);
};

export default MainMovieCard;
