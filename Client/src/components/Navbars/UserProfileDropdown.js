import React, { useState, useEffect, useRef } from "react";
import UserPicture from "../../assets/images/userPic.jpg";
import { Link } from "react-router-dom";
import User from "./imgs/user.png";
import Logout from "./imgs/log-out.png";
import Settings from "./imgs/settings.png";
import Help from "./imgs/question.png";
import { useSelector } from "react-redux";
const UserProfileDropdown = () => {
	const [open, setOpen] = useState(false);
	let menuRef = useRef();
	const userId = useSelector((state) => state.auth.user._id);
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});
	return (
		<>
			<div
				className="img-container"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<img src={UserPicture} className="user-profile" alt="" />
			</div>
			<div
				className={`dropdown-menu ${open ? "active" : "inactive"}`}
				ref={menuRef}
			>
				<div className="dropdown-user-details">
					<h4>Alex Joe</h4>
					<p>example@example.com</p>
					<hr />
				</div>
				<ul>
					<li>
						<Link to={`/profile/${userId}`}>
							<img src={User} alt="user" />
							My Profile
						</Link>
					</li>
					<li>
						<Link to={`/profile/${userId}/settings`}>
							<img src={Settings} alt="" />
							Settings
						</Link>
					</li>
					<li>
						<Link to="/help">
							<img src={Help} alt="" />
							Help
						</Link>
					</li>
					<hr />
					<li>
						<Link to="/logout">
							<img src={Logout} alt="" />
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
export default UserProfileDropdown;
