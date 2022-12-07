import React from "react";
import "./Dashboard.css";
import Avatar from "@mui/material/Avatar";
import dashboard_image from "../../assets/image/dashboard_image.svg";
import MCPTagMini from "../Facility/MCPTagMini/index";
import Mapbox from "../Calendar/Map";
import MiniCalendar from "../Calendar/MiniCalendar";

const mcps = [
	{
		name: "MCP 1",
		status: 95,
		area: "Area 1",
		location: "",
	},
	{
		name: "MCP 2",
		status: 90,
		area: "Area 1",
		location: "",
	},
	{
		name: "MCP 3",
		status: 60,
		area: "Area 2",
		location: "",
	},
];

const employees = [
	{
		name: "Ali Ahmad",
		type: "Nhân viên thu gom",
		url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Maria Memon",
		type: "Nhân viên dọn vệ sinh",
		url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "John",
		type: "Nhân viên thu gom",
		url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];
export default function Dashboard() {
	return (
		<div className="MainFrame">
			<h1 className="DashboardTitle">UWC 2.0 Dashboard</h1>
			<div className="TaskHeader">
				<h1 className="TaskTitle">Công việc hôm nay</h1>
				<h2 className="TaskSubTitle">
					Kiểm tra công việc và lịch làm của nhân viên
				</h2>
				<a className="TaskButton" href="#" alt="Move to task page">
					Lịch của hôm nay
				</a>
			</div>
			<img className="DashboardGraph" src={dashboard_image} alt="MVC 2.0" />
			<div className="MCPsHeader">3 MCPs đầy nhất</div>
			<div className="MCPsFrame">
				{mcps.map((MCPsTag, idx) => (
					<MCPTagMini obj={MCPsTag} />
				))}
			</div>
			<div className="MapEmployeeFrame">
				<div className="DashboardMiniMap">
					<h1>Bản đồ</h1>
					<Mapbox type="dashboard" />
				</div>
				<div className="DashboardEmployeePreview">
					<h1>Nhân viên</h1>
					{employees.map((employee, idx) => (
						<div className="Employee-list">
							<Avatar
								alt={employee.name}
								src={employee.url}
								sx={{ width: 50, height: 50 }}
							/>
							<p id="name">
								<b>{employee.name}</b>
							</p>
							<p id="type">{employee.type}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function MCPsTag(input) {
	return (
		<div key={input.name} className="MCPsTag">
			test
		</div>
	);
}
