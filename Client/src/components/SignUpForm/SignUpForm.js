import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GoogleIcon from "../../assets/images/Icons/google.svg";
import FacebookIcon from "../../assets/images/Icons/facebook.svg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUpForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [validationErrors, setValidationErrors] = useState({});

	const handleChange = (event) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:30021/api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// Registration successful, show success message and redirect to login page
				setSuccessMessage(
					"Registration was successful! Redirecting to login..."
				);
				setTimeout(() => {
					navigate("/login");
				}, 3000);
			} else {
				// Registration failed, show error message
				const data = await response.json();
				if (response.status === 400) {
					// Validation error occurred
					setValidationErrors(
						data.errors.reduce((acc, error) => {
							acc[error.path] = error.msg;
							return acc;
						}, {})
					);
				} else {
					// Other server error occurred
					setErrorMessage("Registration failed");
				}
			}
		} catch (error) {
			console.error("An error occurred during registration", error);
			setErrorMessage("An error occurred during registration");
		}
	};

	useEffect(() => {
		let timeout;
		if (successMessage || errorMessage) {
			timeout = setTimeout(() => {
				setSuccessMessage("");
				setErrorMessage("");
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [successMessage, errorMessage]);

	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<Container
				component="main"
				maxWidth="xs"
				className="signup-container"
				sx={{
					backgroundColor: "red",
				}}
			>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 0,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div className="back-button">
						<RouterLink to="/login">
							<FontAwesomeIcon icon={faArrowLeft} /> <span>Sign In</span>
						</RouterLink>
					</div>
					<Avatar sx={{ m: 1, bgcolor: "#b60f0f" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					{successMessage && <Alert variant="success">{successMessage}</Alert>}
					{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									value={formData.firstName}
									onChange={handleChange}
									error={validationErrors.firstName ? true : false}
									helperText={validationErrors.firstName}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									value={formData.lastName}
									onChange={handleChange}
									error={validationErrors.lastName ? true : false}
									helperText={validationErrors.lastName}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={formData.email}
									onChange={handleChange}
									error={validationErrors.email ? true : false}
									helperText={validationErrors.email}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={formData.password}
									onChange={handleChange}
									error={validationErrors.password ? true : false}
									helperText={validationErrors.password}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox value="allowExtraEmails" color="primary" />
									}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className="btn"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link
									href="/login"
									variant="body2"
									sx={{ color: "#000", textDecorationColor: "#000" }}
								>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Box>
					<Grid container sx={{ mt: 1 }}>
						<Grid item xs>
							<hr style={{ width: "100%" }} />
						</Grid>
						<Grid item xs={2}>
							<p>OR</p>
						</Grid>
						<Grid item xs>
							<hr />
						</Grid>
					</Grid>
				</Box>
				<Grid container spacing={1}>
					<Grid item xs>
						<Button
							fullWidth
							type="submit"
							variant="outlined"
							sx={{ mt: 1, mb: 2 }}
						>
							Sign In With
							<img className="sign-in-with-icon" src={GoogleIcon} alt="" />
						</Button>
					</Grid>
					<Grid item xs>
						<Button
							type="submit"
							fullWidth
							variant="outlined"
							sx={{ mt: 1, mb: 2 }}
						>
							Sign In With
							<img className="sign-in-with-icon" src={FacebookIcon} alt="" />
						</Button>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
}

export default SignUpForm;
