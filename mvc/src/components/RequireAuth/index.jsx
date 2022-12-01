import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
	return !localStorage.getItem("isAuthenticated") ? (
		<Navigate to={"/"} replace={true} />
	) : (
		children
	);
}

export default RequireAuth;
