import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import '../Style/App.css'

const Login = () => {

    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Login successful");
                navigate("/");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <div className='Auth-container'>
        <div className="header">
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
        <form className='inputs' onSubmit={handleSubmit}>
            <div className='input'>
                    <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} />
            </div>

            {/* <div className='input'>
                <input type='email' placeholder='Email'/>
            </div> */}

            <div className='input'>
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} />
            </div>
        </form> 
        <div className='submit_container'>
            {/* <div className='Submit'>Sign up</div> */}
            <div className='Submit'>Login</div>
        </div>
        <div className='signup_text'>Don't have an account?  
            <Link to='/signup' style={{fontWeight: 'bold'}}> Sign Up</Link>
        </div>
    </div>
  );
}

export default Login;