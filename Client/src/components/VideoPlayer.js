import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import "../assets/styles/VideoPlayer.styles.css";

const VideoPlayer = ({
	url = "http://s14.bitdl.ir/Movie/The.Pianist.2002/The.Pianist.2002.1080p.BrRip.H264.AAC.RARBG.Bia2HD.mp4",
	backgroundImage,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		setIsPlaying(true);
	};

	const handlePause = () => {
		setIsPlaying(false);
	};

	return (
		<div className="video-player">
			<img className="background-image" src={backgroundImage} alt="" />
			<div className="dark-overlay" />
			{!isPlaying && (
				<div className="play-button-container">
					<BsPlayCircle className="play-button" onClick={handlePlay} />
				</div>
			)}
			<video
				src={
					"https://sv3.hivamovie.com/new/Movie/The.Pianist.2002/The.Pianist.2002.Trailer.mp4"
				}
				controls={isPlaying}
				className={`video-element ${isPlaying ? "playing" : ""}`}
				onPause={handlePause}
			/>
		</div>
	);
};

export default VideoPlayer;
