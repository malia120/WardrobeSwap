import React from 'react';
import { Navbar } from '../Components/Navbar';
import LoginSignUp from '../Components/LoginSignUp';

function LoginPage() {



    return (
    <React.Fragment>

        <Navbar />
        <div className="App">
        <LoginSignUp/>

        </div>
        
    </React.Fragment>

    );
}

export default LoginPage;
