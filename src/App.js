import "./App.css";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./containers/NotFound";
import Home from "./containers/Home";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
