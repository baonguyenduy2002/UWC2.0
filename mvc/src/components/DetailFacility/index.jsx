import React from 'react';
import ProgressBar from '../ProgressBar/index';
import { iconsActiveBox } from "../../assets/index";

import "./DetailFacility.css";

function DetailFacility(props) {
    return (
        <div className='DetailInfor'>
            <h2 id='McpName'>{props.name}</h2>
            <p id='McpArea'>{props.area}</p>
            <p id='McpId'>{props.id}</p>
            <h3 id='Location'>Location:</h3>
            <p id='McpLocation'>{props.location}</p>
            <h3 id='Status'>Status:</h3>
            <div
                style={{
                    position: "absolute",
                    left: '180px',
                    top: '338px',

                }}
            >
                <ProgressBar status={props.status} size="big"/>
            </div>
            <div className='Map'></div>
        </div>
    );
    // return (
    //     <div className='DetailInfor'>
    //         <h2 id='VehicleName'>{props.name}</h2>
    //         <p id='VehicleId'>{props.id}</p>
    //         <h3 id='Capacity'>Capacity: </h3>
    //         <p id='VehiclesCapacity'>{props.capacity}g</p>
    //         <h3 id='Fuel'>Fuel:</h3>
    //         <p id='VehicleFuel'>{props.curFuel}/{props.totalFuel}</p>
    //         <h3 id='Route'>Current Route:</h3>
    //         <p id='VehicleRoute'>{props.route.map(item => (`${item}, `))}</p>
    //         <h3 id='Status'>Status:</h3>
    //         <div className="VehicleStatus">
    //             {props.status}
    //         </div>
    //         <div className='Map'></div>
    //     </div>
    // );
}

export default DetailFacility;