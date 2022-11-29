import React from "react";
import './Sidebar.css'
import { home, chat, facility, manemployee, noti, setting, task } from "./button"

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <button className="Sidebar-home">
                <img src={home} alt = "home"/>
            </button>
            <button className="Sidebar-manemployee">
                <img src={manemployee} alt="manage employee" />
            </button>
            <button className="Sidebar-task">
                <img src={task} alt="task" />
            </button>
            <button className="Sidebar-facility">
                <img src={facility} alt="facility" />
            </button>
            <button className="Sidebar-chat">
                <img src={chat} alt="chat" />
            </button>
            <button className="Sidebar-noti">
                <img src={noti} alt="notification" />
            </button>
            <button className="Sidebar-setting">
                <img src={setting} alt="setting" />
            </button>
        </div>
    )
}

export default Sidebar