import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { icons } from "../../assets";

function SideBar() {
	return (
		<div className="Sidebar">
			{icons.map((item) => {
				return item.name !== "searchIcon" ? (
					<Link key={item.name} to={item.name} className="Sidebar-button">
						<img src={item.icon} alt={item.name} />
					</Link>
				) : (
					false
				);
			})}
		</div>
	);
}

export default SideBar;
