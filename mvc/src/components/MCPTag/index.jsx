import React, { useState, useEffect } from "react";
import "./MCPTag.css";
import ProgressBar from "../ProgressBar/index";

const MCPTag = (props) => {
    return (
        <div className="TagContainer">
            <h3 className="McpTagName">{props.name}</h3>
            <p className="McpTagArea">{props.area}</p>
            <div className="AddProgressBar">
                <ProgressBar 
                    status={props.status}
                    size="small" 
                /> 
            </div>
        </div>
    );
}


export default MCPTag;