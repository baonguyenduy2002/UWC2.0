import React from "react";
import EmployeeCard from "../EmployeeCard/index";
import AddEmployeeButton from "../AddEmployeeButton/index";
import SearchBar from "../../SearchBar/index";
import { iconsEmployee } from "../../../assets/index";
import PersonalInfo from "../PersonalInfo/index";
import AddEmployeeForm from "../AddEmployeeForm/index";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import "./ManageEmployee.css"

function ManageEmployeeMainScreen() {
  const [openInfoDialog, setOpenInfoDialog] = React.useState(false);
  const [openAddEmployee, setOpenAddEmployee] = React.useState(false);
  // const [chosenEmployee, setChosenEmployee] = React.useState("");

  function handleInfoDialogOpen(value) {
    setOpenInfoDialog(true);
    // setChosenEmployee(value);
  };

  function handleAddEmployeeOpen() {
    setOpenAddEmployee(true);
  };


  const Employees = [
    {
      id:"CO1124",
      name: "John Wick",
      type: "Collector",
      workingStatus: true,
      dob: "14/06/1996",
      address: "142 To Hien Thanh, ward 14, district 10",
      email: "johnwick@gmail.com",
      url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id:"CO1225",
      name: "John",
      type: "Collector",
      workingStatus: true,
      dob: "14/06/1996",
      address: "142 To Hien Thanh, ward 14, district 10",
      email: "johnwick@gmail.com",
      url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

	return (
		<div className="ManageEmployeeContainer">
      <h1 className="TitlePage">Employee</h1>
      {/* -------------Add Button---------------- */}
      <div 
        className="AddEmployeeButton"
        onClick={handleAddEmployeeOpen}  
      >
        <AddEmployeeButton item={iconsEmployee[0]} />
      </div>
      
      {/* -------------Search Bar---------------- */}
      <div className="SearchBar-Employee">
        <SearchBar />
      </div>
      {/* --------------Employee List------------ */}
			<div className="EmployeeList">
        {Employees.map((employee, idx) => (
          <div style={{ width:"fit-content", height: "fit-content"}} key={idx}>
            <button onClick={handleInfoDialogOpen} style={{border: "none"}}>
              {EmployeeCard(employee)}
            </button>
            <PersonalInfo 
              openInfoDialog = {openInfoDialog}
              setOpenInfoDialog = {setOpenInfoDialog}
              obj={employee}
            />
          </div>
        ))}
			</div>
      <AddEmployeeForm openAddEmployee={openAddEmployee} setOpenAddEmployee={setOpenAddEmployee} />
		</div>
	);
}

export default ManageEmployeeMainScreen;
