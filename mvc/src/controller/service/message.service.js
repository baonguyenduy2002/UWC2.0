import { messageData } from "../data/message";
import { employeeData } from "../data/employee";

let msg_tmp;
let id = "M1010";
//-----------------------------------------Get one MCP--------------------------
export const getMessage = (id) =>
	new Promise((resolve, reject) => {
		const mcp = msg_tmp[id];

		if (!mcp) {
			return setTimeout(() => reject(new Error("Task data not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(msg_tmp[id]), 300));
	});

//-----------------------------------------Get all MCPs--------------------------
export const getMessages = () =>
	new Promise((resolve, reject) => {
		if (!messageData && !msg_tmp) {
			return setTimeout(() => reject(new Error("Tasks not found!")), 300);
		}

		setTimeout(() => {
			if (!msg_tmp) {
				msg_tmp = messageData;
				resolve(Object.values(msg_tmp));
			} else {
				resolve(Object.values(msg_tmp));
			}
		}, 300);
	});

//-----------------------------------------Create new MCP--------------------------
export const createMessage = (data) =>
	new Promise((resolve, reject) => {
		if (!data.area || !data.location) {
			reject(new Error("Not enough information!"));
		}
		const words = id.split("M");
		const number = parseInt(words[1]) + 1;
		id = words[0] + number.toString();
		id = "M" + id;
		const newMsg = {
			id,
			//Hard code receiver
			receiverId: "CO1111",
			...data,
		};

		msg_tmp = { ...msg_tmp, [id]: newMsg };

		setTimeout(() => resolve(true), 300);
	});

const mcpService = {
	getMessage,
	getMessages,
	createMessage,
};
export default mcpService;
