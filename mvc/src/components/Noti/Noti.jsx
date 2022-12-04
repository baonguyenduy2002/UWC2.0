import React from "react";
import "./Noti.css";
import Ali from "../../assets/image/Ali.png"
import Maria from "../../assets/image/Maria.png"
import SystemNoti from "../../assets/icons/SystemNoti.svg"
import Read from "../../assets/icons/Read.svg"
import Unread from "../../assets/icons/Unread.svg"
import { useNavigate } from "react-router-dom";

const Noti = () => {

    let notiList = [];

    return (
        <div className="Noti">
            <div className="NHeader">
                Thông Báo
            </div>

            <div className="Noti-noti n1">
                <div className="ImgContainer">
                    <img classname="Noti-image i1" src={Ali}></img>
                </div>
                <div className="TxtContainer">
                    Bạn có tin nhắn từ Ali Ahmad!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Unread}></img>
                </div>
                <div className="TimeContainer">
                    15 phút trước
                </div>
            </div>


            <div className="Noti-noti n2">
                <div className="ImgContainer">
                    <img classname="Noti-image i2" src={SystemNoti}></img>
                </div>
                <div className="TxtContainer">
                    Thông tin cá nhân của bạn đã được cập nhật thành công!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Unread}></img>
                </div>
                <div className="TimeContainer">
                    20 phút trước
                </div>
            </div>


            <div className="Noti-noti n3">
                <div className="ImgContainer">
                    <img classname="Noti-image i3" src={Maria}></img>
                </div>
                <div className="TxtContainer">
                    Bạn có tin nhắn từ Maria Memon!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Unread}></img>
                </div>
                <div className="TimeContainer">
                    31 phút trước
                </div>
            </div>


            <div className="Noti-noti n4">
                <div className="ImgContainer">
                    <img classname="Noti-image i4" src={SystemNoti}></img>
                </div>
                <div className="TxtContainer">
                    Thông tin cá nhân của bạn cần được cập nhật!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Read}></img>
                </div>
                <div className="TimeContainer">
                    40 phút trước
                </div>
            </div>


            <div className="Noti-noti n5">
                <div className="ImgContainer">
                    <img classname="Noti-image i5" src={Ali}></img>
                </div>
                <div className="TxtContainer">
                    Bạn có tin nhắn từ Ali Ahmad!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Read}></img>
                </div>
                <div className="TimeContainer">
                    45 phút trước
                </div>
            </div>


            <div className="Noti-noti n6">
                <div className="ImgContainer">
                    <img classname="Noti-image i6" src={Maria}></img>
                </div>
                <div className="TxtContainer">
                    Bạn có tin nhắn từ Maria Memon!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Read}></img>
                </div>
                <div className="TimeContainer">
                    47 phút trước
                </div>
            </div>


            <div className="Noti-noti n7">
                <div className="ImgContainer">
                    <img classname="Noti-image i7" src={Ali}></img>
                </div>
                <div className="TxtContainer">
                    Bạn có tin nhắn từ Ali Ahmad!
                </div>
                <div className="MarkContainer">
                    <img classname="Mark-image i7" src={Read}></img>
                </div>
                <div className="TimeContainer">
                    1 giờ 10 phút trước
                </div>
            </div>
        </div>
    );
}

export default Noti;