import React from "react";
import EmployeeCard from "../../../../components/EmployeeCard/index";

import "./ManageEmployee.css"

const idOne = "CO1124";
const idTwo = "CO1125";

const employeeData = {
  [idOne] : {
    id: idOne,
    name: "Ali Ahmaa",
    type: "Collector",
    workingStatus: true,
    dob: "14/05/1996",
    address: "142 To Hien Thanh, ward 14, district 10",
    email: "aliahmad@gmail.com",
  },
  [idTwo] : {
    id: idTwo,
    name: "John Wick",
    type: "Janitor",
    workingStatus: true,
    dob: "14/06/1996",
    address: "142 To Hien Thanh, ward 14, district 10",
    email: "johnwick@gmail.com",
  },
};

function ManageEmployee() {
	return (
		<div className="ManageEmployeeContainer">
			<div className="EmployeeList">
				<EmployeeCard
					id={idTwo}
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
	);
}

export default ManageEmployee;
