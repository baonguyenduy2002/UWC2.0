import React from "react";
import "./Dashboard.css"  
import dashboard_image from "../../assets/image/dashboard_image.svg";
import Mapbox from "../Calendar/Map";

const mcps = [
    {
        name: "MCP1",
        status: 0.95,
        area: "Area 1",
        location: ""
    },
    {
        name: "MCP2",
        status: 0.90,
        area: "Area 1",
        location: ""
    },
    {
        name: "MCP3",
        status: 0.6,
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
                {mcps.map(MCPsTag)}                    
            </div>
            <div className="MapEmployeeFrame">
                <div className = "DashboardMiniMap">
                    <h1 style = {{textAlign: "left"}}>
                        Map
                    </h1>
                    <Mapbox type= "dashboard" />

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
