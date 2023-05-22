import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function ErrorPage() {
	return (
		<Container maxWidth="xs">
			<Typography variant="h6" align="center" color="error" gutterBottom>
				Error Connecting to Server
			</Typography>
			<Typography variant="body1" align="center">
				An error occurred while connecting to the server. Please try again
				later.
			</Typography>
		</Container>
	);
}
