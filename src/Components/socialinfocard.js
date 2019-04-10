import React, { Component } from 'react';

import {Row , Col , Card ,Badge} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class Socialinfo extends Component{



	render(){

		const {connections , social , tags} = this.props;


		const tag = tags.map(temp => {
			return(
				<Badge className = "smmarge" key = {temp} variant="dark">{temp}</Badge>
				);
		});


	return(

			<div>
				<Card>
				  <Card.Body>

				  	<Row>
				  		<Col sm = {6}>
				  		<Card.Subtitle className="mb-2 text-muted mycenter">
				  			 <p className="HED lgtext">{connections.Connections}</p>
				  			Connections
				  		</Card.Subtitle>
				  		</Col>

				  		<Col sm = {6}>
				  		<Card.Subtitle className="mb-2 text-muted mycenter">
				  		<p className="HED lgtext">{connections.Followers}</p>
				  			Followers
				  		</Card.Subtitle>
				  		</Col>
				  	</Row>

 					<hr />
                    <br />


				  	<Row>
				  		<Col sm = {6}>
				  		<Card.Subtitle className="mb-2 text-muted mycenter">
				  			<p className="HED lgtext">{connections.Global_Ranks}</p>
				  			Global Ranks
				  		</Card.Subtitle>
				  		</Col>

				  		<Col sm = {6}>
				  		<Card.Subtitle className="mb-2 text-muted mycenter">
				  			<p className="HED lgtext">{connections.Global_Reach}</p>
				  			Global Reach
				  		</Card.Subtitle>
				  		</Col>
				  	</Row>

				 </Card.Body>

			</Card> 	
				   
				  
		    <Card>

				<Card.Body>
				    <Card.Subtitle className="mb-2 text-muted mycenter HED lgtext">view more</Card.Subtitle>
				</Card.Body>
		    
		    </Card>
				  

		    <Card>

				<Card.Body>
				   
				    <Row>

				    <Col sm = {3} className = "nopad mycenter">
				  		<SocialIcon className = "myicon" url={social.Fb} />
				  	</Col>

				  	 <Col sm = {3} className = "nopad mycenter">
				  		<SocialIcon className = "myicon" url={social.Twit} />
				  	</Col>

				  	 <Col sm = {3} className = "nopad mycenter">
				  		<SocialIcon className = "myicon" url={social.Git} />
				  	</Col>

				  	 <Col sm = {3} className = "nopad mycenter">
				  		<SocialIcon className = "myicon" url={social.pintrest} />
				  	</Col>


				    </Row>
				    
				</Card.Body>
		    
		    </Card>

				<br />

		    <Card className = "marg-bottom">
				
				<Card.Body>
				    
				    {tag}
				  
				 </Card.Body>
			</Card>
			 
		</div>

		);

};
}

export default Socialinfo; 