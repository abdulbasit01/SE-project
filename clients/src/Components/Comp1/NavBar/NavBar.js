import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Slider from "../infomation/slider.jsx"
const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark >
        <NavbarBrand href="/" >Online Academy</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}  />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Selectors">Selectors</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Slider/>
    </div>
  );
}

export default NavBar;