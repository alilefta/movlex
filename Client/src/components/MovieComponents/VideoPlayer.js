// import React from "react";
// import { Player, ControlBar, ClosedCaptionButton } from "video-react";

// export default function VideoPlayer() {
// 	return (
// 		<Player videoId="video-1" autoPlay>
// 			<source
// 				src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4"
// 				type="video/mp4"
// 			/>
// 			<source
// 				src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg"
// 				type="video/ogg"
// 			/>

// 			<track
// 				kind="captions"
// 				src="/assets/elephantsdream/captions.en.vtt"
// 				srcLang="en"
// 				label="English"
// 				default
// 			/>
// 			<track
// 				kind="captions"
// 				src="/assets/elephantsdream/captions.sv.vtt"
// 				srcLang="sv"
// 				label="Swedish"
// 			/>
// 			<track
// 				kind="captions"
// 				src="/assets/elephantsdream/captions.ru.vtt"
// 				srcLang="ru"
// 				label="Russian"
// 			/>
// 			<track
// 				kind="captions"
// 				src="/assets/elephantsdream/captions.ja.vtt"
// 				srcLang="ja"
// 				label="Japanese"
// 			/>
// 			<track
// 				kind="captions"
// 				src="/assets/elephantsdream/captions.ar.vtt"
// 				srcLang="ar"
// 				label="Arabic"
// 			/>

// 			<track
// 				kind="descriptions"
// 				src="/assets/elephantsdream/descriptions.en.vtt"
// 				srcLang="en"
// 				label="English"
// 			/>

// 			<track
// 				kind="chapters"
// 				src="/assets/elephantsdream/chapters.en.vtt"
// 				srcLang="en"
// 				label="English"
// 			/>

// 			<ControlBar autoHide={false}>
// 				<ClosedCaptionButton order={7} />
// 			</ControlBar>
// 		</Player>
// 	);
// }

import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Video } from "react-bootstrap";

const VideoPlayer = ({ url, captions }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoRef, setVideoRef] = useRef();
	const [currentTime, setCurrentTime] = useState(0);

	const play = () => {
		setIsPlaying(true);
		videoRef.current.play();
	};

	const pause = () => {
		setIsPlaying(false);
		videoRef.current.pause();
	};

	const jumpForward = () => {
		setCurrentTime(currentTime + 10000);
		videoRef.current.currentTime = currentTime;
	};

	const jumpBackward = () => {
		setCurrentTime(currentTime - 10000);
		videoRef.current.currentTime = currentTime;
	};

	return (
		<Container>
			<Row>
				<Col md={6}>
					<Video
						ref={setVideoRef}
						controls
						src={url}
						muted={!isPlaying}
						oncurrentTimechange={setCurrentTime}
					>
						<track kind="captions" srclang="en" src={captions} />
					</Video>
				</Col>
				<Col md={6}>
					<div
						style={{
							backgroundImage: "url(https://source.unsplash.com/random)",
							height: "100vh",
							width: "100vw",
						}}
					>
						<div style={{ backgroundColor: "black", padding: "10px" }}>
							<Button onClick={play}>Play</Button>
							<Button onClick={pause}>Pause</Button>
							<Button onClick={jumpForward}>Jump Forward 10s</Button>
							<Button onClick={jumpBackward}>Jump Backward 10s</Button>
						</div>
						<div style={{ backgroundColor: "white", padding: "10px" }}>
							<progress
								value={currentTime}
								max={videoRef.current.duration}
							></progress>
							<volumeSlider value={videoRef.current.volume}></volumeSlider>
							<button onClick={() => videoRef.current.requestFullscreen()}>
								Fullscreen
							</button>
							<button onClick={() => share()}>Share</button>
							<button onClick={() => like()}>Like</button>
							<button onClick={() => comment()}>Comment</button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

const share = () => {
	// TODO: Share the video
};

const like = () => {
	// TODO: Like the video
};

const comment = () => {
	// TODO: Comment on the video
};

export default VideoPlayer;
