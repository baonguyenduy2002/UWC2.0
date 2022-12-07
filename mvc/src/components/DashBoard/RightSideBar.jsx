import React from "react";
import "./RightSideBar.css"  
import SystemNoti from "../../assets/icons/systemnoti.svg"
import Ali from "../../assets/image/Ali.png"
import Maria from "../../assets/image/Maria.png"

const urlImage = "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

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
                <h1 className="MiniNotification-header">
                        New Notification
                    </h1>
                    <div className="MiniNotification-noti noti1">
                        <img src={Ali} width={38} height={38}></img>
                        <div className="MiniNotification-noti-content noti">
                            Ali Ahmad đã gửi tin nhắn cho bạn!
                        </div>
                    </div>
                    <div className="MiniNotification-noti noti2">
                        <img src={SystemNoti} width={38} height={38}></img>
                        <div className="MiniNotification-noti-content noti">
                            Thông tin cá nhân của bạn đã được cập nhật thành công!
                        </div>
                    </div>
                    <div className="MiniNotification-noti noti3">
                        <img src={Maria} width={38} height={38}></img>
                        <div className="MiniNotification-noti-content noti">
                            Maria Memon đã gửi tin nhắn cho bạn!
                        </div>
                    </div>
                </div>
            <div className = "MiniCalendar">

            </div>
        </div>
    )
}