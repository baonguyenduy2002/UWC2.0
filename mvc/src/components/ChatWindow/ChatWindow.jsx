import React from "react";

import { useState } from "react";

import "./ChatWindow.css";
import Rimsha from "../../assets/image/Rimsha64x64.png";
import info from "../../assets/icons/info.svg"
import send from "../../assets/icons/send.svg"
import { useRef } from "react";
const ChatWidnow = () => {
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);
    let msg = []
    function handleClick() {
        setMessage('');
    }

    const handleChange = event => {
        setMessage(event.target.value);
    };
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
                <img className="Avatar1" src={Rimsha} width={40} height={40}></img>
                <div className="ChatView-msg msg1">
                    Lorem ipsum dolor sit amet, con.
                </div>

                <div className="ChatTime">
                    19:20
                </div>

                <img className="Avatar2" src={Rimsha} width={40} height={40}></img>
                <div className="ChatView-msg msg2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum sodales nisl, eget ultricies diam pharetra vel. Vivamus lobortis eu mauris ac vehicula. Suspendisse eget.
                </div>
            </div>

            <div className="ChatInput">
                <div className="ChatInput-field">
                    <input className="ChatInput-input-field" ref={inputRef} type="text" placeholder="Nhập tin nhắn . . ." onChange={handleChange} value={message}>
                    </input>
                </div>
                <div className="SendIcon-container" onClick={handleClick}>
                    <img className="SendIcon" src={send}></img>
                </div>
            </div>
        </div>
    );
}

export default ChatWidnow;