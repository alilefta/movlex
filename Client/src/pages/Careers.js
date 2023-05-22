import React from "react";
import "../assets/styles/Careers.styles.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
const Careers = () => {
	return (
		<>
			<Nav
				show={
					useSelector((state) => state.auth.isAuthenticated)
						? "authenticated"
						: "not-authenticated"
				}
			/>
			<div className="careers-page">
				<header>
					<h1>Careers</h1>
				</header>
				<main>
					<section className="careers">
						<div className="career">
							<h2>Software Engineer</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								ullamcorper lorem non ex finibus, at consectetur sem porta.
							</p>
							<Link to="/careers/1" className="btn">
								Apply Now
							</Link>
						</div>
						<div className="career">
							<h2>UX Designer</h2>
							<p>
								Nullam sollicitudin justo non ipsum iaculis malesuada. Sed eget
								pharetra mi, id consequat dui. Integer efficitur pulvinar nunc,
								in dictum tortor efficitur ac.
							</p>
							<Link to="/careers/2" className="btn">
								Apply Now
							</Link>
						</div>
						<div className="career">
							<h2>Data Analyst</h2>
							<p>
								Vivamus cursus tempor sem, in mattis nunc euismod in. Donec a
								lacus nec tortor cursus tincidunt at sit amet justo.
							</p>
							<Link to="/careers/3" className="btn">
								Apply Now
							</Link>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Careers;
