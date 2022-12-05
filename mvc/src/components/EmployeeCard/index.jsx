import React from "react";

import "./EmployeeCard.css";

function EmployeeCard(props) {
    const {id, name, type, workingStatus, dob, address, email, url} = props;
    return (
        <div className="CardContainer">
            <div className="Photo">
                <img src={url} alt=""></img>
            </div>
            <div className="BasicInfo">
                <h3 style={{ fontSize: 20, margin: 0, width: 'fit-content' }}>{name}</h3>
                <p style= {{ fontSize: 20, margin: 0, width: 'fit-content' }}>{type}</p>
                <p style= {{ fontSize: 20, margin: 0, width: 'fit-content' }}><b>ID:</b> #{id}</p>
                <p style= {{ fontSize: 20, margin: 0, width: 'fit-content' }}>{workingStatus ? 'Working':"Not Working"}</p>
            </div>
            <div className="CurrentTaskTitle">
                <h4 style={{margin: 0, fontSize: '20px', width: 'fit-content' }}>Working Area:</h4>
                <h4 style={{margin: 0, fontSize: '20px', width: 'fit-content' }}>Vehicle:</h4>
            </div>
            <div className="CurrentTaskContent">
                <p style={{margin: 0, fontSize: '20px', width: 'fit-content' }}>Area 1</p>
                <p style={{margin: 0, fontSize: '20px', width: 'fit-content' }}>#CH12</p>
            </div>
        </div>
    );
}

export default EmployeeCard;