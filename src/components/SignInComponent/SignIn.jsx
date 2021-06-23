import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInputComponent/FormInput";
import CustomButton from "../CustomButtonComponent/CustomButton";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        };
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {email, password} = this.state;
        try{    
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password:""});
        }catch(error){
            console.log(error);
        }
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
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={()=>signInWithGoogle()} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;