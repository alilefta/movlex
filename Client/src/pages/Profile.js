import React from "react";
import UserProfile from "../components/UserProfile";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const ProfilePage = () => {
	// const user = {
	// 	first_name: "John",
	// 	last_name: "Doe",
	// 	email: "example@example.com",
	// 	age: 25,
	// 	subscription_level: "Premium",
	// 	profile_picture: "https://picsum.photos/200",
	// 	address: "123 Fake Street",
	// 	city: "Springfield",
	// 	state: "IL",
	// 	zip: "12345",
	// 	phone_number: "555-555-5555",
	// 	payment_method: "Visa",
	// 	credit_card_number: "1234-1234-1234-1234",
	// 	expiration_date: "01/01/2021",
	// 	security_code: "123",
	// 	user_id: "123",
	// };
	return (
		<>
			<Nav show="authenticated" />
			<UserProfile />;
			<Footer />
		</>
	);
};

export default ProfilePage;
