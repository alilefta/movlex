import React from "react";
import Video from "../../assets/01. What Will We Create-X0FoelOIZM0.mp4";

const MyVideoPlayer = () => {
	return (
		<div className="video-container">
			<video controls src={Video}></video>
		</div>
	);
};

export default MyVideoPlayer;
