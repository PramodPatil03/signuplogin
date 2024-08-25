import React from 'react'

function Login() {
  document.title = 'Login'
  return (
    <div className='container'>
      <div className="inner-container">
        <div className="inner-50 border-top back-img">
          <h1 className='font-white'>Welcome Back!</h1>
          <p className='font-white mt-30'>Please login here.</p>
        </div>
        <div className="inner-50 border-bottom back-white">
          <form className='form' method='post'>
            <input type="text" id='username' placeholder='Username' />
            <input type="password" id='password' placeholder='Password' />
            <button className='sub-btn' type="submit">Submit</button>
            <p>New user ? <a href="/signuplogin/signup">Sign up here</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
