import React from "react";
import Logo from "../../assets/images/MainLogo.svg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavJustLogo = () => {
	return (
		<Container fluid={"xlg"} className="navbar-before-login">
			<nav className="nav">
				<div className="logo">
					<Link to="/" children={<img src={Logo} alt="" />}></Link>
				</div>
			</nav>
		</Container>
	);
};
export default NavJustLogo;
