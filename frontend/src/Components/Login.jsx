import React from 'react'
import '../Style/App.css'

const Login = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <input type='username' placeholder='Username'/>
            </div>

            {/* <div className='input'>
                <input type='email' placeholder='Email'/>
            </div> */}

            <div className='input'>
                <input type='password' placeholder='Password'/>
            </div>
        </div> 
        <div className='submit_container'>
            {/* <div className='Submit'>Sign up</div> */}
            <div className='Submit'>Login</div>
        </div>
        <div className='signup_text'>Don't have an account?  <a href='/signup' style={{fontWeight: 'bold'}}>Sign Up</a></div>
    </div>
  )
}

export default Login;