import React from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import TodoItem from './TodoItem';

const initialTodos = [
  { id: uuid(), text: 'walk the dog', completed: false },
  { id: uuid(), text: 'walk the dog', completed: true },
  { id: uuid(), text: 'walk the dog', completed: false },
];
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((i) => i.id !== id);
    });
  };

  const toggleTodo = (id) => {
    console.log('toggling');
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <Box>
      <h1>Todos!</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              remove={removeTodo}
              toggle={toggleTodo}
            />
          );
        })}
      </List>
    </Box>
  );
}
