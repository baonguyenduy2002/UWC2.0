import React, { useState, useEffect } from "react";
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
	const [mcpData, setMCP] = useState([]);
	const [mcpIdx, setMcpIdx] = useState(0);

	//----useEffect----
	useEffect(() => {
		api.mcpController.getMCPs().then((res) => {
			setMCP(res);
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
				<p className="TotalMCPs">Total: {mcpData.length}</p>
				<hr className="Line" />
				<div className="MCPsSrollList">
					{mcpData &&
						mcpData.map((MCP, index) => (
							<div className="McpTag" key={MCP.id}>
								<MCPTag
									id={MCP.id}
									name={MCP.name}
									area={MCP.area}
									status={MCP.status}
									// doGetMCP={() => doGetMCP(MCP.id)}
									idx={index}
									doGetMCP={setMcpIdx}
								/>
							</div>
						))}
				</div>
				<div className="Addbutton">
					<AddButton name="Add MCP"></AddButton>
				</div>
			</div>
			<div className="ShowDetail">
				{mcpData.length !== 0 ? (
					<DetailFacilityMCP
						id={mcpData[mcpIdx].id}
						name={mcpData[mcpIdx].name}
						area={mcpData[mcpIdx].area}
						location={mcpData[mcpIdx].location}
						status={mcpData[mcpIdx].status}
					/>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default FacilityMCP;
