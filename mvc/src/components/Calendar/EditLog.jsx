import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EditTaskForm from "./EditTaskForm";

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

export default function EditDialogs(props) {
	const { openEditPopup, setEditPopup, task, doHandleUpdate } = props;

	const makeUpdate = async (data) => {
		try {
			await doHandleUpdate(data);
		} catch (error) {
			console.log(error);
		}
	};
	const handleClose = () => {
		setEditPopup(false);
	};

	return (
		<BootstrapDialog
			PaperProps={{
				style: { borderRadius: 20 },
			}}
			maxWidth="lg"
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={openEditPopup}
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Edit Employee
			</BootstrapDialogTitle>
			<span style={{ marginLeft: 100, paddingBottom: 25 }}>
				<EditTaskForm
					doHandleUpdate={makeUpdate}
					dialogState={openEditPopup}
					setDialogState={setEditPopup}
					task={task}
				/>
			</span>
		</BootstrapDialog>
	);
}
