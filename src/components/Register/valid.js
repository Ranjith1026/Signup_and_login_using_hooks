import { useState} from "react";

function valid() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const[firstname,setFirstname]=useState("");
  const[lastname,setLastname]=useState("");
  const [password, setPassword]=useState("");
  const[about_me,setAbout_me]=useState("");
 const[usernameErr,setUsernameErr]=useState("");
 const[emailErr,setEmailErr]=useState("");
 const[firstnameErr,setFirstnameErr]=useState("");
   const[lastnameErr,setLastnameErr]=useState("");
 const[passwordErr,setPasswordErr]=useState("");
 const[about_meErr,setAbout_meErr]=useState("");

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

            const validatePassword = () => {
                if(!password){
                  setPasswordErr("please enter a password")
              }
             
                };
            
                useEffect(
                  () => {
                    if(!password){
                      return;
                    }
                 if(password.length < 8){
                  setPasswordErr("password must be more than 8 characters");
                }else { setPasswordErr("") }
              },[password]);

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

  return [username,setUsername,usernameErr,setUsernameErr,email,setEmail,emailErr,setEmailErr,firstname,setFirstname,firstnameErr,setFirstnameErr,lastname,setLastname,lastnameErr,setLastnameErr,password, setPassword, passwordErr,setPasswordErr,about_me,setAbout_me,about_meErr,setAbout_meErr];
}

export default valid;
