import React, { useState, useEffect } from "react";
import { Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import AuthService from "../../services/auth.service";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../home";
import Profile from "../profile";
import logo from './google.svg';
import { Button } from '@material-ui/core';
import {Nav} from 'react-bootstrap';
import Pagination from '../Pagination/pagination';
import View from '../Pagination/view';
import Edit from '../Pagination/edit';


  


const Header = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };


  return (
    <div>




      <Nav className="navbar navbar-expand navbar-dark bg-white ">
        <Link to={"/"} className="navbar-brand">
        <img className="logo1" src={logo} alt="google" width="160" height="75" style={{position:'absolute',top:'1%'}}/>
        </Link>
   


        {currentUser ? (
          <div className="navbar-nav ml-auto navbar-fixed-top">
            <li className="nav-item">
              <Link to={"/pagination"} className="nav-link">
               <p style={{color:"grey"}}>{currentUser.username}</p> 
              </Link>
            </li>
            <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
            <Button className="BT">  LogOut</Button>
              </a>
            </li> 
          </div>  
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
           <Link to={"/login"} className="nav-link">
           <Button size="small" variant="contained" className="bt"  >  Log In</Button>  
              </Link>
            </li>
            <li className="nav-item">
            <Link to={"/register"} className="nav-link">
            <Button size="small" variant="contained" className="bt1" >Sign Up</Button>  
              </Link>
            </li>
        
          </div>
        )}
      </Nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
       <Route exact path='/pagination' component={Pagination} />
       <Route exact path='/view' component={View} />
       <Route exact path='/edit/:id' component={Edit} />

     
        </Switch>
      </div>
      
    </div>
  );
};

export default Header;
