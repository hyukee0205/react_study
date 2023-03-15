import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';




export default function Navbar() {
  const [user, setUser] = useState();
  
  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  
  return (
    <header className='flex justify-between border-b p-4'>
      <Link to='/' className='flex'>
        <h1 className='font-bold text-5xl'>Project</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold text-xl'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>상품등록!</Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}

