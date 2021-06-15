import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import 'date-fns';
import './pagination.css';

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

export default function Update(props){


  let history = useHistory();

  const url="http://localhost:8001/auth/profile/"

  const [user,setUser]=useState({
    username:"",
    email:"",
    firstname:"",
    lastname:"",
    dob:"",
    about_me:"",
  })


 

  useEffect(()=>{
    const { match: { params } } = props;
Axios.get(url+params.id)
.then(res=>{
  setUser(res.data)
}).catch(err=>console.error(err))
  },[]);
  

  function submit(e){
    e.preventDefault()
    const { match: { params } } = props;
    Axios.put(`http://localhost:8001/auth/update/${params.id}`,user)
    .then(res=>{
      console.log(res.data)
      props.history.push("/pagination")
    }).catch(err=>console.error(err))
  }

function handle(e){
  const newdata= {...user}
  newdata[e.target.id]=e.target.value
  setUser(newdata);
}


function handleClick() {
  history.push("/pagination");
}



  return(
    <>
<div className="updateform" > 

<form onSubmit={(e)=>submit(e)} >
  
  <button style={{position:'relative',float:'right',backgroundColor:'white',border:'none',fontSize:'30px'} }  onclick={handleClick}> &times;</button>
         <br/>                                                                                                               

        <h3>Edit user</h3> 
          
        <br/>
        <div className="form-group">
                <label htmlFor="userid" className="labeladd" ><span class="required">User id</span></label> <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="userid"
                  id="id" 
                  value={user.id}
                  disabled
                  variant="standard" />
         </ThemeProvider>    </div><br/>

              <div className="form-group">
                <label htmlFor="username" className="labeladd" ><span class="required">User Name</span></label> <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="username1"
                  id="username" 
                  value={user.username}
                  onChange={(e)=>handle(e)}
           
                  variant="standard"
                 

                />
         </ThemeProvider>    </div><br/>

              <div className="form-group">
                <label htmlFor="email" className="labeladd"><span class="required">Email</span></label><br/> <ThemeProvider theme={theme}> 
                <TextField 
                  type="text"
                  className="email1"
                  id="email"
                  value={user.email}
                  onChange={(e)=>handle(e)}
                  variant="filled"
   
                  
                />
        </ThemeProvider>      </div><br/>

              <div className="form-group">
                <label htmlFor="firstname" className="labeladd"><span class="required">First Name</span></label> <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="firstname1"
                  id="firstname"
                  value={user.firstname}
                  onChange={(e)=>handle(e)}
                  variant="filled"
                  
                />
           </ThemeProvider>   </div><br/>


              <div className="form-group">
                <label htmlFor="lastname" className="labeladd"><span class="required">Last Name</span></label> <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="lastname1"
                  id="lastname"
                  value={user.lastname}
                  onChange={(e)=>handle(e)}
                  variant="filled"
                 
              />
           </ThemeProvider>   </div><br/>



           <div className="form-group">
                <label htmlFor="dob" className="labeladd"><span class="required">Date of Birth</span></label> <br/><ThemeProvider theme={theme}> 
                <TextField
                  type="date"
                  className="dob1"
                  id="dob"
                  value={user.dob}
                  onChange={(e)=>handle(e)}
                  variant="filled"
                 
              />
           </ThemeProvider>   </div><br/>


              <div className="form-group">
                <label htmlFor="about_me" className="labeladd"><span class="required">About_me</span></label><br/> <ThemeProvider theme={theme}> 
                <TextField
                  type="text"
                  className="about_me1"
                  id="about_me"
                  value={user.about_me}
                  onChange={(e)=>handle(e)}
                  variant="filled"
                  
                /></ThemeProvider>
              </div><br/>

             
            
            
        <div className="footer1" ><button type="submit" className="bttn">UPDATE</button></div> 
       



        </form> 
   
       
</div></>
  );
 };
