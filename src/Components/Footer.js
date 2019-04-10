import React, { Component } from 'react';

import {Row , Col , Container} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {

return(

			<div  className = "marg-top pad-top pad-bottom light-blue">

					<Container >
					<Row>
							<Col sm = "12" md = "6" lg = "6" className = "mycenter" >

								<h5 className = "HED">General</h5>
							    <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> About us | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Help | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> term Of Uses | </a></span>
							   
							   <br />
							   <br />


							   <h5 className = "HED">Advance</h5>
							    <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Mobile | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Events | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> News | </a></span>
							   
							    <h5 className = "HED sharptext marg-top text-left"> <FontAwesomeIcon className = "marg-right" icon="copyright" />AngelNet 2018 , All Rights Reserved</h5>
				   
							</Col>

                            <Col sm = "12" md = "6" lg = "6" className = "mycenter">

                            <h5 className = "HED">More</h5>
							    <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Trending | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> partnerShip | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Global Classroom | </a></span>
							   
							   <br />
							   <br />
							   

							   <h5 className = "HED">User Guidlines</h5>
							    <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Comunity Guidlines | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Cookie policy | </a></span>
							   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Copyright Policy | </a></span>
							   

							</Col>

					</Row>

					</Container>
			</div>

	);

}

export default Footer;