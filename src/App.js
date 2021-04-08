import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./screens/Home";

import Header from "./components/Header";

function App() {

  return (
    <>
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
