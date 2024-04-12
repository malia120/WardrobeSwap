import React from 'react';
import { Navbar } from '../Components/Navbar';
import Login from '../Components/Login';
/**
 * page componet for the login pag of the website
 * 
 * this component shows the login page where user verify themselves.
 * it also has a navigation bar and the log in component for users verification
 * @component
 * @returns {JSX.Element} the JSX depiction of the log in page
 */
function LoginPage() {



    return (
        <React.Fragment>

            <Navbar />
            <div className="App">
                <Login />

            </div>
            <footer />
        </React.Fragment>

    );
}

export default LoginPage;
