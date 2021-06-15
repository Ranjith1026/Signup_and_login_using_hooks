
//import 'reactjs-popup/dist/index.css';
import React, { useState} from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button,Dialog } from '@material-ui/core';
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialog: {

    fontWeight:'bolder',
    fontSize:"large",
   
  },
}); 


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

  const classes = useStyles();

return (
   

  
   

<>

<a href="#" onClick={handleClickOpen}>Delete</a>
<Dialog className={classes.dialog}
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-slide-title"
  aria-describedby="alert-dialog-slide-description"
  fullWidth
  maxWidth="xs"
>
<DialogTitle id="alert-dialog-title" style={{textAlign:'center'}}><h3>Are you sure you want to delete?</h3></DialogTitle>
<br/>
  <DialogActions>
  <Button onClick={handleClose} style={{fontSize:'16px'}} color="primary">
            Cancel
          </Button>  
          <Button onClick={()=>{deleteuser(id);handleClose();}} style={{fontSize:'16px'}} color="primary">
            Delete
          </Button>
  </DialogActions>
</Dialog>
</>
);

        }

        export default Deluser;