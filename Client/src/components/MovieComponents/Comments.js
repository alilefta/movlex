import React, { useState, useEffect } from "react";
import "./comments.styles.css";
import { BsArrowRight } from "react-icons/bs";

const Comments = () => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

	useEffect(() => {
		// Simulating fetching comments from an API
		fetchComments()
			.then((data) => setComments(data))
			.catch((error) => console.log(error));
	}, []);

	const fetchComments = () => {
		// Simulated API call to fetch comments
		return new Promise((resolve) => {
			setTimeout(() => {
				const commentsData = [
					{
						id: 1,
						author: "John Doe",
						text: "This is a great article!",
					},
					{
						id: 2,
						author: "Jane Smith",
						text: "I found this very helpful. Thanks!",
					},
					{
						id: 3,
						author: "Sam Wilson",
						text: "Can you please provide more information?",
					},
				];
				resolve(commentsData);
			}, 1000);
		});
	};

	const handleCommentChange = (event) => {
		setNewComment(event.target.value);
	};

	const handleAddComment = () => {
		if (newComment.trim() !== "") {
			const newCommentObj = {
				id: comments.length + 1,
				author: "Anonymous",
				text: newComment,
			};
			setComments([...comments, newCommentObj]);
			setNewComment("");
		}
	};

	return (
		<div className="comments-section">
			<h2 className="comments-heading">Comments</h2>
			<hr className="divider" />
			<div className="comments-section-container">
				<div className="comments-count">
					<span className="count-number">{comments.length}</span> Comments
				</div>
				<div className="comment-input-section">
					<div className="profile-img">
						<img
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="avatar"
						/>
					</div>
					<div className="form-control">
						<input
							type="text"
							className="comment-input"
							placeholder="Add a comment"
							value={newComment}
							onChange={handleCommentChange}
						/>
						<button className="add-comment-button" onClick={handleAddComment}>
							<BsArrowRight className="arrow-icon" />
						</button>
					</div>
				</div>
			</div>
			<div className="comments-list">
				{comments.map((comment) => (
					<div key={comment.id} className="comment">
						<div className="comment-details">
							<div className="profile-img">
								<img
									src="https://via.placeholder.com/40"
									alt="Profile"
									className="avatar"
								/>
							</div>
							<div className="comment-content">
								<div className="comment-author">{comment.author}</div>
								<div className="comment-text">{comment.text}</div>
							</div>
						</div>
						<hr className="divider" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
