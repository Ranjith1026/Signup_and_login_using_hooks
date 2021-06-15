
import React from "react";

const Data = ({ filter }) => {

    return(
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
  
           {  filter.map((datas,index)=>(
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
    );}

export default Data