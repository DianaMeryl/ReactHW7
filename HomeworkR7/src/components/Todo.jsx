import React from 'react';
import { Card, CardContent, Typography, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export default function Todo({title, checkTodo, id, isCompleted, deleteTodo}) {
    
    const markCompleted = () => checkTodo(id);
    const delTodo = () => deleteTodo(id);
    const todoStyle = isCompleted ? {color:"green"}:{display:"none"};
    const doneStyle = isCompleted ? {float:'right', backgroundColor:"#77dd77"}:{float:'right', backgroundColor:"#ff6347"};
    const done = isCompleted ? "Done" : "To Do";
    return (
    <div>
        <Container>
            <Card variant="outlined" style={{marginTop: 30, background: "#fdf5e6", borderRadius: 20 }}>
                <CardContent>
                    <Typography variant='h5' component="h2" >
                        <IconButton>
                            <CheckIcon style={todoStyle} />
                        </IconButton>
                            {title}
                        <IconButton style={{float:'right'}} onClick={delTodo}>
                            <DeleteIcon style={{color:"red"}} />
                        </IconButton>
                        <IconButton style={doneStyle} onClick={markCompleted}>
                            {done}
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    </div>
)
}
