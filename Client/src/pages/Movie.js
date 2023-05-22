import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../components/MovieComponents/Media.styles.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { fetchSimilarMovies } from "../assets/utils/FetchingResources/fetchSimilarMovies";
import CardsSection from "../components/MovieComponents/CardsSection";
import { fetchMovieDetails } from "../assets/utils/FetchingResources/fetchMovieDetails";
import { fetchCredits } from "../assets/utils/FetchingResources/fetchCredits";
import NoImage from "../assets/images/no-image.jpg";
import Comments from "../components/MovieComponents/Comments";
import VideoPlayer from "../components/VideoPlayer";
import Nav from "../components/Nav";
const Movie = () => {
	const { id } = useParams();

	const [similarMovies, setSimilarMovies] = useState([]);
	const [isLoadingSimilarMovies, setIsLoadingSimilarMovies] = useState(true);
	const [mediaDetails, setMediaDetails] = useState({});
	const [isLoadingMediaDetails, setIsLoadingMediaDetails] = useState(true);
	const [credits, setCredits] = useState({});
	const [isLoadingCredits, setIsLoadingCredits] = useState(true);
	const movie_url = "";
	useEffect(() => {
		fetchSimilarMovies(id)
			.then((data) => {
				setSimilarMovies(data.results.slice(0, 9));
				setIsLoadingSimilarMovies(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		fetchMovieDetails(id)
			.then((data) => {
				setMediaDetails(data);
				setIsLoadingMediaDetails(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	useEffect(() => {
		fetchCredits(id)
			.then((data) => {
				setCredits(data);
				setIsLoadingCredits(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	console.log(credits);

	return (
		<>
			<Nav show="authenticated" />
			<div className="media-section container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<nav className="breadcrumb-section" aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link to="/">Home</Link>
								</li>
								<li className="breadcrumb-item">
									<Link to="/movies">Movies</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									{mediaDetails && mediaDetails.title}
								</li>
							</ol>
						</nav>
					</div>
				</div>
				<div className="row">
					<div className="video-container col-sm-12 ">
						<VideoPlayer
							url={movie_url}
							backgroundImage={
								mediaDetails &&
								`https://image.tmdb.org/t/p/w500${
									mediaDetails.poster_path !== null
										? mediaDetails.poster_path
										: mediaDetails.backdrop_path
								}`
							}
						/>
					</div>
				</div>
				<div className="video-details-and-similar-section row">
					<div className="col-sm-8">
						{!isLoadingMediaDetails ? (
							<div className="video-details col-sm-12 row m-0">
								<div className="video-portrait-column col-sm-3">
									<img
										src={
											mediaDetails &&
											`https://image.tmdb.org/t/p/w500${
												mediaDetails.poster_path !== null
													? mediaDetails.poster_path
													: mediaDetails.backdrop_path
											}`
										}
										alt={mediaDetails && mediaDetails.title}
									/>
								</div>
								<div className="video-details-column col-sm-9 row m-0">
									<div className="video-title-and-rating row col-sm-12 m-0">
										<div className="video-title col-sm-9">
											<h1>{mediaDetails && mediaDetails.title} </h1>
											<div className="video-watching-info">
												<span className="video-badge">HD</span>
												<span>
													{`${
														mediaDetails.runtime ? mediaDetails.runtime : "N/A"
													}`}{" "}
													min
												</span>
											</div>
										</div>
										<div className="rating col-sm-3">
											<span>
												<StarsRating count={mediaDetails.vote_average} />
											</span>
											{/* Stars rendering */}
											<span className="rating-description">
												{mediaDetails.vote_average &&
													mediaDetails.vote_average.toFixed(1)}{" "}
												of 9.0
											</span>
										</div>
									</div>

									<div className="video-description">
										<p>{mediaDetails.overview && mediaDetails.overview}</p>
									</div>
									<div className="video-production-info ">
										<div className="country row">
											<span className="col-sm-2 title-span">Country: </span>{" "}
											<span className="col-sm-10">
												{mediaDetails.production_countries &&
													mediaDetails.production_countries.map(
														(country, index) => (
															<span
																className="production-country"
																key={`${index}${country}${mediaDetails.id}`}
															>
																{country
																	? country.iso_3166_1
																		? country.iso_3166_1
																		: country.name
																	: "N/A"}
																{mediaDetails.production_countries.length -
																	1 !==
																index
																	? ", "
																	: " "}
															</span>
														)
													)}
											</span>
										</div>
										<div className="genre row">
											<span className="col-sm-2 title-span">Genre: </span>
											<span className="col-sm-10">
												{mediaDetails.genres &&
													mediaDetails.genres.map((genre, index) => (
														<Link key={`${genre.id}`}>
															{genre.name}
															{mediaDetails.genres.length - 1 !== index
																? ", "
																: " "}
														</Link>
													))}
											</span>
										</div>
										<div className="release row">
											<span className="col-sm-2 title-span">Release: </span>{" "}
											<span className="col-sm-10">
												{mediaDetails.release_date
													? mediaDetails.release_date
													: "N/A"}
											</span>
										</div>
										<div className="production row">
											<span className="col-sm-2 title-span">
												Production Companies:{" "}
											</span>{" "}
											<span className="col-sm-10">
												{mediaDetails.production_companies &&
												mediaDetails.production_companies.length > 0
													? mediaDetails.production_companies.map(
															(company, index) => (
																<span key={`${company.id}`}>
																	{company.name}
																	{mediaDetails.production_companies.length -
																		1 !==
																	index
																		? ", "
																		: " "}
																</span>
															)
													  )
													: "N/A"}
											</span>
										</div>
										<div className="cast row">
											<span className="col-sm-2 title-span">Cast: </span>
											<span className="col-sm-10">
												{credits.cast &&
													credits.cast.length > 0 &&
													credits.cast.slice(0, 4).map((castActor, index) => (
														<span key={`${castActor.id}`}>
															{/* {castActor.name}{" "} */}
															{/* {credits.cast.length - 1 !== index ? ", " : " "} */}
															{castActor.profile_path && (
																<img
																	src={`https://image.tmdb.org/t/p/w500${castActor.profile_path}`}
																	alt=""
																/>
															)}
														</span>
													))}
											</span>
										</div>
										<div className="imdb row">
											<span className="col-sm-2 title-span">
												<img
													src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
													alt=""
												/>{" "}
											</span>
											<span className="col-sm-10">
												<Link
													to={`https://www.imdb.com/title/${mediaDetails.imdb_id}/`}
												>
													Show On IMDb
												</Link>
											</span>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="loading-spinner-max">
								<div className="spinner"></div>
							</div>
						)}
					</div>
					<div className="may-also-like col-sm-4">
						<h3>You may also like</h3>
						<hr />
						{isLoadingSimilarMovies ? (
							<div className="loading-spinner-max">
								<div className="spinner"></div>
							</div>
						) : (
							<div className="similar-media-section">
								<CardsSection media={similarMovies} mediaType={"movie"} />
							</div>
						)}
					</div>
				</div>
				<div className="row">
					<Comments />
				</div>
			</div>
		</>
	);
};

const StarsRating = ({ count }) => {
	const [value, setValue] = React.useState(count);
	return (
		<Box
			sx={{
				"& > legend": { mt: 2 },
			}}
		>
			<Rating
				name="simple-controlled"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			/>
		</Box>
	);
};

export default Movie;
