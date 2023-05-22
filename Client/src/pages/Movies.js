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

		// console.log(topRatedMovies);
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
	const movies = [
		{
			id: 1,
			title: "Movie 1",
			image: "https://via.placeholder.com/300x450",
			rating: 4,
		},
		{
			id: 2,
			title: "Movie 2",
			image: "https://via.placeholder.com/300x450",
			rating: 3,
		},
		{
			id: 3,
			title: "Movie 3",
			image: "https://via.placeholder.com/300x450",
			rating: 5,
		},
		{
			id: 4,
			title: "Movie 4",
			image: "https://via.placeholder.com/300x450",
			rating: 4,
		},
		{
			id: 5,
			title: "Movie 5",
			image: "https://via.placeholder.com/300x450",
			rating: 3,
		},
		{
			id: 6,
			title: "Movie 6",
			image: "https://via.placeholder.com/300x450",
			rating: 5,
		},
	];

	const renderMovieCards = (mediaDetails = movies) => {
		console.log(mediaDetails);
		return (
			mediaDetails &&
			mediaDetails.length > 0 &&
			mediaDetails.map((movie) => (
				<div key={movie.id} className="movie-card">
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
						className="movie-image"
					/>

					<div className="movie-info">
						<Link
							to={`/movie/${movie.id}`}
							children={<h3 className="movie-title">{movie.title}</h3>}
						/>
						<div className="movie-rating">
							<BsStarFill className="star-icon" />
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
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Movies</h1>
					<p className="lead">Discover the latest movies</p>
				</div>

				<h2 className="section-title">Popular Movies</h2>
				{isLoadingPopular ? (
					<div className="loading-spinner-max">
						<div className="spinner"></div>
					</div>
				) : (
					<div className="movie-container">
						{renderMovieCards(popularMovies)}
					</div>
				)}

				<h2 className="section-title">Top 10 Movies</h2>
				{isLoadingTopRated ? (
					<div className="loading-spinner-max">
						<div className="spinner"></div>
					</div>
				) : (
					<div className="movie-container">
						{renderMovieCards(topRatedMovies)}
					</div>
				)}

				<h2 className="section-title">Trending Movies</h2>
				{isLoadingTrending ? (
					<div className="loading-spinner-max">
						<div className="spinner"></div>
					</div>
				) : (
					<div className="movie-container">
						{renderMovieCards(trendingMedia)}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Movies;
