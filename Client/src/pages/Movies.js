import React, { useEffect, useState } from "react";
import "../assets/styles/Movies.styles.css";
import { BsStarFill } from "react-icons/bs";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { fetchTopRatedMovies } from "../assets/utils/FetchingResources/fetchTopRatedMovies";
import { fetchTrendingMedia } from "../assets/utils/FetchingResources/fetchTrendingMedia";
import { Link } from "react-router-dom";
import { fetchPopular } from "../assets/utils/FetchingResources/fetchPopular";

const Movies = () => {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [isLoadingTopRated, setIsLoadingTopRated] = useState(true);
	const [popularMovies, setPopularMovies] = useState([]);
	const [isLoadingPopular, setIsLoadingPopular] = useState(true);
	const [trendingMedia, setTrendingMedia] = useState([]);
	const [isLoadingTrending, setIsLoadingTrending] = useState(true);

	useEffect(() => {
		fetchTopRatedMovies()
			.then((data) => {
				setTopRatedMovies(data.results.slice(0, 6));
				setIsLoadingTopRated(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetchTrendingMedia()
			.then((data) => {
				setTrendingMedia(data.results.slice(0, 6));
				setIsLoadingTrending(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetchPopular()
			.then((data) => {
				setPopularMovies(data.results.slice(0, 6));
				setIsLoadingPopular(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const renderMovieCards = (mediaDetails) => {
		return (
			mediaDetails &&
			mediaDetails.length > 0 &&
			mediaDetails.map((movie) => (
				<div key={movie.id} className="movies-page-movie-card">
					<img
						src={
							movie &&
							`https://image.tmdb.org/t/p/w500${
								movie.poster_path !== null
									? movie.poster_path
									: movie.backdrop_path
							}`
						}
						alt={movie && movie.title}
						className="movies-page-movie-image"
					/>
					<div className="movies-page-movie-info">
						<Link to={`/movie/${movie.id}`} className="movies-page-movie-title">
							{movie.title}
						</Link>
						<div className="movies-page-movie-rating">
							<BsStarFill className="movies-page-star-icon" />
							<span>{movie.vote_average}</span>
						</div>
					</div>
				</div>
			))
		);
	};

	return (
		<>
			<Nav show="authenticated" />
			<div className="container movies-page">
				<div className="jumbotron">
					<h1 className="display-4">Movies</h1>
					<p className="lead">Discover the latest movies</p>
				</div>

				<h2 className="movies-page-section-title">Popular Movies</h2>
				{isLoadingPopular ? (
					<div className="movies-page-loading-spinner-max">
						<div className="movies-page-spinner"></div>
					</div>
				) : (
					<div className="movies-page-movie-container">
						{renderMovieCards(popularMovies)}
					</div>
				)}

				<h2 className="movies-page-section-title">Top 10 Movies</h2>
				{isLoadingTopRated ? (
					<div className="movies-page-loading-spinner-max">
						<div className="movies-page-spinner"></div>
					</div>
				) : (
					<div className="movies-page-movie-container">
						{renderMovieCards(topRatedMovies)}
					</div>
				)}

				<h2 className="movies-page-section-title">Trending Movies</h2>
				{isLoadingTrending ? (
					<div className="movies-page-loading-spinner-max">
						<div className="movies-page-spinner"></div>
					</div>
				) : (
					<div className="movies-page-movie-container">
						{renderMovieCards(trendingMedia)}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Movies;
