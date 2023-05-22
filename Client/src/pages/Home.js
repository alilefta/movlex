import React from "react";
import Nav from "../components/Nav";
import LandingPageSections from "../components/LandingPageSections";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	// const dispatch = useDispatch();
	// const user = useSelector((state) => state.auth.user);
	// console.log(user);

	return (
		<div>
			<Nav show="not-authenticated" />
			<LandingPageSections />
			<Footer />
		</div>
	);
};

export default Home;
