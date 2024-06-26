import React from "react";
import { Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorPage = ({ error }) => {
	return (
		<div className="error-page">
			<div className="error-msg">
				<Typography variant="h3">
					<ErrorIcon />
					Error
				</Typography>
				<br />
				<Typography variant="h4">Oooooops...</Typography>
				<Typography variant="h6">
					{error.message}
				</Typography>
			</div>
		</div>
	);
};

export default ErrorPage;
