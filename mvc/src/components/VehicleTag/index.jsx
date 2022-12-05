import React from "react";

import { iconsActiveBox } from "../../assets/index";
import "./VehicleTag.css";

const VehicleTag = (props) => {
    return (
        <div className="TagContainer">
            <h3 className="VehicleTagName">{props.name}</h3>
            <p className="VehicleTagId">Truck ID: {props.id}</p>
            <p className="VehicleTagRoute">Route: {props.route.map(item => (`${item}, `))}</p>
            <div className="VehiclesTagStatus">
                <img 
                    src={props.status === "Active" ? iconsActiveBox[0].icon:iconsActiveBox[1].icon} 
                    alt=""
                    style={{
                        position: "absolute",
                        top: 15,
                        left: 10
                    }}    
                >
                </img>
                &nbsp;{props.status}
            </div>
        </div>
    );
}

export default VehicleTag;