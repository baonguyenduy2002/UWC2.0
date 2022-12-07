import React from "react";
import "./MCPTagMini.css";
import ProgressBarMini from "../ProgressBarMini/index";

const MCPTagMini = (props) => {
  const {name, area, status} = props.obj;
  console.log(props);
  return (
    <div className="TagContainer-mini">
      <div className="McpTagName-mini">{name}</div>
      <div className="McpTagArea-mini">{area}</div>
      <div className="AddProgressBar-mini">
        <ProgressBarMini status={status} size="dashboard" />
      </div>
    </div>
  );
};

export default MCPTagMini;
