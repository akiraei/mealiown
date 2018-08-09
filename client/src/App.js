import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import FrontPage from "./pages/FrontPage";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/" component={FrontPage} />
            <Route path="/login" component={LoginPage} />
            <Route
              exact
              path="/"
              render={() =>
                localStorage.getItem("token") ? (
                  <Redirect to="/" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
