import React, { Component } from "react";

import MainHeader from "components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <div className="container">
          <div className="row">
            <div className="col-sm test">One of three columns</div>
            <div className="col-sm test">One of three columns</div>
            <div className="col-sm test">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
