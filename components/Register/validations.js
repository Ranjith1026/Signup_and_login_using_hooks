

const validation = (username,email,firstname,lastname,password,dob,about_me) =>
{
    let errors={};

    if(!username){
        errors.username="Username is required"
    }
      if(!email){
        errors.email="Email is required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }
    
    if(!firstname){
        errors.firstname="Firstname is required"
    }
    if(!lastname){
        errors.lastname="Lastname is required"
    }
    if(!password){
        errors.password="Password is required"
    }else if(password.length < 6){
        errors.password="Password must be more than 8 characters"
    }
    if(!dob){
        errors.dob="Date of birth is required"
    }
    if(!about_me){
        errors.about_me="About_me is required"
    }

return errors;
};
export default validation;