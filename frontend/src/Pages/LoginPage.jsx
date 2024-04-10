import React from 'react';
import { Navbar } from '../Components/Navbar';
import Login from '../Components/Login';

function LoginPage() {



    return (
    <React.Fragment>

        <Navbar />
        <div className="App">
        <Login/>

        </div>
        <footer/> 
    </React.Fragment>

    );
}

export default LoginPage;
