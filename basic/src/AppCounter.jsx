import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 3);
  }

  return (
    <div className='container'>
      <div>{count} {count > 10 ? '불꽃' : '얼음'}</div>
      <Counter total={count} onClick={handleClick}/>
      <Counter total={count} onClick={handleClick}/>
    </div>
  );
}

