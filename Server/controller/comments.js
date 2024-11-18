const Media = require("../models/Media");

exports.postComment = async (req, res) => {
	const { id } = req.params;
	const { comment, rating } = req.body;

	try {
		const media = await Media.findById(id);

		if (!media) {
			return res.status(404).json({ error: "Media not found" });
		}

		const newComment = {
			comment,
			rating,
			user: req.user._id, // Ensure authentication middleware is in place
		};

		media.comments.push(newComment);

		const savedMedia = await media.save();

		res.status(201).json(savedMedia.comments[savedMedia.comments.length - 1]);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to add comment", details: err.message });
	}
};

exports.deleteComment = async (req, res) => {
	const { id, commentId } = req.params;

	try {
		const media = await Media.findById(id);

		if (!media) {
			return res.status(404).json({ error: "Media not found" });
		}

		const commentIndex = media.comments.findIndex((comment) => comment._id.toString() === commentId);

		if (commentIndex === -1) {
			return res.status(404).json({ error: "Comment not found" });
		}

		// Optional: Add user authorization check here
		// if (media.comments[commentIndex].user.toString() !== req.user._id.toString()) {
		//     return res.status(403).json({ error: "Not authorized to delete this comment" });
		// }

		media.comments.splice(commentIndex, 1);

		const savedMedia = await media.save();

		res.json({ message: "Comment deleted successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to delete comment", details: err.message });
	}
};

exports.getComments = async (req, res) => {
	const { id } = req.params;

	try {
		const media = await Media.findById(id)
			.populate({
				path: "comments.user",
				select: "firstName lastName profilePicture",
			})
			.exec();

		if (!media) {
			return res.status(404).json({ error: "Media not found" });
		}

		res.json(media.comments);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to retrieve comments", details: err.message });
	}
};
