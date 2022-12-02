import React from "react";
import { useState } from "react";

import "./TaskSideBar.css";
import { iconsTaskSideBar } from "../../assets/index";
import ManageCalendar from "../ManageCalendarwindow/ManageCalendar";
import ManageTask from "../ManageTaskwindow/ManageTask";

const TaskSideBar = () => {
	const [calendar, setCalendar] = useState(true);
	const [task, setTask] = useState(false);

	return (
		<div className="Management">
			<div className="TaskSidebar">
				<button
					className="TaskSidebar-button1"
					onClick={() => {
						setCalendar(true);
						setTask(false);
					}}
				>
					<img src={iconsTaskSideBar[0].icon} alt="Calendar" />
				</button>
				<button
					className="TaskSidebar-button2"
					onClick={() => {
						setCalendar(false);
						setTask(true);
					}}
				>
					<img src={iconsTaskSideBar[1].icon} alt="Task" />
				</button>
			</div>
			<div className="window">
				{calendar && <ManageCalendar />}
				{task && <ManageTask />}
			</div>
		</div>
	);
};

export default TaskSideBar;
