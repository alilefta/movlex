import React from "react";

const Details = () => {
	return (
		<div>
			<h2>Details</h2>
			<div className="container">
				<div className="card">
					<div className="userProfileImg">
						<img src="" alt="" />
						<input type="file" />
					</div>
					<div className="detailsContent">
						<p>
							info <span>Edit</span>
						</p>
						<div className="userAccountInfo">
							<div>
								<h4>First Name</h4>
								<p>Ali</p>
							</div>
							<div>
								<h4>Middle Name</h4>
								<p>Mohsen</p>
							</div>
							<div>
								<h4>Last Name</h4>
								<p>Lefta</p>
							</div>
						</div>
						<div className="emailInfo">
							<h4>Email</h4>
							<p>exampl@gmail.com</p>
						</div>
						<div className="phoneInfo">
							<h4>Phone</h4>
							<p>9649473473</p>
						</div>
						<div className="plan">
							<div className="account">
								<h4>Account Type</h4>
								<p>Standard</p>
								<button>Upgrade</button>
							</div>
							<div className="joinedDate">
								<h4>Joining date</h4>
								<p>June 34, 2023</p>
							</div>
						</div>
					</div>
				</div>
				<div className="continueWatching">{/* Continue watching cards */}</div>
			</div>
		</div>
	);
};

export default Details;
