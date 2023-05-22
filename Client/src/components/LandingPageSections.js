import React from "react";
import Hero from "./LandingPageComponents/Hero";
import ReviewsSections from "./LandingPageComponents/ReviewsSections";
import Subscriptions from "./LandingPageComponents/Subscriptions";
import "../styles/MainContentStyles.css";
// import TopPicks from "./MainPageComponents/TopPicks";
const LandingPageSections = () => {
	return (
		<main className="main">
			<Hero />
			<Subscriptions />
			{/* <TopPicks /> */}
			<ReviewsSections />
		</main>
	);
};

export default LandingPageSections;
