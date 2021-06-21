import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Switch, Route} from "react-router-dom";
import ShopPage from './pages/ShopPage/ShopPage';
import Header from "./components/HeaderComponent/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
