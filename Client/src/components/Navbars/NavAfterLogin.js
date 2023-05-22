import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/MainLogo.svg";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import UserPicture from "../../assets/images/userPic.jpg";
import UserProfileDropdown from "./UserProfileDropdown";
const NavAfterLogin = ({ bgColor = "inherit" }) => {
	return (
		<Container fluid={"xlg"} className="navbar-after-login">
			<nav className="nav row">
				<div className="logo col-sm-2">
					<Link to="/" children={<img src={Logo} alt="" />}></Link>
				</div>
				<div className="main-navigation col-sm-7">
					<ul className="browseList">
						<li className="active">
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/tv">TV Shows</Link>
						</li>
						<li>
							<Link to="/movies">Movies</Link>
						</li>
						<li>
							<Link to="/popular">New & Popular</Link>
						</li>
						<li>
							<Link to="/mylist">My List</Link>
						</li>
					</ul>
				</div>
				<div
					className="side-navigation col-sm-3 container-fluid"
					styles={{
						backgroundColor: bgColor,
					}}
				>
					<ul className="navDetails row align-items-center justify-content-center">
						<li className="search col-sm-2">
							<Link href="#">
								<FontAwesomeIcon icon={faSearch} />
							</Link>
						</li>
						<li className="notifications-bell col-sm-2">
							<Link href="#">
								<FontAwesomeIcon icon={faBell} />
							</Link>
						</li>
						<li className="col-sm-3">
							<UserProfileDropdown />
						</li>
					</ul>
				</div>
			</nav>
		</Container>
	);
};

export default NavAfterLogin;
