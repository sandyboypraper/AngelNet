import React, { Component } from 'react';

import {Row , Col} from 'react-bootstrap';

import { Navbar , Badge , Container , Nav , NavDropdown , Form , FormControl , Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Mynav = (props) => {
    return(
        <div>
           
        <Navbar sticky="top" bg="light" expand="lg" className = "mycontainer">
            <Navbar.Brand href="#home" className = "HED">AngelNet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto navlinkpadding">
                <Nav.Link href="#home" className = "normgap sharptext">Home</Nav.Link>
                <Nav.Link href="#link" className = "normgap sharptext">TimeLine</Nav.Link>
                <NavDropdown title="Acount Setting" className = "normgap sharptext" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="More Pages" className = "normgap sharptext" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                        <Nav.Link href="#deets" className = "sharptext">
                        <FontAwesomeIcon icon="search" />
                        </Nav.Link>

                        <Nav.Link href="#deets" className = "sharptext">
                        <FontAwesomeIcon icon="home" />
                        </Nav.Link>

                        <Nav.Link href="#deets" className = "sharptext">
                        <Badge variant="dark"><FontAwesomeIcon icon="bell" /> {props.notification}</Badge>
                        </Nav.Link>

                        <Nav.Link href="#deets" className = "sharptext">
                        <Badge variant="dark"> <FontAwesomeIcon icon="sticky-note" /> {props.messages}</Badge>
                        </Nav.Link>

                        <Nav.Link href="#deets" className = "sharptext">
                        <FontAwesomeIcon className = "green-text" icon="globe-asia" />
                        </Nav.Link>
                       
                </Nav>
            </Navbar.Collapse>
      </Navbar>

    
        </div>
    );
}

export default Mynav