
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Information from './components/Information';
import Login from './components/Login';
import Pricing from './components/Pricing';
import Section from './components/Section';

function App() {
  return (
    <div className="md:w-full">
      <Router>
        <Header></Header>
        
          <Switch>
          <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
