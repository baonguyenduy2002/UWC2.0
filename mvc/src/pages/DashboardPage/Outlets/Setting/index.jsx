import React from "react";
import { useNavigate } from "react-router-dom";
import Mapbox from "../../../../components/Calendar/Map"
import { logout } from "../../../../mock/controller/auth";

function Setting() {
	const navigate = useNavigate();

	const handleSubmit = () => {
		logout();
		setTimeout(navigate("/"), 2000);
	};

	return (
		<div>
			<Mapbox type = "task"/>
			<button onClick={handleSubmit}>Logout</button>
		</div>
	);
}

export default Setting;
