
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../images/logo.svg'; 
import tfrtc from '../images/tfrtc.svg'; 

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    }); 
  }

  render() {
    return (
      <div className='container'>
        <Navbar fixed='top' expand="sm" style={{ backgroundColor: "$pitch-black"}}>
          <NavbarBrand className='myLogoContainer' href="/">
            <img className='myLogo' alt='logo' src={logo}></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}><img className='myLogo' alt='logo' src={tfrtc}></img></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
{/*               <NavItem>
                <NavLink href="/team">team</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/glossary">glossary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">tags</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">about + contact</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
