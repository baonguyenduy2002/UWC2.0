import React from "react";
import ChatSideBar from "../../../../components/ChatSideBar/ChatSideBar";
import ChatWidnow from "../../../../components/ChatWindow/ChatWindow";

function Chat() {
	return (
		<div className="Chat">
			<ChatSideBar />
			<ChatWidnow />
		</div>
	);
}

export default Chat;
