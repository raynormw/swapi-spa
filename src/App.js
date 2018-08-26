import React, { Component } from "react";

import MainHeader from "components/Header";
import Content from "components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <div className="container">
          <div className="row">
            <Content />
            <div className="col-4">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
