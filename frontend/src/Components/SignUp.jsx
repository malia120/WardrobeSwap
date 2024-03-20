import React from 'react'
import '../Style/App.css'

const SignUp = () => {
  return (
    
    <div className='container'>
        <div className="header">
            <div className='text'>Sign up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <input type='username' placeholder='Username'/>
            </div>

            <div className='input'>
                <input type='email' placeholder='Email'/>
            </div>

            <div className='input'>
                <input type='password' placeholder='Password'/>
            </div>
        </div> 
        <div className='submit_container'>
            <div className='Submit'>Sign up</div>
            <div className='Submit'>Login</div>
        </div>
    </div>
  )
}

export default SignUp;