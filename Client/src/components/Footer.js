import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<Container className="footer p-4 text-center" fluid="xlg">
			<div className="logo">
				<Link to="/" children={<img src={logo} alt="" />}></Link>
			</div>

			<div className="footer-nav">
				<ul className="footer-navigation mt-3 mb-2">
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/contact-us">CONTACT US</Link>
					</li>
					<li>
						<Link to="/shop">SHOP</Link>
					</li>
					<li>
						<Link to="careers">CAREERS</Link>
					</li>
				</ul>
				<ul className="social mt-2">
					<li>
						<a href="https://twitter.com">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</li>
					<li>
						<a href="https://facebook.com">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
					<li>
						<a href="https://instagram.com">
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
					<li>
						<a href="https://instagram.com">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
				</ul>
			</div>
			<div className="copyrights">
				<p>
					@2023 Babil, IRAQ, INC. All Rights Reserved for @PINKPANTHER04 team
				</p>
			</div>
		</Container>
	);
};

export default Footer;
