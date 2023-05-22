import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { fetchTopRatedMovies } from "../assets/utils/FetchingResources/fetchTopRatedMovies";
// import { fetchTrendingMedia } from "../assets/utils/FetchingResources/fetchTrendingMedia";
import { Link } from "react-router-dom";
import { fetchPopular } from "../assets/utils/FetchingResources/fetchPopular";
import "../assets/styles/MyList.styles.css";

const MyList = () => {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [isLoadingTopRated, setIsLoadingTopRated] = useState(true);
	const [popularMovies, setPopularMovies] = useState([]);
	const [isLoadingPopular, setIsLoadingPopular] = useState(true);

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
		fetchPopular()
			.then((data) => {
				setPopularMovies(data.results.slice(0, 6));
				setIsLoadingPopular(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleRemoveCard = (id) => {
		// Logic to remove the card with the specified ID
	};

	const renderMediaCards = (mediaDetails) => {
		return (
			mediaDetails &&
			mediaDetails.length > 0 &&
			mediaDetails.map((media) => (
				<div key={media.id} className="mylist-page-media-card">
					<AiOutlineCloseCircle
						className="mylist-page-remove-icon"
						onClick={() => handleRemoveCard(media.id)}
					/>
					<div
						className="mylist-page-media-progress"
						style={{ width: `${Math.floor(Math.random() * 100)}%` }}
					></div>
					<img
						src={`https://image.tmdb.org/t/p/w500${
							media.poster_path !== null
								? media.poster_path
								: media.backdrop_path
						}`}
						alt={media.title}
						className="mylist-page-media-image"
					/>
					<div className="mylist-page-media-info">
						<Link to={`/movie/${media.id}`} className="mylist-page-media-title">
							{media.title}
						</Link>
						<div className="mylist-page-media-rating">
							<BsStarFill className="mylist-page-star-icon" />
							<span>{media.vote_average}</span>
						</div>
					</div>
				</div>
			))
		);
	};

	return (
		<>
			<Nav show="authenticated" />
			<div className="container mylist-page">
				<div className="jumbotron">
					<h1 className="display-4">My Watchlist</h1>
					<p className="lead">Explore the movies and shows you're watching</p>
				</div>

				<h2 className="mylist-page-section-title mt-4 mb-4">Still Watching</h2>
				{isLoadingPopular ? (
					<div className="mylist-page-loading-spinner-max">
						<div className="mylist-page-spinner"></div>
					</div>
				) : (
					<div className="mylist-page-media-container">
						{renderMediaCards(popularMovies)}
					</div>
				)}

				<h2 className="mylist-page-section-title">Top 10 Movies</h2>
				{isLoadingTopRated ? (
					<div className="mylist-page-loading-spinner-max">
						<div className="mylist-page-spinner"></div>
					</div>
				) : (
					<div className="mylist-page-media-container">
						{renderMediaCards(topRatedMovies)}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default MyList;
