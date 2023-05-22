import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dna } from "react-loader-spinner";
import "../assets/styles/Redirection.styles.css";
const RedirectionPage = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const navigate = useNavigate();
	console.log(isAuthenticated);
	useEffect(() => {
		const redirectTimeout = setTimeout(() => {
			if (isAuthenticated) {
				// User is authenticated, redirect to the main feed
				navigate("/home");
			} else {
				// User is not authenticated, redirect to the login page
				navigate("/login");
			}
		}, 1500);

		return () => clearTimeout(redirectTimeout);
	}, [isAuthenticated, navigate]);

	return (
		<div className="redirection-page">
			<div className="redirection-page-content">
				<h1 className="redirection-page-heading">Redirecting...</h1>
				<div className="spinner-container">
					<Dna type="TailSpin" color="#123abc" height={100} width={100} />
				</div>
			</div>
		</div>
	);
};

export default RedirectionPage;
