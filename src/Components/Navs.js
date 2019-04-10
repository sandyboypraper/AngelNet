import React, { Component } from 'react';

import {Row , Col , Nav , NavDropdown} from 'react-bootstrap';

const Navs = (Props) => {
	return(
				<div>

					 <Nav className="justify-content-center" activeKey="/home">
					    <Nav.Item>
					      <Nav.Link  href="/home">Timeline</Nav.Link>
					    </Nav.Item>
					    <Nav.Item>
					      <Nav.Link eventKey="link-1">About</Nav.Link>
					    </Nav.Item>

					    <NavDropdown title="PortFolio" className = "sharptext black-text" id="basic-nav-dropdown">
		                    <NavDropdown.Item href="#action/3.1">Pitch Globally</NavDropdown.Item>
		                   	<NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.2">Pitch Deck Q&A</NavDropdown.Item>
		                    
		                </NavDropdown>
					    

		                 <NavDropdown title="Connections" className = " sharptext" id="basic-nav-dropdown">
		                    <NavDropdown.Item href="#action/3.1">MyNetwork</NavDropdown.Item>
		                     <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.2">Following</NavDropdown.Item>
		                     <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.3">Followers</NavDropdown.Item>
		                </NavDropdown>

		                
		                <NavDropdown title="More" className = " sharptext" id="basic-nav-dropdown">
		                    <NavDropdown.Item href="#action/3.1">Jobs</NavDropdown.Item>
		                     <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
		                     <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.3">Launch</NavDropdown.Item>
		                     <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.4">Inovation</NavDropdown.Item>
		                     <NavDropdown.Divider />
		                    <NavDropdown.Item href="#action/3.4">Partnership</NavDropdown.Item>
		                	
		                </NavDropdown>

					  </Nav>

				</div>

		);
}

export default Navs;