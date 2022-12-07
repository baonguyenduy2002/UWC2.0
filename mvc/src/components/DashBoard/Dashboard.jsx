import React from "react";
import "./Dashboard.css"  
import dashboard_image from "../../assets/image/dashboard_image.svg";
import MCPTagMini from "../Facility/MCPTagMini/index"

const mcps = [
    {
        name: "MCP 1",
        status: 95,
        area: "Area 1",
        location: ""
    },
    {
        name: "MCP 2",
        status: 90,
        area: "Area 1",
        location: ""
    },
    {
        name: "MCP 3",
        status: 60,
        area: "Area 2",
        location: ""
    },
]

export default function Dashboard(){

    return (
        <div className="MainFrame">
            <h1 className="DashboardTitle">
                UWC 2.0 Dashboard
            </h1>
            <div className = "TaskHeader">
                <h1 className="TaskTitle">Today Tasks</h1>
                <h2 className="TaskSubTitle">Check employee's tasks and schedule</h2>
                <a 
                    className="TaskButton"
                    href="#"
                    alt="Move to task page"
                >
                    Today's schedule
                </a>
            </div>
            <img 
                className = "DashboardGraph" 
                src = {dashboard_image} 
                alt = "MVC 2.0" 
            />
            <div className = "MCPsHeader">
                Top 3 fullest MCPs
            </div>
            <div className="MCPsFrame">
                {mcps.map((MCPsTag, idx) => ( 
                    <MCPTagMini obj={MCPsTag}/>
                ))}                    
            </div>
            <div className="MapEmployeeFrame">
                <div className = "DashboardMiniMap">
                    <h1>Map</h1>
                </div>
                <div className = "DashboardEmployeePreview">
                    <h1>employee</h1>
                </div>
            </div>    
        </div>
    )
}

function MCPsTag(input){
    return <div key={input.name} className = "MCPsTag">test</div>
}
