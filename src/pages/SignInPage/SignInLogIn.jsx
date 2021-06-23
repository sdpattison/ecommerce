import React from "react";
import "./SignInLogIn.styles.scss";
import SignIn from "../../components/SignInComponent/SignIn";
import SignUp from "../../components/SignUpComponent/SignUp";
const SignInLogIn = (props) =>{
    return(
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInLogIn;