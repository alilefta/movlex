import React, { useState } from "react";
import { VictoryBar, VictoryPie, VictoryChart, VictoryLine } from "victory";
import "../assets/styles/Admin.styles.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AdminDashboard = () => {
	// Sample data for website visits
	const websiteVisitsData = [
		{ day: "Mon", visits: 230 },
		{ day: "Tue", visits: 350 },
		{ day: "Wed", visits: 420 },
		{ day: "Thu", visits: 500 },
		{ day: "Fri", visits: 600 },
		{ day: "Sat", visits: 720 },
		{ day: "Sun", visits: 630 },
	];

	// Sample data for website demographics
	const websiteDemographicsData = [
		{ x: "Male", y: 45 },
		{ x: "Female", y: 55 },
	];

	const [movieInfo, setMovieInfo] = useState({
		movieTitle: "",
		movieDescription: "",
		movieImage: "",
	});

	const handleUploadMovie = (event) => {
		event.preventDefault();
		// Handle movie upload logic here
	};

	const handleDeleteUser = (userId) => {
		// Handle delete user logic here
	};

	const handleEditUser = (userId) => {
		// Handle edit user logic here
	};

	const handleUpdateUser = (userId) => {
		// Handle update user logic here
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setMovieInfo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const renderUsersTable = () => {
		// Sample user data
		const users = [
			{ id: 1, name: "John Doe", email: "johndoe@example.com" },
			{ id: 2, name: "Jane Smith", email: "janesmith@example.com" },
			// Add more user data here
		];

		return (
			<table className="admin-page-table admin-page-table-striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								<button
									className="admin-page-btn admin-page-btn-danger admin-page-btn-sm"
									onClick={() => handleDeleteUser(user.id)}
								>
									Delete
								</button>
								<button
									className="admin-page-btn admin-page-btn-primary admin-page-btn-sm"
									onClick={() => handleEditUser(user.id)}
								>
									Edit
								</button>
								<button
									className="admin-page-btn admin-page-btn-success admin-page-btn-sm"
									onClick={() => handleUpdateUser(user.id)}
								>
									Update
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	return (
		<>
			<Nav show="authenticated" />
			<div className="admin-page-dashboard">
				<div className="admin-page-row">
					<div className="admin-page-col-lg-6">
						<h2 className="admin-page-dashboard-title">Website Visits</h2>
						<VictoryChart
							className="admin-page-dashboard-chart admin-page-chart-small"
							height={200}
							width={300}
						>
							<VictoryBar
								data={websiteVisitsData}
								x="day"
								y="visits"
								style={{
									data: { fill: "blue" },
								}}
							/>
						</VictoryChart>
					</div>
					<div className="admin-page-col-lg-6">
						<h2 className="admin-page-dashboard-title">Website Demographics</h2>
						<VictoryPie
							data={websiteDemographicsData}
							colorScale={["blue", "pink"]}
							className="admin-page-dashboard-chart admin-page-chart-small"
							height={200}
							width={300}
						/>
					</div>
				</div>
				<div className="admin-page-row">
					<div className="admin-page-col-lg-6">
						<h2 className="admin-page-dashboard-title">Website Traffic</h2>
						<VictoryChart
							className="admin-page-dashboard-chart admin-page-chart-small"
							height={200}
							width={600}
						>
							<VictoryLine
								data={websiteVisitsData}
								x="day"
								y="visits"
								style={{
									data: { stroke: "red" },
								}}
							/>
						</VictoryChart>
					</div>
					<div className="admin-page-col-lg-6">
						<h2 className="admin-page-dashboard-title">Upload Movie</h2>
						<form onSubmit={handleUploadMovie}>
							<div className="admin-page-form-group">
								<label htmlFor="movieTitle">Title:</label>
								<input
									type="text"
									className="admin-page-form-control"
									id="movieTitle"
									name="movieTitle"
									value={movieInfo.movieTitle}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="admin-page-form-group">
								<label htmlFor="movieDescription">Description:</label>
								<textarea
									className="admin-page-form-control"
									id="movieDescription"
									name="movieDescription"
									value={movieInfo.movieDescription}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="admin-page-form-group">
								<label htmlFor="movieImage">Image:</label>
								<input
									type="file"
									className="admin-page-form-control"
									id="movieImage"
									name="movieImage"
									accept="image/*"
									onChange={handleInputChange}
									required
								/>
							</div>
							<button
								type="submit"
								className="admin-page-btn admin-page-btn-primary"
							>
								Upload
							</button>
						</form>
					</div>
				</div>
				<div className="admin-page-row">
					<div className="admin-page-col-lg-12">
						<h2 className="admin-page-dashboard-title">View Users</h2>
						{renderUsersTable()}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default AdminDashboard;
