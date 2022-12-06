import React from "react";

import "./EmployeeCard.css";

function EmployeeCard(props) {
    
    const {id, name, type, workingStatus, url} = props;

    return (
        <div className="CardContainer">
            <div className="Photo">
                <img src={url} alt=""></img>
            </div>
            <div className="BasicInfo">
                <h3 style={{ fontSize: 20, margin: 0, width: 'fit-content' }}>{name}</h3>
                <p>{type}</p>
                <p><b>ID:</b> #{id}</p>
                <p style={{color: '#00FF19', fontWeight: 600}}>{workingStatus ? 'Đang làm việc':""}</p>
            </div>
            <div className="CurrentTaskTitle">
                <h4 style={{margin: 0, fontSize: '20px', width: 'fit-content' }}>Khu vực làm việc:</h4>
                <h4 style={{margin: 0, fontSize: '20px', width: 'fit-content' }}>Phương tiện:</h4>
            </div>
            <div className="CurrentTaskContent">
                <p>Area 1</p>
                <p>#CH12</p>
            </div>
        </div>
    );
}

export default EmployeeCard;