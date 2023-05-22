import React, { useState, useEffect } from "react";
import { fetchListOfMovies } from "../../assets/utils/FetchingResources/fetchListOfMovies";
import "./MainFeed.styles.css";
import SideBar from "./SideBar";
import TrendingSection from "./TrendingSection";
import HeroSection from "./HeroSection";

const MainFeedHero = () => {
	const [continueWatching, setContinueWatchingData] = useState([]);
	const [isLoadingContinueWatching, setIsLoadingContinueWatching] =
		useState(true);
	// const [moviesData, setMoviesData] = useState(null);
	// const mediaIDs = [603692, 238, 429, 157336, 122];
	// const tvIDs = [1396, 70523];

	useEffect(() => {
		fetchListOfMovies()
			.then((data) => {
				setContinueWatchingData(data.results.slice(0, 5));
				setIsLoadingContinueWatching(false);

				// fetchMovieDetails(429)
				// 	.then((data) => {
				// 		setMoviesData(data);
				// 		console.log(data);
				// 	})
				// 	.catch((error) => {
				// 		console.log(error);
				// 	});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(continueWatching[0]);
	if (isLoadingContinueWatching) {
		return (
			<div className="loading-spinner-max">
				<div className="spinner"></div>
			</div>
		);
	}

	return (
		<main className="main-hero container-fluid">
			<div className="row">
				<div className="col-sm-9 hero-section container-fluid">
					<HeroSection movies={continueWatching} />
					<div className="row hero-container justify-content-start ">
						<TrendingSection />
					</div>
				</div>
				<SideBar continueWatching={continueWatching} />
			</div>
		</main>
	);
};

export default MainFeedHero;
