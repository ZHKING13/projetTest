import React, { useState } from 'react'
import "./login.css"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
            className='logo'
          /> 
        </div>
      </div>
      <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input
            type='email'
            placeholder='email or phone'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='loginButton' >
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign Up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure
            you're not a bot. <b>Learn More</b>.
          </small>
        </form>
      </div>
    </div>
  )
}
