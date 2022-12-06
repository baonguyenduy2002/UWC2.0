import React from "react";

import { iconsActiveBox } from "../../../assets/index";
import "./VehicleTag.css";

const VehicleTag = (props) => {
	const { id, name, route, status, idx, setVehicleIdx } = props;

	return (
		<div className="TagContainer" onClick={() => setVehicleIdx(idx)}>
			<h3 className="VehicleTagName">{name}</h3>
			<p className="VehicleTagId">Truck ID: {id}</p>
			<p className="VehicleTagRoute">
				Route: {route.map((mcp) => `${mcp.name}, `)}
			</p>

			<div className="VehiclesTagStatus">
				<img
					src={
						status === "active"
							? iconsActiveBox[0].icon
							: iconsActiveBox[1].icon
					}
					alt=""
				></img>
				&nbsp;{props.status}
			</div>
		</div>
	);
};

export default VehicleTag;
