import React from "react";

const ReviewsSections = () => {
	return (
		<div className="container-fluid">
			<section className="reviews-section">
				<div className="container">
					<h2 className="section-title">Reviews</h2>
					<div className="row">
						<div className="col-md-4">
							<div className="review-card">
								<p className="review-text">
									"I love this app! The selection of movies and TV shows is
									amazing and the streaming quality is top-notch. I would highly
									recommend it to anyone looking for a great viewing
									experience."
								</p>
								<p className="review-author">- Jane Smith</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="review-card">
								<p className="review-text">
									"The user interface is so easy to navigate and it's simple to
									find exactly what you're looking for. Plus, the personalized
									recommendations are spot on!"
								</p>
								<p className="review-author">- John Doe</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="review-card">
								<p className="review-text">
									"I have tried other streaming services, but this one is by far
									the best. The range of content available is impressive and the
									pricing is very reasonable."
								</p>
								<p className="review-author">- Mike Johnson</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ReviewsSections;
