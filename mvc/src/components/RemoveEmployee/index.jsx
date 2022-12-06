import React from "react";
import { useState } from "react";

function RemoveEmployeeButton(props) {
    const {item} = props;
    const [iconState, setIconState] = useState(item.icon);

    return (
        <div 
            className="AddEmployee-button"
            onMouseOver={() => setIconState(item.icon_onHover)}
            onMouseLeave={() => setIconState(item.icon)}
        >
            <img src={iconState}></img>
        </div>
    );
}

export default RemoveEmployeeButton;