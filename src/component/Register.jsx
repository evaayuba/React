import React from 'react';
 
import './style.css';

 function Register() {
    return(
        <div class="container">
  <form class="login-form">
    <h2>Registration Form</h2>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required/>
    </div>
    <button type="submit">Register</button>
    <p>Have an account? <a href='/'>Login</a></p>
    {/* <script src="app.js"></script> */}

  </form>
</div>
    );
 }
 export default Register;
