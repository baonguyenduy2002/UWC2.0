import * as React from "react";
import PropTypes from 'prop-types';
import RemoveEmployeeButton from "../RemoveEmployee/index";
import { iconsEmployee } from "../../../assets/index";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';

import "./PersonalInfo.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
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
              position: 'absolute',
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
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function PersonalInfo(props) {
    const { openInfoDialog, setOpenInfoDialog } = props;
    const {id, name, type, workingStatus, dob, address, email, url} = props.obj;
    
    const handleClose = () => {
        setOpenInfoDialog(false);
      };
    return (
        <BootstrapDialog
            PaperProps={{
                style: { borderRadius: 20 }
            }}
            maxWidth="false"
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openInfoDialog}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Personal Information
            </BootstrapDialogTitle>
            <div className="PersonalInfoContainer">
                <div className="Part1">
                    <div className="PersonalImage">
                        <Avatar src={url} alt="PersonalImage" sx={{ width: 230, height: 230 }} />
                    </div>
                    <div className="Info-1">
                        <h1 style={{
                                margin: 0,
                                fontSize: '40px',
                                width: 'fit-content',
                            }}
                        >
                            {name}
                        </h1>
                        <p id="StaffID"><b>ID: </b>{id}</p>
                        <p id="StaffType"><b>Chức vụ: </b>{type}</p>
                        <p id="StaffStatus"><b>Tình trạng: </b>{workingStatus? 'Đang làm việc':'Tạm nghĩ'}</p>
                    </div>
                    <div className="RemoveEmployee-Button">
                        <RemoveEmployeeButton item={iconsEmployee[1]} />
                    </div>
                </div>
                <div className="Part2">
                    <div><b>Date of Birth:&nbsp;</b>{dob}</div>
                    <div><b>Address:&nbsp;</b>{address}</div>
                    <div><b>Email:&nbsp;</b>{email}</div>
                </div>
                <div className="Part3">

                </div>
            </div>
        </BootstrapDialog>
  );
}
export default PersonalInfo;
