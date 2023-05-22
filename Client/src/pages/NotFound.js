import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/NotFound.styles.css";

const NotFound = () => {
	return (
		<div className="not-found-container">
			<div className="not-found-content">
				<h1>404</h1>
				<h3>Page Not Found</h3>
				<p>The page you are looking for does not exist.</p>
				<Link to="/">Go back to Home</Link>
			</div>
		</div>
	);
};

export default NotFound;
