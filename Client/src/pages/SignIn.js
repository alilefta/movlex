import React from "react";
import "../assets/styles/SignIn.styles.css";
import LoginForm from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../assets/styles/Shared.styles.css";
const SignIn = () => {
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [rememberMe, setRememberMe] = useState(false);

	// const handleEmailChange = (event) => {
	// 	setEmail(event.target.value);
	// };

	// const handlePasswordChange = (event) => {
	// 	setPassword(event.target.value);
	// };

	// const handleRememberMeChange = (event) => {
	// 	setRememberMe(event.target.checked);
	// };

	// const handleLogin = () => {
	// 	// Handle login logic here
	// };

	// const handleLoginWithGoogle = () => {
	// 	// Handle login with Google logic here
	// };

	// const handleLoginWithFacebook = () => {
	// 	// Handle login with Facebook logic here
	// };
	return (
		<>
			<Nav show="just-logo" />
			<main className="login-page">
				<LoginForm />
				<div className="op"></div>
			</main>
			<Footer />
		</>
	);
};

export default SignIn;
