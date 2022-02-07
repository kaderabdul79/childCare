
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Section from './components/Section';

function App() {
  return (
    <div className="md:w-full">
      <Router>
        <Header></Header>
        <Section></Section>
        <Pricing></Pricing>
          <Switch>
            <Route path=""></Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
