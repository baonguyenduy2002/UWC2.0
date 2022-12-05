import React from "react";

import "./EmployeeCard.css";

function EmployeeCard(props) {
    const {id, name, type, workingStatus, dob, address, email, url} = props;
    return (
        <div className="CardContainer">
            <div className="Photo">
                <img src={url} alt="photo" width="100px" height="120px"></img>
            </div>
            <h3 className="EmployeeName" >{name}</h3>
            <p className="EmployeeType">{type}</p>
            <p className="EmployeeId">#{id}</p>
            <div className="WorkingStatus">Status: {workingStatus ? 'Working':"Not Working"}</div>
            <div className="DoB">
                <p id="DoBContent"><b>Working Area:</b> {area}</p>
            </div>
            <div className="Address">
                <p id="AddressContent"><b>Address:</b> {address}</p>
            </div>
            
        </div>
    );
}

export default EmployeeCard;