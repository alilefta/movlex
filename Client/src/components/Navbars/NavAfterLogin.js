import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/MainLogo.svg";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
// import UserPicture from "../../assets/images/userPic.jpg";
import UserProfileDropdown from "./UserProfileDropdown";
import { useLocation } from "react-router-dom";

const NavAfterLogin = ({ bgColor = "#000000" }) => {
	const location = useLocation().pathname;
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const inputRef = useRef(null);

	const handleSearchClick = () => {
		setIsSearchOpen(true);
	};

	useEffect(() => {
		if (isSearchOpen) {
			inputRef.current.focus();
		}
	}, [isSearchOpen]);

	const handleSearchClose = () => {
		setIsSearchOpen(false);
		setSearchQuery("");
		setSearchResults([]);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		// Perform your API request using the searchQuery value
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE5ZTUxNmNiODFlNGU2YjA0Y2Y2ODExOWEzNjA4ZCIsInN1YiI6IjYxMmE0ZDk1MDZmOTg0MDA0MzRiYzMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zYLYHM6XmMpRRj3vVv92ciByzLaLRwVZn5uKTNAADLM",
			},
		};
		fetch(
			`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}`,
			options
		)
			.then((response) => response.json())
			.then((data) => {
				// Handle the API response data
				setSearchResults(
					data.results.filter((e) =>
						e.poster_path !== null || e.backdrop_path !== null ? e : null
					)
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		if (searchResults.length > 0) {
			// console.log(
			// 	searchResults.filter((e) =>
			// 		e.poster_path !== null || e.backdrop_path !== null ? e : null
			// 	)
			// );
		}
	}, [searchResults]);

	return (
		<Container fluid={"xlg"} className="navbar-after-login">
			<nav className="nav row">
				<div className="logo col-sm-2">
					<Link to="/" children={<img src={Logo} alt="" />} />
				</div>
				<div className="main-navigation col-sm-7">
					<ul className="browseList">
						<li className={`${location === "/home" ? "active" : ""}`}>
							<Link to="/">Home</Link>
						</li>
						<li className={`${location === "/tv" ? "active" : ""}`}>
							<Link to="/tv">TV Shows</Link>
						</li>
						<li className={`${location === "/movies" ? "active" : ""}`}>
							<Link to="/movies">Movies</Link>
						</li>
						<li className={`${location === "/mylist" ? "active" : ""}`}>
							<Link to="/mylist">My List</Link>
						</li>
					</ul>
				</div>
				<div
					className="side-navigation col-sm-3 container-fluid"
					style={{
						backgroundColor: bgColor,
					}}
				>
					<ul className="navDetails row align-items-center justify-content-center">
						<li className="search col-sm-2">
							<Link to="#" onClick={handleSearchClick}>
								<FontAwesomeIcon icon={faSearch} />
							</Link>
							{isSearchOpen && (
								<div className="search-input">
									<form onSubmit={handleSearchSubmit}>
										<input
											type="text"
											ref={inputRef}
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value)}
											placeholder="Search..."
										/>
										<span
											to="#"
											type="submit"
											className="search-span-btns"
											onClick={handleSearchSubmit}
										>
											<FontAwesomeIcon
												icon={faSearch}
												className="first-child"
											/>
										</span>
										<span
											type="button"
											onClick={handleSearchClose}
											className="search-span-btns"
										>
											<FontAwesomeIcon
												icon={faTimes}
												className="second-child"
											/>
										</span>
									</form>
									<hr />
									<div className="search-results">
										{searchResults && searchResults.length > 0 ? (
											<ul className="scrollable-list">
												{searchResults.slice(0, 10).map((result) => (
													<li key={result.id}>
														<Link to={`/movie/${result.id}`}>
															<div className="result-item">
																<Image
																	src={
																		result &&
																		`https://image.tmdb.org/t/p/${
																			result.poster_path !== null
																				? "w342" + result.poster_path
																				: "w300" + result.backdrop_path
																		}`
																	}
																/>
																<span className="result-title">
																	{result.title}
																</span>
															</div>
														</Link>
													</li>
												))}
											</ul>
										) : (
											<p>No results found.</p>
										)}
									</div>
								</div>
							)}
						</li>
						<li className="notifications-bell col-sm-2">
							<Link to="#">
								<FontAwesomeIcon icon={faBell} />
							</Link>
						</li>
						<li className="col-sm-3">
							<UserProfileDropdown />
						</li>
					</ul>
				</div>
			</nav>
		</Container>
	);
};

export default NavAfterLogin;
