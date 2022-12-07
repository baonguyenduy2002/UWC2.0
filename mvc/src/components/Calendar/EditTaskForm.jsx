import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import "./AddTaskForm.css";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { startOfToday, endOfToday } from "date-fns";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";

export default function EditTaskForm(props) {
	const { dialogState, setDialogState, task, doHandleUpdate } = props;
	const [des, setdes] = useState(task.des);
	const [emId, setemId] = useState(task.emId);
	const [name, setname] = useState(task.name);
	const [startDatetime, setstartDatetime] = useState(task.startDatetime);
	const [endDatetime, setendDatetime] = useState(task.endDatetime);
	const [area, setarea] = useState(task.area);
	const [vehicle, setvehicle] = useState(task.vehicle);
	const handleCloseDialog = () => {
		setDialogState(false);
	};

	let initialFValues = task;

	const employeeList = [
		{
			id: "CO1124",
			name: "Ali Ahmaa",
			type: "Collector",
			workingStatus: true,
			dob: "14/05/1996",
		},
		{
			id: "CO1125",
			name: "John Wick",
			type: "Janitor",
			workingStatus: true,
			dob: "14/06/1996",
		},
		{
			id: "CO1126",
			name: "Michael Foster",
			type: "Collector",
			workingStatus: true,
			dob: "14/7/1999",
		},
	];

	const MCPList = [
		{
			id: 1,
			name: "MCP1",
		},
		{
			id: 2,
			name: "MCP2",
		},
		{
			id: 3,
			name: "MCP3",
		},
		{
			id: 4,
			name: "MCP4",
		},
		{
			id: 5,
			name: "MCP5",
		},
		{
			id: 6,
			name: "MCP6",
		},
		{
			id: 7,
			name: "MCP7",
		},
		{
			id: 8,
			name: "MCP8",
		},
		{
			id: 9,
			name: "MCP9",
		},
	];

	const VehicleList = [
		{
			id: 1,
			name: "CH01",
		},
		{
			id: 2,
			name: "CH02",
		},
		{
			id: 3,
			name: "CH03",
		},
		{
			id: 4,
			name: "CH04",
		},
		{
			id: 5,
			name: "CH05",
		},
	];

	const AreaList = [
		{
			id: 1,
			name: "Area 1",
		},
		{
			id: 2,
			name: "Area 2",
		},
		{
			id: 3,
			name: "Area 3",
		},
		{
			id: 4,
			name: "Area 4",
		},
		{
			id: 5,
			name: "Area 5",
		},
	];

	function getOptionList(employee) {
		return {
			name: employee.name,
			id: employee.id,
		};
	}

	//------------------------useState--------------------
	const optionEm = employeeList.map(getOptionList);
	const optionMCP = MCPList.map(getOptionList);
	const optionVehicle = VehicleList.map(getOptionList);
	const optionArea = AreaList.map(getOptionList);
	const [startDate, setStartDate] = useState(startOfToday());
	const [endDate, setEndDate] = useState(endOfToday());

	//--------------------Haddler-------------------
	const handleChangeStartDate = (newValue) => {
		setStartDate(newValue);
	};

	const handleChangeEndDate = (newValue) => {
		setEndDate(newValue);
	};

	const doUpdate = async () => {
		try {
			const data = {
				imageUrl: initialFValues.imageUrl,
				des: initialFValues.des,
				emId: initialFValues.emId,
				collector: initialFValues.collector,
				startDatetime: initialFValues.startDatetime,
				endDatetime: initialFValues.endDatetime,
				workingArea: initialFValues.workingArea,
				mcps: initialFValues.mcps,
				vehicle: initialFValues.vehicle,
				route: initialFValues.route,
				status: initialFValues.status,
			};
			console.log("testing:", data);
			await doHandleUpdate(data);
		} catch (error) {
			console.log(error);
		}
	};

	const [checkedMCP, setCheckedMCPs] = useState([]);

	const handleCheck = (id) => {
		setCheckedMCPs((prev) => {
			const isCheckedMCP = checkedMCP.includes(id);
			if (isCheckedMCP) {
				return checkedMCP.filter((item) => item !== id);
			} else {
				return [...prev, id];
			}
		});
	};

	return (
		<Box className="">
			<Grid
				container
				spacing={4}
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={4}>
					<TextField
						placeholder="description"
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						id="des"
						label="Task Description"
						value={des}
						onChange={(event, newValue) => {
							setdes(event.target.value);
							initialFValues.des = event.target.value;
						}}
					/>
					<Autocomplete
						freeSolo={true}
						isOptionEqualToValue={(option, value) => option.id === value.id}
						clearOnBlur={false}
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						id="emId"
						options={optionEm}
						getOptionLabel={(option) => option.name}
						renderInput={(params) => (
							<TextField {...params} label="Employee" placeholder="employee" />
						)}
						value={emId}
						onChange={(event, newValue) => {
							setemId(event.target.value.id);
							setname(event.target.value.name);
							initialFValues.emId = event.target.value.id;
							initialFValues.collector = event.target.value.name;
						}}
					/>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<span style={{ width: 300, marginTop: 8, marginBottom: 8 }}>
							<DateTimePicker
								clearOnBlur={false}
								placeholder="time"
								id="time"
								label="Start Date Time"
								value={startDatetime}
								onChange={(newValue) => {
									handleChangeStartDate(newValue);
									setstartDatetime(format(newValue, "yyyy-MM-dd'T'HH:mm"));
									initialFValues.startDatetime = newValue;
								}}
								renderInput={(params) => (
									<TextField
										{...params}
										sx={{ width: 300, marginTop: 1, marginBottom: 1 }}
									/>
								)}
							/>
						</span>
						<span style={{ width: 300, marginTop: 8, marginBottom: 8 }}>
							<DateTimePicker
								clearOnBlur={false}
								placeholder="time"
								id="time"
								label="End Date Time"
								value={endDatetime}
								onChange={(newValue) => {
									handleChangeEndDate(newValue);
									setendDatetime(format(newValue, "yyyy-MM-dd'T'HH:mm"));
									initialFValues.endDatetime = newValue;
								}}
								renderInput={(params) => (
									<TextField
										{...params}
										sx={{ width: 300, marginTop: 1, marginBottom: 1 }}
									/>
								)}
							/>
						</span>
					</LocalizationProvider>
					<Autocomplete
						freeSolo={true}
						clearOnBlur={false}
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						disablePortal
						id="WorkingArea"
						options={optionArea}
						getOptionLabel={(option) => option.name}
						isOptionEqualToValue={(option, value) => option.id === value.id}
						renderInput={(params) => (
							<TextField {...params} label="Area" placeholder="area" />
						)}
						value={area}
						onChange={(event, newValue) => {
							setarea(event.target.value);
							initialFValues.workingArea = event.target.value;
						}}
					/>
					<Autocomplete
						freeSolo={true}
						clearOnBlur={false}
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						id="vehicle"
						options={optionVehicle}
						getOptionLabel={(option) => option.name}
						isOptionEqualToValue={(option, value) => option.id === value.id}
						renderInput={(params) => (
							<TextField {...params} label="Truck" placeholder="truck" />
						)}
						value={vehicle}
						onChange={(event, newValue) => {
							setvehicle(event.target.value.name);
							initialFValues.vehicle = event.target.value.name;
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<div className="MCPS box">
						<List
							className="ListFrame"
							component="nav"
							aria-label="mailbox folders"
						>
							<h1 style={{ color: "#315C57" }}>Choose MCPs</h1>
							{MCPList.map((MCP, idx) => (
								<ListItem
									button
									divider
									key={idx}
									className="CheckButton"
									onClick={() => handleCheck(MCP.id)}
								>
									<input
										className="CheckBox"
										type="checkbox"
										checked={checkedMCP.includes(MCP.id)}
										onChange={() => handleCheck(MCP.id)}
									/>
									{MCP.name}
								</ListItem>
							))}
						</List>
					</div>
					<Stack
						direction="row"
						spacing={2}
						style={{ marginTop: 20, marginLeft: 10 }}
					>
						<Button variant="outlined" startIcon={<AddLocationAltIcon />}>
							Create Route
						</Button>
						<Button
							variant="contained"
							endIcon={<SendIcon />}
							onClick={() => {
								doUpdate(initialFValues);
								handleCloseDialog();
							}}
						>
							Send
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
