import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Link } from "react-router-dom";
import Login from '../Components/Login';

function SignUpPage() {



    return (
    <React.Fragment>

        <Navbar />
        <div className="App">
        <SignUp/>

        </div>
        
    </React.Fragment>

    );
}

export default SignUpPage;
