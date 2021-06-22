import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInputComponent/FormInput";
import CustomButton from "../CustomButtonComponent/CustomButton";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        };
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email: "", password:""});
    }
    handleChange = e =>{
        e.preventDefault();
        const {value, name} = e.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    label="email"
                    required/>

                    <FormInput
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    label="password"
                    required/>
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;