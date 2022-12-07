import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./AddEmployeeForm.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

function BootstrapDialogTitle(props) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};
// ------------------Component for form-------------------
const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, onChange, id, errorMessage, ...inputProps } = props;
	const handleFocus = (e) => {
		setFocused(true);
	};
	return (
		<div className="FormInput-Employee">
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() =>
					inputProps.name === "confirmPassword" && setFocused(true)
				}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};
// --------------------------------------------------------
function AddEmployeeForm(props) {
	const { openAddEmployee, setOpenAddEmployee } = props;

	const inputs = [
		{
			id: 1,
			name: "fullname",
			type: "text",
			placeholder: "Họ và Tên",
			errorMessage: "Tên không hợp lệ. Vui lòng nhập lại!",
			label: "Họ và Tên:",
			pattern: "^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$",
			required: true,
		},
		{
			id: 2,
			name: "type",
			type: "text",
			label: "Chức vụ:",
			required: true,
		},
		{
			id: 3,
			name: "id",
			type: "text",
			label: "Mã Nhân Viên:",
			required: true,
		},
		{
			id: 4,
			name: "dob",
			type: "text",
			placeholder: "dd/mm/yyyy",
			label: "Ngày sinh:",
			required: true,
		},
		{
			id: 5,
			name: "address",
			type: "text",
			label: "Địa chỉ:",
			required: true,
		},
		{
			id: 6,
			name: "email",
			type: "email",
			label: "Email: ",
			errorMessage: "Email không hợp lệ!",
			placeholder: "@gmail.com",
			required: true,
		},
	];

	const [values, setValues] = useState({
		fullname: "",
		type: "",
		id: "",
		dob: "",
		address: "",
		email: "",
	});
	const handleClose = () => {
		setOpenAddEmployee(false);
	};
	// function for form----------------------------
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	// ---------------------------
	return (
		<BootstrapDialog
			PaperProps={{
				style: { borderRadius: 20 },
			}}
			maxWidth="false"
			onClose={handleClose}
			aria-labelledby="hhi"
			open={openAddEmployee}
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Thêm nhân viên
			</BootstrapDialogTitle>
			<div className="AddEmployee-Container">
				<form onSubmit={handleSubmit}>
					<h1>Thêm nhân viên</h1>
					{inputs.map((input) => (
						<FormInput
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
					<button>Xác nhận</button>
				</form>
			</div>
		</BootstrapDialog>
	);
}
export default AddEmployeeForm;
