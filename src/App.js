import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './Main';
import Admin from './Admin';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/admin">admin</Link>
            </li>
          
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}