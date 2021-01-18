// import React, {Fragment} from "react";
import ReactDom from 'react-dom'
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
/** 
 function App() {
  return (
     <Router>
     <Fragment className="App-header">
       {/* <Route path="/" component={Something} /> }
 //     <Route path="/login" component={Login} />
//         <Route path="/dashboard" component={Page} />
//         <Route path="/password/forgot" component={SignupForm} />
//         <Route path="/password/reset/:token1" component={PasswordReset} />
 //   </Fragment>
 //   </Router>
 //);
 //}
*/
function Body() {
  return(
    <>
        <Nav />
       
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
    <li className ='box1'></li>
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


export default Btn;
//page 2










ReactDom.render(<Body />, document.getElementById('root'));