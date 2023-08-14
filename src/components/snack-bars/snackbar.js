import { Alert, Slide, Snackbar, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function SnackBarComponent({ message = "Action performed successfully!!", type = "success", openSnakBar }) {
    const [open, setOpen] = useState(false)
    // type can be one of among
    // error
    // warning
    // info
    // success

    const TransitionUp = (props) => {
        return <Slide {...props} direction="up" />;
    }

    useEffect(() => {
        setOpen(openSnakBar);
    }, [openSnakBar]);

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Stack sx={{ width: '100%' }}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                TransitionComponent={TransitionUp}
            >
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}
