
//import 'reactjs-popup/dist/index.css';
import React, { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import AuthService from "../../services/auth.service";
import {DatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import 'date-fns';
import './adduser.css';
import { Button,Dialog } from '@material-ui/core';




const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#00a83b"   
               },
     secondary: {
        main: "#ffcc80" 
                }
           }, 
});


const Adduser = (props) => {

const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastname]=useState("");
  const [password, setPassword]=useState("");
 const[dob,setDob]=useState(new Date());
 //let dob = `${dobb.getDate()}-${dobb.getMonth() + 1}-${dobb.getFullYear()}`;
  const[about_me,setAbout_me]=useState("");
const[usernameErr,setUsernameErr]=useState("");
 const[emailErr,setEmailErr]=useState("");
 const[firstnameErr,setFirstnameErr]=useState("");
   const[lastnameErr,setLastnameErr]=useState("");
 const[passwordErr,setPasswordErr]=useState("");
 const[about_meErr,setAbout_meErr]=useState("");
 const [open, setOpen] =useState(false);


  const onChangeUsername = (e) => {

    const username = e.target.value;
    setUsername(username);
  };

const validateUsername = () => {
    if(!username){
      setUsernameErr("please enter a username")
  }
else if(username.length <3 ){
  setUsernameErr("Username must have at least 2 letters")
}};
  useEffect(()=>{
    if(username){
      setUsernameErr("")
    } 

  },[username]);  

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const validateEmail = () => {
    if(!email){
      setEmailErr("please enter email")
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailErr('Invalid email address');
    }};

    useEffect(()=>{
      if(email){
        setEmailErr("")
      } },[email]);


  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const validateFirstname = () => {
    if(!firstname){
      setFirstnameErr("please enter a firstname")
  }
  else if(firstname.length <3 ){
    setFirstnameErr("Firstname must have at least 2 letters")
  }
};

  useEffect(()=>{
    if(firstname){
      setFirstnameErr("")
    } },[firstname]);

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const validateLastname = () => {
    if(!lastname){
      setLastnameErr("please enter a lastname")
  }
  else if(lastname.length <3 ){
    setLastnameErr("Lastname must have at least 2 letters")
  }
};

  useEffect(()=>{
    if(lastname){
      setLastnameErr("")
    } },[lastname]);

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const validatePassword = () => {
    if(!password){
      setPasswordErr("please enter a password")
  }};

    useEffect(
      () => {
        if(!password){
          return;
        }
     if(password.length < 8){
      setPasswordErr("password must be more than 8 characters");
    }else { setPasswordErr("") }
  },[password]);

  const onChangeDob=(date) =>{
    setDob(date);
  }
  const onChangeAbout_me = (e) => {
    const about_me = e.target.value;
    setAbout_me(about_me);
  };

  const validateAbout_me = () => {
    if(!about_me){
      setAbout_meErr("please enter a About_me")
  }
  else if(about_me.length <3 ){
    setAbout_meErr("About_me must have at least 2 letters")
  }
};

  useEffect(()=>{
    if(about_me){
      setAbout_meErr("")
    } },[about_me]);

  const handleRegister = (e) => {
  //  e.preventDefault();
    
    
      AuthService.register(username,email,firstname,lastname,password,dob.toLocaleDateString(),about_me)
      .then((response) => { 
          let userresponse = response;
          if(userresponse){
          localStorage.setItem('data',JSON.stringify(userresponse));
          }
         
     
           }
           ,error => {
       const resMessage =
         (error.response&&
           error.response.data&&
           error.response.data.message) ||
         error.message || 
         error.toString();
console.log(resMessage);
      
     });  
  };

/*
  useEffect(
    () => {
      if (!email) {
        setEmailError("");
      } else {
        if (validateEmail(email)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email.");
        }
      }
    },
    [email]                     
  );   */




  const submit= !username||!email||!firstname||!lastname||!password||!dob||!about_me;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


return (
   
   <div>   
   <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{position:'fixed',textTransform:'none',left:'20%',fontSize:'14px'}}>
        Add new user ?
      </Button>
 
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} style={{position:'relative',left:'1%'}} fullWidth maxWidth="xs">
      <button className="b1" onClick={handleClose}>
          &times;
        </button>
        <br/>
        <form onSubmit={handleRegister} >
                                                                                                                        

        <h4>Add new user</h4> 
<br/>

              <div className="form-group">
                <label htmlFor="username" className="labeladd" ><span class="required">User Name</span></label>  <br/> <ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="username2"
                  name="username" 
                  value={username}
                  onChange={onChangeUsername}
                  onBlur={validateUsername} 
                  variant="standard"
                  error={usernameErr}

                />  <br/><p style={{textAlign:'left',fontSize:'15px'}} className="error">{usernameErr}</p>
         </ThemeProvider>    </div>  <br/>

              <div className="form-group">
                <label htmlFor="email" className="labeladd"><span class="required">Email</span></label>   <br/><ThemeProvider theme={theme}> 
                <TextField 
                  type="text"
                  className="email2"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  onBlur={validateEmail}
                  variant="filled"
                  error={emailErr}
                  
                />  <br/><p style={{textAlign:'left',fontSize:'15px'}} className="error">{emailErr}</p>
        </ThemeProvider>      </div>  <br/>

              <div className="form-group">
                <label htmlFor="firstname" className="labeladd"><span class="required">First Name</span></label>   <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="firstname2"
                  name="firstname"
                  value={firstname}
                  onChange={onChangeFirstname}
                  onBlur={validateFirstname}
                  variant="filled"
                  error={firstnameErr}
                />  <br/><p style={{textAlign:'left',fontSize:'15px'}} className="error">{firstnameErr}</p>
           </ThemeProvider>   </div>  <br/>


              <div className="form-group">
                <label htmlFor="lastname" className="labeladd"><span class="required">Last Name</span></label>   <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="lastname2"
                  name="lastname"
                  value={lastname}
                  onChange={onChangeLastname}
                  onBlur={validateLastname}
                  variant="filled"
                  error={lastnameErr}
              />  <br/><p style={{textAlign:'left',fontSize:'15px'}} className="error">{lastnameErr}</p>
           </ThemeProvider>   </div>  <br/>


              <div className="form-group">
                <label htmlFor="password" className="labeladd"><span class="required">Password</span></label>  <br/> <ThemeProvider theme={theme}> 
                <TextField
                  type="password"
                  className="password2"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  onBlur={validatePassword}
                  variant="filled"
                  error={passwordErr}
                />  <br/><p style={{textAlign:'left',fontSize:'15px'}} className="error">{passwordErr}</p>
            </ThemeProvider>  </div>  <br/>

              <div className="form-group">
                <label htmlFor="dob" className="labeladd"><span class="required">Date Of Birth</span></label>   <br/><ThemeProvider theme={theme}> 
                <div>
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
                   <DatePicker
                   className="dob2"          
                   inputVariant="filled"
                   format="dd/MM/yyyy"
                   value={dob}
                    onChange={onChangeDob}
                    animateYearScrolling="true"
                    views={["year", "month", "date"]}
                    openTo="year"
                  
                     />
      </MuiPickersUtilsProvider></div></ThemeProvider>
              </div>  <br/>


              <div className="form-group">
                <label htmlFor="about_me" className="labeladd"><span class="required">About_me</span></label>   <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="about_me2"
                  name="about_me"
                  value={about_me}
                  onChange={onChangeAbout_me}
                  onBlur={validateAbout_me}
                  variant="filled"
                  error={about_meErr}
                /></ThemeProvider>  <br/><p style={{textAlign:'left',fontSize:'15px'}} className="error">{about_meErr}</p>
              </div><br/>

             
            
            
        <div className="footer1" ><button type="submit" className="bttn" disabled={submit}>SUBMIT</button></div> 



        </form> 
   
       
     
     
  </Dialog></div>
);

        }

        export default Adduser;