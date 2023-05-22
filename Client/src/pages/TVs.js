import React, { useEffect, useState } from "react";
import "../assets/styles/Tvs.styles.css";
import { BsStarFill } from "react-icons/bs";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { fetchOnTheAirTvs } from "../assets/utils/FetchingResources/fetchOnTheAirTvs";
import { fetchTvsPopular } from "../assets/utils/FetchingResources/fetchTvsPopular";
import { fetchTvsTopRated } from "../assets/utils/FetchingResources/fetchTvsTopRated";

const Tvs = () => {
	const [topRatedTvs, setTopRatedTvs] = useState([]);
	const [isLoadingTopRated, setIsLoadingTopRated] = useState(true);
	const [popularTvs, setPopularTvs] = useState([]);
	const [isLoadingPopular, setIsLoadingPopular] = useState(true);
	const [onTheAir, setOnTheAir] = useState([]);
	const [isLoadingOnAir, setIsLoadingOnAir] = useState(true);

	useEffect(() => {
		fetchTvsTopRated()
			.then((data) => {
				setTopRatedTvs(data.results.slice(0, 6));
				setIsLoadingTopRated(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetchTvsPopular()
			.then((data) => {
				setPopularTvs(data.results.slice(0, 6));
				setIsLoadingPopular(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetchOnTheAirTvs()
			.then((data) => {
				setOnTheAir(data.results.slice(0, 6));
				setIsLoadingOnAir(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const renderTvCards = (mediaDetails) => {
		return (
			mediaDetails &&
			mediaDetails.length > 0 &&
			mediaDetails.map((tv) => (
				<div key={tv.id} className="tvs-page-movie-card">
					<img
						src={
							tv &&
							`https://image.tmdb.org/t/p/w500${
								tv.poster_path !== null ? tv.poster_path : tv.backdrop_path
							}`
						}
						alt={tv && tv.title}
						className="tvs-page-movie-image"
					/>
					{console.log(tv)}
					<div className="tvs-page-movie-info">
						<Link to={`/tv/${tv.id}`} className="tvs-page-movie-title">
							{tv.title || tv.name}
						</Link>
						<div className="tvs-page-movie-rating">
							<BsStarFill className="tvs-page-star-icon" />
							<span>{tv.vote_average}</span>
						</div>
					</div>
				</div>
			))
		);
	};

	return (
		<>
			<Nav show="authenticated" />
			<div className="container tvs-page">
				<div className="jumbotron">
					<h1 className="display-4">TV Shows</h1>
					<p className="lead">Discover the latest TV shows</p>
				</div>

				<h2 className="tvs-page-section-title">Popular TV Shows</h2>
				{isLoadingPopular ? (
					<div className="tvs-page-loading-spinner-max">
						<div className="tvs-page-spinner"></div>
					</div>
				) : (
					<div className="tvs-page-movie-container">
						{renderTvCards(popularTvs)}
					</div>
				)}

				<h2 className="tvs-page-section-title">Top Rated TV Shows</h2>
				{isLoadingTopRated ? (
					<div className="tvs-page-loading-spinner-max">
						<div className="tvs-page-spinner"></div>
					</div>
				) : (
					<div className="tvs-page-movie-container">
						{renderTvCards(topRatedTvs)}
					</div>
				)}

				<h2 className="tvs-page-section-title">On The Air TV Shows</h2>
				{isLoadingOnAir ? (
					<div className="tvs-page-loading-spinner-max">
						<div className="tvs-page-spinner"></div>
					</div>
				) : (
					<div className="tvs-page-movie-container">
						{renderTvCards(onTheAir)}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Tvs;
