import React from "react";
import Dashboard from "../../../../components/DashBoard/Dashboard";
import RightSideBar from "../../../../components/DashBoard/RightSideBar";
import "./Home.css"

function Home() {
	return (
		<div className="Home">
			<Dashboard />
			<RightSideBar />
		</div>
	);
}

export default Home;
