import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome, FaTools } from "react-icons/fa";

const Nav = () => {
    return (
        <>
        <h1 className='text-center titre'>Afpa</h1>
        <nav className="navbar navbar-expand-sm navbar-light row">
            <div className="container-fluid col-9">
                <ul className="navbar-nav titre">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item text-right">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item text-right">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <NavLink to='/admin' className='text-decoration-none titre'> Admin</NavLink>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default Nav