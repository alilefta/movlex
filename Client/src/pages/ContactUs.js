import React, { useState } from "react";
import "../assets/styles/ContactUs.styles.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Name:", name);
		console.log("Email:", email);
		console.log("Message:", message);
		// Reset form fields
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<>
			<Nav
				show={
					useSelector((state) => state.auth.isAuthenticated)
						? "authenticated"
						: "not-authenticated"
				}
			/>
			<div className="contact-us-background">
				<div className="contact-us-overlay">
					<div className="contact-us-container dark-mode">
						<div className="contact-us">
							<h2 className="contact-us-title">Contact Us</h2>
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="contact-us-form-group">
									<label htmlFor="contact-us-name">Name:</label>
									<input
										type="text"
										id="contact-us-name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
								<div className="contact-us-form-group">
									<label htmlFor="contact-us-email">Email:</label>
									<input
										type="email"
										id="contact-us-email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="contact-us-form-group">
									<label htmlFor="contact-us-message">Message:</label>
									<textarea
										id="contact-us-message"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required
									></textarea>
								</div>
								<button type="submit" className="contact-us-submit-btn">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ContactUs;
