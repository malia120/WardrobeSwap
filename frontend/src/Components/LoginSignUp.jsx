import React from 'react'
import '../Style/Login.css'

const LoginSignUp = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <input type='username' />
            </div>

            <div className='input'>
                <input type='email' />
            </div>

            <div className='input'>
                <input type='password' />
            </div>
        </div> 
        <div className='submit_container'>
            <div className='Submit'>Sign up</div>
            <div className='Submit'>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp;