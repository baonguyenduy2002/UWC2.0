import Chat from "./Chat";
import Facility from "./Facility";
import Home from "./Home";
import ManageEmployee from "./ManageEmployee";
import ManageTask from "./ManageTask";
import Notification from "./Notification";
import Setting from "./Setting";

const routes = [
	{ path: "dashboard", element: Home },
	{ path: "tasks", element: ManageTask },
	{ path: "employees", element: ManageEmployee },
	{ path: "facility", element: Facility },
	{ path: "chat", element: Chat },
	{ path: "notification", element: Notification },
	{ path: "setting", element: Setting },
	{ path: "*", element: Home },
];

export default routes;
