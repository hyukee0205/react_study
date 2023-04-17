import React from 'react';

export default function ({image, state}) {
  return (
    <div className='photo_box'>
      <img 
        className='photo' 
        src={image}
        alt="사진" 
      />
      {state && <h3>New</h3>}
    </div>
  );
}

