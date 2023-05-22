import React from "react";
import Logo from "../../assets/images/MainLogo.svg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBeforeLogin = () => {
	return (
		<Container fluid={"xlg"} className="navbar-before-login">
			<nav className="nav">
				<div className="logo">
					<Link to="/" children={<img src={Logo} alt="" />}></Link>
				</div>

				<div className="side-navigation">
					<Link to="/login">Sign In</Link>
				</div>
			</nav>
			{/* <Routes>
				<Route path="/" element={<WrapperApp />}></Route>
				<Route path="/signin" element={<SignIn />}></Route>
			</Routes> */}
		</Container>
	);
};

export default NavBeforeLogin;
