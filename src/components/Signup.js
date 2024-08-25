import React from 'react'

function Signup() {
  return (
    <div className='container'>
      <div className="inner-container">
        <div className="inner-50 border-top back-img">
          <h1 className='font-white'>Welcome!</h1>
          <p className='font-white mt-30'>Please Sign Up here.</p>
        </div>
        <div className="inner-50 border-bottom back-white">
          <form className='form' method='post'>
            <input type="text" id='username' placeholder='Username' />
            <input type="email" id='email' placeholder='Email' />
            <input type="text" id='mobile' placeholder='Mobile' />
            <input type="password" id='password' placeholder='Password' />
            <button className='sub-btn' type="submit">Submit</button>
            <p>Already have an account? <a href="/">Login here</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
