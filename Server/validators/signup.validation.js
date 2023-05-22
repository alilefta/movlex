const { body, validationResult } = require("express-validator");

// Validation middleware for the signup route
const validateSignup = async (req, res, next) => {
	try {
		// Validate name field
		await body("firstName")
			.notEmpty()
			.withMessage("Name is required")
			.isLength({ min: 2 })
			.withMessage("Name must be at least 2 characters long")
			.run(req);

		await body("lastName")
			.notEmpty()
			.withMessage("Name is required")
			.isLength({ min: 2 })
			.withMessage("Name must be at least 2 characters long")
			.run(req);

		// Validate email field
		await body("email")
			.notEmpty()
			.withMessage("Email is required")
			.isEmail()
			.withMessage("Invalid email address")
			.run(req);

		// Validate password field
		await body("password")
			.notEmpty()
			.withMessage("Password is required")
			.isLength({ min: 6 })
			.withMessage("Password must be at least 6 characters long")
			.run(req);

		// Check for validation errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			// Return validation errors
			return res.status(400).json({ errors: errors.array() });
		}

		// Validation passed, proceed to the next middleware or route handler
		next();
	} catch (error) {
		// Handle server error
		console.error("An error occurred during signup validation", error);
		return res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = validateSignup;
