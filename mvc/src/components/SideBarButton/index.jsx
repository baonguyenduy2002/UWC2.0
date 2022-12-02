import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

function SideBarButton(props) {
	const { icon, name, icon_onHover, state, setState } = props;
	const [iconState, setIconState] = useState(icon);

	const handleClick = () => {
		setState(name);
	};

	if (state === name)
		return (
			<>
				<Link key={name} to={name} className="Sidebar-button">
					<img src={icon} alt={name} />
				</Link>
			</>
		);
	return (
		<>
			<Link
				key={name}
				to={name}
				className="Sidebar-button"
				onClick={handleClick}
				onMouseOver={() => setIconState(icon_onHover)}
				onMouseLeave={() => setIconState(icon)}
			>
				<img src={iconState} alt={name} />
			</Link>
		</>
	);
}

export default SideBarButton;
