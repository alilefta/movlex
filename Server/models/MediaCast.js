const mongoose = require("mongoose");

const mediaCastSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: false,
			default: "Director",
		},
		media: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Media",
		},
	},
	{ timestamps: true }
);

const MediaCast = mongoose.model("MediaCast", mediaCastSchema);

module.exports = MediaCast;
