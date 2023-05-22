import React from "react";
import { Link } from "react-router-dom";
import NoImage from "../../assets/images/no-image.jpg";
const CardsSection = ({ media, mediaType }) => {
	console.log(media);
	return (
		<div className="trending-movies-list container-fluid">
			<div className="row movie-cards">
				{media.map((media) => (
					<div key={media.id} className="movie-card">
						<Link
							to={`/${mediaType}/${media.id}`}
							children={
								<>
									{media.poster_path || media.backdrop_path ? (
										<img
											src={`https://image.tmdb.org/t/p/w500${
												media.poster_path !== null
													? media.poster_path
													: media.backdrop_path
											}`}
											alt={media.title}
										/>
									) : (
										<div
											style={{
												width: "100%",
												height: "100%",
												position: "relative",
											}}
										>
											<img
												src={NoImage}
												alt=""
												style={{
													width: "100%",
													height: "100%",
												}}
											/>
											<div
												className="image-overlay"
												style={{
													position: "absolute",
													top: "0",
													left: "0",
													width: "100%",
													height: "100%",
													backgroundColor: "rgba(0,0,0,0.0)",
													zIndex: "1",
												}}
											></div>
											<h4
												style={{
													position: "absolute",
													top: "50%",
													left: "50%",
													transform: "translate(-50%, -50%)",
													zIndex: "2",
													color: "black",
													textAlign: "center",
													fontSize: "1em",
													fontFamily: "Poppins",
												}}
											>
												{media.title || media.name
													? media.title || media.name
													: "No Title"}
											</h4>
											{/* <div className="movie-title">
												{media.title === undefined ? media.name : media.title}
											</div> */}
										</div>
									)}
								</>
							}
						></Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardsSection;
