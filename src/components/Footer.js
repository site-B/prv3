import React from 'react'; 
import logo from '../images/logo.svg'; 
import { Link } from 'gatsby'; 

const Footer = () => (
    <div className='site-footer'>
        <Link to={'/'}>
            <img className='myLogo-footer' alt='logo' src={logo}></img>
        </Link>
        <h4 className='text-center'>
            procedural
        </h4>
        <p className='copyrightText text-center'>
        © 2021 Víctor Balaguera. All rights reserved over every original text chunks and other happenings.
        </p>
        <p className='copyrightText text-center'>
        Everything else belongs to their respective owners.
        </p>
        <div className='footer-social-links'>
            <ul className='social-links-list'>
                <li>
                    <a 
                        href='www.google.com' 
                        target='_blank' 
                        rel='noopener noreferrer' className='facebook'>
                        <i className="fab fa-facebook-f"/>
                    </a>
                </li>
                <li>
                    <a 
                        href='www.google.com' 
                        target='_blank' 
                        rel='noopener noreferrer' className='facebook'>
                        <i className="fab fa-twitter"/>
                    </a>
                </li>
                <li>
                    <a 
                        href='www.google.com' 
                        target='_blank' 
                        rel='noopener noreferrer' className='facebook'>
                        <i className="fab fa-youtube"/>
                    </a>
                </li>
                <li>
                    <a 
                        href='www.google.com' 
                        target='_blank' 
                        rel='noopener noreferrer' className='facebook'>
                        <i className="fab fa-github"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
); 

export default Footer; 