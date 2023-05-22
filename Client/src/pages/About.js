import React from "react";
import "../assets/styles/About.styles.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AboutUsPage = () => {
	return (
		<>
			{" "}
			<Nav show="not-authenticated" />
			<div className="about-us-page">
				<div className="about-us-content">
					<h1 className="about-us-heading">About Us</h1>
					<p className="about-us-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						viverra enim eu odio dictum, eget aliquet nisl tincidunt. Mauris
						pharetra, nunc vitae maximus varius, nisl leo mattis nunc, et
						convallis neque ipsum a sem. Cras eleifend tortor at interdum
						fermentum. Suspendisse potenti. Duis dictum consequat mi, ac
						bibendum nulla faucibus nec. Nam semper scelerisque justo at
						pulvinar. Donec vestibulum luctus tristique. Donec lacinia, odio non
						tincidunt ultrices, felis urna efficitur orci, ac fringilla tellus
						justo eu lorem. Vestibulum ante ipsum primis in faucibus orci luctus
						et ultrices posuere cubilia curae; Fusce malesuada erat et tristique
						semper. Vestibulum ante ipsum primis in faucibus orci luctus et
						ultrices posuere cubilia curae; Proin eu congue risus, a interdum
						metus. Aliquam quis velit ac arcu consequat finibus sed vel urna.
						Mauris vel nunc at tortor pharetra faucibus in et risus.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AboutUsPage;
