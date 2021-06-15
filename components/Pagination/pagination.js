import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '@material-ui/lab';
import './pagination.css';
import Adduser from './adduser';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Del from './del';
import View from './view';



const useStyles = makeStyles({
  table: {
  
    fontWeight:'bolder',
    fontSize:"large",
   
  },
}); 
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize:'50%',
  },
}))(TableCell);

function Paginate(props) {

const [user, setUser] = useState([]);
const [page, setPage] = useState(1);
const perpage = 10;
const [count,setCount]=useState(0);
const [search,setSearch]=useState([]);




//api connection




      const getuser= async ()=>{
          const {data} = await axios.get(`http://localhost:8001/auth/pagination?s=${search}&page=${page}&perPage=${perpage}`)
          setCount(data.total);
          setUser(data.data||data.search);
      // console.log(data.data)
    }

/*
function getuser(){
  fetch(`http://localhost:8001/auth/pagination?s=${search}&page=${page}&perPage=${perpage}`)
  .then((result)=>{
    result.json().then((res)=>{
      setCount(res.total);
      setUser(res.data||res.search);
    })
  })
} */

useEffect(()=>{
  getuser();
})
 


const handlePageChange = (event, value) => {
  setPage(value);
};

// Delete
/*
function deleteuser(id){
axios.delete(`http://localhost:8001/auth/delete/${id}`) 

} */


let cnt=Math.ceil(count/perpage);
const classes = useStyles();

function Update(id){
  console.log(id);
  props.history.push("/edit/"+id);
}



return(
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      
    
<div class="input-group">

<input className="form-control " style={{left:'70%',position:'fixed',width:'14%'}}
                type="search"
              placeholder="Search"
                onChange={(e) => setSearch(e.target.value.toUpperCase()||e.target.value.toLowerCase())}
                /> <Adduser />
            </div>
        
      <br/>
      <br/>
            <TableContainer component={Paper}    style={{position:'fixed',width:'64%',left:'20%'}}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow >
                    <StyledTableCell align="center" style={{fontSize:'15px'}}>ID</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>USER&nbsp;NAME</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>EMAIL&nbsp;ADDRESS</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>FIRST&nbsp;NAME</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>LAST&nbsp;NAME</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>DATE OF BIRTH</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>ABOUT_ME</StyledTableCell>
                <StyledTableCell align="center" style={{fontSize:'15px'}}>ACTION</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {user.map((p) => {
                        return (
                          <StyledTableRow >
                          <TableCell align="center" style={{fontSize:'15px'}}>{p.id}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}>{p.username}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}>{p.email}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}>{p.firstname}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}>{p.lastname}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}>{p.dob}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}>{p.about_me}</TableCell>
                            <TableCell align="center" style={{fontSize:'15px'}}><a href="#" onClick={()=>Update(p.id)}>Edit</a>|<View id={p.id}/>|<Del id={p.id}/></TableCell>
                      </StyledTableRow>
                        )
                    })}
                    </TableBody>
                   
                </Table> 
               
            </TableContainer>
<br/>
<br/>
<br/><br/>
<br/>
<br/>

      <Pagination 
            className="page"
            style={{position:'fixed',marginTop:'24%',left:'75%'}}
            count={cnt}
            page={page}
            siblingCount={1}  
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
          onChange={handlePageChange}
          />
    </>
)

}
export default Paginate;