import React, { createContext, useContext, useState,useEffect,useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const targetComponentsRef = useRef(null);
  const [state,setState] = useState(false)

  useEffect(() => {
    // Check if JWT is stored in the browser cookie
    const token = Cookies.get('token');

    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const SignUp = (formData) =>{
    
    axios.post("https://kj-x-softtech-api.onrender.com/api/v2/registration",formData)
    .then((response)=>{
      console.log(response.data)
      const { token } = response.data;

      // Set the user as authenticated and store JWT in the browser cookie
      setAuthenticated(true);
      Cookies.set('token', token);
    } ).catch((error)=>{
        console.log(error.message)
    })
  }

  // Simulating a basic login:
  const Login = async (formData) => {
    setAuthenticated(true);
    try {
      // Send a login request to the backend API
      const response = await axios.post('https://kj-x-softtech-api.onrender.com/api/v2/api/login', formData);

      const { token } = response.data;

      // Set the user as authenticated and store JWT in the browser cookie
      setAuthenticated(true);
      Cookies.set('token', token);
    } catch (error) {
      // Handle login errors
      console.error('Login failed:', error);
    }
  };

  // Simulating a basic logout:
  const Logout = () => {
    // Set the user as not authenticated and remove JWT from the browser cookie
    setAuthenticated(false);
    Cookies.remove('token');
  };
  
  const scrollToComponents = () => {
    targetComponentsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <AuthContext.Provider value={{ authenticated,targetComponentsRef,state,Login, Logout,SignUp,scrollToComponents,setState}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
