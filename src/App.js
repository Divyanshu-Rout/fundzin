import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
