import React from 'react'; 
import logo from '../images/logo.svg'; 
import { Link } from 'gatsby'; 
import Clock from './clock'; 

const Footer = () => (
    <div className='site-footer'>
        <Link to={'/'}>
            <img className='myLogo-footer' alt='logo' src={logo}></img>
        </Link>
        <h4 className='footerTitle text-center'>
            procedural
        </h4>
        <p className='copyrightText text-center'>
        © 2021 Víctor Balaguera. All rights reserved over every original text chunks and other happenings.
        </p>
        <p className='copyrightText text-center'>
        Everything else belongs to their respective owners.
        </p>
        <Clock/>
    </div>
); 

export default Footer; 