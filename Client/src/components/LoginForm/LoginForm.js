import React, { useState, useEffect } from "react";
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
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Link as RouterLink } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleIcon from "../../assets/images/Icons/google.svg";
import FacebookIcon from "../../assets/images/Icons/facebook.svg";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../../actions/authAction";
import { useNavigate } from "react-router-dom";

function LoginForm() {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [showError, setShowError] = useState(false);
	const [validationErrors, setValidationErrors] = useState([]);
	const dispatch = useDispatch();
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");

		try {
			const response = await fetch("http://localhost:30021/api/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (response.ok) {
				const { token, user } = await response.json();
				setSuccessMessage("Logged in successfully! Redirecting...");
				localStorage.setItem("token", token); // Store token in local storage

				setTimeout(() => {
					navigate("/");
				}, 3000);

				dispatch(loginSuccess(token, user)); // Dispatch action to save token and user data
			} else {
				const data = await response.json();
				dispatch(loginFailure(data.errors));
				if (response.status === 400 && data.errors) {
					// Validation error occurred
					setValidationErrors(
						data.errors.reduce((acc, error) => {
							acc[error.path] = error.msg;
							return acc;
						}, {})
					);
				} else {
					// Other server error occurred
					setErrorMessage("Login failed " + data.error);
				}
			}
		} catch (error) {
			console.log(error);
			setErrorMessage("An error occurred during login, try again..");
		}
		if (validationErrors.length > 0) {
			setValidationErrors([]);
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
	const handleAlertClose = () => {
		setShowError(false);
	};

	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<Container component="div" maxWidth="xs" className="login-container">
				{showError && (
					<Alert variant="danger" onClose={handleAlertClose} dismissible>
						{error}
					</Alert>
				)}
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
						<RouterLink to="/">
							<FontAwesomeIcon icon={faArrowLeft} /> Home
						</RouterLink>
					</div>

					<Avatar sx={{ m: 1, bgcolor: "#b60f0f" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					{successMessage && <Alert variant="success">{successMessage}</Alert>}
					{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							error={validationErrors.email ? true : false}
							helperText={validationErrors.email}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							error={validationErrors.password ? true : false}
							helperText={validationErrors.password}
						/>
						<FormControlLabel
							control={<Checkbox name="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className="btn"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
					</Box>
				</Box>
				<Box component="div" sx={{ mt: 1 }}>
					<Grid container>
						<Grid item xs>
							<Link
								href="#"
								variant="body2"
								sx={{ color: "#000", textDecorationColor: "#000" }}
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								href="/signup"
								variant="body2"
								sx={{ color: "#000", textDecorationColor: "#000" }}
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
				<Box>
					<Grid container sx={{ mt: 3 }}>
						<Grid item xs>
							<hr
								style={{
									width: "100%",
								}}
							/>
						</Grid>
						<Grid item xs={2}>
							<p>OR</p>
						</Grid>
						<Grid item xs>
							<hr />
						</Grid>
					</Grid>
				</Box>
				<Grid container spacing={1} sx={{ mt: 1, alignItems: "center" }}>
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

export default LoginForm;
