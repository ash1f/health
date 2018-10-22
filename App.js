import React from "react";
import { Font } from "expo";

import { Authenticate } from "./src/Auth";

export default class App extends React.Component {
  state = {
    loggedIn: false
  };

  render() {
    const signedIn = this.state.loggedIn;

    const Layout = Authenticate(signedIn);

    return <Layout />;
  }
}
