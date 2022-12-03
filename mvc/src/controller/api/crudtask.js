import { taskData } from "../data/task";

export const getTask = (id) =>
	new Promise((resolve, reject) => {
		const task = taskData[id];

		if (!task) {
			return setTimeout(() => reject(new Error("Task data not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(taskData[id]), 300));
	});

export const getTasks = () =>
	new Promise((resolve, reject) => {
		if (!taskData) {
			return setTimeout(() => reject(new Error("Tasks not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(taskData), 300));
	});
