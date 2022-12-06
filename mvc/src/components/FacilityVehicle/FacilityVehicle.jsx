import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/index";
import DropDownMenu from "../Facility/DropDownMenu/index";
import AddButton from "../Facility/AddButton/index";
import DetailFacilityVehicle from "../Facility/DetailFacility/DetailFacilityVehicle";
import VehicleTag from "../Facility/VehicleTag/index";
import { iconsActiveBox } from "../../assets/index";

import "./FacilityVehicle.css";
import api from "../../controller/api/route";

const FacilityVehicle = (props) => {
	const { handleChange } = props;

	//----calldata-----
	const [vehicles, setVehicles] = useState([]);
	const [vehicleIdx, setVehicleIdx] = useState(0);

	//----useEffect----
	useEffect(() => {
		api.vehicleController.getVehicles().then((res) => {
			setVehicles(res);
		});
	}, []);

	return (
		<div className="ManageContainer">
			<div className="List">
				<div className="DropDownMenu">
					<DropDownMenu
						options={["Vehicles Management", "MCPs Management"]}
						handleChange={handleChange}
					/>
				</div>
				<div className="SearchBar">
					{" "}
					<SearchBar />{" "}
				</div>
				<p className="TotalMCPs">Total: {vehicles.length}</p>
				<hr className="Line" />

				<div className="VehiclesSrollList">
					{vehicles &&
						vehicles.map((vehicle, index) => (
							<div className="McpTag" key={vehicle.id}>
								<VehicleTag
									id={vehicle.id}
									name={vehicle.name}
									route={vehicle.route}
									status={vehicle.status}
									idx={index}
									setVehicleIdx={setVehicleIdx}
								/>
							</div>
						))}
				</div>
				<div className="Addbutton">
					<AddButton name="Add Vehicle"></AddButton>
				</div>
			</div>
			<div className="ShowDetail">
				{vehicles.length !== 0 ? (
					<DetailFacilityVehicle
						id={vehicles[vehicleIdx].id}
						name={vehicles[vehicleIdx].name}
						capacity={vehicles[vehicleIdx].capacity}
						route={vehicles[vehicleIdx].route}
						status={vehicles[vehicleIdx].status}
						fuel={vehicles[vehicleIdx].fuel}
					/>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default FacilityVehicle;
