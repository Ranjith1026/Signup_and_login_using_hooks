
import 'reactjs-popup/dist/index.css';
import React, { useState} from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button,Dialog } from '@material-ui/core';
import axios from 'axios';




const Deluser = (id) => {


 const [open, setOpen] =useState(false);

 function deleteuser({id}){ 
    axios.delete(`http://localhost:8001/auth/delete/${id}`) 
    }

 const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



return (
   

  
   

<>

<a href="#" onClick={handleClickOpen}>Delete</a>
<Dialog
  open={open}
  onClose={handleClose}
 style={{width:'100%'}}
>
  <DialogTitle id="alert-dialog-title" style={{textAlign:'center'}}>{"Are you sure you want to delete?"}</DialogTitle>
 
  <DialogActions>
  <Button onClick={handleClose} color="primary">
            Cancel
          </Button>  
          <Button onClick={()=>deleteuser(id)} color="primary">
            Delete
          </Button>
  </DialogActions>
</Dialog>
</>
);

        }

        export default Deluser;