import React from 'react';
import {Link} from 'react-router-dom';



export default function Navbar() {
  return (
    <div>
      <Link to='/'>
        <h1>Project</h1>
      </Link>      
    </div>
  );
}

