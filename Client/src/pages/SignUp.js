import React from "react";
import "../assets/styles/SignUp.styles.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SignUpForm from "../components/SignUpForm/SignUpForm";
const SignUp = () => {
	return (
		<>
			<Nav show="just-logo" />
			<main className="signup-page">
				<SignUpForm />
				<div className="op"></div>
			</main>
			<Footer />
		</>
	);
};

export default SignUp;
