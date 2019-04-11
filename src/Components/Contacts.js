import React, { Component } from 'react';

import {Row , Col , Container , Card , Form , FormControl , Button} from 'react-bootstrap';

import Avatar, { AvatarItem } from '@atlaskit/avatar';

import img from "../external/Image/Person.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Contacts extends Component{

	render(){

		const {friends} = this.props;

		const frnd = friends.map(temp => {
			return(
					<AvatarItem
			          avatar={<Avatar src= {img} presence='focus' />}
			          key= {temp.About}
			          
			          primaryText={temp.Name}
			          secondaryText={temp.About}
			        />
				);
		});


	return(

			<div>

					 <Card>

				<Card.Body>

				    <div>
    					<h5 className = "HED">FRIENDS</h5>
    				</div>

    				 <Form inline className = "marg-top">
				      <FormControl type="text" placeholder="Search Contacts .." className="mr-sm-2 sharptext TEXT" />
				    </Form>


				 <div className = "marg-top">{frnd}</div>
				</Card.Body>
		    
		    </Card>



		     <Card className = "marg-top">

				<Card.Body>
				   
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Help Center | </a></span>
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> About | </a></span>
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Privacy Policy | </a></span>
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Comunity Guidelines | </a></span>
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Cookies Policy | </a></span>
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> Career | </a></span>
				   <span className = "TEXT sharptext" > <a href = "#" className = "Black-text"> language  </a></span>
				  
				  
				   <h5 className = "HED sharptext marg-top text-right"> <FontAwesomeIcon className = "marg-right" icon="copyright" />Copyright</h5>
				   
				</Card.Body>
		    
		    </Card>




			</div>

		);

    }
}

export default Contacts;