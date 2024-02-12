// Signup.js

import React, { useState } from 'react';
import './SignUp.css'
import axois  from 'axios'
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
   passWord: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async(e) => {
         e.preventDefault();
    
         let res=  await  axois.post('http://localhost:4000/signup',formData)
       console.log(res.data);
   
    // Example fetch request
    // fetch('http://localhost:4000/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle success or error
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error('Error during signup:', error);
    //   });
  }

  return (
   
      <div className="signup-card">
      <form onSubmit={handleSubmit} >
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
         passWord:
          <input
            type="password"
            name="passWord"
            value={formData.passWord}
            onChange={handleChange}
          />
        </label>
        <br />
        <button   type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
