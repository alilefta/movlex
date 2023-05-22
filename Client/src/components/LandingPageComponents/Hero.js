import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Hero = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateEmail(email)) {
			setIsValidEmail(true);
			setIsSubmitted(true);
		} else {
			setIsValidEmail(false);
		}
	};

	const validateEmail = (email) => {
		// regular expression for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	return (
		<>
			<div className="container-fluid hero">
				<div className="row">
					<div className="col-1"></div>
					<div className="jumptron col-lg-7 col-md-11">
						<h1>JOIN US NOW</h1>
						<p>Have fun, Anytime, Anywhere</p>
						{!isSubmitted ? (
							<form className="form">
								<div>
									<input
										className={`email form-control ${
											isValidEmail ? "" : "is-invalid"
										}`}
										type="text"
										placeholder="Enter your Email"
										autoComplete="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									{!isValidEmail && (
										<div className="invalid-feedback">
											Please enter a valid email address.
										</div>
									)}
								</div>
								<div>
									<button
										onClick={handleSubmit}
										type="submit"
										className="call-to-action-btn"
									>
										Get Started
									</button>
								</div>
							</form>
						) : (
							<div className="thanks-message">
								<Alert variant="success" className="floating-alert">
									<h2>Thank you for joining our newsletter!</h2>
									<p>We'll keep you updated with the latest news and offers.</p>
								</Alert>
							</div>
						)}
					</div>
					<div className="op"></div>
				</div>
			</div>
		</>
	);
};

export default Hero;
