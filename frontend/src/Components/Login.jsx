import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from './AuthContext';
import '../Style/App.css'

const Login = () => {

    const { login } = useContext(AuthContext); 
    const [formData, setFormData] = useState({username: '', email: '', password: ''});
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(formData);
        if (success) {
          setSubmitted(true);
          navigate("/");
        } else {
          setErrorMessage("The username or password does not match");
        }

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Login successful");
                setSubmitted(true);
                navigate("/");
            } else {
                console.error("Login failed");
                setErrorMessage("The username or password does not match");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    if (submitted) {
    return (
        <div className="FormSubmit">
            <p>Welcome, {formData.username}!</p>
            <p>You have logged into your account. Click below to return to home</p>
            <button onClick={() => navigate("/")}>Return Home</button>
        </div>
    );
}

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
            {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
            <div className='submit_container'>
                <button type='submit' className='Submit'>Login</button>
            </div>
        </form> 
        <div className='signup_text'>Don't have an account?  
            <Link to='/signup' style={{fontWeight: 'bold'}}> Sign Up</Link>
        </div>
    </div>
  );
};

export default Login;