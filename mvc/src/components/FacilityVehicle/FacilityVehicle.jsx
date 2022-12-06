import React from "react";
import SearchBar from "../SearchBar/index";
import DropDownMenu from "../Facility/DropDownMenu/index";
import AddButton from "../Facility/AddButton/index";
import DetailFacilityVehicle from "../Facility/DetailFacility/DetailFacilityVehicle";
import VehicleTag from "../Facility/VehicleTag/index";
import { iconsActiveBox } from "../../assets/index";

import "./FacilityVehicle";

const vehicleData = [
  {
    id: "CH11",
    name: "Truck 1",
    route: ["MCP 1", "MCP 2", "MCP 3"],
    fuel: 70,
    status: true,
  },
  {
    id: "CH12",
    name: "Truck 2",
    route: ["MCP 1", "MCP 2", "MCP 3"],
    fuel: 70,
    status: false,
  },
  {
    id: "CH13",
    name: "Truck 3",
    route: ["MCP 1", "MCP 2", "MCP 3"],
    fuel: 70,
    status: true,
  },
  {
    id: "CH14",
    name: "Truck 4",
    route: ["MCP 1", "MCP 2", "MCP 3"],
    fuel: 70,
    status: false,
  },
  {
    id: "CH15",
    name: "Truck 5",
    route: ["MCP 1", "MCP 2", "MCP 3"],
    fuel: 70,
    status: true,
  },
  {
    id: "CH16",
    name: "Truck 6",
    route: ["MCP 1", "MCP 2", "MCP 3"],
    fuel: 70,
    status: false,
  },
];

const FacilityVehicle = (props) => {
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
        <hr className="Line" />
        <p className="VehiclesStatus">
          Total: &emsp;&emsp;
          <img src={iconsActiveBox[0].icon}></img>&nbsp;Active: &emsp;&emsp;
          <img src={iconsActiveBox[1].icon}></img>&nbsp;Inactive:
        </p>
        <div className="VehiclesSrollList">
          <div className="McpTag">
            <VehicleTag
              name="Truck 1"
              id="CH11"
              route={["MCP 1", "MCP 2", "MCP 3"]}
              status="Active"
            />
          </div>
        </div>
        <div className="Addbutton">
          <AddButton name="Add Vehicle"></AddButton>
        </div>
      </div>
      <div className="ShowDetail">
        <DetailFacilityVehicle
          id={vehicleData[0].id}
          name={vehicleData[0].name}
          route={vehicleData[0].route}
          fuel={vehicleData[0].fuel}
          status={vehicleData[0].status}
        ></DetailFacilityVehicle>
      </div>
    </div>
  );
};

export default FacilityVehicle;
