import React from "react";
import "./SignUp.styles.scss";
import FormInput from "../FormInputComponent/FormInput";
import CustomButton from "../CustomButtonComponent/CustomButton";
import {auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword : ""
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword : ""
            })
        }catch(error){
            console.error(error);
        }
    }
    handleChange = event =>{
        const { name, value } = event.target;
        this.setState({ [name] : value});
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange = {this.handleChange}
                    label = "DISPLAY NAME"
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange = {this.handleChange}
                    label = "EMAIL"
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange = {this.handleChange}
                    label = "PASSWORD"
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange = {this.handleChange}
                    label = "confirm Password"
                    required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;