import React from 'react'; 
import logo from '../images/logo.svg'; 
import { Link } from 'gatsby'; 
import Image from '../components/image'; 

const Footer = () => (
    <div className='site-footer'>
        <Link to={'/'}>
            <Image className='myLogo-footer' alt='logo' src={logo}></Image>
        </Link>
        <h4 className='text-center'>
            procedural
        </h4>
        <p className='text-center'>
            Social Media Links, if necessary. PLACEHOLDER TEXT HERE.
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