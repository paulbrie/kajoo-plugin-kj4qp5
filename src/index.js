import { AppStateProvider } from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import "./teleporthq/style.module.css";
import Home from "./teleporthq/pages/home";
import Demo from "./pages/demo";

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route exact component={Home} path="/" />
        <Route exact component={Demo} path="/demo" />
      </AppStateProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
