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

const initialFValues = {
	taskId: 0,
	des: undefined,
	emId: undefined,
	startDate: undefined,
	endDate: undefined,
	employeeName: undefined,
	WorkingArea: undefined,
	MCPs: [],
	vehicle: undefined,
	route: false,
	status: false,
};

export default function AddTaskForm(props) {
	const { dialogState, setDialogState } = props;
	const handleCloseDialog = () => {
		setDialogState(false);
	};
	const employeeList = [
		{
			id: "CO1124",
			name: "Ali Ahmaa",
			type: "Collector",
			workingStatus: true,
			dob: "14/05/1996",
			address: "142 To Hien Thanh, ward 14, district 10",
			email: "aliahmad@gmail.com",
		},
		{
			id: "CO1125",
			name: "John Wick",
			type: "Janitor",
			workingStatus: true,
			dob: "14/06/1996",
			address: "142 To Hien Thanh, ward 14, district 10",
			email: "johnwick@gmail.com",
		},
	];

	function getOptionList(employee) {
		return {
			name: employee.name,
			id: employee.id,
		};
	}

	const option = employeeList.map(getOptionList);
	const [startDate, setStartDate] = React.useState(startOfToday());
	const [endDate, setEndDate] = React.useState(endOfToday());
	const [values, setValues] = useState({
		...initialFValues,
		startDate: startDate,
		endDate: endDate,
	});

	const handleChangeStartDate = (newValue) => {
		setStartDate(newValue);
		setValues({ startDate: newValue, ...values });
	};

	const handleChangeEndDate = (newValue) => {
		setEndDate(newValue);
		setValues({ endDate: newValue, ...values });
	};

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
						value={values.des}
						onChange={(event, newValue) =>
							setValues({ des: newValue, ...values })
						}
					/>
					<Autocomplete
						clearOnBlur={false}
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						id="emId"
						options={option}
						getOptionLabel={(option) => option.name}
						renderInput={(params) => (
							<TextField {...params} label="Employee" placeholder="employee" />
						)}
						value={values.emId}
						onChange={(event, newValue) =>
							setValues({ emID: newValue, ...values })
						}
					/>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<span style={{ width: 300, marginTop: 8, marginBottom: 8 }}>
							<DateTimePicker
								clearOnBlur={false}
								placeholder="time"
								id="time"
								label="Start Date Time"
								value={startDate}
								onChange={handleChangeStartDate}
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
								value={endDate}
								onChange={handleChangeEndDate}
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
						clearOnBlur={false}
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						disablePortal
						id="WorkingArea"
						options={option}
						getOptionLabel={(option) => option.name}
						renderInput={(params) => (
							<TextField {...params} label="Area" placeholder="area" />
						)}
						value={values.WorkingArea}
						onChange={(event, newValue) =>
							setValues({ WorkingArea: newValue, ...values })
						}
					/>
					<Autocomplete
						clearOnBlur={false}
						style={{ width: 300, marginTop: 8, marginBottom: 8 }}
						id="vehicle"
						options={option}
						getOptionLabel={(option) => option.name}
						renderInput={(params) => (
							<TextField {...params} label="Truck" placeholder="truck" />
						)}
						value={values.vehicle}
						onChange={(event, newValue) =>
							setValues({ vehicle: newValue, ...values })
						}
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
							onClick={handleCloseDialog}
						>
							Send
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
}
