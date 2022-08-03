import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Landing from './components/LandingPage/Landing';
import DogCreate from './components/DogCreate/dogCreate';
import DogDetail from './components/DogDetail/dogDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/dogs" component={DogCreate}/>
        {/* <Route path="dogs/:id" component={DogDetail}/> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
