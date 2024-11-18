const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 30021;

// Import routes
const userRoutes = require("./routes/auth");
const commentsRoutes = require("./routes/comments");

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "*", // Specify allowed origins
		credentials: true,
	})
);

// Database Connection
const connectionString = process.env.DATABASE_URI;

if (!connectionString) {
	console.error("Database URI is not defined. Please set DATABASE_URI in .env");
	process.exit(1); // Exit process if no database connection
}

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1); // Exit process on connection failure
	});

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/comments", commentsRoutes);

app.get("/", (req, res) => {
	return res.json({
		message: "ok",
	});
});

// Global Error Handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		message: "Something went wrong!",
		error: process.env.NODE_ENV === "development" ? err.message : {},
	});
});

// Start the server
const server = app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
	console.log("SIGTERM signal received: closing HTTP server");
	server.close(() => {
		console.log("HTTP server closed");
		mongoose.connection.close(false, () => {
			console.log("MongoDB connection closed");
			process.exit(0);
		});
	});
});

module.exports = app;

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const cookieParser = require("cookie-parser");
// const authenticateToken = require("./middleware/authMiddleware");
// const authRoutes = require("./routes/auth");
// const port = process.env.PORT || 30021;

// require("dotenv").config();
// const mongoose = require("mongoose");
// const connectionString = process.env.DATABASE_URI;
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(cors());

// if (connectionString == undefined) {
// 	console.log("Database must be setup before continuing");
// 	return;
// }

// mongoose
// 	.connect(connectionString, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log("Connected to MongoDB");
// 	})
// 	.catch((error) => {
// 		console.error("Error connecting to MongoDB:", error);
// 	});

// // app.post("/api/login", async (req, res) => {
// // 	const { username, password } = req.body;

// // 	// Find user by username
// // 	const user = users.find((u) => u.username === username);

// // 	// User not found or password doesn't match
// // 	if (!user || !bcrypt.compareSync(password, user.password)) {
// // 		return res.status(401).json({ message: "Invalid username or password" });
// // 	}

// // 	// Generate and sign a JWT
// // 	const token = jwt.sign({ userId: user.id }, "secret-key");

// // 	// Return the token to the client
// // 	res.json({ token });
// // });

// const userRoutes = require("./routes/auth");

// app.use("/api", userRoutes);

// // app.post("/api/register", async (req, res) => {
// // 	const { email, password, firstName, lastName } = req.body;

// // 	try {
// // 		const user = await prisma.user.create({
// // 			data: {
// // 				email,
// // 				password,
// // 				firstName,
// // 				lastName,
// // 			},
// // 		});

// // 		res.sendStatus(201); // User registered successfully
// // 	} catch (error) {
// // 		res.status(500).json({ message: "Internal server error" });
// // 	}
// // });

// // // Protected route example
// // app.get("/api/protected", verifyToken, (req, res) => {
// // 	res.json({ message: "Protected data" });
// // });

// // Verify JWT middleware
// // function verifyToken(req, res, next) {
// // 	const token = req.headers.authorization?.split(" ")[1];

// // 	if (!token) {
// // 		return res.status(401).json({ message: "Unauthorized" });
// // 	}

// // 	jwt.verify(token, "secret-key", (err, decoded) => {
// // 		if (err) {
// // 			return res.status(401).json({ message: "Invalid token" });
// // 		}

// // 		req.userId = decoded.userId;
// // 		next();
// // 	});
// // }

// // Start the server
// const listener = app.listen(port, () => {
// 	console.log(`Server is running on port ${port} at ${listener.address().address}`);
// });
