import React from 'react';
import './header.styles.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/donate.png';

const Header=()=>(
    <div className='header'>
        <div className='head'>
            <Link className='logo-container' to='/'>
                <img src={logo} alt="logo" className='logo'/>
            </Link> 
            <h2 className="title">CharitAble</h2>
        </div>
       <div className='options'>
            <Link className='option' to='/'>HOME</Link>
            <Link className='option' to='/donate'>DONATE</Link>
       </div>
    </div>
)

export default Header;