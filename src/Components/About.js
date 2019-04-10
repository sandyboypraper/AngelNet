import React, { Component } from 'react';

import {Row , Col , Nav , Container , ListGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component{

    render(){


        const {about} = this.props;

        const experience = about.Experience.map(temp => {
                    return(

                               <Row className = "marg-top" key = {temp.Company_Name}>
                                        <Col sm = {6}>
                                            <span className = "TEXT sharptext">{temp.From} - </span>
                                            <span className = "TEXT sharptext">{temp.To}</span>
                                        </Col>

                                        <Col sm = {6}>
                                            <h6 className = "HED nomarge">: {temp.Company_Name}</h6>
                                            <p className = "TEXT sharptext">
                                             <FontAwesomeIcon className="smmarge" icon="map-marker-alt" />
                                            {temp.Place}</p>
                                        </Col>
                                </Row>

                        );
        });


         const education = about.Educational.map(temp => {
                    return(

                             <ListGroup.Item className = "transback" key = {temp.Organization_Name}>
                                            <h6 className = "HED nomarge">: {temp.Organization_Name}</h6>
                                            <p className = "TEXT sharptext">
                                             <FontAwesomeIcon className="smmarge" icon="map-marker-alt" />
                                            {temp.Place}</p>
                              </ListGroup.Item>

                        );
        });





         const acheivment = about.Acheivements.map(temp => {
                    return(

                             <ListGroup.Item className = "transback" key = {temp.Name}>
                                            <h6 className = "HED nomarge">: {temp.Name}</h6>
                                            <p className = "TEXT sharptext">
                                             <FontAwesomeIcon className="smmarge" icon="map-marker-alt" />
                                            {temp.Place}</p>
                              </ListGroup.Item>

                        );
        });





   return(
   		<div>
   				<div className = "mycontainer greyback pad-bottom marg-bottom"> 
    				

    				<div className = "marg-top">
    					<h5 className = "HED">About</h5>
    					<p className = "TEXT sharptext"> {about.Text} </p>
    				</div>

    				<hr />
    				<div className = "marg-top">
    				  <h5 className = "HED">Experience</h5>


    				  <Container>{experience}</Container>


    				</div>

    					
    				<div className = "marg-top">

    					 <h5 className = "HED">Educational</h5>

    					 	<br/>
    					   <Container>


    				  		<ListGroup>{education}</ListGroup>
							    				  			
    				  			

    				  		</Container>
    				</div>

    			

    				<div className = "marg-top">

    					 <h5 className = "HED">Acheivments</h5>

    					 	<br/>
    					   <Container>


    				  		<ListGroup>{acheivment}</ListGroup>
							    				  			
    				  			

    				  		</Container>
    				</div>

   				</div>
   		</div>
   	);

   }
}

export default About;