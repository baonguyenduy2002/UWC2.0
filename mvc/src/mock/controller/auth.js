import { userModel } from "../data/user";

export const login = (userId, password) => {
	const error = {
		message: "Invalid userid or password",
		statusCode: 401,
		statusText: "Unauthorized",
	};
	try {
		if (userId !== userModel.userId || password !== userModel.password) {
			throw error;
		}
		localStorage.setItem("isAuthenticated", true);
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => {
	localStorage.setItem("isAuthenticated", false);
};
