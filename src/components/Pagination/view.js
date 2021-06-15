
//import 'reactjs-popup/dist/index.css';
import React, { useState} from "react";

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {Button,Dialog } from '@material-ui/core';
import axios from 'axios';




const Viewuser = (id) => {

const [user,setUser]=useState([]);
 const [open, setOpen] =useState(false);

 function viewusr({id}){ 
    axios.get(`http://localhost:8001/auth/profile/${id}`) 
    .then((res)=>{setUser(res.data)})
    }

 const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



return (

<>

<a href="#" onClick={()=>{viewusr(id);handleClickOpen();}}>View</a>
<Dialog
  open={open}
  onClose={handleClose}
 style={{width:'100%'}}
 aria-labelledby="alert-dialog-slide-title"
 aria-describedby="alert-dialog-slide-description"
 fullWidth
 maxWidth="xs"
>
  <DialogTitle id="alert-dialog-title" style={{textAlign:'center'}}><h3>Your Details</h3></DialogTitle>
  <DialogContent>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>ID:</span>&nbsp;&nbsp;{user.id}</DialogContentText>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>USERNAME:</span>&nbsp;&nbsp;{user.username}</DialogContentText>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>EMAIL:</span>&nbsp;&nbsp;{user.email}</DialogContentText>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>FIRSTNAME:</span>&nbsp;&nbsp;{user.firstname}</DialogContentText>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>LASTNAME:</span>&nbsp;&nbsp;{user.lastname}</DialogContentText>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>DATE OF BIRTH:</span>&nbsp;&nbsp;{user.dob}</DialogContentText>
    <DialogContentText style={{fontSize:'16px'}}><span style={{fontWeight:'bold',color:'black',fontSize:'16px'}}>ABOUT_ME:</span>&nbsp;&nbsp;{user.about_me}</DialogContentText>
 </DialogContent>
 <Button onClick={handleClose} style={{fontSize:'16px'}} color="primary">
            Cancel
          </Button> 
</Dialog>


</>
);

        }

        export default Viewuser;