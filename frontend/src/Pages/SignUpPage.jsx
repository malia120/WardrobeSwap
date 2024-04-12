import React from 'react';
import { Navbar } from '../Components/Navbar';
import SignUp from '../Components/SignUp';
import Login from '../Components/Login';
/**
 * page is a component for the sign-up page of the website.
 * 
 * this component represent the sign up page where users can make and account
 * it constructed of a navigation bar and the SignUp componet for use signing up
 * @component
 * @returns {JSP} The depicition of the sign up page.
 */
function SignUpPage() {



    return (
        <React.Fragment>

            <Navbar />
            <div className="App">
                <SignUp />

            </div>
            <footer />

        </React.Fragment>

    );
}

export default SignUpPage;
