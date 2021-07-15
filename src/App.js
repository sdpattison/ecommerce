import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Switch, Route, Redirect} from "react-router-dom";
import ShopPage from './pages/ShopPage/ShopPage';
import Header from "./components/HeaderComponent/Header";
import SignInLogIn from './pages/SignInPage/SignInLogIn';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils.js";
import { connect } from 'react-redux'; 
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          console.log(snapShot);
          setCurrentUser({
            currentUser: {
              id : snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=>{this.props.currentUser ? (<Redirect to="/" />) : (<SignInLogIn/>)}} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
});


export default connect(null,mapDispatchToProps)(App);
