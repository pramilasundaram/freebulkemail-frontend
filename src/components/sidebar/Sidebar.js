import React from "react"
import "./Sidebar.css"
import {  
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Sidebar() {

  return (
   <div className="col-sm-3">
   <Nav justified pills vertical>
     <NavItem className="nav_link">
    <NavLink href="/dashboard">DashBoard</NavLink>
     </NavItem>
     <NavItem className="nav_link">
       <NavLink href="/home">Contacts</NavLink>
     </NavItem>
     <NavItem className="nav_link">
       <NavLink href="/emailsender">Email</NavLink>
     </NavItem>     
     <NavItem className="nav_link">
       <NavLink href="/calender">Calender</NavLink>
     </NavItem>
     <NavItem className="nav_link">
       <NavLink href="/reviews">Reviews</NavLink>
     </NavItem>
     <NavItem className="nav_link">
       <NavLink href="#">Settings</NavLink>
     </NavItem>
   </Nav>
 </div>
  )
}
