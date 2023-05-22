import React, { useEffect, useState } from "react";
import "./UserProfileComponents/UserProfile.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

const UserProfile = () => {
	const user = useSelector((state) => state.auth.user);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [twoFactorAuth, setTwoFactorAuth] = useState(false);
	const [profilePicture, setProfilePicture] = useState(null);
	const [isFormChanged, setIsFormChanged] = useState(false);
	const [subscriptionLevel, setSubscriptionLevel] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [warningMessage, setWarningMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = () => {
		setIsFormChanged(true);
		setErrorMessage("");
		setWarningMessage("");
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (firstName === "") {
			setErrorMessage("First Name is required");
		} else if (lastName === "") {
			setErrorMessage("Last Name is required");
		} else if (email === "") {
			setErrorMessage("Email is required");
		} else if (!validateEmail(email)) {
			setWarningMessage("Invalid email format");
		} else if (age === "") {
			setErrorMessage("Age is required");
		} else if (isNaN(age)) {
			setErrorMessage("Age must be a number");
		} else {
			setIsLoading(true);

			const payload = {
				firstName,
				lastName,
				email,
				age,
				profilePicture,
				subscriptionLevel,
				twoFactorAuth,
			};

			fetch("http://localhost:30021/api/editprofile", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			})
				.then((response) => {
					setIsLoading(false);
					// Handle successful response
				})
				.catch((error) => {
					setIsLoading(false);
					setErrorMessage("Failed to update profile. Please try again.");
					// Handle error
				});
		}
	};

	const validateEmail = (email) => {
		// regular expression for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleDeactivateClick = () => {
		// handle deactivate account click
	};

	const handleUpgradeClick = () => {
		// handle upgrade subscription click
	};

	const handlePictureUpload = (event) => {
		setIsLoading(true);

		// Mock API call
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		const file = event.target.files[0];

		// check if the selected file is an image
		if (!file.type.startsWith("image/")) {
			alert("Please select an image file.");
			return;
		}

		// check if the selected file is less than 4MB
		if (file.size > 4 * 1024 * 1024) {
			alert("Please select a file that is less than 4MB.");
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			setProfilePicture(reader.result);
		};
		reader.readAsDataURL(file);
	};

	const resetMessages = () => {
		setErrorMessage("");
		setWarningMessage("");
	};

	useEffect(() => {
		if (isFormChanged) {
			resetMessages();
		}
	}, [isFormChanged]);

	useEffect(() => {
		// Update input fields and profile picture when the user prop changes
		if (user) {
			setFirstName(user.firstName);
			setLastName(user.lastName);
			setEmail(user.email);
			setAge(user.age ? user.age : "20");
			setProfilePicture(user.profilePicture);
			setSubscriptionLevel(user.subscription_level);
		}
	}, [user]);

	return (
		<div className="container mt-4 mb-4">
			<h2
				style={{
					fontFamily: "Poppins",
					fontWeight: "bold",
					fontSize: "2.5em",
					color: "#2D2D2D",
					// textAlign: "left",
					margin: "30px 0 30px 0",
					textTransform: "capitalize",
				}}
			>
				Welcome {user.firstName} {user.lastName}
			</h2>
			<div className="row">
				<div className="col-md-3 col-offset-1">
					<div className="profile-picture-container">
						<div
							className="profile-picture"
							style={{
								backgroundImage: `url(${user.profilePicture})`,
								cursor: "pointer",
							}}
							onClick={() =>
								document.getElementById("profile-picture-upload").click()
							}
						>
							<div className="profile-picture-overlay">
								{isLoading ? (
									<div className="uploading-effect">
										<ThreeDots
											type="ThreeDots"
											color="#FFF"
											height={20}
											width={40}
										/>
									</div>
								) : (
									<>
										<label htmlFor="profile-picture-upload">
											<FontAwesomeIcon
												icon={faEdit}
												className="edit-icon"
												style={{ fontSize: "0.8em" }}
											/>
										</label>
										<input
											type="file"
											id="profile-picture-upload"
											name="file"
											accept="image/*"
											onChange={handlePictureUpload}
										/>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					{errorMessage && (
						<div className="alert alert-danger" role="alert">
							{errorMessage}
						</div>
					)}
					{warningMessage && (
						<div className="alert alert-warning" role="alert">
							{warningMessage}
						</div>
					)}
					<form onSubmit={handleFormSubmit}>
						<div className="mb-3 row">
							<label htmlFor="first-name" className="col-md-3 col-form-label">
								First Name
							</label>
							<div className="col-md-9">
								<input
									type="text"
									className="form-control"
									id="first-name"
									placeholder="Enter First Name"
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value);
										handleInputChange();
									}}
								/>
							</div>
						</div>

						<div className="mb-3 row">
							<label htmlFor="last-name" className="col-md-3 col-form-label">
								Last Name
							</label>
							<div className="col-md-9">
								<input
									type="text"
									className="form-control"
									id="last-name"
									placeholder="Enter Last Name"
									value={lastName}
									onChange={(e) => {
										setLastName(e.target.value);
										handleInputChange();
									}}
								/>
							</div>
						</div>

						<div className="mb-3 row">
							<label htmlFor="email" className="col-md-3 col-form-label">
								Email
							</label>
							<div className="col-md-9">
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										handleInputChange();
									}}
								/>
							</div>
						</div>

						<div className="mb-3 row">
							<label htmlFor="age" className="col-md-3 col-form-label">
								Age
							</label>
							<div className="col-md-9">
								<select
									className="form-control"
									id="age"
									value={age}
									onChange={(e) => {
										setAge(e.target.value);
										handleInputChange();
									}}
								>
									<option value="20">20</option>
									<option value="30">30</option>
									<option value="40">40</option>
									<option value="50">50</option>
									<option value="60">60</option>
								</select>
							</div>
						</div>

						<div className="mb-3 row">
							<label
								htmlFor="subscription-level"
								className="col-md-3 col-form-label"
							>
								Subscription Level
							</label>
							<div className="col-md-9">
								<input
									type="text"
									className="form-control"
									id="subscription-level"
									placeholder="Subscription Level"
									value={subscriptionLevel}
									disabled
								/>
							</div>
						</div>

						<div className="mb-3 row">
							<div className="col-md-3">Two-factor Authentication</div>
							<div className="col-md-9">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="two-factor-auth"
										checked={twoFactorAuth}
										onChange={() => {
											setTwoFactorAuth(!twoFactorAuth);
											handleInputChange();
										}}
									/>
									<label className="form-check-label" htmlFor="two-factor-auth">
										Enable Two-factor Authentication
									</label>
								</div>
							</div>
						</div>

						<div className="mb-3 row">
							<div className="col-md-9 offset-md-3">
								<button type="submit" className="btn btn-primary">
									Save
								</button>
								<button
									type="button"
									className="btn btn-danger ms-2"
									onClick={handleDeactivateClick}
								>
									Deactivate Account
								</button>
								<button
									type="button"
									className="btn btn-secondary ms-2"
									onClick={handleUpgradeClick}
								>
									Upgrade Subscription
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
