import React from "react";
import ProgressBar from "../ProgressBar/index";

import "./DetailFacility.css";

const DetailFacilityVehicle = (props) => {
  return (
    <div className="DetailInfor">
      <h2 id="VehicleName">{props.name}</h2>
      <p id="VehicleId">{props.id}</p>
      <div
        style={{
          position: "absolute",
          left: "180px",
          top: "338px",
        }}
      >
        <ProgressBar status={props.fuel} size="big" />
      </div>
      <h3 id="Route">Current Route:</h3>
      <p id="VehicleRoute">{props.route.map((item) => `${item}, `)}</p>
      <h3 id="Status">Status:</h3>
      <div className="VehicleStatus">{props.status ? "Active" : "None"}</div>
      <div className="Map"></div>
    </div>
  );
};

export default DetailFacilityVehicle;
