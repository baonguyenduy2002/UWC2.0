import React from "react";
import { useState } from "react";

import "./SettingGeneral.css";
import { logout } from "../../mock/controller/auth";
import { useNavigate } from "react-router-dom";
import Logout from "../../assets/icons/logout.svg"
const SettingGeneral = () => {

    const navigate = useNavigate();

    const handleLogoutSubmit = () => {
        logout();
        setTimeout(navigate("/"), 2000);
    };

    return (
        <div className="GeneralSetting">
            <div className="GHeader">
                General
            </div>
            <div className="LanguageSetting">
                <div className="GHeader1">
                    Ngôn Ngữ
                </div>
                <select className="Dropdown">
                    <option value="Vietnamese">Tiếng Việt</option>
                    <option value="English">English</option>
                </select>
            </div>

            <div className="Logout">
                <div className="GHeader2">
                    Đăng Xuất
                </div>
                <div className="LogoutContainer">
                    <button className="LogoutButton" onClick={handleLogoutSubmit}>
                        Đăng Xuất
                    </button>
                </div>
                <img className="LogoutIcon" src={Logout}></img>
            </div>
        </div>
    );
};

export default SettingGeneral;