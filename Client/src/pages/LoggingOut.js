import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Dna } from "react-loader-spinner";
import { logout } from "../actions/authAction";
import "../assets/styles/Redirection.styles.css";

const LoggingOutPage = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const redirectTimeout = setTimeout(() => {
			if (isAuthenticated) {
				// User is logged out, redirect to the login page
				dispatch(logout());
				navigate("/login");
			}
		}, 1500);

		return () => clearTimeout(redirectTimeout);
	}, [isAuthenticated, navigate]);

	return (
		<div className="redirection-page">
			<div className="redirection-page-content">
				<h1 className="redirection-page-heading">Logging Out...</h1>
				<div className="spinner-container">
					<Dna type="TailSpin" color="#123abc" height={100} width={100} />
				</div>
			</div>
		</div>
	);
};

export default LoggingOutPage;
