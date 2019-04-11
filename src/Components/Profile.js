import React, { Component } from 'react';

import {Row , Col , Image , Button} from 'react-bootstrap';
import personimg from '../external/Image/Person1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = (props) => {
  

   const {user_profile , connections} = props;

    return(
        <div>
             <Row className = "myprofilefield">
                <Col className = "overlay">
                    <div className="mycenter" >

                         <Image className = "logoimg" src= {personimg} roundedCircle />
                         <br />

                         <h4 className = "HED subcontent"> {user_profile.Name} </h4>

                         <p className = "subcontent TEXT mdtext">{user_profile.Post}</p>

                         <p className = "TEXT smtext">{user_profile.Address}</p>

                          <p><FontAwesomeIcon className = "green-text" icon="globe-asia" /> {connections.Connections} </p>

                          <span><Button className = "sharptext" variant="info">Connect</Button></span>
                          <span className = "smmarge"><Button className = "sharptext" variant="info">Following</Button></span>

                    </div>
                </Col>
             </Row>
        </div>
    );

};

export default Profile;