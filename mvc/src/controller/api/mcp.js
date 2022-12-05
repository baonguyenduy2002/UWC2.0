import mcpService from "../service/mcp.service";

const getMCP = () => mcpService.getMCP();
const getMCPs = (id) => mcpService.getMCPs(id);
const createMCP = (data) => mcpService.createMCP(data);
const removeMCP = (id, data) => mcpService.removeMCP(id, data);

const mcpController = {
	getMCP,
	getMCPs,
	createMCP,
	removeMCP,
};
export default mcpController;
