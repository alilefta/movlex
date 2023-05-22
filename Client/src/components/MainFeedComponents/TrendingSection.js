import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMedia } from "../../assets/utils/FetchingResources/fetchTrendingMedia";
const TrendingSection = () => {
	const [trendingMedia, setTrendingMedia] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showedMore, setShowedMore] = useState(false);
	useEffect(() => {
		fetchTrendingMedia()
			.then((data) => {
				// console.log(data);
				setTrendingMedia(data.results.slice(0, 8));
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleLoadMore = () => {
		console.log("Handle show more");
		fetchTrendingMedia()
			.then((data) => {
				setTrendingMedia(data.results);
				setShowedMore(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

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
				<h2>Trending Movies & TV Series</h2>
				<div className="trending-movies-list container-fluid">
					<div className="row movie-cards">
						{trendingMedia.map((movie) => (
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
					{!showedMore ? (
						<button className="discover-more-btn btn" onClick={handleLoadMore}>
							Discover More
						</button>
					) : (
						<></>
					)}
				</div>
			</div>
		</section>
	);
};

export default TrendingSection;
