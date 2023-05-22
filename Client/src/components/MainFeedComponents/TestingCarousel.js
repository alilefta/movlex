import React, { useEffect, useState } from "react";

import "bootstrap/js/dist/carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./override_bootstrap_styles.css";
import HeroCarouselItem from "./HeroCarouselItem";
const TestingCarousel = ({ movies }) => {
	const [carouselMovies, setCarouselMovies] = useState([]);

	const defineComponentsImages = () => {
		const elements = movies.slice(0, 4).map((element) => element);
		setCarouselMovies(elements);
	};

	useEffect(() => {
		defineComponentsImages();
	}, [movies]);
	return (
		<div id="heroCarousel" className="carousel slide" data-bs-ride="true">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#heroCarousel"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#heroCarousel"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#heroCarousel"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				<button
					type="button"
					data-bs-target="#heroCarousel"
					data-bs-slide-to="3"
					aria-label="Slide 4"
				></button>
			</div>
			<div className="carousel-inner container-fluid">
				{carouselMovies && carouselMovies.length > 0 && (
					<div
						className={"carousel-item row active"}
						key={movies[0].id + Math.random() + movies[0].title}
						style={{
							backgroundImage: `url(https://image.tmdb.org/t/p/original/${carouselMovies[0].backdrop_path})`,
						}}
						data-bs-interval="2000"
					>
						<HeroCarouselItem movie={carouselMovies[0]} />
					</div>
				)}
				{carouselMovies &&
					carouselMovies.length > 1 &&
					carouselMovies.slice(1, 4).map((movie, index) => (
						<div
							className={`carousel-item row`}
							key={`${movie.id}${Math.random()}${movie.title}`}
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/original/${
									carouselMovies[index + 1].backdrop_path
								})`,
							}}
							data-bs-interval="3000"
						>
							<HeroCarouselItem movie={movie} />
						</div>
					))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#heroCarousel"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#heroCarousel"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default TestingCarousel;
