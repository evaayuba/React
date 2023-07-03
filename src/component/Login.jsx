
import React from 'react';

function Login(){
    return(
        <div class="login-form">
        <h2>Login Form</h2>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <link to={"Logout"}><button type="submit">Login</button></link>
          <p>Don't have an Account<a href='/reg'> register here</a></p>
          
    
        </form>
      </div>
    );
}

export default Login;