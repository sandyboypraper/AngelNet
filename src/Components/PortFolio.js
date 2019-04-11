import React, { Component } from 'react';

import {Row , Col , Container , Card , Form , FormControl , Button , Image} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import personimg from '../external/Image/Person1.jpg';

import M from "materialize-css";

class PortFolio extends Component{


	 componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }


	render(){
                  
			return(

					<div>

					<Card>
					 <Card.Body>

						    <div>
		    					<h5 className = "HED">PortFolio <FontAwesomeIcon icon = "images" className = "float-right marg-top-sm sharptext" /> </h5>
		    				</div>


		    				 
				    </Card.Body>
				    </Card>

				    <Card>
				    <Card.Body className = "no-top-pad">

						   
						   <Row > 
						   		<Col sm = {4} className = "marg-top">

						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   		<Col sm = {4} className = "marg-top">
						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   		<Col sm = {4} className = "marg-top">
						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   		<Col sm = {4} className = "marg-top">
						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   		<Col sm = {4} className = "marg-top">
						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   		<Col sm = {4} className = "marg-top">
						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   		<Col sm = {4} className = "marg-top">
						   			 <Image className = "materialboxed" src= {personimg} thumbnail />
						   		</Col>
						   </Row>

		    				 
				    </Card.Body>
				    </Card>

					</div>


				);

			}

                 
}

export default PortFolio;