import React, {Fragment} from "react";
import ReactDom from 'react-dom';
import Page1 from './page1';
import Page2 from './page2';
//import css
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'reactstrap';
import { Button, UncontrolledPopover,  PopoverBody } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






//Promise added
// function App() {
//   return (
//     <Router>
//       <Fragment className="App-header">
//         {/* <Route path="/" component={Something} /> */}
//         <Route path="/login" component={Login} />
//         <Route path="/dashboard" component={Page} />
//         <Route path="/password/forgot" component={SignupForm} />
//         <Route path="/password/reset/:token1" component={PasswordReset} />
//       </Fragment>
//     </Router>
//   );
// }
//Promise added ends

function Body() {
  return(
    <>
        <Nav />
        < Btn />
        < Box />
        < Btns />
        </>
  )
}

function Nav() {
  return(
   < List />
   
  )
}
const Img = () =>{
  return <img src="./logo-white.png" alt=""/>
}
const List = () =>{
  return(
    <nav >
  <ul className ="list">
    <li><img src={Img} alt=""/></li>
    <li>DASHBOARD</li>
    <li>CUSTOMERS</li>
    <li>ASSOSIATES</li>
    <li className ='active'>REQUESTS</li>
    <li>SCHEDULES</li>
    <li>PAMENTS</li>
    <li>SETTINGS</li>
    <li className ='box1'>VscBellDot</li>
    <li className ='box'></li>
  </ul>
  </nav>
   
  )
}
const Btn = () => {
  return(
    <button className='butt'>request information</button>
  )
}
const Box = () => {
  return(
    <section className ='square'>
     <Row class="align-items-start side">
    <Col sm={3} className="up side">
   REQUEST TYPE
    </Col>
    <Col sm={4} className="up">
      CUSTOMER NAME
    </Col>
      <Col sm={3} className="up">
      CLEANING DATE
    </Col>
    </Row>
    <Row>
       <Col sm={3} className ='down side'>POST-CON</Col>
       <Col sm={4} className ='down'>PETER ABU-EKPESHIE</Col>
       <Col sm={3} className ='down'>09.10.2019</Col>
     </Row> 
     <Row>
     <Col sm={3} className="up side">INVOICE STATUS</Col>
     <Col sm={4} className="up">REQUEST DATE</Col>
     <Col sm={4} className="up">REQUEST TIME</Col>
     <Col sm={3} className="down side orange">UNGENERATED</Col>
     <Col sm={4} className="down">06.10.2016</Col>
     <Col sm={3} className="down">8:00 AM</Col>
     </Row>
       <Row>
     <Col sm={3} className="up side">LOCATION</Col>
     <Col sm={4} className="up">HOUSE-TYPE</Col>
     </Row>
     <Row>
    < Col sm={3} className="down side ">8, YOVI STREET,<br/> IWAYA, ONIKE,YABA</Col>
     <Col sm={3} className="down ">5-BEDROOM DUPLEX</Col>
    </Row>
  
    </section>
  )
}
const Btns = () => {
  return(
    <div>
      {' '}
     <Button id="PopoverLegacy" type="button">
        ACTIONS
      </Button>
    <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
      <PopoverBody>
          <ul>
            <li className='block'>Contact customer</li>
            
      <li className='block'><Link to="/page2.js">Generate invoice</Link></li>
          
            <li className='block'>Reject request</li>
          </ul>
          </PopoverBody>
           </UncontrolledPopover>
    
      </div>
  )
}
/** 
export default Btns;
//page 2
ReactDom.render(<Body />, document.getElementById('root'));
*/

// Babe started from here 
function App() {
  return (
    <Router>
      <Fragment className="App-header">
        {/* <Route path="/" component={Something} /> */}
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        {/* <Route path="/password/forgot" component={SignupForm} />
        <Route path="/password/reset/:token1" component={PasswordReset} /> */}
      </Fragment>
    </Router>
  );
}

export default App;
ReactDom.render(<Body />, document.getElementById('root'));