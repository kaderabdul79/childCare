
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';

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
