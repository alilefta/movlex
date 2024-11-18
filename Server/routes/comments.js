const express = require("express");
const { getComments, postComment, deleteComment } = require("../controller/comments");
const router = express.Router();

const authenticateToken = require("../middleware/authMiddleware");

router.post("/media/:id/comment", authenticateToken, postComment);
router.get("/media/:id/comments", authenticateToken, getComments);
router.delete("/media/:id/comment/:commentId", authenticateToken, deleteComment);
module.exports = router;
