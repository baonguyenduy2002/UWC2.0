import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./components/RequireAuth";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPage />} />

				<Route
					path="/*"
					element={
						<RequireAuth>
							<DashboardPage />{" "}
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
