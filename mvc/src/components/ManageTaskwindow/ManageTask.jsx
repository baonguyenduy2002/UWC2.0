import React from "react";
import { useState, useEffect } from "react";

import api from "../../controller/api/route";
import "./ManageTask.css";

const ManageTask = () => {
	console.log("Run manatask");
	//--------------------------------useState----------------------
	const [isTaskList, setisTaskList] = useState(false);
	const [taskList, setTaskList] = useState({});
	const [isTaskChosen, setisTaskChosen] = useState(false);
	const [taskChosen, setTaskChosen] = useState([]);

	const [emId, setId] = useState("");
	const [des, setDes] = useState("");
	const [chooseId, setChooseId] = useState("");

	//---------------------------------Handler-------------------
	const handleChangeId = (e) => {
		e.preventDefault();
		setId(e.target.value);
	};
	const handleChangeDes = (e) => {
		e.preventDefault();
		setDes(e.target.value);
	};
	const handleChooseId = (e) => {
		e.preventDefault();
		setChooseId(e.target.value);
	};
	const handleCreate = async (e) => {
		e.preventDefault();

		try {
			api.taskController.createTask({
				des: des,
				emId: emId,
				date: "00/00/2022",
				time: "00g00 - 00g00",
				collector: "No name",
				workingArea: "default",
				mcps: [],
				vehicle: "default",
				route: false,
				status: false,
			});
			api.taskController.getTasks().then((res) => {
				setTaskList(res);
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleEdit = async (id) => {
		try {
			await api.taskController.updateTask(id, {
				des: "changed",
				emId: "dunno",
				date: "00/00/2022",
				time: "00g00 - 00g00",
				collector: "No name",
				workingArea: "default",
				mcps: [],
				vehicle: "default",
				route: false,
				status: false,
			});
			await api.taskController.getTasks().then((res) => {
				setTaskList(res);
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleRemove = async (id) => {
		try {
			await api.taskController.removeTask(id);
			await api.taskController.getTasks().then((res) => {
				setTaskList(res);
			});
		} catch (error) {
			console.log(error);
		}
	};
	const doChoose = async (e) => {
		e.preventDefault();

		try {
			await handleChoose(chooseId);
		} catch (error) {
			console.log(error);
		}
	};
	const handleChoose = async (id) => {
		try {
			await api.taskController.getTask(id).then((res) => {
				setTaskChosen(res);
				setisTaskChosen(true);
			});
		} catch (error) {
			console.log(error);
		}
	};

	//----------------------useEffect here------------------
	useEffect(() => {
		api.taskController.getTasks().then((res) => {
			setTaskList(res);
			setisTaskList(true);
		});
	}, []);

	return (
		<div className="task">
			{/* Print all Tasks */}
			<p>All Tasks:</p>
			<h1>
				{isTaskList &&
					taskList.map((task) => (
						<div key={task.id}>
							<h1>
								{task.des}
								<button
									type="button"
									onClick={() => {
										console.log(task.id);
										handleEdit(task.id);
									}}
								>
									Update
								</button>
								<button type="button" onClick={() => handleRemove(task.id)}>
									Remove
								</button>
							</h1>
						</div>
					))}
			</h1>

			{/* Get a Task */}
			<p>Get a Task:</p>
			<h1>{isTaskChosen && taskChosen[1]}</h1>
			<h1>
				<form onSubmit={doChoose}>
					<label>
						Choose Task: <input type="input" onChange={handleChooseId}></input>
					</label>

					<button type="submit">Find task</button>
				</form>
			</h1>

			{/* Add Task */}
			<p>Add Task:</p>
			<h1>
				<form onSubmit={handleCreate}>
					<label>
						EmId: <input type="input" onChange={handleChangeId}></input>
					</label>
					<label>
						Description: <input type="input" onChange={handleChangeDes}></input>
					</label>

					<button type="submit">Create</button>
				</form>
			</h1>
		</div>
	);
};

export default ManageTask;
