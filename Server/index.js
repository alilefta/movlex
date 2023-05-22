const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const authenticateToken = require("./middleware/authMiddleware");
const authRoutes = require("./routes/auth");
const port = process.env.PORT || 30021;

require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = process.env.DATABASE_URI;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

// app.post("/api/login", async (req, res) => {
// 	const { username, password } = req.body;

// 	// Find user by username
// 	const user = users.find((u) => u.username === username);

// 	// User not found or password doesn't match
// 	if (!user || !bcrypt.compareSync(password, user.password)) {
// 		return res.status(401).json({ message: "Invalid username or password" });
// 	}

// 	// Generate and sign a JWT
// 	const token = jwt.sign({ userId: user.id }, "secret-key");

// 	// Return the token to the client
// 	res.json({ token });
// });

const userRoutes = require("./routes/auth");

app.use("/api", userRoutes);

// app.post("/api/register", async (req, res) => {
// 	const { email, password, firstName, lastName } = req.body;

// 	try {
// 		const user = await prisma.user.create({
// 			data: {
// 				email,
// 				password,
// 				firstName,
// 				lastName,
// 			},
// 		});

// 		res.sendStatus(201); // User registered successfully
// 	} catch (error) {
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// });

// // Protected route example
// app.get("/api/protected", verifyToken, (req, res) => {
// 	res.json({ message: "Protected data" });
// });

// Verify JWT middleware
// function verifyToken(req, res, next) {
// 	const token = req.headers.authorization?.split(" ")[1];

// 	if (!token) {
// 		return res.status(401).json({ message: "Unauthorized" });
// 	}

// 	jwt.verify(token, "secret-key", (err, decoded) => {
// 		if (err) {
// 			return res.status(401).json({ message: "Invalid token" });
// 		}

// 		req.userId = decoded.userId;
// 		next();
// 	});
// }

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
