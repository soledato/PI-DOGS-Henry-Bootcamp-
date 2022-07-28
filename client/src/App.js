import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Landing from './components/LandingPage/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
      </Switch>
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
