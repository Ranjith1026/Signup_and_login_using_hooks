import React, { useState, useEffect } from "react";
import Details from "../services/auth.service";
import './details.css';
//import AuthService from "../../services/auth.service";
//import {Pagination} from '@material-ui/lab';







const Detail=(props)=>{
    const [loading,setLoading]=useState(false);
const [data,setData]=useState([]);
//const currentUser = AuthService.getCurrentUser();
const [search,setSearch]=useState("");
const [filter,setFilter]=useState([]);

  
//api connection
    useEffect(()=>{
      Details.getdata()
      .then((response) => {
        if (response.data) {
          localStorage.getItem("user", JSON.stringify(response.data));
        }
        setData(response.data);
       
      });
     
    },[]);
    
    // time
      useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },2000)                  
          },[])

// search 
useEffect(() => {
  setFilter(
  data.filter((datas) =>
     datas.username.toLowerCase().includes(search.toLowerCase()) ||
      datas.firstname.toLowerCase().includes(search.toLowerCase()) ||
      datas.lastname.toLowerCase().includes(search.toLowerCase()) ||
      datas.email.toLowerCase().includes(search.toLowerCase()) 
  )
  );
}, [search,data]); 



    
  return(
 
      <div >
      <div >
       { loading ?
<p  style={{textAlign:'center',fontSize:'40px',marginTop:'30px'}}>Coming Soon.....</p>
:
<div>


<input  style={{marginTop:'40px'}}  
        className='search'
        type="text"
        placeholder="Search "
        onChange={(e) => setSearch(e.target.value)}
      />

  <table id="customers" align="center">
     
            <tr className="heading">
                <th align="center">ID</th>
                <th align="center">USER&nbsp;NAME</th>
                <th align="center">EMAIL&nbsp;ADDRESS</th>
                <th align="center">FIRST&nbsp;NAME</th>
                <th align="center">LAST&nbsp;NAME</th>
                <th align="center">DATE OF BIRTH</th>
                <th align="center">ABOUT_ME</th>
            </tr>
       

<tbody>
  
           {filter.map((datas,index)=>(
        <tr key={index}>
            <td align="right">{datas.id}</td>
              <td align="right">{datas.username}</td>
              <td align="right">{datas.email}</td>
              <td align="right">{datas.firstname}</td>
              <td align="right">{datas.lastname}</td>
              <td align="right">{datas.dob}</td>
              <td align="right">{datas.about_me}</td>
        </tr>
           ))}
</tbody>

    </table>
  
    </div>
 
      }
      </div>
      
    
</div>

  ) ; 
}

export default Detail;