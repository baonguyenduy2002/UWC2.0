import React from "react";
import SearchBar from "../../../../components/SearchBar/index";
import DropDownMenu from "../../../../components/DropDownMenu/index";
import AddButton from "../../../../components/AddButton/index"
import DetailFacility from "../../../../components/DetailFacility/index"

import "./Facility.css";


const MCPs = [
	{
		id: "#123456",
		name: "MCP 1",
		area : "Area 1",
		location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
		status: 90,
	},
];

function Facility() {
	return (
		<div className="ManageMcp">
			<div className="MCPList">
				<div className="DropDownMenu"><DropDownMenu /></div>
				<div className="SearchBar"> <SearchBar /> </div>
				<p className="TotalMCPs">Total: </p>
				<hr className="Line"/>
				<div className="MCPsSrollList"></div>
				<div className="Addbutton">
					<AddButton
						name="Add MCP"
					>
					</AddButton>
				</div>
			</div>
			<div className="ShowDetail">
				<DetailFacility
					id = {MCPs[0].id}
					name = {MCPs[0].name}
					area = {MCPs[0].area}
					location = {MCPs[0].location}
					status = {MCPs[0].status}
				>
				</DetailFacility>
			</div>

		</div>
	)
}

export default Facility;
