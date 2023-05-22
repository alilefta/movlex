const express = require("express");
const {
	getComments,
	postComments,
	deleteComment,
} = require("../routes/comments");
const router = express.Router();

router.post("/media/:id/comment", postComments);
router.get("/media/:id/comments", getComments);
router.delete("/media/:id/comment/:commentId", deleteComment);
