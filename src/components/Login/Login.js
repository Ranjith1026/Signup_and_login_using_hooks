import React, { useState,useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import AuthService from "../../services/auth.service";
import "./login.css";
import  logo from './google1.svg';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";







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

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const[loading,setLoading]=useState(false);
 // const [message, setMessage] = useState("");
  const[emailErr,setEmailErr]=useState("");
   const[passwordErr,setPasswordErr]=useState("");



  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

  };

  const validateEmail = () => {
    if(!email){
      setEmailErr("please enter a email address")
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailErr('Invalid email address');
  }else if(email){
    setEmailErr("");
  }};
  useEffect(()=>{
    if(email){
      setEmailErr("")
    } },[email]);

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
      }else { setPasswordErr("") }
},[password]);

  const handleLogin = (e) => {
    e.preventDefault();

   // setMessage("");
    setLoading(true);

  
   
      AuthService.login(email, password).then(
        () => {
          props.history.push("/pagination");
          window.location.reload();
        },
        (error) => {
         // const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
        //  setMessage(resMessage);
        window.alert("Email or password is wrong");
        }
      );
 



  };

  return (
<div className="login-in"><br/>

<div><h4>Sign in with Email</h4></div> <br/><br/><br/>
<div>
<div className="lg"> <img className="logo2" src={logo} alt="google" width="150" height="95" /> <br/><br/><br/></div>
<form  onSubmit={handleLogin} >


  <div className="form-group"><center className="label2">Email Address</center><br/>  <ThemeProvider theme={theme}> 
  <TextField 
   type="email" 
   className="Email"                        
    name="email"
     onChange={onChangeEmail}
     value={email}
      variant="filled" 
     onBlur={validateEmail}
     required
     error={emailErr}
    
      />  </ThemeProvider><br/> <p style={{textAlign:'center',fontSize:'13px'}} className="error">{emailErr}</p></div><br/>
  

<div className="form-group"><center className="label2">Password</center><ThemeProvider theme={theme}> <br/>
 <TextField type="password" 
 className="pass" 
 name="password" 
 value={password}  
 onChange={onChangePassword}  
  variant="filled"
  onBlur={validatePassword}
  error={passwordErr}

  /> </ThemeProvider><br/><p style={{textAlign:'center',fontSize:'13px'}} className="error">{passwordErr}</p></div> <br/>



          <div className="form-group">
          
          <button className="btn-block" disabled={loading} variant="contained" style={{backgroundColor:'green'}} onClick={()=>{validateEmail();validatePassword()}}>
              {loading && (
                <span style={{color:'white'}} className="spinner-border spinner-border-sm"></span>
              )}
              <span>SUBMIT</span>
            </button>
          </div>  
            
        
  
        </form>   </div>
        </div>
  
    
  );
};

export default Login;