import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import List from '@mui/material/List';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import CommentIcon from '@mui/icons-material/Comment';

const initialTodos = [
  { id: uuid(), text: 'walk the dog', completed: false },
  { id: uuid(), text: 'walk the dog', completed: true },
  { id: uuid(), text: 'walk the dog', completed: false },
];
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Box>
      <h1>Todos!</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;
          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
