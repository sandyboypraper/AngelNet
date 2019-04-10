import React, { Component } from 'react';

import {Row , Col , Container} from 'react-bootstrap';

import Mynav from './Components/Nav.js';
import Profile from './Components/Profile.js';
import Navs from './Components/Navs.js';
import Socialinfo from './Components/socialinfocard.js';
import About from './Components/About.js';
import Contacts from './Components/Contacts.js';
import Footer from './Components/Footer.js';

import {User_Profile , Connections , User_About , messages , notifications , Social_Meadia , tags , Friends} from './DemoData.json';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome , faBell, faStickyNote, faGlobeAsia ,faMapMarkerAlt , faClock , faCopyright} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch , faHome , faBell , faStickyNote , faGlobeAsia , faMapMarkerAlt , faClock , faCopyright)

class App extends Component {


  render() {

    return (
      <div className="App fullw">

              {/* Nav */}
              <Row>
                  <Col sm = {12} md = {12} lg = {12}>
                    <Mynav  messages = {messages} notification = {notifications} />
                  </Col>
              </Row>

                <Row>
                  <Col sm = {12} md = {12} lg = {12}>
                    <Profile user_profile = {User_Profile} connections = {Connections} />
                  </Col>
                </Row>

                <Row>
                  <Col sm = {12} md = {12} lg = {12}>
                   <Navs />
                  </Col>

                </Row>

                <br />


              {/* Intro */}
                <Row className = "mycontainer">

                  <Col sm = {12} md = {12} lg = {3}>
                  <Socialinfo connections = {Connections} social = {Social_Meadia} tags = {tags}/>
                  </Col>

                  <Col sm = {12} md = {12} lg = {6}>
                  <About about = {User_About} />
                  </Col>

                  <Col sm = {12} md = {12} lg = {3}>
                  <Contacts friends = {Friends} />
                  </Col>

              </Row>


              {/*  Footer */}
              <Footer />
                
      </div>
    );
  }
}

export default App;
