import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Nav (){
  return (
    <div className='navbar'> 
      <Link to='/'>   
        <h1 className='logo'>Logo</h1>
      </Link>

      <ul>
        <Link to='/about'><li>About</li></Link>
        <Link to='/shop'><li>Shop</li></Link>
      </ul>
    </div>
  )
}

export default Nav;