import React, {useState} from 'react';
import './AppXY.css';

export default function AppXY() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0); 

  const handleMouseMove = (event) => {
    setX({
      x: event.clientX,
      y: event.clientY
    })
  }

  return (
    <div className='container'>
      <div className='pointer' onMouseMove={handleMouseMove}/>
    </div>
  );
}
