import React from 'react'; 

const Footer = () => (
    <div className='site-footer'>
        <h4 className='text-center'>
            procedural
        </h4>
        <p className='text-center'>
            Social Media Links, if necessary. asdass
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