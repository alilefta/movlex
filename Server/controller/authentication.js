const User = require("../models/User");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
exports.signup = (req, res) => {
	const user = new User(req.body);

	user.save()
		.then((savedUser) => {
			return res.json({
				message: "Success",
				savedUser,
			});
		})
		.catch((err) => {
			return res.status(400).json({
				error: "Unable to add user",
			});
		});
};

exports.signin = async (req, res) => {
	const { email: userEmail, password } = req.body;
	try {
		const user = await User.findOne({ email: userEmail });
		if (!user) {
			return res.status(404).json({
				error: "User not found",
			});
		}

		if (!user.authenticate(password)) {
			return res.status(403).json({
				error: "Email and password do not match",
			});
		}

		// Create Token
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

		// Put token in cookies
		res.cookie("t", token, { expire: new Date() + 9999 });

		const { _id, firstName, lastName, email, profilePicture, role, subscription_level, comments, createdAt } = user;

		return res.json({
			token,
			user: {
				_id,
				firstName,
				lastName,
				email,
				profilePicture,
				role,
				subscription_level,
				comments,
				createdAt,
			},
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			error: "Internal server error",
		});
	}
};

exports.signout = (req, res) => {
	res.clearCookie("t");
	return res.json({
		message: "Signout success",
	});
};
