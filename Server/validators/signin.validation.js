const { body, validationResult } = require("express-validator");

// Validation middleware for the signin route
const validateSignin = [
	// Validate email field
	body("email")
		.notEmpty()
		.withMessage("Email is required")
		.isEmail()
		.withMessage("Invalid email address"),

	// Validate password field
	body("password")
		.notEmpty()
		.withMessage("Password is required")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long"),

	// Check for validation errors
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			// Return validation errors
			return res.status(400).json({ errors: errors.array() });
		}
		// Validation passed, proceed to the next middleware or route handler
		next();
	},
];

module.exports = validateSignin;
