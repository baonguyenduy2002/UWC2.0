import React from "react";
import { useState, useEffect } from "react";

import { getTask, getTasks } from "../../controller/api/crudtask";
import "./ManageTask.css";

const ManageTask = () => {
	const [taskChosen, setTaskChosen] = useState([]);
	const [taskList, setTaskList] = useState({});

	useEffect(() => {
		// getTask("0001").then((res) => setTaskChosen(res));
		getTasks().then((res) => setTaskList(res));
		console.log(taskList);
	}, []);

	return (
		<div className="task">
			<h1>
				{/* {taskList.map((task) => {
					return <p>{task.toString()}</p>;
				})} */}
			</h1>
		</div>
	);
};

export default ManageTask;
