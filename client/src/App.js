import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallPage from './componets/CallPage/CallPage'
import HomePage from './componets/HomePage/HomePage'
// import NoMatch from './componets/NoMatch/NoMatch'
import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route exact path="*">
          <NoMatch />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
