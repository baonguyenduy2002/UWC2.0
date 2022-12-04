import React from "react";
import { useState } from "react";

import "./SettingAccount.css";

const SettingAccount = () => {

    let firstName = "Maria";
    let lastName = "Memon";
    let dateofBirth = "14/09/1989";
    let email = "maria.memon@gmail.com";
    let address = "286 Ly Thuong Kiet, Ward 14, District 10, Ho Chi Minh City";
    let username = "maria.memon";
    let password = "password";

    return (
        <div className="AccountSetting">
            <div className="AHeaderMain">
                Tài Khoản
            </div>
            <div className="ProfilePicture">
                <img src="../../assets/image/ProfilePicture.jpg" alt="Profile" width={200} height={200}></img>
            </div>

            <div className="FirstName">
                <div className="AHeader h1">
                    Tên
                </div>
                <input className="Textfield-input txt1" type="text" defaultValue={firstName}>

                </input>
            </div>

            <div className="LastName">
                <div className="AHeader h2">
                    Họ
                </div>
                <input className="Textfield-input txt2" type="text" defaultValue={lastName}>

                </input>
            </div>

            <div className="Username">
                <div className="AHeader h3">
                    Tài Khoản
                </div>
                <input className="Textfield-input txt3" type="text" defaultValue={username}>

                </input>
            </div>

            <div className="Password">
                <div className="AHeader h4">
                    Mật Khẩu
                </div>
                <input className="Textfield-input txt4" type="text" defaultValue={password}>

                </input>
            </div>

            <div className="DateofBirth">
                <div className="AHeader h5">
                    Ngày Sinh
                </div>
                <input className="Textfield-input txt5" type="text" defaultValue={dateofBirth}>

                </input>
            </div>

            <div className="Email">
                <div className="AHeader h6">
                    Email
                </div>
                <input className="Textfield-input txt6" type="text" defaultValue={email}>

                </input>
            </div>

            <div className="Address">
                <div className="AHeader h7">
                    Địa Chỉ
                </div>
                <input className="Textfield-input txt7" type="text" defaultValue={address}>

                </input>
            </div>
        </div >
    );
};

export default SettingAccount;