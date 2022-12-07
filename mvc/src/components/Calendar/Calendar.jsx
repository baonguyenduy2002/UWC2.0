import React from "react";
import { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon, PlusIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isEqual,
	isSameDay,
	isToday,
	parse,
	parseISO,
	startOfToday,
} from "date-fns";
import vi from "date-fns/locale/vi";
import AddDialogs from "./Dialog";
import EditDialogs from "./EditLog";
import "./Calendar.css";
import api from "../../controller/api/route";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const TaskCalendar = () => {
	//--------------------------------useState----------------------
	// For API:
	const [taskList, setTaskList] = useState({});
	const [isTaskChosen, setisTaskChosen] = useState(false);
	const [taskChosen, setTaskChosen] = useState([]);

	// For UI render
	const today = startOfToday();
	const [selectedDay, setSelectedDay] = useState(today);
	const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
	const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
	const [openAddPopup, setOpenAddPopup] = useState(false);

	const handleOpenAddPopup = () => {
		setOpenAddPopup(true);
	};

	//--------------Calendar-------------
	const days = eachDayOfInterval({
		start: firstDayCurrentMonth,
		end: endOfMonth(firstDayCurrentMonth),
	});

	function previousMonth() {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
	}

	function nextMonth() {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
	}

	const selectedDayMeetings = Object.values(taskList).filter((task) =>
		isSameDay(parseISO(task.startDatetime), selectedDay)
	);
	//-------------------------Handler------------------------------
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

	const handleCreate = async (data) => {
		try {
			api.taskController.createTask(data);
			api.taskController.getTasks().then((res) => {
				setTaskList(res);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleEdit = async (id, data) => {
		try {
			await api.taskController.updateTask(id, data);
			await api.taskController.getTasks().then((res) => {
				setTaskList(res);
			});
		} catch (error) {
			console.log(error);
		}
	};
	//----------------------useEffect here--------------------------
	useEffect(() => {
		api.taskController.getTasks().then((res) => {
			setTaskList(res);
		});
	}, []);

	//----------------------Rende UI--------------------------------
	return (
		<div className="CalendarPage">
			<div className="CalendarScheduleFrame">
				<div className="CalendarScheduleGrid">
					<div className="CalendarFrame">
						<div className="CalendarHeader">
							<h2 className="CalendarHeaderTitle">
								{format(firstDayCurrentMonth, "MMMM yyyy", { locale: vi })}
							</h2>
							<button
								type="button"
								onClick={previousMonth}
								className="CalendarHeaderPreviousButton"
							>
								<ChevronLeftIcon className="ButtonIcon" aria-hidden="true" />
							</button>
							<button
								onClick={nextMonth}
								type="button"
								className="CalendarHeaderNextButton"
							>
								<ChevronRightIcon className="ButtonIcon" aria-hidden="true" />
							</button>
						</div>
						<div className="CalendarDay">
							<div className="CalendarDayProperties">CN</div>
							<div className="CalendarDayProperties">T2</div>
							<div className="CalendarDayProperties">T3</div>
							<div className="CalendarDayProperties">T4</div>
							<div className="CalendarDayProperties">T5</div>
							<div className="CalendarDayProperties">T6</div>
							<div className="CalendarDayProperties">T7</div>
						</div>
						<div className="Calendar">
							{days.map((day, dayIdx) => (
								<div
									key={day.toString()}
									className={classNames(
										dayIdx === 0 && colStartClasses[getDay(day)],
										"Col"
									)}
								>
									<button
										type="button"
										onClick={() => setSelectedDay(day)}
										className={classNames(
											isEqual(day, selectedDay) &&
												!isToday(day) &&
												"ChosenNotToday",
											isEqual(day, selectedDay) &&
												isToday(day) &&
												"ChosenToday",
											!isEqual(day, selectedDay) &&
												!isToday(day) &&
												"NotChosenNotToday",
											!isEqual(day, selectedDay) &&
												isToday(day) &&
												"NotChosenToday"
										)}
									>
										<time
											className="DayFormat"
											dateTime={format(day, "yyyy-MM-dd")}
										>
											{format(day, "d")}
										</time>
									</button>

									<div className="MeetingIndicatorField">
										{Object.values(taskList).some((task) =>
											isSameDay(parseISO(task.startDatetime), day)
										) && <div className="MeetingIndicator"></div>}
									</div>
								</div>
							))}
						</div>
					</div>
					<section className="ScheduleFrame">
						<div className="ScheduleHeaderField">
							<h2 className="ScheduleHeader">
								Danh sách công việc của{" "}
								<time
									dateTime={format(selectedDay, "yyyy-MM-dd", { locale: vi })}
								>
									{format(selectedDay, "MMM dd, yyy", { locale: vi })}
								</time>
							</h2>
							<button
								type="button"
								className="AddTaskButton"
								onClick={handleOpenAddPopup}
							>
								<PlusIcon className="ButtonIcon" aria-hidden="true" />
							</button>
						</div>
						<ol className="TaskList">
							{selectedDayMeetings.length > 0 ? (
								selectedDayMeetings.map((task) => (
									<Meeting
										task={task}
										key={task.id}
										handleRemove={handleRemove}
										handleEdit={handleEdit}
									/>
								))
							) : (
								<p>Hôm nay chưa giao công việc</p>
							)}
						</ol>
					</section>
				</div>
			</div>
			<AddDialogs
				openAddPopup={openAddPopup}
				setOpenAddPopup={setOpenAddPopup}
				handleCreate={handleCreate}
			/>
		</div>
	);
};

const Meeting = (props) => {
	const [openEditPopup, setEditPopup] = useState(false);
	const startDateTime = parseISO(props.task.startDatetime);
	const endDateTime = parseISO(props.task.endDatetime);

	const doHandleRemove = () => props.handleRemove(props.task.id);
	const doHandleUpdate = (data) => props.handleEdit(props.task.id, data);
	const doOpenEditPopup = () => {
		setEditPopup(true);
	};

	return (
		<li className="Task">
			<div className="EmployeeInfoField">
				<img src={props.task.imageUrl} alt="" className="EmployeeAvatar" />
				<p className="EmployeeName">{props.task.collector}</p>
			</div>
			<div className="TaskTag">
				<h2 className="TaskInformation">{props.task.des}</h2>
				<p className="TaskInformation">
					Lộ trình: {props.task.route ? "Đã tạo" : "Không"}
				</p>
				<p className="TaskInformation">Phương tiện: {props.task.vehicle}</p>
				<p className="TaskInformation">
					<time dateTime={props.task.startDatetime}>
						{format(startDateTime, "h:mm a")}
					</time>{" "}
					-{" "}
					<time dateTime={props.task.endDatetime}>
						{format(endDateTime, "h:mm a")}
					</time>
				</p>
			</div>
			<Menu as="div" className="Menu">
				<div>
					<Menu.Button className="MenuButton">
						<DotsVerticalIcon className="ButtonIcon" aria-hidden="true" />
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter="TransitionEnter"
					enterFrom="TransitionEnterFrom"
					enterTo="TransitionEnterTo"
					leave="TransitionLeave"
					leaveFrom="TransitionLeaveFrom"
					leaveTo="TransitionLeaveTo"
				>
					<Menu.Items className="MenuField">
						<div className="MenuBox">
							<Menu.Item>
								{({ active }) => (
									<button
										className={active ? "MenuItemActive" : "MenuItem"}
										onClick={doOpenEditPopup}
										task={props.task}
									>
										Edit
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										type="button"
										className={active ? "MenuItemActive" : "MenuItem"}
										onClick={doHandleRemove}
									>
										Remove
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
			<EditDialogs
				doHandleUpdate={doHandleUpdate}
				openEditPopup={openEditPopup}
				setEditPopup={setEditPopup}
				task={props.task}
			/>
		</li>
	);
};

const colStartClasses = [
	"ColStart1",
	"ColStart2",
	"ColStart3",
	"ColStart4",
	"ColStart5",
	"ColStart6",
	"ColStart7",
];

export default TaskCalendar;
