import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Switch, Route} from "react-router-dom";
import ShopPage from './pages/ShopPage/ShopPage';
import Header from "./components/HeaderComponent/Header";
import SignInLogIn from './pages/SignInPage/SignInLogIn';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils.js";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
      createUserProfileDocument(user);
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInLogIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
