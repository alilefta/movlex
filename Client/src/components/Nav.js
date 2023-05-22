import React from "react";
import { useSelector } from "react-redux";

import NavBeforeLogin from "./Navbars/NavBeforeLogin";
import NavAfterLogin from "./Navbars/NavAfterLogin";
import NavJustLogo from "./Navbars/NavJustLogo";
import { useDispatch } from "react-redux";

import "./Navbars/Navbars.styles.css";
const Nav = ({ show, bgColor }) => {
	if (show === "authenticated") {
		return <NavAfterLogin bgColor={bgColor} />;
	} else if (show === "not-authenticated") {
		return <NavBeforeLogin />;
	} else if (show === "just-logo") {
		return <NavJustLogo />;
	}
};

export default Nav;
