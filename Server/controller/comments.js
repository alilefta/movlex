const Media = require("../models/Media");
const Comment = require("../models/Comments");
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
			user: req.user._id, // Assuming you have authentication middleware to populate req.user
		};

		media.comments.push(newComment);

		const savedMedia = await media.save();

		res.json(savedMedia);
	} catch (err) {
		res.status(500).json({ error: "Failed to add comment" });
	}
};

exports.deleteComment = async (req, res) => {
	const { id, commentId } = req.params;

	try {
		const media = await Media.findById(id);

		if (!media) {
			return res.status(404).json({ error: "Media not found" });
		}

		const commentIndex = media.comments.findIndex(
			(comment) => comment._id.toString() === commentId
		);

		if (commentIndex === -1) {
			return res.status(404).json({ error: "Comment not found" });
		}

		media.comments.splice(commentIndex, 1);

		const savedMedia = await media.save();

		res.json(savedMedia);
	} catch (err) {
		res.status(500).json({ error: "Failed to delete comment" });
	}
};

exports.getComments = async (req, res) => {
	const { id } = req.params;

	try {
		const media = await Media.findById(id)
			.populate("comments.user", "firstName lastName")
			.exec();

		if (!media) {
			return res.status(404).json({ error: "Media not found" });
		}

		res.json(media.comments);
	} catch (err) {
		res.status(500).json({ error: "Failed to retrieve comments" });
	}
};
