import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useAlert } from '../context/alertContext';

const Alert = () => {

    const { isAlert, setAlert } = useAlert();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert({ open: false });
    };

    return (
        <div>
            <Snackbar open={isAlert.open} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert onClose={handleClose}
                    severity={isAlert.type}
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    {isAlert.message}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default Alert;