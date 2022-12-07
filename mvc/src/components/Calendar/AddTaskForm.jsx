import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import './AddTaskForm.css'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { startOfToday, endOfToday } from 'date-fns'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { matchPath } from 'react-router-dom';
import Mapbox from './Map';
import AddDialogs from './Dialog';
import EditLocationIcon from '@mui/icons-material/EditLocation';

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
    status: false
}

export default function AddTaskForm(props) {
    const { dialogState, setDialogState, type, initialValue } = props
    const handleCloseDialog = () => {
        console.log(values)
        setDialogState(false);
    };
    const [openAddPopup, setOpenAddPopup] = React.useState(false);
    const handleOpenAddPopup = () => {
        setOpenAddPopup(true);
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
    const [startDate, setStartDate] = React.useState(startOfToday());
    const [endDate, setEndDate] = React.useState(endOfToday());
    const [values, setValues] = useState({ ...initialFValues, startDate: startDate, endDate: endDate });


    const handleChangeStartDate = (newValue) => {
        setStartDate(newValue);
        setValues({ startDate: newValue, ...values });
    };

    const handleChangeEndDate = (newValue) => {
        setEndDate(newValue);
        setValues({ endDate: newValue, ...values });
    };

    const areaList = ['Area1', 'Area2', 'Area3', 'Area4', 'Area5']
    const truckList = ['Truck1', 'Truck2', 'Truck3', 'Truck4', 'Truck5']
    const mcpList = [
        {
            id: 1,
            name: 'MCP1',
            area: 'Area1'
        },
        {
            id: 2,
            name: 'MCP2',
            area: 'Area2'
        },
        {
            id: 3,
            name: 'MCP3',
            area: 'Area4'
        },
        {
            id: 4,
            name: 'MCP4',
            area: "Area2"
        },
        {
            id: 5,
            name: 'MCP5',
            area: 'Area5'
        },
        {
            id: 6,
            name: 'MCP6',
            area: 'Area3'
        },
        {
            id: 7,
            name: 'MCP7',
            area: 'Area1'
        },
        {
            id: 8,
            name: 'MCP8',
            area: 'Area3'
        },
        {
            id: 9,
            name: 'MCP9',
            area: 'Area4'
        }
    ]


    const [checkedMCP, setCheckedMCPs] = useState([])

    const handleCheck = (id) => {
        setCheckedMCPs(prev => {
            const isCheckedMCP = checkedMCP.includes(id)
            if (isCheckedMCP) {
                setValues({ MCPs: checkedMCP.filter(item => item !== id), ...values })
                return checkedMCP.filter(item => item !== id)
            }
            else {
                setValues({ MCPs: [...prev, id], ...values })
                return [...prev, id]
            }
        })
    }

    return (
        <Box className=''>
            <Grid container
                spacing={4}
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={4}>
                    <TextField
                        placeholder='description'
                        style={{ width: 300, marginTop: 8, marginBottom: 8 }}
                        id="des"
                        label="Task Description"
                        value={values.des}
                        onChange={(event, newValue) => setValues({ des: newValue, ...values })}
                    />
                    <Autocomplete
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        clearOnBlur={false}
                        style={{ width: 300, marginTop: 8, marginBottom: 8 }}
                        id="emId"
                        options={employeeList}
                        getOptionLabel={(employeeList) => employeeList.name}
                        renderInput={(params) => <TextField {...params} label="Employee" placeholder='employee' />}
                        value={values.emId}
                        onChange={(event, newValue) => setValues({ emId: newValue.id, employeeName: newValue.name, ...values })}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <span style={{ width: 300, marginTop: 8, marginBottom: 8 }}>
                            <DateTimePicker
                                clearOnBlur={false}
                                placeholder='time'
                                id="time"
                                label="Start Date Time"
                                value={startDate}
                                onChange={handleChangeStartDate}
                                renderInput={(params) => <TextField {...params} sx={{ width: 300, marginTop: 1, marginBottom: 1 }} />}
                            />
                        </span>
                        <span style={{ width: 300, marginTop: 8, marginBottom: 8 }}>
                            <DateTimePicker
                                clearOnBlur={false}
                                placeholder='time'
                                id="time"
                                label="End Date Time"
                                value={endDate}
                                onChange={handleChangeEndDate}
                                renderInput={(params) => <TextField {...params} sx={{ width: 300, marginTop: 1, marginBottom: 1 }} />}
                            />
                        </span>
                    </LocalizationProvider>
                    <Autocomplete
                        clearOnBlur={false}
                        style={{ width: 300, marginTop: 8, marginBottom: 8 }}
                        disablePortal
                        id="WorkingArea"
                        options={areaList}
                        renderInput={(params) => <TextField {...params} label="Area" placeholder='area' />}
                        value={values.WorkingArea}
                        onChange={(event, newValue) => setValues({ WorkingArea: newValue, ...values })}
                    />
                    <Autocomplete
                        isOptionEqualToValue={(option, value) => option === value}
                        clearOnBlur={false}
                        style={{ width: 300, marginTop: 8, marginBottom: 8 }}
                        id="vehicle"
                        options={truckList}
                        renderInput={(params) => <TextField {...params} label="Truck" placeholder='truck' />}
                        value={values.vehicle}
                        onChange={(event, newValue) => setValues({ ...values, vehicle: newValue })}
                    />
                </Grid>
                <Grid item xs={6} >
                    <div className="MCPS box">
                        <List className='ListFrame' component="nav" aria-label="mailbox folders" >
                            <h1 style={{ color: "#315C57" }}>Choose MCPs</h1>
                            {
                                mcpList.map((mcp, idx) => (
                                    <ListItem button divider key={idx}
                                        className="CheckButton"
                                        onClick={() => handleCheck(mcp.id)}
                                    >
                                        <input
                                            className="CheckBox"
                                            type="checkbox"
                                            checked={checkedMCP.includes(mcp.id)}
                                            onChange={() => handleCheck(mcp.id)}
                                        />
                                        {mcp.name}
                                    </ListItem>

                                ))
                            }
                        </List>
                    </div>
                    <Stack direction="row" spacing={2}
                        style={{ marginTop: 20, marginLeft: 10 }}>
                        <Button 
                            variant="outlined" 
                            startIcon={(type === 'add' && <AddLocationAltIcon/>) || <EditLocationIcon/> } 
                            onClick = {handleOpenAddPopup}
                        >
                            {(type === 'add' && "Tạo lộ trình") || "Sửa lộ trình"}
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleCloseDialog}>
                            Xác nhận
                        </Button>
                        <AddDialogs 
                            title = {(type === 'add' && "Tạo lộ trình") || "Sửa lộ trình"} 
                            openAddPopup= {openAddPopup} 
                            setOpenAddPopup = {setOpenAddPopup}
                        >  
                            <Mapbox type = "task"/>
                        </AddDialogs>
                    </Stack>

                </Grid>
            </Grid>

        </Box>
    )
}
