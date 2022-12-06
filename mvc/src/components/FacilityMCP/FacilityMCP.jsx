import { React, useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import DropDownMenu from "../Facility/DropDownMenu/index";
import AddButton from "../Facility/AddButton";
import DetailFacilityMCP from "../Facility/DetailFacility/DetailFacilityMCP";
import MCPTag from "../Facility/MCPTag/index";

import "./FacilityMCP.css";
import api from "../../controller/api/route";

const FacilityMCP = (props) => {
	const { handleChange } = props;

	//----calldata-----
	const [mcpData, setMCP] = useState({});
	const [mcpChosen, setMCPChosen] = useState([]);

	//----Handdler-----
	const doGetMCP = async (id) => {
		try {
			await api.mcpController.getMCP(id).then((res) => {
				setMCPChosen(res);
			});
		} catch (error) {
			console.log(error);
		}
	};

	//----useEffect----
	useEffect(() => {
		api.mcpController.getMCPs().then((res) => {
			console.log(res);
			setMCP(res);
			setMCPChosen(res[0]);
		});
	}, []);

	return (
		<div className="ManageContainer">
			<div className="List">
				<div className="DropDownMenu">
					<DropDownMenu
						options={["MCPs Management", "Vehicles Management"]}
						handleChange={handleChange}
					/>
				</div>
				<div className="SearchBar">
					{" "}
					<SearchBar />{" "}
				</div>
				<p className="TotalMCPs">Total: </p>
				<hr className="Line" />
				<div className="MCPsSrollList">
					{Object.values(mcpData).map((MCP) => (
						<div className="McpTag" key={MCP.id}>
							<MCPTag
								id={MCP.id}
								name={MCP.name}
								area={MCP.area}
								status={MCP.status}
								doGetMCP={() => doGetMCP(MCP.id)}
							/>
						</div>
					))}
				</div>
				<div className="Addbutton">
					<AddButton name="Add MCP"></AddButton>
				</div>
			</div>
			<div className="ShowDetail">
				<DetailFacilityMCP
					id={mcpChosen.id}
					name={mcpChosen.name}
					area={mcpChosen.area}
					location={mcpChosen.location}
					status={mcpChosen.status}
				></DetailFacilityMCP>
			</div>
		</div>
	);
};

export default FacilityMCP;
