import React from "react";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../controller/service/auth";

function Setting() {
	const navigate = useNavigate();

	const handleSubmit = () => {
		logout();
		setTimeout(navigate("/"), 2000);
	};

	return (
		<div>
			<Mapbox />
			<button onClick={handleSubmit}>Logout</button>
		</div>
	);
}

export default Setting;
