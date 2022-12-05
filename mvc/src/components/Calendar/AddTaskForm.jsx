import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import './AddTaskForm.css'
import Button from '@mui/material/Button';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const initialFValues = {
    taskId: 0,
    des: '',
    emId: '',
    date: '',
    time: '',
    employeeName: '',
    WorkingArea: '',
    MCPs: [],
    vehicle: '',
    route: true,
    status: false
}

export default function AddTaskForm() {

    const idOne = "CO1124";
    const idTwo = "CO1125";


    const employeeList = [
        {
            id: idOne,
            name: "Ali Ahmaa",
            type: "Collector",
            workingStatus: true,
            dob: "14/05/1996",
            address: "142 To Hien Thanh, ward 14, district 10",
            email: "aliahmad@gmail.com",
        },
        {
            id: idTwo,
            name: "John Wick",
            type: "Janitor",
            workingStatus: true,
            dob: "14/06/1996",
            address: "142 To Hien Thanh, ward 14, district 10",
            email: "johnwick@gmail.com",
        },
      ];

    function getOptionList(employee){
        return {
            name: employee.name,
            id: employee.id,
        }
    }

    const option = employeeList.map(getOptionList)
    const [values, setValues] = useState(initialFValues);

    return (
        <Box>
            <h1 style = {{textAlign: "center", fontWeight: "bold"}}> Add new task </h1>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <TextField
                        style={{ width: 300, marginTop: 8, marginBottom: 8}}
                        name="description"
                        label="Task Description"
                        value={values.des}
                        className= "GridStyle"
                    />
                    <Autocomplete
                        style={{ width: 300, marginTop: 8, marginBottom: 8}}
                        disablePortal
                        id="employee"
                        options={option}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label="Employee" />}
                    />
                    <TextField
                        style={{ width: 300, marginTop: 8, marginBottom: 8}}
                        name="time"
                        label="Time"
                        value={values.time}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        style={{ width: 300, marginTop: 8, marginBottom: 8}}
                        disablePortal
                        id="Area"
                        options={option}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label="Area" />}
                    />
                    <Autocomplete
                        margin="normal"
                        multiple
                        id="MCPs"
                        options={option}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.name}
                        renderOption={(props, option, { selected }) => (
                            <li {...props}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.name}
                            </li>
                        )}
                        style={{ width: 300, marginTop: 15, marginBottom: 15}}
                        renderInput={(params) => (
                            <TextField {...params} label="MCPs" placeholder="MCPs" />
                        )}
                    />

                    <Autocomplete
                        style={{ width: 300, marginTop: 8, marginBottom: 8}}
                        disablePortal
                        id="Truck"
                        options={option}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label="Truck" />}
                    />
                    
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'  }}>
                        <Button variant="outlined">Modify Route</Button>
                        <Button variant="contained">Submit</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}
