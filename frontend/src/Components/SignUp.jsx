import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import '../Style/App.css'

const SignUp = () => {
    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate();


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
            const data = await response.json();
            console.log("Response body:", data);

            if (response.ok) {
                console.log("Response data:", data);
                setSubmitted(true);
            } else {
                console.error("Server error:", data.message);
                setErrorMessage("The username or email already exists.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    if (submitted) {
        return (
          <div className="FormSubmit">
            <p>Thank you for submitting. Click here to Login into your account.</p>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        );
      }

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
            {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
            <div className='submit_container'>
                <button type='submit' className='Submit'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp;