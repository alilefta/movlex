import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTopRatedMovies } from "../../assets/utils/FetchingResources/fetchTopRatedMovies";
// import { fetchTrendingMedia } from "../../assets/utils/FetchingResources/fetchTrendingMedia";
const TopRatedMovies = () => {
	const [latestMovies, setLatestMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchTopRatedMovies()
			.then((data) => {
				console.log(data);
				setLatestMovies(data.results.slice(0, 8));
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (isLoading) {
		return (
			<div className="loading-spinner-max">
				<div className="spinner"></div>
			</div>
		);
	}

	return (
		<section className="trending-section container-fluid">
			<div className="row">
				<h2>Top rated movies</h2>
				<div className="trending-movies-list container-fluid">
					<div className="row movie-cards">
						{latestMovies.map((movie) => (
							<div key={movie.id} className="movie-card">
								<Link
									to={`/${movie.media_type}/${movie.id}`}
									children={
										<>
											<img
												src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
												alt={movie.title}
											/>
											<div className="movie-title">
												{movie.title === undefined ? movie.name : movie.title}
											</div>
										</>
									}
								></Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopRatedMovies;
