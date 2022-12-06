import React from "react";
import ProgressBar from "../ProgressBar/index";
import "./DetailFacility.css";

const DetailFacilityMCP = (props) => {
  return (
    <div className="DetailInfor">
      <h2 id="McpName">{props.name}</h2>
      <p id="McpArea">{props.area}</p>
      <p id="McpId">{props.id}</p>
      <h3 id="Location">Location:</h3>
      <p id="McpLocation">{props.location}</p>
      <h3 id="Status-MCP">Status:</h3>
      <div
        style={{
          position: "absolute",
          left: "180px",
          top: "338px",
        }}
      >
        <ProgressBar status={props.status} size="big" />
      </div>
      <div className="Map"></div>
    </div>
  );
};

export default DetailFacilityMCP;
