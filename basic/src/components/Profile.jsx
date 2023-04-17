import React from 'react';
import Avarta from './Avarta';

export default function Profile({image, name, title, state}) {
  return (
    <div className='profile'>
        <Avarta 
          image={image}
          state={state}
        />
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  );
}




