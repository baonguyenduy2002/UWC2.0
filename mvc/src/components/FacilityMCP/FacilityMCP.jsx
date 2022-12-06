import React from "react";
import SearchBar from "../SearchBar";
import DropDownMenu from "../Facility/DropDownMenu/index";
import AddButton from "../Facility/AddButton";
import DetailFacilityMCP from "../Facility/DetailFacility/DetailFacilityMCP";
import MCPTag from "../Facility/MCPTag/index";

import "./FacilityMCP.css";
const idList = [
  "#1000",
  "#1001",
  "#1002",
  "#1003",
  "#1004",
  "#1005",
  "#1006",
  "#1007",
  "#1008",
  "#1009",
  "#1010",
  "#1011",
  "#1012",
  "#1013",
  "#1014",
  "#1015",
  "#1016",
  "#1017",
  "#1018",
  "#1019",
];

const mcpData = [
  {
    id: idList[0],
    name: "MCP 1",
    area: "Area 1",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 30,
  },
  {
    id: idList[1],
    name: "MCP 2",
    area: "Area 1",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[2],
    name: "MCP 3",
    area: "Area 1",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[3],
    name: "MCP 4",
    area: "Area 2",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[4],
    name: "MCP 5",
    area: "Area 2",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[5],
    name: "MCP 6",
    area: "Area 2",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[6],
    name: "MCP 7",
    area: "Area 3",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[7],
    name: "MCP 8",
    area: "Area 3",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[8],
    name: "MCP 9",
    area: "Area 3",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: idList[9],
    name: "MCP 10",
    area: "Area 3",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
];

const FacilityMCP = (props) => {
  const { handleChange } = props;

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
          {mcpData.map((MCP) => (
            <div className="McpTag" key={MCP.id}>
              <MCPTag
                key={MCP.id}
                name={MCP.name}
                area={MCP.area}
                status={MCP.status}
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
          id={mcpData[0].id}
          name={mcpData[0].name}
          area={mcpData[0].area}
          location={mcpData[0].location}
          status={mcpData[0].status}
        ></DetailFacilityMCP>
      </div>
    </div>
  );
};

export default FacilityMCP;
