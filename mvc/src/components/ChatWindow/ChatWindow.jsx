import React from "react";

import { useState } from "react";

import "./ChatWindow.css";
import Rimsha from "../../assets/image/Rimsha64x64.png";
import info from "../../assets/icons/info.svg"
import send from "../../assets/icons/send.svg"
const ChatWidnow = () => {

    return (
        <div className="ChatWindow">
            <div className="ChatFriend">
                <div className="ChatFriend-username">
                    Rimsha
                </div>
                <img className="ChatFriend-avatar" src={Rimsha} width={64} height={64} alt="" />
                <img className="ChatFriend-detail" src={info} alt="" />
            </div>

            <div className="ChatView">

            </div>

            <div className="ChatInput">
                <div className="ChatInput-field">
                    <div className="ChatInput-field-default-text">
                        Nhập tin nhắn . . .
                    </div>
                </div>
                <img className="SendIcon" src={send}></img>
            </div>
        </div>
    );
}

export default ChatWidnow;