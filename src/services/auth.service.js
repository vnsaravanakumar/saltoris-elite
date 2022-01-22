import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const customerPreCheck = async (companyName, email) => {
    let responseData = {status: "SUCCESS", data: {companyName, email}};

    if(email === "vnsaravanakumar@gmail.com"){
      responseData = {status: "ERROR", message: "registered"};
    }

    return responseData;
}

const login = async (username, password) => {
    
    const responseData = {firstName: "Saravanakumar", lastName: "Velusamy"};
    localStorage.setItem("user", JSON.stringify(responseData));
    return responseData;

//   return axios
//     .post(API_URL + "signin", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  customerPreCheck,
};