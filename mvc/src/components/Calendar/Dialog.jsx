import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

export default function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props

    return {
        <Dialog open = {openPopup} />
    }
}