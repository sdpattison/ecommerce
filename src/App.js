import './App.css';
import HomePage from './pages/HomePage';
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
