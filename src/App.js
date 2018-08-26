import React, { Component } from "react";

import MainHeader from "components/Header";

class App extends Component {
  render() {
    return (
      <div class="App">
        <MainHeader />
        <div className="container">
          <div class="row">
            <div class="col-sm test">One of three columns</div>
            <div class="col-sm test">One of three columns</div>
            <div class="col-sm test">One of three columns</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
