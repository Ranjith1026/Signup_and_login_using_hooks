import axios from "axios";

const API_URL = "http://localhost:8001/auth/";

const register = (username, email, firstname, lastname, password, dob, about_me) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    firstname,
    lastname,
    password,
    dob, 
    about_me
  });

};



const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    }); };



const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL+ 'logout' );
 
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


export default {
  register,
  login,
  logout,
  getCurrentUser,


};
 