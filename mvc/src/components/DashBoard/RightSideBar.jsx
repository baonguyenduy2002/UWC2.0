import React from "react";
import "./RightSideBar.css"  
import MiniCalendar from "../Calendar/MiniCalendar";


export default function RightSideBar(){


    return(
        <div className = "RightSideBarFrame">
            <div className="MyInfoTag">
                <img 
                    className="Avatar"
                    src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt = "My Avatar"
                />
                <div className = "MyInfo">
                    <h1 className = "MyName">
                        Rimsha Khan
                    </h1>
                    <div className = "MyTitle">
                        Back Officer
                    </div> 
                </div>
            </div>
            <div className = "MiniNotification">

            </div>
            <div className = "MiniCalendar">
                <MiniCalendar />
            </div>
        </div>
    )
}