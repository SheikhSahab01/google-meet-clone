import './App.scss';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import HomePage from "./components/Homepage/HomePage"


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><HomePage /></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
