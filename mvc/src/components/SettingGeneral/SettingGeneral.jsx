import React from "react";
import { useState } from "react";

import "./SettingGeneral.css";
import { logout } from "../../mock/controller/auth";
import { useNavigate } from "react-router-dom";
import Logout from "../../assets/icons/logout.svg"
import open from "../../assets/icons/arrow_drop_down_open.svg"
import close from "../../assets/icons/arrow_drop_down_close.svg"

const SettingGeneral = () => {

    const [isShown, setIsShown] = useState(false)
    const [message, setMessage] = useState('Tiếng Việt');
    const [icon, setIcon] = useState(open)

    const handleLanguageClick = () => {
        setIsShown(current => !current)
        if (icon == close) {
            setIcon(open)
        }
        else {
            setIcon(close)
        }
    }

    function handleLangChoose(lang) {
        setMessage(lang)
        setIsShown(current => !current)
        if (icon == close) {
            setIcon(open)
        }
        else {
            setIcon(close)
        }
    }

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
                <button className="Dropdown" onClick={handleLanguageClick} >{message}</button>
                {isShown && (<div className="Dropdown-list">
                    <button className="Dropdown-list-item item1" onClick={() => { handleLangChoose('Tiếng Việt') }} >Tiếng Việt</button>
                    <button className="Dropdown-list-item item2" onClick={() => { handleLangChoose('English') }}>English</button>
                </div>)}
                <img className="ImgDropdown" src={icon}></img>
            </div >

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
        </div >
    );
};

export default SettingGeneral;