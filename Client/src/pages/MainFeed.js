import React from "react";
import MainFeedHero from "../components/MainFeedComponents/MainFeedHero";
import Nav from "../components/Nav";
const MainFeed = () => {
	return (
		<div>
			<Nav show="authenticated" bgColor="#000000" />
			<MainFeedHero />
		</div>
	);
};

export default MainFeed;
