import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HeroCarouselItem = ({ movie }) => {
	const genres = ["Adventure", "Action", "Thriller"];

	return (
		<div className="media-info col-sm-6 offset-1 align-self-center ">
			<h1>{movie.title === undefined ? movie.name : movie.title}</h1>
			<p>{movie.overview}</p>
			<div className="genres">
				{genres.map((genre, index) => (
					<span className="genre" key={`${genre}${index}`}>
						{genre}
					</span>
				))}
			</div>
			<div className="btns">
				<Link to={`/${movie.media_type}/${movie.id}`} className="watch-now-btn">
					Watch <FontAwesomeIcon icon={faCirclePlay} />
				</Link>
				<Link to={`trailer_url`} className="watch-trailer-btn">
					Trailer <FontAwesomeIcon icon={faCirclePlay} />
				</Link>
			</div>
		</div>
	);
};

export default HeroCarouselItem;
