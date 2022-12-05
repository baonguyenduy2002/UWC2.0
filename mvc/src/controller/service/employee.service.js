import { employeeData } from "../data/employee";

let employeeData_temp;
let id = "CO1125";

//-----------------------------------------Get one Employee--------------------------
export const getEmployee = (id) =>
	new Promise((resolve, reject) => {
		const employee = employeeData_temp[id];

		if (!employee) {
			return setTimeout(() => reject(new Error("Task data not found!")), 300);
		}

		setTimeout(() => resolve(Object.values(employeeData_temp[id]), 300));
	});

//-----------------------------------------Get all Employees--------------------------
export const getEmployees = () =>
	new Promise((resolve, reject) => {
		if (!employeeData && !employeeData_temp) {
			return setTimeout(() => reject(new Error("Tasks not found!")), 300);
		}

		setTimeout(() => {
			if (!employeeData_temp) {
				employeeData_temp = employeeData;
				resolve(Object.values(employeeData_temp));
			} else {
				resolve(Object.values(employeeData_temp));
			}
		}, 300);
	});

//-----------------------------------------Create new Employee--------------------------
export const createEmployee = (data) =>
	new Promise((resolve, reject) => {
		if (!data.emId || !data.des) {
			reject(new Error("Not enough information!"));
		}
		const words = id.split("O");
		const number = parseInt(words[1]) + 1;
		id = words[0] + number.toString();

		const newEmployee = {
			id,
			...data,
		};

		employeeData_temp = { ...employeeData_temp, [id]: newEmployee };

		setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Delete one Employee--------------------------
export const removeEmployee = (id) =>
	new Promise((resolve, reject) => {
		const { [id]: employee, ...rest } = employeeData_temp;

		if (!employee) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}

		employeeData_temp = { ...rest };

		return setTimeout(() => resolve(true), 300);
	});

//-----------------------------------------Update one Employee--------------------------
export const updateEmployee = (id, data) =>
	new Promise((resolve, reject) => {
		if (!employeeData_temp[id]) {
			return setTimeout(() => reject(new Error("Task not found!")), 300);
		}
		employeeData_temp[id] = { id, ...data };

		return setTimeout(() => resolve(true), 300);
	});

const taskService = {
	getEmployee,
	getEmployees,
	createEmployee,
	removeEmployee,
	updateEmployee,
};
export default taskService;
