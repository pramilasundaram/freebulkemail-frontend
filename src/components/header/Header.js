import React, { useContext, useState } from 'react';
import "./Header.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 DropdownToggle, DropdownItem, UncontrolledDropdown, DropdownMenu, NavbarText
} from 'reactstrap';

import { useNavigate} from 'react-router-dom';
import { userData } from '../../Provider';
export default function Header(args) {
  const image1=require("../assests/icon.png")
  const image2 = require("../assests/login.png");
  const nav=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
const {navFlag,setNavFlag}=useContext(userData)
  const toggle = () => setIsOpen(!isOpen);
const  handlelogout=()=>{
  localStorage.clear();
  setNavFlag(false);
  nav("/");
}
if(!navFlag){
  return (
    <div>
    <Navbar {...args} className='navbar navbar-expand-md my-2' color="dark"
    dark>
    <NavbarBrand href="/"> <img src={image1} className="logo" alt=""/>SENDER</NavbarBrand>
    <NavbarToggler onClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
      <Nav >
        <NavItem>
          <NavLink  className="navlink" href="/">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  className="navlink" href="/register">
            Register
          </NavLink>
        </NavItem>            
      </Nav>
     </Collapse>
  </Navbar> :
  
  </div>  
  )
}
return (<Navbar {...args} expand="md" className="nav_bars">
<NavbarBrand>
  <img className="icons" src={image1} alt="" />
  BOSTON
</NavbarBrand>
<NavbarToggler onClick={toggle} />
<Collapse isOpen={isOpen} navbar>
  <Nav className="me-auto " navbar>
  <NavItem>
  <NavLink href="/home">contact</NavLink>
</NavItem>
<NavItem>
  <NavLink href="/emailsender">Email</NavLink>
</NavItem>
<NavItem>
  <NavLink href="/reviews">Review</NavLink>
</NavItem>
  </Nav>
  <NavbarText>
    <UncontrolledDropdown>
      <DropdownToggle nav>
      {localStorage.getItem("username")}&nbsp;&nbsp;<img className="header_icon"  src={image2} alt="" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem  onClick={handlelogout}>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </NavbarText>
</Collapse>
</Navbar>)
 
}

