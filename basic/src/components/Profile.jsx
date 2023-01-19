import React from 'react';
import Avartar from './Avartar';

function Profile ({image, name, title, isNew}) {
  return (
    <div className='profile'>
      <Avartar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  )
}

export default Profile;



