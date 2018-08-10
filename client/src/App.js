import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { ProfileProvider } from "./contexts/ProfileCTX";
import LoginPage from "./pages/LoginPage";
import FrontPage from "./pages/FrontPage";
import RecordPage from "./pages/RecordPage";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <Router>
        <ProfileProvider>
          <ApolloProvider client={client}>
            <Switch>
              <Route path="/front" component={FrontPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/record" component={RecordPage} />

              <Route
                exact
                path="/"
                render={() =>
                  localStorage.getItem("token") ? (
                    <Redirect to="/front" />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            </Switch>
          </ApolloProvider>
        </ProfileProvider>
      </Router>
    );
  }
}

export default App;

// import ApolloClient from "apollo-boost";
// import { defaults, resolvers } from "./resolvers";

// const client = new ApolloClient({
//   uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
//   clientState: {
//     defaults,
//     resolvers,
//     typeDefs
//   }
// });
