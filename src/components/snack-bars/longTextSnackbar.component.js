import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';

// const action = (
//     <Button color="secondary" size="small">
//         X
//     </Button>
// );

export default function LongTextSnackbar({ message, action }) {
    return (
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
            <SnackbarContent
                message={
                    message
                }
                action={action}
            />
        </Stack>
    );
}