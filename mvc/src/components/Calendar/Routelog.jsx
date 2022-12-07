import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Mapbox from "./Map";

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

export default function RouteDialogs(props) {
	const { openRoutePopup, setOpenRoutePopup } = props;

	const handleClose = () => {
		setOpenRoutePopup(false);
	};

	return (
		<BootstrapDialog
			PaperProps={{
				style: { borderRadius: 20 },
			}}
			maxWidth="lg"
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={openRoutePopup}
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Tạo đường đi
			</BootstrapDialogTitle>
			<span>
				<Mapbox type="task" />
			</span>
		</BootstrapDialog>
	);
}
