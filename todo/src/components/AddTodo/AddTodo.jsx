import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';

export default function AddTodo({onAdd}) {

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0) {
      return;
    }
    onAdd({id: uuid4(), text:text, status: 'active'});
    setText('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange} 
        type="text" placeholder='Add Todo'
        value={text}
      />
      <button>Add</button>
    </form>
  );
}

