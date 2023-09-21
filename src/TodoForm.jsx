import {
  Box,
  IconButton,
  InputAdornment,
  ListItem,
  TextField,
} from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import Create from '@mui/icons-material/Create';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const addNewTodo = () => {
    addTodo(text);
    setText('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <ListItem>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="todo"
            variant="outlined"
            onChange={handleChange}
            value={text}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="create todo"
                    edge="end"
                    onClick={addNewTodo}>
                    <Create />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </ListItem>
    </Box>
  );
}
