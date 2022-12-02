import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { iconsSideBar } from "../../assets/index";
import SideBarButton from "../SideBarButton";

function SideBar() {
	const [focusedButton, setFocusedButton] = useState("dashboard");

	return (
		<div className="Sidebar">
			{iconsSideBar.map((item) => {
				const { icon, icon_onHover, icon_onFocus, name } = item;
				const iconState = focusedButton === name ? icon_onFocus : icon;

				return (
					<SideBarButton
						key={item.name}
						icon={iconState}
						icon_onHover={icon_onHover}
						name={name}
						state={focusedButton}
						setState={setFocusedButton}
					/>
				);
			})}
		</div>
	);
}

export default SideBar;
