const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			maxlength: 255,
			required: true,
		},
		genre: [
			{
				type: String,
				required: false,
			},
		],
		director: {
			type: String,
			required: false,
		},
		cast: [
			{
				type: String,
			},
		],
		description: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			default: 0,
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
		is_paid: {
			type: Boolean,
			default: false,
		},
		cover: {
			type: String,
			required: false,
			default:
				"https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
