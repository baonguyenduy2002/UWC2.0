import React from "react";
import EmployeeCard from "../../../../components/EmployeeCard/index";
import AddEmployeeButton from "../../../../components/AddEmployeeButton/index";
import SearchBar from "../../../../components/SearchBar/index";
import { iconsEmployee } from "../../../../assets/index";

import "./ManageEmployee.css"

// const idOne = "CO1124";
// const idTwo = "CO1125";

// const employeeData = {
//   [idOne] : {
//     id: idOne,
//     name: "Ali Ahmaa",
//     type: "Collector",
//     workingStatus: true,
//     dob: "14/05/1996",
//     address: "142 To Hien Thanh, ward 14, district 10",
//     email: "aliahmad@gmail.com",
//   },
//   [idTwo] : {
//     id: idTwo,
//     name: "John Wick",
//     type: "Janitor",
//     workingStatus: true,
//     dob: "14/06/1996",
//     address: "142 To Hien Thanh, ward 14, district 10",
//     email: "johnwick@gmail.com",
//   },
// };

function ManageEmployee() {
	return (
		<div className="ManageEmployeeContainer">
      <h1 className="TitlePage">Employee</h1>
      <div className="AddEmployeeButton">
        <AddEmployeeButton item={iconsEmployee[0]} />
      </div>
      <div className="SearchBar-Employee">
        <SearchBar />
      </div>
			<div className="EmployeeList">
        <div style={{ width:"fit-content", height: "fit-content"}}>
          <EmployeeCard
            id="CO1124"
            name="John Wick"
            type="Collector"
            workingStatus= {true}
            dob="14/06/1996"
            address="142 To Hien Thanh, ward 14, district 10"
            email="johnwick@gmail.com"
            url="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
			</div>
		</div>
	);
}

export default ManageEmployee;
