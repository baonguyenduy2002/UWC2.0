import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Layout from "./Layout";
import routes from "./Outlets/routes";

const DashboardPage = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map((route) => (
					<Route path={route.path} element={<route.element />} />
				))}
			</Route>
		</Routes>
	);
};

export default DashboardPage;
