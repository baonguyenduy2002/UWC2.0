import React from "react";
import ProgressBar from "../ProgressBar/index";

import "./DetailFacility.css";

const DetailFacilityVehicle = (props) => {
	const { id, name, capacity, route, status, fuel } = props;
	return (
		<div className="DetailInfor">
			<h2 id="VehicleName">{name}</h2>
			<p id="VehicleId">#{id}</p>
			<div
				style={{
					position: "absolute",
					left: "150px",
					top: "330px",
				}}
			>
				<ProgressBar status={fuel} size="big" />
			</div>
			<h3 id="Capacity">Capacity: </h3>
			<p id="VehiclesCapacity">{capacity}g</p>
			<h3 id="Route">Current Route:</h3>
			<p id="VehicleRoute">{route.map((mcp) => `${mcp.name}, `)}</p>
			<h3 id="Status">Status:</h3>
			<div className="VehicleStatus">{status ? "active" : "inactive"}</div>
			<h3 id="Fuel">Fuel:</h3>
			<div className="Map"></div>
		</div>
	);
};

export default DetailFacilityVehicle;
