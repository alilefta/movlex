const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		media: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Media",
		},
		comment: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 10,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
