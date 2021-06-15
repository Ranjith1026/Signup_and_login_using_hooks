import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";


const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [loading,setLoading]=useState(false);



  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},2000)
  },[])

  return (
    <div className="container">
      {

       loading ?
     <p  style={{textAlign:'center',fontSize:'40px'}}>Coming Soon.....</p>
       :


      <header className="jumbotron">
        <h3>
          Hi <strong>{currentUser.username}</strong> Welcome to User profile registry Application
        </h3>
      </header>
      }
    </div>
  );
};

export default Profile;
