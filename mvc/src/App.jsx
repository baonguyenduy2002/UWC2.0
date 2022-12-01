import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/*" element={<DashboardPage />} />
			</Routes>
		</div>
	);
};

export default App;
