import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <h3>Dictionary App</h3>
            <div className='nav-links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/history'>History</NavLink>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar;