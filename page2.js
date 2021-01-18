// import { React } from "react";
import React, { useState } from 'react';
 import ReactDom from 'react-dom';
 import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, 
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// import {Nav} from './page1'
//import css
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'reactstrap';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
 function Second() {
    return(
        <>
        {/* <But /> */}
        {/* <h1>Babe, good job you came so far in such short time</h1> */}
        <Example/>
        </>
    )
 }


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >DASHBOARD</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >CUSTOMERS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >ASSOSIATES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >REQUEST</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >SCHEDULES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >PAYMENTS</NavLink>
              </NavItem>
              <NavItem>
              <NavLink >SETTINGS</NavLink>
            </NavItem>
            
            
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );

export default Example;







  }
 
ReactDom.render(<Second />, document.getElementById('root'));