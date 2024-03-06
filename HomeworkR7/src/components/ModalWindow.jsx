import { Button, Modal, Box } from '@mui/material';
import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ModalWindow ({ addTodo }){

    const [open, setOpen] = useState(false); 

    const handleOpen = () => {
        setOpen(true);
    };
        
    const handleClose = () => {
        setOpen(false);
    };
    const[text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
        handleClose();
    };
    
    return (
        <div>
        <Button onClick={handleOpen} style={{marginLeft:"100px" }} variant="contained">Create Task</Button>
        <Modal
            open={open}
            onClose={handleClose}
        >
        <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: '#ccccff',
                '&:hover': {
                    bgcolor: '#e6e6fa',
                },
                border: '5px solid #b19cd9',
                borderRadius: 10,
                boxShadow: 25,
                p: 4,
                width: 700,
                minWidth: 350
            }}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField variant="standard" label="Do This" required ={true} value={text} onChange={(e) => setText(e.target.value)} />
                    <Button variant="contained" style={{marginTop:"10px"}} type="submit">Готово</Button>
                </FormControl>
            </form>
        </Box>
        </Modal>
        </div>
    );
}
