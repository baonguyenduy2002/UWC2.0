import React from 'react';

import "./DetailFacility.css";

function DetailFacility(props) {
    return (
        <div className='DetailInfor'>
            <h2 id='McpName'>{props.name}</h2>
            <p id='McpArea'>{props.area}</p>
            <p id='McpId'>{props.id}</p>
            <h3 id='Location'>Location:</h3><p id='McpLocation'>{props.location}</p>
            <h3 id='Status'>Status:</h3><p id='McpStatus'>{props.status}%</p>
            <div className='McpMap'></div>
        </div>
    );
}

export default DetailFacility;