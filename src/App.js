
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './components/Header';
import Information from './components/Information';
import Pricing from './components/Pricing';
import Section from './components/Section';

function App() {
  return (
    <div className="md:w-full">
      <Router>
        <Header></Header>
        <Section></Section>
        <Pricing></Pricing>
        <Information></Information>
          <Switch>
            <Route path=""></Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
