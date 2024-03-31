import React, { useState } from 'react';
import '../Style/App.css'

const SignUp = () => {
    const [formData, setFormData] = useState({username: '', email: '', password: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", formData);


        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            });

            console.log("Response status:", response.status);
            console.log("Response body:", await response.text());

            if (response.ok) {
                const data = response.json();
                console.log("Response data:", data);
            } else {
                console.error("Server error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    
    <div className='Auth-container'>
        <div className="header">
            <div className='text'>Sign up</div>
            <div className='underline'></div>
        </div>
        <form className='inputs' onSubmit={handleSubmit}>
            <div className='input'>
                <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
            </div>
            <div className='input'>
                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            </div>
            <div className='input'>
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
            </div>
            <div className='submit_container'>
                <button type='submit' className='Submit'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp;