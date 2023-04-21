import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { v4 as uuidv4 } from "uuid";


export default function TodoList({filter}) {
  const [todos ,setTodos] = useState(initalState)

  const hanldeAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => 
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  const handleDelete = (deleted) => 
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  const filtered = getFilteredItmes(todos, filter)

  return (
    <section>
      <ul>
        {filtered.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          onUpdate={handleUpdate} 
          onDelete={handleDelete} 
        />
        ))}
      </ul>
      <AddTodo onAdd={hanldeAdd} />
    </section>
  );
}


function getFilteredItmes(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

const initalState = [
  {
    id: uuidv4(),
    text: '장보기',
    status: 'active'
  },
  {
    id: uuidv4(),
    text: '장보기2',
    status: 'active'
  },
]
