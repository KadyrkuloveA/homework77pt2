import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light shadow-sm p-3 mb-5 bg-white rounded">
            <NavLink className="navbar-brand" to='/'>
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <b>3</b>cha
            </NavLink>
        </nav>
    );
};

export default Navbar;