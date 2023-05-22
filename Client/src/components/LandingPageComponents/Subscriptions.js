import React, { Component } from "react";

export class Subscriptions extends Component {
	render() {
		return (
			<div className="container-fluid subscriptions-container ">
				<h1>Subscriptions</h1>
				<section className="subscriptions-section">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="subscription-card">
									<h2>Basic</h2>
									<h3>$9.99/month</h3>
									<ul>
										<li>SD resolution</li>
										<li>1 screen at a time</li>
										<li>No downloadable content</li>
									</ul>
									<a href="#" className="btn btn-primary">
										Get Started
									</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="subscription-card">
									<h2>Standard</h2>
									<h3>$13.99/month</h3>
									<ul>
										<li>HD resolution</li>
										<li>2 screens at a time</li>
										<li>Downloadable content</li>
									</ul>
									<a href="#" className="btn btn-primary">
										Upgrade
									</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="subscription-card">
									<h2>Premium</h2>
									<h3>$17.99/month</h3>
									<ul>
										<li>4K resolution</li>
										<li>4 screens at a time</li>
										<li>Downloadable content</li>
									</ul>
									<a href="#" className="btn btn-primary">
										Upgrade
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Subscriptions;
