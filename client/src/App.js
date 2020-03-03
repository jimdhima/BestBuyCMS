import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
