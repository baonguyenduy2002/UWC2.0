import React from "react";
import SearchBar from "../SearchBar/index";
import DropDownMenu from "../Facility/DropDownMenu/index";
import AddButton from "../Facility/AddButton/index";
import DetailVehicle from "../Facility/DetailVehicle/index";
import VehicleTag from "../Facility/VehicleTag/index";
import { iconsActiveBox } from "../../assets/index";

import "./FacilityVehicle.css";

const MCPs = [
  {
    id: "#123456",
    name: "MCP 1",
    area: "Area 1",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 95,
  },
  {
    id: "#111111",
    name: "MCP 2",
    area: "Area 1",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 90,
  },
  {
    id: "#123234",
    name: "MCP 3",
    area: "Area 2",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 60,
  },
  {
    id: "#444456",
    name: "MCP 4",
    area: "Area 2",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 30,
  },
  {
    id: "#773453",
    name: "MCP 5",
    area: "Area 3",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 20,
  },
  {
    id: "#000923",
    name: "MCP 6",
    area: "Area 3",
    location: "268 Ly Thuong Kiet, 14 ward, 10 District, Ho Chi Minh City",
    status: 50,
  },
];

const FacilityVehicle = (props) => {
  const { handleChange } = props;

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
        <DetailVehicle
          id='#CH11'
          name='Truck 1'
          status='Active'
          route={['MCP 1', 'MCP 2', 'MCP 3']}
          capacity={5000}
          curFuel={71}
          totalFuel={221}
        ></DetailVehicle>
      </div>
    </div>
  );
};

export default FacilityVehicle;
