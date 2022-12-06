import React from "react";
import "./MCPTag.css";
import ProgressBar from "../ProgressBar/index";

const MCPTag = (props) => {
	const { name, area, status, idx, doGetMCP } = props;

	return (
		<div className="TagContainer" onClick={() => doGetMCP(idx)}>
			<h3 className="McpTagName">{name}</h3>
			<p className="McpTagArea">{area}</p>
			<div className="AddProgressBar">
				<ProgressBar status={status} size="small" />
			</div>
		</div>
	);
};

export default MCPTag;
