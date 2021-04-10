import React from 'react'
import './App.css';
import './default.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./screens/Home";
import Register from "./screens/Register";
import SingleProduct from "./screens/SingleProduct";

import Header from "./components/Header/Header";

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
            <Route path="/signup" component={Register} exact />
            <Route path="/product" component={SingleProduct} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
