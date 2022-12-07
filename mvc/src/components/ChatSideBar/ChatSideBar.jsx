import React from "react";
import { useState } from "react";

import "./ChatSideBar.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/icons/search_user.svg";
import Rimsha from "../../assets/image/Rimsha.png";
const ChatSideBar = () => {
	return (
		<div className="ChatSideBar">
			<div className="CHeader">
				<div className="TxtHeaderContainer">Chat</div>
			</div>
			<div className="FriendList">
				<div className="Friend-container f1">
					<div className="Friend-container-username u1">Rimsha Khan</div>
					<div className="Friend-container-msg u1">Hello!!!</div>
					<img
						className="Friend-container-avatar a1"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
				<div className="Friend-container f2">
					<div className="Friend-container-username u2">Rimsha Khan</div>
					<div className="Friend-container-msg u2">Hello!!!</div>
					<img
						className="Friend-container-avatar a2"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
				<div className="Friend-container f3">
					<div className="Friend-container-username u3">Rimsha Khan</div>
					<div className="Friend-container-msg u3">Hello!!!</div>
					<img
						className="Friend-container-avatar a3"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
				<div className="Friend-container f4">
					<div className="Friend-container-username u4">Rimsha Khan</div>
					<div className="Friend-container-msg u4">Hello!!!</div>
					<img
						className="Friend-container-avatar a4"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
				<div className="Friend-container f5">
					<div className="Friend-container-username u5">Rimsha Khan</div>
					<div className="Friend-container-msg u5">Hello!!!</div>
					<img
						className="Friend-container-avatar a5"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
				<div className="Friend-container f6">
					<div className="Friend-container-username u6">Rimsha Khan</div>
					<div className="Friend-container-msg u6">Hello!!!</div>
					<img
						className="Friend-container-avatar a6"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
				<div className="Friend-container f7">
					<div className="Friend-container-username u7">Rimsha Khan</div>
					<div className="Friend-container-msg u7">Hello!!!</div>
					<img
						className="Friend-container-avatar a7"
						src={Rimsha}
						height={48}
						width={48}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ChatSideBar;
