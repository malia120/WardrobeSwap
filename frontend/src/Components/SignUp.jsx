import React, { useState } from 'react';
import '../Style/App.css'

const SignUp = () => {
    const [formData, setFormData] = useState({username: '', email: '', password: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                body: formData,
            });

            console.log("Response status:", response.status);
            console.log("Response body:", await response.text());


            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

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
        </div>
    </div>
  )
}

export default SignUp;