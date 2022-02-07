
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="md:w-full">
      <Router>
        <Header></Header>
          <Switch>
            <Route path=""></Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
